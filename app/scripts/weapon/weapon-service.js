define(['angular', 'weapon/weapon-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.factory('WeaponService', ['WEAPON_RESOURCE_URL',
        '$resource',
        function (WEAPON_RESOURCE_URL, $resource) {
            return $resource(WEAPON_RESOURCE_URL,
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
