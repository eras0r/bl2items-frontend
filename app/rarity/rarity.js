'use strict';

/**
 * Module definition for the rarity module.
 */

angular.module('rarityModule', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/rarities', {
                templateUrl: '/rarity/rarity-list/rarity-list.html',
                controller: 'RarityListCtrl'
            })
            .when('/rarities/create', {
                templateUrl: '/rarity/rarity-details.html',
                controller: 'RarityCreateCtrl'
            })
            .when('/rarities/:id', {
                templateUrl: '/rarity/rarity-details.html',
                controller: 'RarityEditCtrl'
            })
    });
