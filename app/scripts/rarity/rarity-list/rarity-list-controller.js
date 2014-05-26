define(['angular', 'rarity/rarity-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityListCtrl', [
        '$scope', 'RarityService',
        function ($scope, RarityService) {

            $scope.loadRarities = function () {
                console.log('loading rarities...');
                $scope.rarities = RarityService.query(function () {
                    console.log('loaded rarities: ' + $scope.rarities);
                });
            };

            $scope.deleteRarity = function (rarity) {
                console.log('deleting rarity with id=' + rarity.id);
                $scope.rarity = RarityService.delete(
                    {
                        id: rarity.id
                    },
                    // success function
                    function () {
                        $scope.loadRarities();
                    }
                )
            };

            // init rarities
            $scope.loadRarities();

        }]);

});
