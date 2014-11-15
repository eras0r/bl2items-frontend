define(['angular', 'components/security/security-def', 'cryptojs.core', 'cryptojs.x64-core', 'cryptojs.sha512', 'cryptojs.hmac'], function (angular, securityModule, CryptoJS) {

    'use strict';

    securityModule
        .controller('LoginCtrl', ['$scope', '$http', 'authService', 'SessionService', function ($scope, $http, authService, SessionService) {
            $scope.login = function () {

                SessionService.login($scope.user.name, $scope.user.password).then(function (data) {
                    $scope.user.name = '';
                    $scope.user.password = '';

                    // Store session token
                    localStorage.sessionToken = data.sessionToken;

                    // Generate new HMAC secret out of our previous (username + password) and the new session token
                    // sha512("sha512('username:password'):sessionToken")
                    localStorage.hmacSecret = CryptoJS.SHA512(localStorage.hmacSecret + ':' + data.sessionToken);

                    // TODO
                    $scope.message = 'Login Successful: ' + localStorage.sessionToken;

                    authService.loginConfirmed(data.user);

                }, function (response) {
                    // TODO show error message
                    $scope.message = response.message;
                });

            };

        }]);

});
