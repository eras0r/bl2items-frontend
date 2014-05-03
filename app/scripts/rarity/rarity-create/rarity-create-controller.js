define(['angular', 'rarity/rarity-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityCreateCtrl', [
        '$scope', '$location', 'RarityService',
        function ($scope, $location, RarityService) {

            $scope.rarity = {
                'color': '#ffffff'
            };

//            $('#color').minicolors(
//                {
//                    defaultValue: $scope.rarity.color,
//                    theme: 'bootstrap',
//                    change: function (hex, opacity) {
//                        $scope.rarity.color = hex;
//                        $scope.$apply();
//                    }
//                });

            $scope.save = function () {
                RarityService.save(
                    $scope.rarity,
                    function () {
                        $location.path('/rarities');
                    },
                    function (response) {
                        $scope.errors = response.data;
                    }
                );
            };

            $scope.cancel = function () {
                $location.path('/rarities');
            };

        }]);

});
