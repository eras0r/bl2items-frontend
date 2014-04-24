'use strict';

/**
 * Defines the basic app which contains several different modules.
 */

angular.module('bl2ItemsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'navigationModule',
    'highlightTextModule',
    'rarityModule',
    'damageTypeModule',
    'manufacturerModule',
    'weaponModule'
])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.
                otherwise({
                    redirectTo: '/weapons'
                });
        }]);
