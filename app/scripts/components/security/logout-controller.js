define(['angular', 'components/security/security-def'], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LogoutCtrl', ['$scope', '$http', function ($scope, $http) {

            if (!localStorage.sessionToken) {
                $scope.message = 'You are not logged in.';
                return;
            }

            $http.post('http://localhost/bl2items-backend/logout.php', {}).
                success(function (data, status, headers, config) {
                    // Delete session token and secret
                    delete localStorage.sessionToken;
                    delete localStorage.hmacSecret;

                    $scope.message = 'Logout Successful';
                }).
                error(function (data, status, headers, config) {
                    $scope.message = data.message;

                    // Delete session token and secret
                    delete localStorage.sessionToken;
                    delete localStorage.hmacSecret;
                });

        }]);

});
