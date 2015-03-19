define([
    'angular',
    'file/file-module-def'
], function (angular, itemModule) {

    'use strict';

    itemModule.controller('FileListCtrl', [
        '$scope', '$filter', '$log', 'FileService',
        function ($scope, $filter, $log, FileService) {

            //$scope.files = [];

            FileService.list().then(function (files) {
                $scope.files = files;
            });

            $scope.remove = function (file) {
                FileService.remove(file)
                    .then(function () {
                        // filter out the deleted object
                        $scope.files = $filter('filter')($scope.files, {id: '!' + file.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting file');
                    });
            };

        }
    ]);

});
