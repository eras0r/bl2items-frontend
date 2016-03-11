define([
    'angular',
    'rarity/rarity-module-def'
], function (angular, rarityModule) {

    'use strict';

    rarityModule.controller('RarityListCtrl', [
        '$log', '$filter', 'RarityService', RarityListCtrl]);

    /** @ngInject */
    function RarityListCtrl($log, $filter, RarityService) {

        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            RarityService.list().then(function (rarities) {
                vm.rarities = rarities;
            });
        }

        function remove(rarity) {
            RarityService.remove(rarity)
                .then(function () {
                    // filter out the deleted object
                    vm.rarities = $filter('filter')(vm.rarities, {id: '!' + rarity.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting rarity');
                });
        }

    }

});
