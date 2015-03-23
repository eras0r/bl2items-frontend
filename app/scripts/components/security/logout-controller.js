define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LogoutCtrl', ['$scope', '$http', '$log', 'SessionService', function ($scope, $http, $log, SessionService) {

            if (!localStorage.sessionToken) {
                $scope.message = 'You are not logged in.';
                return;
            }
            
            SessionService.logout().then(function (data) {
                localStorage.removeItem('sessionToken');
                SessionService.setCurrentUser(undefined);
            }, function (response) {
                // TODO show error message
                $log.error('error calling logout: ', response);
            });

        }]);

});
