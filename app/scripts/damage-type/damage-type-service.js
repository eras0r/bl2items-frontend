define(['angular', 'damage-type/damage-type-def'], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.factory('DamageTypeService', ['DAMAGE_TYPE_RESOURCE_URL',
        '$resource',
        function (DAMAGE_TYPE_RESOURCE_URL, $resource) {
            return $resource(DAMAGE_TYPE_RESOURCE_URL,
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