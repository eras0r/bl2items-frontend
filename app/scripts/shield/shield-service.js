define(['angular', 'shield/shield-def'], function (angular, shieldModule) {

    'use strict';

    shieldModule.factory('ShieldService', ['SHIELD_RESOURCE_URL',
        '$resource',
        function (SHIELD_RESOURCE_URL, $resource) {
            return $resource(SHIELD_RESOURCE_URL,
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
