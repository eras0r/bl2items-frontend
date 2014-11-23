define(['angular', 'weapon/weapon-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponEditCtrl', [
        '$scope', '$filter', '$log', '$stateParams', 'rarities', 'manufacturers', 'damageTypes', 'WeaponService',
        function ($scope, $filter, $log, $stateParams, rarities, manufacturers, damageTypes, WeaponService) {

            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.damageTypes = damageTypes;

            // init weapon
            WeaponService.read($stateParams.id).then(function(weapon) {
                //console.log('loaded weapon: ', weapon);
                $scope.weapon = weapon;
                // force initial selection of select items
                // TODO find a better solution to init selection on select items
                $scope.weapon.rarity = $filter('filter')($scope.rarities, {id: weapon.rarity.id})[0];
                $scope.weapon.damageType = $filter('filter')($scope.damageTypes, {id: weapon.damageType.id})[0];
                $scope.weapon.manufacturer = $filter('filter')($scope.manufacturers, {id: weapon.manufacturer.id})[0];
            });

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
