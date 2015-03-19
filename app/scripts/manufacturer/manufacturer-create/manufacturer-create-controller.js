define(['angular', 'manufacturer/manufacturer-module-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerCreateCtrl', [
        '$scope', '$state', '$log', 'ManufacturerService',
        function ($scope, $state, $log, ManufacturerService) {

            $scope.manufacturer = {};

            $scope.save = function () {
                $scope.errors = null;

                ManufacturerService.create($scope.manufacturer)
                    .then(function () {
                        ManufacturerService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating manufacturer');
                        }
                    });
            };

            $scope.cancel = function () {
                ManufacturerService.showList();
            };

        }]);

});
