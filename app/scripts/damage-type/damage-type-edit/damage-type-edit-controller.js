define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    angular.module('damageTypeModule').controller('DamageTypeEditCtrl', [
        '$scope', '$state', '$log', 'Restangular', 'DamageTypeService',
        function ($scope, $state, $log, Restangular, DamageTypeService) {

            var self = this;

            DamageTypeService.read($state.params.id).then(function (damageType) {
                self.originalDamageType = damageType;
                $scope.damageType = Restangular.copy(self.originalDamageType);
            });

            $scope.isNotDirty = function () {
                return angular.equals(self.originalDamageType, $scope.damageType);
            };

            $scope.save = function () {
                DamageTypeService.update($scope.damageType)
                    .then(function () {
                        DamageTypeService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error updating damage type');
                        }
                    });
            };

            $scope.cancel = function () {
                DamageTypeService.showList();
            };

        }]);

});