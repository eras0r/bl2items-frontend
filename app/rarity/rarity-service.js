'use strict';

angular.module('rarityModule').factory('RarityService', [
    '$resource',
    function ($resource) {
        // TODO store domain prefix in global config
        return $resource('http://localhost/bl2items-backend/rarities/:id',
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
