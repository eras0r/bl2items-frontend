define([
    'angular',
    'cryptojs.core',
    'cryptojs.x64-core',
    'cryptojs.sha512',
    'cryptojs.hmac',
    'angular-minicolors',
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
        'restangular',
        'ngSanitize',
        'ui.router',
        'http-auth-interceptor',
        'minicolors',
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
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider) {
                // for any unmatched url, redirect to /
                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('admin', {
                        'abstract': true,
                        url: '/admin',
                        template: '<ui-view />'
                    });

                // setup for restangular
                // TODO make base url somehow configurable
                RestangularProvider.setBaseUrl('http://localhost/bl2items-backend/');

                RestangularProvider.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                    var microTime = new Date().getTime();

                    var data = '';
                    // set data for post and put request
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
