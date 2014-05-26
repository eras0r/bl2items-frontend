define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeListCtrl', [
        '$scope', 'DamageTypeService',
        function ($scope, DamageTypeService) {

            $scope.loadDamageTypes = function () {
                $scope.damageTypes = DamageTypeService.query();
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