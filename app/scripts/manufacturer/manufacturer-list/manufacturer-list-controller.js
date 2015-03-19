define(['angular', 'manufacturer/manufacturer-module-def'], function (angular, manufacturerModule) {

    'use strict';

    angular.module('manufacturerModule').controller('ManufacturerListCtrl', [
        '$scope', '$location', '$log', '$filter', 'ManufacturerService',
        function ($scope, $location, $log, $filter, ManufacturerService) {

            ManufacturerService.list().then(function (manufacturers) {
                $scope.manufacturers = manufacturers;
            });

            $scope.remove = function (manufacturer) {
                ManufacturerService.remove(manufacturer)
                    .then(function () {
                        // filter out the deleted object
                        $scope.manufacturers = $filter('filter')($scope.manufacturers, {id: '!' + manufacturer.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting manufacturer');
                    });
            };

        }]);

});
