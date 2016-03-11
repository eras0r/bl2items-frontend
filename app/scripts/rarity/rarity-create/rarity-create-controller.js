define([
    'angular',
    'rarity/rarity-module-def'
], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityCreateCtrl', [
        '$log', 'RarityService', RarityCreateCtrl]);

    /** @ngInject */
    function RarityCreateCtrl($log, RarityService) {

        var vm = this;

        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            vm.rarity = {
                'color': '#ffffff'
            };
        }

        function save() {
            vm.errors = null;

            RarityService.create(vm.rarity)
                .then(function () {
                    RarityService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating rarity');
                    }
                });
        }

        function cancel() {
            RarityService.showList();
        }

    }

});
