define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerCreateCtrl', [
        '$scope', '$state', 'ManufacturerService',
        function ($scope, $state, ManufacturerService) {

            $scope.manufacturer = {};

            $scope.save = function () {
                ManufacturerService.save(
                    $scope.manufacturer,
                    function () {
                        $state.go('admin.manufacturers.list');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $state.go('admin.manufacturers.list');
            };

        }]);

});
