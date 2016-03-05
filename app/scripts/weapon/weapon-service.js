define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    var defaultFilter = {
        include: ['manufacturer', 'rarity', 'damageType', 'weaponType']
    };

    weaponModule.factory('WeaponService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'weapons';

        return {
            showList: function () {
                $state.go('^.list');
            },

            list: function () {
                // ensure the REST API includes all needed relations
                return Restangular.all(resourceUrl).getList({filter: defaultFilter});
            },

            create: function (weapon) {
                return Restangular.all(resourceUrl).post(weapon);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get({filter: defaultFilter});
            },

            update: function (weapon) {
                return weapon.put();
            },

            remove: function (weapon) {
                return weapon.remove();
            }
        };

    }]);

});
