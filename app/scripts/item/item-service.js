define([
    'angular',
    'item/item-module-def'
], function (angular, itemModule) {

    'use strict';

    itemModule.factory('ItemService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'items';

        return {
            list: function () {
                // ensure the REST API includes all needed relations
                var filter = {
                    include: ['manufacturer', 'rarity', 'damageType', 'weaponType']
                };

                return Restangular.all(resourceUrl).getList({filter: filter});
            }

            // TODO count method

        };

    }]);

});
