define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.factory('ItemService', ['ITEM_RESOURCE_URL',
        '$resource',
        function (ITEM_RESOURCE_URL, $resource) {
            return $resource(ITEM_RESOURCE_URL,
                { id: '@id' },
                {
                    list: { method: 'GET', isArray: true }
                });
        }]);

});
