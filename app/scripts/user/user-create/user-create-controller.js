define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    /** @ngInject */
    function UserCreateCtrl($filter, $log, UserService, roles) {

        var vm = this;

        vm.errors = null;

        vm.user = {
            roles: []
        };

        vm.userRoles = [];

        vm.save = save;
        vm.cancel = cancel;

        function save() {
            vm.errors = null;

            // iterate over selected userRoles
            vm.user.roles = [];
            angular.forEach($filter('filter')(vm.userRoles, {selected: true}), function (value) {
                vm.user.roles.push({id: value.id, rolename: value.rolename});
            });

            UserService.create(vm.user)
                .then(function () {
                    UserService.showList();
                })
                .catch(function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating user');
                    }
                }
            );
        }

        function cancel() {
            UserService.showList();
        }

        angular.forEach(roles, function (value) {
            vm.userRoles.push({id: value.id, rolename: value.rolename, selected: false});
        });

    }

    userModule.controller('UserCreateCtrl', ['$filter', '$log', 'UserService', 'roles', UserCreateCtrl]);

});
