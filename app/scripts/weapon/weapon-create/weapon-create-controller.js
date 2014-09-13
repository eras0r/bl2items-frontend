define(['angular', 'weapon/weapon-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponCreateCtrl', [
        '$scope', '$log', 'rarities', 'manufacturers', 'damageTypes', 'WeaponService',
        function ($scope, $log, rarities, manufacturers, damageTypes, WeaponService) {

            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.damageTypes = damageTypes;

            // init default weapon
            $scope.weapon = {
                level: 50,
                rarity: $scope.rarities[0],
                manufacturer: $scope.manufacturers[0],
                damage: null,
                accuracy: null,
                fireRate: null,
                reloadSpeed: null,
                magazineSize: null,
                damageType: $scope.damageTypes[0],
                uniqueText: null,
                elementalText: null,
                additionalText: null
            };

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
                WeaponService.create($scope.weapon)
                    .then(function () {
                        WeaponService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating weapon');
                        }
                    });
            };

        }]);

});
