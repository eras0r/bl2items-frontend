define([
    'angular',
    'rarity/rarity-module-def'
], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityCreateCtrl', [
        '$scope', '$state', '$log', 'RarityService',
        function ($scope, $state, $log, RarityService) {

            $scope.rarity = {
                'color': '#ffffff'
            };

            $scope.save = function () {
                $scope.errors = null;

                RarityService.create($scope.rarity)
                    .then(function () {
                        RarityService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating rarity');
                        }
                    });
            };

            $scope.cancel = function () {
                RarityService.showList();
            };

        }]);

});
