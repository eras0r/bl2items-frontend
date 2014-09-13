define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerEditCtrl', [
        '$scope', '$state', '$log', 'Restangular', 'ManufacturerService',
        function ($scope, $state, $log, Restangular, ManufacturerService) {

            var self = this;

            ManufacturerService.read($state.params.id).then(function (manufacturer) {
                self.originalManufacturer = manufacturer;
                $scope.manufacturer = Restangular.copy(self.originalManufacturer);
            });

            $scope.isNotDirty = function () {
                return angular.equals(self.originalManufacturer, $scope.manufacturer);
            };

            $scope.save = function () {
                ManufacturerService.update($scope.manufacturer)
                    .then(function () {
                        ManufacturerService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error updating manufacturer');
                        }
                    });
            };

            $scope.cancel = function () {
                ManufacturerService.showList();
            };

        }]);

});
