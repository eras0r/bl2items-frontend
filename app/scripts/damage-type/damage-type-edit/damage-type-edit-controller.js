define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    angular.module('damageTypeModule').controller('DamageTypeEditCtrl', [
        '$scope', '$state', 'DamageTypeService',
        function ($scope, $state, DamageTypeService) {

            $scope.save = function () {
                DamageTypeService.update(
                    $scope.damageType,
                    function () {
                        $state.go('admin.damageTypes.list');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $state.go('admin.damageTypes.list');
            };

            $scope.damageType = DamageTypeService.get(
                {
                    id: $state.params.id
                }, function () {
//                    $('#color').minicolors(
//                        {
//                            defaultValue: $scope.damageType.color,
//                            theme: 'bootstrap',
//                            change: function (hex, opacity) {
//                                $scope.damageType.color = hex;
//                                $scope.$apply();
//                            }
//                        });
                }
            );

        }]);

});