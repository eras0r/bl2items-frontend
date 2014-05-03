define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    angular.module('damageTypeModule').controller('DamageTypeCreateCtrl', [
        '$scope', '$location', 'DamageTypeService',
        function ($scope, $location, DamageTypeService) {

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
                        $location.path('/damageTypes');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $location.path('/damageTypes');
            };

        }]);

});
