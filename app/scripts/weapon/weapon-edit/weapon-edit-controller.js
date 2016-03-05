define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponEditCtrl', [
        '$scope', '$filter', '$log', '$stateParams', 'rarities', 'manufacturers', 'damageTypes', 'WeaponService', 'weapon',
        function ($scope, $filter, $log, $stateParams, rarities, manufacturers, damageTypes, WeaponService, weapon) {

            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.damageTypes = damageTypes;

            // init weapon
            $scope.weapon = weapon;

            $scope.changeDamageType = function () {
                $scope.weapon.elementalText = $scope.weapon.damageType.additionalText;

                // reset no more relevant inputs
                if ($scope.weapon.damageType.damageLabel === null) {
                    $scope.weapon.elemDamage = null;
                }
                if ($scope.weapon.damageType.chanceLabel === null) {
                    $scope.weapon.elemChance = null;
                }

            };

            $scope.save = function () {
                WeaponService.update($scope.weapon)
                    .then(function () {
                        WeaponService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error saving weapon');
                        }
                    });
            };

        }]);

});
