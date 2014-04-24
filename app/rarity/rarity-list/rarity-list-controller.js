'use strict';

angular.module('rarityModule').controller('RarityListCtrl', [
    '$scope', '$location', 'RarityService',
    function ($scope, $location, RarityService) {

        $scope.loadRarities = function () {
            console.log('loading rarities');
            $scope.rarities = RarityService.query(function () {
                console.log('loaded rarities: ' + $scope.rarities);
            });
        }

        $scope.createRarity = function () {
            $location.path('/rarities/create');
        }

        $scope.editRarity = function (rarity) {
            $location.path('/rarities/' + rarity.id);
        }

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
        }

        // init rarities
        $scope.loadRarities();
    }]);

