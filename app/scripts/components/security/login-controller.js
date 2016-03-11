define([
    'angular',
    'components/security/security-module-def',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac'
], function (angular, securityModule, CryptoJS) {

    'use strict';

    securityModule
        .controller('LoginCtrl', [
            'authService', 'SessionService', 'MessageService', LoginCtrl]);

    /** @ngInject */
    function LoginCtrl(authService, SessionService, MessageService) {

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

                // Store session token
                localStorage.sessionToken = data.sessionToken;

                // Generate new HMAC secret out of our previous (username + password) and the new session token
                // sha512("sha512('username:password'):sessionToken")
                localStorage.hmacSecret = CryptoJS.SHA512(localStorage.hmacSecret + ':' + data.sessionToken);

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
