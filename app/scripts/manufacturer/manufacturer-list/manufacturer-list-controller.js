define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerListCtrl', [
        '$scope', '$location', 'ManufacturerService',
        function ($scope, $location, ManufacturerService) {

            $scope.loadManufacturers = function () {
                $scope.manufacturers = ManufacturerService.query();
            };

            $scope.deleteManufacturer = function (manufacturer) {
                $scope.manufacturer = ManufacturerService.delete(
                    {
                        id: manufacturer.id
                    },
                    // success function
                    function () {
                        $scope.loadManufacturers();
                    }
                )
            };

            $scope.loadManufacturers();

        }]);

});