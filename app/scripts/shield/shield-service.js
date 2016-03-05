define([
    'angular',
    'shield/shield-module-def'
], function (angular, shieldModule) {

    'use strict';

    var defaultFilter = {
        include: ['manufacturer', 'rarity']
    };

    shieldModule.factory('ShieldService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'shields';

        return {
            showList: function () {
                $state.go('^.list');
            },

            list: function () {
                // ensure the REST API includes all needed relations
                return Restangular.all(resourceUrl).getList({filter: defaultFilter});
            },

            create: function (shield) {
                return Restangular.all(resourceUrl).post(shield);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (shield) {
                return shield.put();
            },

            remove: function (shield) {
                return shield.remove();
            }
        };

    }]);

});
