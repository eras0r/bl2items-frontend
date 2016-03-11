define([
    'angular',
    'file/file-module-def',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac'
], function (angular, itemModule, CryptoJS) {

    'use strict';

    var uploadUrl = 'http://localhost/bl2items-backend/upload.php';
    window.uploadUrl = window.uploadUrl || 'upload';

    itemModule.controller('FileUploadCtrl', [
        '$http', '$timeout', '$upload', '$state', 'FileService', FileUploadCtrl]);

    /** @ngInject */
    function FileUploadCtrl($http, $timeout, $upload, $state, FileService) {

        var vm = this;

        vm.changeAngularVersion = changeAngularVersion;
        vm.hasUploader = hasUploader;
        vm.abort = abort;
        vm.onFileSelect = onFileSelect;
        vm.start = start;
        vm.dragOverClass = dragOverClass;
        vm.generateSignature = generateSignature;
        vm.cancel = cancel;

        init();

        function init() {
            //vm.usingFlash = FileAPI && FileAPI.upload != null;
            vm.usingFlash = false;
            vm.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
            vm.uploadRightAway = true;
            vm.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
                window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';

            if (localStorage) {
                vm.s3url = localStorage.getItem("s3url");
                vm.AWSAccessKeyId = localStorage.getItem("AWSAccessKeyId");
                vm.acl = localStorage.getItem("acl");
                vm.success_action_redirect = localStorage.getItem("success_action_redirect");
                vm.policy = localStorage.getItem("policy");
                vm.signature = localStorage.getItem("signature");
            }

            vm.success_action_redirect = vm.success_action_redirect || window.location.protocol + "//" + window.location.host;
            vm.jsonPolicy = vm.jsonPolicy || '{\n  "expiration": "2020-01-01T00:00:00Z",\n  "conditions": [\n    {"bucket": "angular-file-upload"},\n    ["starts-with", "$key", ""],\n    {"acl": "private"},\n    ["starts-with", "$Content-Type", ""],\n    ["starts-with", "$filename", ""],\n    ["content-length-range", 0, 524288000]\n  ]\n}';
            vm.acl = vm.acl || 'private';
        }

        function changeAngularVersion() {
            window.location.hash = vm.angularVersion;
            window.location.reload(true);
        }

        function hasUploader(index) {
            return vm.upload[index] != null;
        }

        function abort(index) {
            vm.upload[index].abort();
            vm.upload[index] = null;
        }

        function onFileSelect($files) {
            vm.selectedFiles = [];
            vm.progress = [];
            if (vm.upload && vm.upload.length > 0) {
                for (var i = 0; i < vm.upload.length; i++) {
                    if (vm.upload[i] != null) {
                        vm.upload[i].abort();
                    }
                }
            }
            vm.upload = [];
            vm.uploadResult = [];
            vm.selectedFiles = $files;
            vm.dataUrls = [];
            for (var i = 0; i < $files.length; i++) {
                var $file = $files[i];
                if (vm.fileReaderSupported && $file.type.indexOf('image') > -1) {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL($files[i]);
                    var loadFile = function (fileReader, index) {
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                vm.dataUrls[index] = e.target.result;
                            });
                        }
                    }(fileReader, i);
                }
                vm.progress[i] = -1;
                if (vm.uploadRightAway) {
                    vm.start(i);
                }
            }
        }

        function start(index) {
            vm.progress[index] = 0;
            vm.errorMsg = null;
            if (vm.howToSend === 1) {
                var microTime = new Date().getTime();
                // TODO get te request's data
                var file = vm.selectedFiles[index];
                // TODO make "file" dynamic
                var data = '{"file":{"name":"' + file.name + '","type":"' + file.type + '","size":' + file.size + '}}';

                var hmacHash = CryptoJS.HmacSHA512(uploadUrl + '/:' + data + ':' + microTime, localStorage.hmacSecret).toString(CryptoJS.enc.Hex);

                //$upload.upload()
                vm.upload[index] = $upload.upload({
                    url: uploadUrl,
                    method: vm.httpMethod,
                    headers: {
                        'X-SESSION-TOKEN': localStorage.sessionToken,
                        'X-MICRO-TIME': microTime,
                        'X-HMAC-HASH': hmacHash
                    },
                    data: {
                        myModel: vm.myModel,
                        errorCode: vm.generateErrorOnServer && vm.serverErrorCode,
                        errorMessage: vm.generateErrorOnServer && vm.serverErrorMsg
                    },
                    /* formDataAppender: function(fd, key, val) {
                     if (angular.isArray(val)) {
                     angular.forEach(val, function(v) {
                     fd.append(key, v);
                     });
                     } else {
                     fd.append(key, val);
                     }
                     }, */
                    /* transformRequest: [function(val, h) {
                     console.log(val, h('my-header')); return val + '-modified';
                     }], */
                    file: vm.selectedFiles[index]
                    /*,
                     fileFormDataName: 'myFile'
                     */
                });
                vm.upload[index].then(function (response) {
                    $timeout(function () {
                        vm.uploadResult.push(response.data);
                    });
                }, function (response) {
                    if (response.status > 0) vm.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    vm.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
                vm.upload[index].xhr(function (xhr) {
//				xhr.upload.addEventListener('abort', function() {console.log('abort complete')}, false);
                });
            } else if (vm.howToSend === 2) {
                //$upload.http()
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    console.log('file is loaded in filereader');
                    vm.upload[index] = $upload.http({
                        url: uploadUrl,
                        headers: {'Content-Type': vm.selectedFiles[index].type},
                        data: e.target.result
                    });
                    vm.upload[index].then(function (response) {
                        vm.uploadResult.push(response.data);
                    }, function (response) {
                        if (response.status > 0) vm.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        // Math.min is to fix IE which reports 200% sometimes
                        vm.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                        console.log('progres', Math.min(100, parseInt(100.0 * evt.loaded / evt.total)))
                    });
                    vm.upload[index].xhr(function (xhr) {
                        xhr.upload.addEventListener('progress', function (evt) {
                            console.log('progres2', Math.min(100, parseInt(100.0 * evt.loaded / evt.total)))
                        }, false);
                        xhr.addEventListener('progress', function (evt) {
                            console.log('progres3', Math.min(100, parseInt(100.0 * evt.loaded / evt.total)))
                        }, false);
                    });
                };
                fileReader.readAsArrayBuffer(vm.selectedFiles[index]);
            } else {
                //s3 upload
                vm.upload[index] = $upload.upload({
                    url: vm.s3url,
                    method: 'POST',
                    data: {
                        key: vm.selectedFiles[index].name,
                        AWSAccessKeyId: vm.AWSAccessKeyId,
                        acl: vm.acl,
                        policy: vm.policy,
                        signature: vm.signature,
                        "Content-Type": vm.selectedFiles[index].type === null || vm.selectedFiles[index].type === '' ?
                            'application/octet-stream' : vm.selectedFiles[index].type,
                        filename: vm.selectedFiles[index].name
                    },
                    file: vm.selectedFiles[index],
                });
                vm.upload[index].then(function (response) {
                    $timeout(function () {
                        vm.uploadResult.push(response.data);
                    });
                }, function (response) {
                    if (response.status > 0) vm.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    vm.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
                if (localStorage) {
                    localStorage.setItem("s3url", vm.s3url);
                    localStorage.setItem("AWSAccessKeyId", vm.AWSAccessKeyId);
                    localStorage.setItem("acl", vm.acl);
                    localStorage.setItem("success_action_redirect", vm.success_action_redirect);
                    localStorage.setItem("policy", vm.policy);
                    localStorage.setItem("signature", vm.signature);
                }
            }
        }

        function dragOverClass($event) {
            var items = $event.dataTransfer.items;
            var hasFile = false;
            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].kind == 'file') {
                        hasFile = true;
                        break;
                    }
                }
            } else {
                hasFile = true;
            }
            return hasFile ? "dragover" : "dragover-err";
        }

        function generateSignature() {
            $http.post('/s3sign?aws-secret-key=' + encodeURIComponent(vm.AWSSecretKey), vm.jsonPolicy).success(function (data) {
                vm.policy = data.policy;
                vm.signature = data.signature;
            });
        }

        function cancel() {
            $state.go('^');
        }

    }

});
