define(['angular', 'rarity/rarity-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityCreateCtrl', [
        '$scope', '$state', 'RarityService',
        function ($scope, $state, RarityService) {

            $scope.rarity = {
                'color': '#ffffff'
            };

            $scope.save = function () {
                RarityService.save(
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

        }]);

});
