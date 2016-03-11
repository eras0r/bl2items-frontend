define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LogoutCtrl', [
            '$log', 'SessionService', 'MessageService', LogoutCtrl]);

    /** @ngInject */
    function LogoutCtrl($log, SessionService, MessageService) {

        var vm = this;

        vm.hasMessages = hasMessages;

        init();

        function init() {
            if (!localStorage.sessionToken) {
                MessageService.addMessage({type: 'danger', text: 'logout.not.logged.in'});
                return;
            }

            SessionService.logout().then(function (data) {
                localStorage.removeItem('sessionToken');
                SessionService.setCurrentUser(undefined);
            }, function (response) {
                // TODO show error message
                $log.error('error calling logout: ', response);
            });
        }

        function hasMessages() {
            return MessageService.hasMessages();
        }

    }

});
