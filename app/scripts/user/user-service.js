define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    userModule.factory('UserService', ['$state', 'Restangular', UserService]);

    /** @ngInject */
    function UserService($state, Restangular) {
        var resourceUrl = 'users';

        var userService = {
            showList: showList,
            list: list,
            create: create,
            read: read,
            update: update,
            remove: remove
        };

        return userService;

        function showList() {
            $state.go('^');
        }

        function list() {
            return Restangular.all(resourceUrl).getList();
        }

        function create(user) {
            return Restangular.all(resourceUrl).post(user);
        }

        function read(id) {
            return Restangular.one(resourceUrl, id).get();
        }

        function update(user) {
            return user.put();
        }

        function remove(user) {
            return user.remove();
        }
    }

});