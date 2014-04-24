'use strict';

/**
 * Module definition for the rarity module.
 */

angular.module('weaponModule', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/weapons', {
                templateUrl: '/weapon/weapon-list/weapon-list.html',
                controller: 'WeaponListCtrl'
            })
            .when('/weapons/create', {
                templateUrl: '/weapon/weapon-details.html',
                controller: 'WeaponCreateCtrl'
            })
    });
