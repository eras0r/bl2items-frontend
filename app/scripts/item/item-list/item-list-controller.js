define([
    'angular',
    'item/item-module-def'
], function (angular, itemModule) {

    'use strict';

    itemModule.controller('ItemListCtrl', [
        'ItemService', ItemListCtrl]);

    /** @ngInject */
    function ItemListCtrl(ItemService) {

        var vm = this;

        init();

        function init() {
            ItemService.list().then(function (items) {
                vm.items = items;
            });
        }

    }

});
