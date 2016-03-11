define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    userModule.controller('UserListCtrl', [
        '$log', '$filter', 'UserService', UserListCtrl]);

    function UserListCtrl($log, $filter, UserService) {

        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            UserService.list().then(function (users) {
                vm.users = users;
            });
        }

        function remove(user) {
            UserService.remove(user)
                .then(function () {
                    // filter out the deleted object
                    vm.users = $filter('filter')(vm.users, {id: '!' + user.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting user');
                });
        }

    }

});
