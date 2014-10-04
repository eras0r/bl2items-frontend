define(['angular', 'components/security/security-def', 'cryptojs.core', 'cryptojs.x64-core', 'cryptojs.sha512', 'cryptojs.hmac'], function (angular, securityModule, CryptoJS) {

    'use strict';

    securityModule.factory('SessionService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'sessions';

        return {
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

            getCurrentUser: function () {
                return Restangular.one('current-user').get();
            },

            logout: function () {
                return Restangular.all(resourceUrl).customDELETE(localStorage.sessionToken);
            }
        };

    }]);

});