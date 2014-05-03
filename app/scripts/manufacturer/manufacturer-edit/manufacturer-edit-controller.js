define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerEditCtrl', [
        '$scope', '$location', '$routeParams', 'ManufacturerService',
        function ($scope, $location, $routeParams, ManufacturerService) {

            $scope.manufacturer = ManufacturerService.get(
                {
                    id: $routeParams.id
                }
            );

            $scope.save = function () {
                ManufacturerService.update(
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
