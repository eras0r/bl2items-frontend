define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    manufacturerModule.factory('ManufacturerService', ['MANUFACTURER_RESOURCE_URL',
        '$resource',
        function (MANUFACTURER_RESOURCE_URL, $resource) {
            return $resource(MANUFACTURER_RESOURCE_URL,
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