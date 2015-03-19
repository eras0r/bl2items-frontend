define(['angular', 'class-mod/class-mod-module-def'], function (angular, classModModule) {

    'use strict';

    classModModule.factory('ClassModService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'class-mods';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (rarity) {
                return Restangular.all(resourceUrl).post(rarity);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (rarity) {
                return rarity.put();
            },

            remove: function (rarity) {
                return rarity.remove();
            }
        };

    }]);

});