define(['angular', 'rarity/rarity-module-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityListCtrl', [
        '$scope', '$log', '$filter', 'RarityService',
        function ($scope, $log, $filter, RarityService) {

            RarityService.list().then(function (rarities) {
                $scope.rarities = rarities;
            });

            $scope.remove = function (rarity) {
                RarityService.remove(rarity)
                    .then(function () {
                        // filter out the deleted object
                        $scope.rarities = $filter('filter')($scope.rarities, {id: '!' + rarity.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting rarity');
                    });
            };

        }]);

});
