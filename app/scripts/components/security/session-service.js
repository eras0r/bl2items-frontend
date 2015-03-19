define([
    'angular',
    'components/security/security-module-def',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac'
], function (angular, securityModule, CryptoJS) {

    'use strict';

    securityModule.factory('SessionService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'sessions';

        var currentUser;

        var sessionService = {

            getCurrentUser: function () {
                if (typeof currentUser === 'undefined') {
                    currentUser = Restangular.one('current-user').get().$object;
                }

                return currentUser;
            },

            setCurrentUser: function (user) {
                currentUser = user;
            },

            /**
             * Returns whether the current user has the given role or not.
             * Note: roles are always in capital letters and start with 'ROLE_'
             * @param role the role to be tested
             * @returns {boolean} whether the user has the given role or not.
             */
            hasRole: function (role) {
                if (typeof role === 'undefined') {
                    return true;
                }
                return currentUser && currentUser.roles && currentUser.roles.indexOf(role) !== -1;
            },

            login: function (username, password) {
                // Generate HMAC secret (sha512('username:password'))
                localStorage.hmacSecret = CryptoJS.SHA512(username + ':' + password).toString(CryptoJS.enc.Hex);

                // POST Data
                var randomString = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
                var postData = {
                    payload: randomString,
                    username: username,
                    password: password
                };

                return Restangular.all(resourceUrl).post(postData);

            },

            isUserLoggedIn: function () {
                return currentUser !== undefined && currentUser.username;
            },

            logout: function () {
                return Restangular.all(resourceUrl).customDELETE(localStorage.sessionToken);
            }

        };


        return sessionService;

    }]);

});