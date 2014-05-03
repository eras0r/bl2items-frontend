/**
 * module definition for the 'rarity' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    'use strict';

    var rarityModule = angular.module('rarityModule', [
        'ngResource',
        'ngRoute'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/rarities', {
                    templateUrl: '/scripts/rarity/rarity-list/rarity-list.html',
                    controller: 'RarityListCtrl'
                })
                .when('/rarities/create', {
                    templateUrl: '/scripts/rarity/rarity-details.html',
                    controller: 'RarityCreateCtrl'
                })
                .when('/rarities/:id', {
                    templateUrl: '/scripts/rarity/rarity-details.html',
                    controller: 'RarityEditCtrl'
                })
        })
        .constant('RARITY_RESOURCE_URL', 'http://localhost/bl2items-backend/rarities/:id');

    return rarityModule;

});