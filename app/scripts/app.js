define([
    'angular',
    'components/navigation/index',
    'components/highlight-text/index',
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
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.router',
        /* external 3rd party modules*/
//        'bl2ItemsDbApp.navigation',
        /* generic core modules */
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
        .config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider',
            function ($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
                // for any unmatched url, redirect to /
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('admin', {
                        abstract: true,
                        url: "/admin",
                        template: '<ui-view />'
                    })

            }])
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ui-sref-active="active }"> will set the <li> // to active whenever
                // 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    );

});
