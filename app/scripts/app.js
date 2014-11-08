define([
    'angular',
    'restangular',
    'angular-translate',
    'angular-translate-loader-static-files',
    'angular-minicolors',
    'components/security/index',
    'components/navigation/index',
    'components/highlight-text/index',
    'file/index',
    'user/index',
    'item/index',
    'weapon/index',
    'shield/index',
    'damage-type/index',
    'manufacturer/index',
    'rarity/index'
], function (angular) {

    'use strict';

    return angular.module('bl2ItemsDbApp', [
        'ngCookies',
        'restangular',
        'ngSanitize',
        'ui.router',
        'pascalprecht.translate',
        /* external 3rd party modules*/
        'minicolors',
        /* generic core modules */
        'securityModule',
        'navigationModule',
        'highlightTextModule',
        /* business specific modules*/
        'fileModule',
        'userModule',
        'itemModule',
        'weaponModule',
        'shieldModule',
        'damageTypeModule',
        'manufacturerModule',
        'rarityModule'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider', '$translateProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider, $translateProvider) {

                $stateProvider
                    .state('bl2', {
                        url: '',
                        views: {
                            'navigation': {
                                templateUrl: 'scripts/components/navigation/navigation.html',
                                controller: 'NavCtrl'
                            },
                            'main': {
                                templateUrl: 'scripts/portal/portal.html'
                            }
                        }
                    })
                    .state('bl2.admin', {
                        'abstract': true,
                        url: '/admin',
                        resolve: {
                            currentUser: function (SessionService) {
                                return SessionService.getCurrentUser();
                            }
                        }
                    });

                // setup for restangular
                // TODO make base url somehow configurable
                RestangularProvider.setBaseUrl('http://localhost/bl2items-backend/');
                RestangularProvider.setDefaultHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                });

                // setup angular-translate
                $translateProvider.useStaticFilesLoader({
                    prefix: 'i18n/',
                    suffix: '.json'
                });
                $translateProvider.preferredLanguage('en');

            }])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications. For example,
                // <li ui-sref-active="active }"> will set the <li> // to active whenever
                // 'contacts.list' or one of its descendants is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    );

});
