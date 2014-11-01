/**
 * module definition for the 'security' module.
 */
define([
    'angular',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac'
], function (angular, CryptoJS) {

    'use strict';

    var securityModule = angular.module('securityModule', [
        'ui.router'
    ])
        .config(['$stateProvider', 'RestangularProvider', function ($stateProvider, RestangularProvider) {

            // removes the body for remove / delete requests
            RestangularProvider.addRequestInterceptor(function (elem, operation) {
                if (operation === 'remove') {
                    return undefined;
                }
                return elem;
            });

            RestangularProvider.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                var microTime = new Date().getTime();

                var data = '';
                // use data (payload) for post and put requests
                if (operation === 'put' || operation === 'post') {
                    data = JSON.stringify(element);
                }

                // init hmac secret if not defined
                if (!localStorage.hmacSecret) {
                    localStorage.hmacSecret = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
                }

                var hmacHash = CryptoJS.HmacSHA512(url + ':' + data + ':' + microTime, localStorage.hmacSecret).toString(CryptoJS.enc.Hex);

                return {
                    element: element,
                    params: params,
                    headers: _.extend(headers, {
                        'X-SESSION-TOKEN': localStorage.sessionToken,
                        'X-MICRO-TIME': microTime,
                        'X-HMAC-HASH': hmacHash
                    }),
                    httpConfig: httpConfig
                };
            });

            // register module state's
            $stateProvider
                .state('bl2.login', {
                    url: '/login',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/components/security/login-form.html',
                            controller: 'LoginCtrl'
                        }
                    }
                })
                .state('bl2.logout', {
                    url: '/logout',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/components/security/logout.html',
                            controller: 'LogoutCtrl'
                        }
                    }

                });
        }])
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            // angular auth interceptor
            $rootScope.$on('event:auth-loginRequired', function () {
                // go to login state by keeping the current url
                $state.go('bl2.login', {}, {location: false});
            });

            $rootScope.$on('event:auth-loginConfirmed', function () {
                // TODO to previous state
                console.log('TODO login confirmed');
            });
        }]);

    return securityModule;

});
