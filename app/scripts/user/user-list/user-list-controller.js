define([
    'angular',
    'user/user-module-def'
 ], function (angular, userModule) {

    'use strict';

    userModule.controller('UserListCtrl', [
        '$scope', '$log', '$filter', 'UserService',
        function ($scope, $log, $filter, UserService) {

            UserService.list().then(function (users) {
                $scope.users = users;
            });

            $scope.remove = function (user) {
                UserService.remove(user)
                    .then(function () {
                        // filter out the deleted object
                        $scope.users = $filter('filter')($scope.users, {id: '!' + user.id});
                    }, function (response) {
                        // TODO show error message
                        $log.error('error deleting user');
                    });
            };

        }]);

});
