define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    angular.module('damageTypeModule').controller('DamageTypeCreateCtrl', [
        '$scope', '$state', 'DamageTypeService',
        function ($scope, $state, DamageTypeService) {

            $scope.damageType = {
                'color': '#ffffff'
            };

            $scope.save = function () {
                $scope.errors = null;

                DamageTypeService.create($scope.damageType)
                    .then(function () {
                        DamageTypeService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating damage type');
                        }
                    });
            };

            $scope.cancel = function () {
                DamageTypeService.showList();
            };

        }]);

});
