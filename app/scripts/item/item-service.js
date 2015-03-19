define([
    'angular',
    'item/item-module-def'
], function (angular, itemModule) {

    'use strict';

    itemModule.factory('ItemService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'items';

        return {
            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (item) {
                return Restangular.all(resourceUrl).post(item);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (item) {
                return item.put();
            },

            remove: function (item) {
                return item.remove();
            }
        };

    }]);

});
