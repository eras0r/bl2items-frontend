define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeListCtrl', [
        '$scope', '$log', '$filter', 'DamageTypeService',
        function ($scope, $log, $filter, DamageTypeService) {

            DamageTypeService.list().then(function (damageTypes) {
                $scope.damageTypes = damageTypes;
            });

            $scope.deleteDamageType = function (damageType) {
                DamageTypeService.remove(damageType.id)
                    .then(function () {
                        // filter out the deleted object
                        $scope.damageTypes = $filter('filter')($scope.damageTypes, {id: '!' + damageType.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting damage type');
                    });
            };

        }]);

});