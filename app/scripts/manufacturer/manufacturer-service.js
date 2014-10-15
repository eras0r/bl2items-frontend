define(['angular', 'manufacturer/manufacturer-def'], function (angular, manufacturerModule) {

    'use strict';

    manufacturerModule.factory('ManufacturerService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'manufacturers';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (manufacturer) {
                return Restangular.all(resourceUrl).post(manufacturer);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (manufacturer) {
                return manufacturer.put();
            },

            remove: function (manufacturer) {
                return manufacturer.remove();
            }
        };

    }]);

});