define(['angular', 'weapon/weapon-module-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.factory('WeaponService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'weapons';

        return {
            showList: function () {
                $state.go('^.list');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (weapon) {
                return Restangular.all(resourceUrl).post(weapon);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
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
