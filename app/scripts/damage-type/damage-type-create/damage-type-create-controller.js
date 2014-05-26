define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    angular.module('damageTypeModule').controller('DamageTypeCreateCtrl', [
        '$scope', '$state', 'DamageTypeService',
        function ($scope, $state, DamageTypeService) {

            $scope.damageType = {
                'color': '#ffffff'
            };

//            $('#color').minicolors(
//                {
//                    defaultValue: $scope.damageType.color,
//                    theme: 'bootstrap',
//                    change: function (hex, opacity) {
//                        $scope.damageType.color = hex;
//                        $scope.$apply();
//                    }
//                });

            $scope.save = function () {
                DamageTypeService.save(
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

        }]);

});
