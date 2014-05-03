define(['angular', 'rarity/rarity-def'], function (angular, rarityModule) {

    'use strict';

    rarityModule.factory('RarityService', ['RARITY_RESOURCE_URL',
        '$resource',
        function (RARITY_RESOURCE_URL, $resource) {
            return $resource(RARITY_RESOURCE_URL,
                { id: '@id' },
                {
                    list: { method: 'GET', isArray: true }, //same as query
                    create: { method: 'POST' }, // same as save
                    update: { method: 'PUT' }
                    // DEFAULT IMPLEMENTATION OF $RESOURCE
                    //   'get':    {method:'GET'},
                    //   'save':   {method:'POST'},
                    //   'query':  {method:'GET', isArray:true},
                    //   'remove': {method:'DELETE'},
                    //   'delete': {method:'DELETE'}
                });
        }]);

});