define([
    'angular',
    'rarity/rarity-module-def'
], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityEditCtrl', [
        '$state', '$log', 'Restangular', 'RarityService', RarityEditCtrl]);

    /** @ngInject */
    function RarityEditCtrl($state, $log, Restangular, RarityService) {

        var vm = this;

        vm.isNotDirty = isNotDirty;
        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            RarityService.read($state.params.id).then(function (rarity) {
                vm.originalUser = rarity;
                vm.rarity = Restangular.copy(vm.originalUser);
            });
        }

        function isNotDirty() {
            return angular.equals(vm.originalUser, vm.rarity);
        }

        function save() {
            RarityService.update(vm.rarity)
                .then(function () {
                    RarityService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error updating rarity');
                    }
                });
        }

        function cancel() {
            RarityService.showList();
        }

    }

});