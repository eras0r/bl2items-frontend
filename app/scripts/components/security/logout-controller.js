define(['angular', 'components/security/security-def'], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LogoutCtrl', ['$scope', '$http', 'SessionService', function ($scope, $http, SessionService) {

            if (!localStorage.sessionToken) {
                $scope.message = 'You are not logged in.';
                return;
            }

            SessionService.logout().then(function (data) {
                localStorage.removeItem('sessionToken');
                $scope.message = 'Logout Successful';
            }, function (response) {
                // TODO show error message
                $scope.message = response.message;
            });

        }]);

});
