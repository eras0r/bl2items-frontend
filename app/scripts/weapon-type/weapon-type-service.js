define([
    'angular',
    'weapon-type/weapon-type-module-def'
], function (angular, weaponTypeModule) {

    'use strict';

    weaponTypeModule.factory('WeaponTypeService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'weapon-types';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (weaponType) {
                return Restangular.all(resourceUrl).post(weaponType);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (weaponType) {
                return weaponType.put();
            },

            remove: function (weaponType) {
                return weaponType.remove();
            }
        };

    }]);

});