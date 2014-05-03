define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerCreateCtrl', [
        '$scope', '$location', 'ManufacturerService',
        function ($scope, $location, ManufacturerService) {

            $scope.manufacturer = {};

            $scope.save = function () {
                ManufacturerService.save(
                    $scope.manufacturer,
                    function () {
                        $location.path('/manufacturers');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $location.path('/manufacturers');
            };

        }]);

});
