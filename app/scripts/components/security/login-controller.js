define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LoginCtrl', [
            '$localStorage', 'authService', 'SessionService', 'MessageService', LoginCtrl]);

    /** @ngInject */
    function LoginCtrl($localStorage, authService, SessionService, MessageService) {

        var vm = this;

        vm.login = login;

        init();

        function init() {
            resetInput();
        }

        function resetInput() {
            vm.user = {
                name: '',
                password: ''
            };
        }

        function login() {
            MessageService.closeAllMessages();
            vm.errors = null;

            SessionService.login(vm.user.name, vm.user.password).then(function (data) {
                resetInput();

                // store session token
                $localStorage.sessionToken = data.id;
                $localStorage.userId = data.userId;

                MessageService.addMessage({type: 'success', text: 'login.successful'});

                authService.loginConfirmed(data.user);
            }, function (response) {
                MessageService.addMessage({type: 'danger', text: 'login.invalid.credentials'});
                vm.errors = {
                    name: 'invalid credentials',
                    password: 'invalid credentials'
                };
            });

        }

    }

});
