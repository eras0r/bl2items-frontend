define(['angular', 'rarity/rarity-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityEditCtrl', [
        '$scope', '$state', 'RarityService',
        function ($scope, $state, RarityService) {

            $scope.save = function () {
                RarityService.update(
                    $scope.rarity,
                    function () {
                        $state.go('admin.rarities.list');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $state.go('admin.rarities.list');
            };

            $scope.rarity = RarityService.get(
                {
                    id: $state.params.id
                }, function () {
//                    $('#color').minicolors(
//                        {
//                            defaultValue: $scope.rarity.color,
//                            theme: 'bootstrap',
//                            change: function (hex, opacity) {
//                                $scope.rarity.color = hex;
//                                $scope.$apply();
//                            }
//                        });
                }
            );

        }]);

});