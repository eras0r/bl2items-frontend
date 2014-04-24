'use strict';

/**
 * Module definition for the rarity module.
 */
angular.module('damageTypeModule', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/damageTypes', {
                templateUrl: '/damage-type/damage-type-list/damage-type-list.html',
                controller: 'DamageTypeListCtrl'
            })
            .when('/damageTypes/create', {
                templateUrl: '/damage-type/damage-type-details.html',
                controller: 'DamageTypeCreateCtrl'
            })
            .when('/damageTypes/:id', {
                templateUrl: '/damage-type/damage-type-details.html',
                controller: 'DamageTypeEditCtrl'
            })
    });
