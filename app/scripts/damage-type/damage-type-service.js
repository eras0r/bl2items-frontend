define([
    'angular',
    'damage-type/damage-type-module-def'
], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.factory('DamageTypeService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'damage-types';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (damageType) {
                return Restangular.all(resourceUrl).post(damageType);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (damageType) {
                return damageType.put();
            },

            remove: function (damageType) {
                return damageType.remove();
            }
        };

    }]);

});