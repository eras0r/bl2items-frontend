define([
    'angular',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac',
    'components/security/index',
    'components/navigation/index',
    'components/highlight-text/index',
    'item/index',
    'weapon/index',
    'shield/index',
    'damage-type/index',
    'manufacturer/index',
    'rarity/index'
], function (angular, CryptoJS) {

    'use strict';

    return angular.module('bl2ItemsDbApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'http-auth-interceptor',
        /* external 3rd party modules*/
//        'bl2ItemsDbApp.navigation',
        /* generic core modules */
        'securityModule',
        'navigationModule',
        'highlightTextModule',
        /* business specific modules*/
        'itemModule',
        'weaponModule',
        'shieldModule',
        'damageTypeModule',
        'manufacturerModule',
        'rarityModule'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider) {
                // for any unmatched url, redirect to /
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('admin', {
                        'abstract': true,
                        url: "/admin",
                        template: '<ui-view />'
                    });

                // Add an HTTP interceptor which passes the request URL to the transformer
                // Allows to include the URL into the signature
                // Rejects request if no hmacSecret is available
                $httpProvider.interceptors.push(function ($q) {
                    return {
                        'request': function (config) {
//                            if (!localStorage.hmacSecret) {
//                                return $q.reject('No HMAC secret to sign request!');
//                            }

                            config.headers['X-URL'] = config.url;
                            return config || $q.when(config);
                        }
                    };
                });

                // Add a custom request transformer to generate required headers
                $httpProvider.defaults.transformRequest.push(function (data, headersGetter) {
                    // Add session token header if available
                    if (localStorage.sessionToken) {
                        headersGetter()['X-SESSION-TOKEN'] = localStorage.sessionToken;
                    }

                    // Add current time to prevent replay attacks
                    var microTime = new Date().getTime();
                    headersGetter()['X-MICRO-TIME'] = microTime;

                    // TODO data might be null in case of pure GET requests
                    if (!data) {
                        data = '';
                    }

                    // TODO find a better solution (idea: use https://github.com/mgonto/restangular#setdefaultheaders)

                    // init hmac secret if not defined
                    if (!localStorage.hmacSecret) {
                        localStorage.hmacSecret = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
                    }

                    headersGetter()['X-HMAC-HASH'] = CryptoJS.HmacSHA512(headersGetter()['X-URL'] + ':' + data + ':' + microTime, localStorage.hmacSecret).toString(CryptoJS.enc.Hex);

                    // And remove our temporary header
                    headersGetter()['X-URL'] = '';

                    return data;
                });

            }])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ui-sref-active="active }"> will set the <li> // to active whenever
                // 'contacts.list' or one of its descendants is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                // angular auth interceptor start
                $rootScope.$on('event:auth-loginRequired', function () {
                    // go to login state by keeping the current url
                    $state.go('login', {}, {location: false});
                });
                $rootScope.$on('event:auth-loginConfirmed', function () {
                    // TODO to previous state
                    console.log('TODO login confirmed');
                });
                // angular auth interceptor end
            }
        ]
    );

});
