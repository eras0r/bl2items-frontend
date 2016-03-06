define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponEditCtrl', [
        '$scope', '$filter', '$log', '$stateParams', 'rarities', 'manufacturers', 'damageTypes', 'weaponTypes', 'WeaponService', 'weapon',
        function ($scope, $filter, $log, $stateParams, rarities, manufacturers, damageTypes, weaponTypes, WeaponService, weapon) {

            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.damageTypes = damageTypes;
            $scope.weaponTypes = weaponTypes;

            // init weapon
            $scope.weapon = weapon;

            $scope.changeDamageType = function () {
                $scope.weapon.damageTypeId = $scope.weapon.damageType.id;

                $scope.weapon.elementalText = $scope.weapon.damageType.additionalText;

                // reset no more relevant inputs
                if (!$scope.weapon.damageType.damageLabel) {
                    $scope.weapon.elemDamage = null;
                }
                if (!$scope.weapon.damageType.chanceLabel) {
                    $scope.weapon.elemChance = null;
                }
            };

            $scope.changeRarity = function () {
                $scope.weapon.rarityId = $scope.weapon.rarity.id;
            };

            $scope.changeWeaponType = function () {
                $scope.weapon.weaponTypeId = $scope.weapon.weaponType.id;
            };

            $scope.changeManufacturer = function () {
                $scope.weapon.manufacturerId = $scope.weapon.manufacturer.id;
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
