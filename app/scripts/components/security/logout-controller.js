define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LogoutCtrl', ['$scope', '$http', 'SessionService', function ($scope, $http, SessionService) {

            if (!localStorage.sessionToken) {
                $scope.message = 'You are not logged in.';
                return;
            }

            console.log('calling SessionService.logout()...');
            SessionService.logout().then(function (data) {
                localStorage.removeItem('sessionToken');
                SessionService.setCurrentUser(undefined);
            }, function (response) {
                // TODO show error message
                console.log('error calling logout: ', response);
            });

        }]);

});
