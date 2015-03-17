define([
    'angular',
    'user/user-module-def'
], function (angular, userModule) {

    'use strict';

    userModule.controller('UserCreateCtrl', [
        '$scope', '$state', '$filter', '$log', 'UserService', 'roles',
        function ($scope, $state, $filter, $log, UserService, roles) {

            $scope.user = {
                roles: []
            };

            $scope.userRoles = [];
            angular.forEach(roles, function (value) {
                $scope.userRoles.push({id: value.id, rolename: value.rolename, selected: false});
            });

            $scope.save = function () {
                $scope.errors = null;

                // iterate over selected userRoles
                $scope.user.roles = [];
                angular.forEach($filter('filter')($scope.userRoles, {selected: true}), function (value) {
                    $scope.user.roles.push({id: value.id, rolename: value.rolename});
                });

                UserService.create($scope.user)
                    .then(function () {
                        UserService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating user');
                        }
                    });
            };

            $scope.cancel = function () {
                UserService.showList();
            };

        }]);

});
