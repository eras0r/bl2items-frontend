define([
    'angular',
    'file/file-module-def'
], function (angular, itemModule) {

    'use strict';

    itemModule.controller('FileListCtrl', [
        '$filter', '$log', 'FileService', FileListCtrl]);

    /** @ngInject */
    function FileListCtrl($filter, $log, FileService) {

        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            FileService.list().then(function (files) {
                vm.files = files;
            });
        }

        function remove(file) {
            FileService.remove(file)
                .then(function () {
                    // filter out the deleted object
                    vm.files = $filter('filter')(vm.files, {id: '!' + file.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting file');
                });
        }

    }

});
