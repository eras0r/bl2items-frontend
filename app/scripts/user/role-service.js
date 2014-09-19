define(['angular', 'user/user-def'], function (angular, userModule) {

    'use strict';

    userModule.factory('RoleService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'roles';

        return {
            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            }
        };

    }]);
});