/**
 * module definition for the 'file' module.
 */
define(['angular', 'restangular', 'angular-ui-router', 'ng-file-upload'], function (angular) {

    'use strict';

    var fileModule = angular.module('fileModule', [
        'ui.router',
        'restangular',
        'angularFileUpload'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.files', {
                    'abstract': true,
                    url: '/files'
                })
                .state('bl2.admin.files.list', {
                    url: '/list',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/file/file-list/file-list.html',
                            controller: 'FileListCtrl'
                        }
                    }
                })
                .state('bl2.admin.files.upload', {
                    url: '/upload',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/file/file-upload/file-upload.html',
                            controller: 'FileUploadCtrl'
                        }
                    }
                });
        });

    return fileModule;

});