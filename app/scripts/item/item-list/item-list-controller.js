define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.controller('ItemListCtrl', [
        '$scope', '$q', 'ItemService',
        function ($scope, $q, ItemService) {

            // load items
            $scope.items = ItemService.query();


        }]);

});
