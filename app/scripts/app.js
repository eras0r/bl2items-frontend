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
        .config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $locationProvider.html5Mode(true);

                $routeProvider.
                    otherwise({
                        redirectTo: '/items'
                    });
            }]);
});
