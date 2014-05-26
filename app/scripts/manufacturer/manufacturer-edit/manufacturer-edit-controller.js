define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerEditCtrl', [
        '$scope', '$state', 'ManufacturerService',
        function ($scope, $state, ManufacturerService) {

            $scope.save = function () {
                ManufacturerService.update(
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

            $scope.manufacturer = ManufacturerService.get(
                {
                    id: $state.params.id
                }
            );

        }]);

});
