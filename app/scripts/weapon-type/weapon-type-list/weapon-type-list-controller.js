define([
    'angular',
    'weapon-type/weapon-type-module-def'
], function (angular, weaponTypeModule) {

    'use strict';

    weaponTypeModule.controller('WeaponTypeListCtrl', [
        '$scope', '$log', '$filter', 'WeaponTypeService',
        function ($scope, $log, $filter, WeaponTypeService) {

            WeaponTypeService.list().then(function (weaponTypes) {
                $scope.weaponTypes = weaponTypes;
            });

            $scope.remove = function (weaponType) {
                WeaponTypeService.remove(weaponType)
                    .then(function () {
                        // filter out the deleted object
                        $scope.weaponTypes = $filter('filter')($scope.weaponTypes, {id: '!' + weaponType.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting weapon type');
                    });
            };

        }]);

});