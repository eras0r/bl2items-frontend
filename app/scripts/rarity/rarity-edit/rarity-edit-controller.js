define([
    'angular',
    'rarity/rarity-module-def'
], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityEditCtrl', [
        '$scope', '$state', '$log', 'Restangular', 'RarityService',
        function ($scope, $state, $log, Restangular, RarityService) {

            var self = this;

            RarityService.read($state.params.id).then(function (rarity) {
                self.originalUser = rarity;
                $scope.rarity = Restangular.copy(self.originalUser);
            });

            $scope.isNotDirty = function () {
                return angular.equals(self.originalUser, $scope.rarity);
            };

            $scope.save = function () {
                RarityService.update($scope.rarity)
                    .then(function () {
                        RarityService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error updating rarity');
                        }
                    });
            };

            $scope.cancel = function () {
                RarityService.showList();
            };

        }]);

});