'use strict';

angular.module('rarityModule').controller('RarityEditCtrl', [
    '$scope', '$location', '$routeParams', 'RarityService',
    function ($scope, $location, $routeParams, RarityService) {

        $scope.save = function () {
            RarityService.update(
                $scope.rarity,
                function () {
                    $location.path('/rarities');
                },
                function (response) {
                    $scope.errors = response.data;
                }
            );
        }

        $scope.cancel = function () {
            $location.path('/rarities');
        }

        $scope.rarity = RarityService.get(
            {
                id: $routeParams.id
            }, function () {
                $('#color').minicolors(
                    {
                        defaultValue: $scope.rarity.color,
                        theme: 'bootstrap',
                        change: function (hex, opacity) {
                            $scope.rarity.color = hex;
                            $scope.$apply();
                        }
                    });
            }
        );

    }]);