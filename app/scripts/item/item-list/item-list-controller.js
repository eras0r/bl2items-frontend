define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.controller('ItemListCtrl', [
        '$scope', 'ItemService',
        function ($scope, ItemService) {

            ItemService.list().then(function (items) {
                $scope.items = items;
            });

        }]);

});
