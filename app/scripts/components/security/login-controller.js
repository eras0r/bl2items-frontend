define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LoginCtrl', [
            '$scope', '$http', 'authService', 'SessionService',
            function ($scope, $http, authService, SessionService) {
                $scope.login = function () {

                    SessionService.login($scope.user.name, $scope.user.password).then(function (data) {
                        // reset login form
                        $scope.user = {
                            name: '',
                            password: ''
                        };

                        // Store session token
                        localStorage.sessionToken = data.id;
                        localStorage.userId = data.userId;

                        // TODO
                        $scope.message = 'Login Successful: ' + localStorage.sessionToken;

                        authService.loginConfirmed(data.user);

                    }, function (response) {
                        // TODO translate message
                        $scope.message = 'invalid credentials';
                        $scope.errors = {
                            name: 'invalid credentials',
                            password: 'invalid credentials'
                        };
                    });

                };

            }]);

});
