define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    userModule.controller('UserEditCtrl', ['$filter', '$log', 'Restangular', 'UserService', 'roles', 'user', UserEditCtrl]);

    /** @ngInject */
    function UserEditCtrl($filter, $log, Restangular, UserService, roles, user) {
        var vm = this;

        vm.originalUser = user;
        vm.user = Restangular.copy(vm.originalUser);
        vm.userRoles = [];

        vm.isNotDirty = isNotDirty;
        vm.save = save;
        vm.cancel = cancel;

        function isNotDirty() {
            return angular.equals(vm.originalUser, vm.user);
        }

        function save() {
            vm.errors = null;

            // iterate over selected userRoles
            vm.user.roles = [];
            angular.forEach($filter('filter')(vm.userRoles, {selected: true}), function (value) {
                vm.user.roles.push({id: value.id, rolename: value.rolename});
            });

            UserService.update(vm.user)
                .then(function () {
                    UserService.showList();
                })
                .catch(function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error updating user');
                    }
                });
        }

        function cancel() {
            UserService.showList();
        }

        angular.forEach(roles, function (value) {
            // determine if the user already has the role
            var userHasRole = $filter('filter')(vm.user.roles, {id: value.id}).length > 0;
            vm.userRoles.push({id: value.id, rolename: value.rolename, selected: userHasRole});
        });
    }

});