'use strict';

angular.module('weaponModule').controller('WeaponCreateCtrl', [
    '$scope', '$q', 'RarityService', 'ManufacturerService', 'DamageTypeService',
    function ($scope, $q, RarityService, ManufacturerService, DamageTypeService) {

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
                // TODO introduce weapon object
                $scope.level = 50;
                $scope.rarity = $scope.rarities[0];
                // preselect the first manufacturer
                $scope.manufacturer = $scope.manufacturers[0];
                $scope.damage = null;
                $scope.acuracy = null;
                $scope.fireRate = null;
                $scope.reloadSpeed = null;
                $scope.magazineSize = null;
                // preselect the first damage type
                $scope.damageType = $scope.damageTypes[0];
                $scope.uniqueText = null;
                $scope.elementalText = null;
                $scope.additionalText = null;
            });

        $scope.changeDamageType = function () {
            $scope.elementalText = $scope.damageType.additionalText;

            // reset no more relevant inputs
            if ($scope.damageType.damageLabel == null) {
                $scope.elemDamage = null;
            }
            if ($scope.damageType.chanceLabel == null) {
                $scope.elemChance = null;
            }

        };

    }]);
