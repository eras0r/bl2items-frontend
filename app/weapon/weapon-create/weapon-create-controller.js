'use strict';

angular.module('weaponModule').controller('WeaponCreateCtrl', [
    '$scope', '$q', 'RarityService', 'ManufacturerService', 'DamageTypeService', 'WeaponService',
    function ($scope, $q, RarityService, ManufacturerService, DamageTypeService, WeaponService) {

        // call services
        $scope.rarities = RarityService.query();
        $scope.manufacturers = ManufacturerService.query();
        $scope.damageTypes = DamageTypeService.query();

        // wait for all async service calls
        $q.all([
            $scope.rarities.$promise,
            $scope.manufacturers.$promise,
            $scope.damageTypes.$promise
        ]).
            then(function () {
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
                }
            });

        $scope.changeDamageType = function () {
            $scope.weapon.elementalText = $scope.weapon.damageType.additionalText;

            // reset no more relevant inputs
            if ($scope.weapon.damageType.damageLabel == null) {
                $scope.weapon.elemDamage = null;
            }
            if ($scope.weapon.damageType.chanceLabel == null) {
                $scope.weapon.elemChance = null;
            }

        };

        $scope.save = function () {
            console.log('todo save()');
            WeaponService.save(
                $scope.weapon,
                function () {
                    $location.path('/weapons');
                },
                function (response) {
                    $scope.errors = response.data;
                }
            );
        }

    }]);
