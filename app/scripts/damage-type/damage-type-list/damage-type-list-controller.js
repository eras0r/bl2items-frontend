define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeListCtrl', [
        '$scope', '$location', 'DamageTypeService',
        function ($scope, $location, DamageTypeService) {

            $scope.loadDamageTypes = function () {
                $scope.damageTypes = DamageTypeService.query();
            };

            $scope.createDamageType = function () {
                $location.path('/damageTypes/create');
            };

            $scope.editDamageType = function (damageType) {
                $location.path('/damageTypes/' + damageType.id);
            };

            $scope.deleteDamageType = function (damageType) {
                $scope.damageType = DamageTypeService.delete(
                    {
                        id: damageType.id
                    },
                    // success function
                    function () {
                        $scope.loadDamageTypes();
                    }
                )
            };

            // init damageTypes
            $scope.loadDamageTypes();
        }]);

});