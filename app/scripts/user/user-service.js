define(['angular', 'user/user-def'], function (angular, userModule) {

    'use strict';

    userModule.factory('UserService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'users';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (user) {
                return Restangular.all(resourceUrl).post(user);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (user) {
                return user.put();
            },

            remove: function (user) {
                return user.remove();
            }
        };

    }]);
});