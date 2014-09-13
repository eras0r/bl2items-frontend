define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.factory('ItemService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'items';

        return {
            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (rarity) {
                return Restangular.all(resourceUrl).post(rarity);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (rarity) {
                return rarity.put();
            },

            remove: function (id) {
                return Restangular.one(resourceUrl, id).remove();
            }
        };

    }]);

});
