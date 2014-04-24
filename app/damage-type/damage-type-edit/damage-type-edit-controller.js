'use strict';

angular.module('damageTypeModule').controller('DamageTypeEditCtrl', [
    '$scope', '$location', '$routeParams', 'DamageTypeService',
    function ($scope, $location, $routeParams, DamageTypeService) {

        $scope.save = function () {
            DamageTypeService.update(
                $scope.damageType,
                function () {
                    $location.path('/damageTypes');
                },
                function (response) {
                    $scope.errors = response.data;
                }
            );
        }

        $scope.cancel = function () {
            $location.path('/damageTypes');
        }

        $scope.damageType = DamageTypeService.get(
            {
                id: $routeParams.id
            }, function () {
                $('#color').minicolors(
                    {
                        defaultValue: $scope.damageType.color,
                        theme: 'bootstrap',
                        change: function (hex, opacity) {
                            $scope.damageType.color = hex;
                            $scope.$apply();
                        }
                    });
            }
        );

    }]);
