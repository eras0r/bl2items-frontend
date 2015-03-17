define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    userModule.controller('UserEditCtrl', [
        '$scope', '$state', '$filter', '$log', 'Restangular', 'UserService', 'roles', 'user',
        function ($scope, $state, $filter, $log, Restangular, UserService, roles, user) {

            var self = this;

            self.originalUser = user;
            $scope.user = Restangular.copy(self.originalUser);

            $scope.userRoles = [];
            angular.forEach(roles, function (value) {
                // determine if the user already has the role
                var userHasRole = $filter('filter')($scope.user.roles, {id: value.id}).length > 0;
                $scope.userRoles.push({id: value.id, rolename: value.rolename, selected: userHasRole});
            });

            $scope.isNotDirty = function () {
                return angular.equals(self.originalUser, $scope.user);
            };

            $scope.save = function () {

                // iterate over selected userRoles
                $scope.user.roles = [];
                angular.forEach($filter('filter')($scope.userRoles, {selected: true}), function (value) {
                    $scope.user.roles.push({id: value.id, rolename: value.rolename});
                });

                UserService.update($scope.user)
                    .then(function () {
                        UserService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error updating user');
                        }
                    });
            };

            $scope.cancel = function () {
                UserService.showList();
            };

        }]);

});