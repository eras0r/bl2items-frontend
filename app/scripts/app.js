define([
    'angular',
    'angular-bootstrap',
    'restangular',
    'angular-translate',
    'angular-translate-loader-static-files',
    'angular-spectrum-colorpicker',
    'components/security/index',
    'components/navigation/index',
    'components/highlight-text/index',
    'components/color-picker/index',
    'components/skill-tree/index',
    'file/file-module-inc',
    'user/user-module-inc',
    'item/item-module-inc',
    'weapon/weapon-module-inc',
    'shield/index',
    'damage-type/index',
    'manufacturer/index',
    'rarity/index',
    'character/index',
    'class-mod/index'
], function (angular) {

    'use strict';

    return angular.module('bl2ItemsDbApp', [
        'ngCookies',
        'ngSanitize',
        /* external 3rd party modules*/
        'ui.router',
        'restangular',
        'pascalprecht.translate',
        'angularSpectrumColorpicker',
        'ui.bootstrap',
        /* generic core modules */
        'securityModule',
        'navigationModule',
        'highlightTextModule',
        'colorPickerModule',
        'skillTreeModule',
        /* business specific modules*/
        'fileModule',
        'userModule',
        'itemModule',
        'weaponModule',
        'shieldModule',
        'damageTypeModule',
        'manufacturerModule',
        'rarityModule',
        'characterModule',
        'classModModule'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider', '$translateProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider, $translateProvider) {

                $stateProvider
                    .state('bl2', {
                        url: '',
                        resolve: {
                            currentUser: function (SessionService) {
                                return SessionService.getCurrentUser();
                            }
                        },
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
                        navigationItem: {
                            sortOrder: 41,
                            label: 'navigation.admin.title',
                            group: 'bl2.admin',
                            role: 'admin',
                            items: {}
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
                $translateProvider.fallbackLanguage('en');

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
