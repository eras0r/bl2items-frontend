define([
    'angular',
    'angular-bootstrap',
    'restangular',
    'angular-translate',
    'angular-translate-loader-static-files',
    'components/security/security-module-inc',
    'components/navigation/navigation-module-inc',
    'components/highlight-text/highlight-text-inc',
    'components/color-picker/color-picker-module-inc',
    'components/skill-tree/skill-tree-module-inc',
    'file/file-module-inc',
    'user/user-module-inc',
    'item/item-module-inc',
    'weapon/weapon-module-inc',
    'shield/shield-module-inc',
    'damage-type/damage-type-module-inc',
    'manufacturer/manufacturer-module-inc',
    'rarity/rarity-module-inc',
    'character/character-module-inc',
    'class-mod/class-mod-module-inc'
], function (angular) {

    'use strict';

    return angular.module('bl2ItemsDbApp', [
        'ngCookies',
        'ngSanitize',
        /* external 3rd party modules*/
        'ui.router',
        'restangular',
        'pascalprecht.translate',
        'ui.bootstrap',
        /* generic core modules */
        'rn.security',
        'rn.navigation',
        'rn.highlightText',
        'rn.colorPicker',
        /* business specific modules*/
        'bl2.files',
        'bl2.users',
        'bl2.items',
        'bl2.weapons',
        'bl2.shields',
        'bl2.damageTypes',
        'bl2.manufacturers',
        'bl2.rarities',
        'bl2.characters',
        'bl2.classMods',
        'bl2.skillTree'
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
                                controller: 'NavigationCtrl',
                                controllerAs: 'vm'
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
                // config for local grunt server
                RestangularProvider.setBaseUrl('http://localhost/bl2items-backend/');

                // TODO config for test environment
                //RestangularProvider.setBaseUrl('../bl2items-backend/');

                // TODO config for productive environment
                //RestangularProvider.setBaseUrl('../api/');

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
