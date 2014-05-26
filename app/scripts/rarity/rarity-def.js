/**
 * module definition for the 'rarity' module.
 */
define(['angular', 'angular-ui-router', 'angular-resource'], function (angular) {

    'use strict';

    var rarityModule = angular.module('rarityModule', [
        'ui.router',
        'ngResource'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin.rarities', {
                    'abstract': true,
                    url: "/rarities",
                    template: '<ui-view />'
                })
                .state('admin.rarities.list', {
                    url: "/list",
                    templateUrl: 'scripts/rarity/rarity-list/rarity-list.html',
                    controller: 'RarityListCtrl'
                })
                .state('admin.rarities.create', {
                    url: "/create",
                    templateUrl: 'scripts/rarity/rarity-details.html',
                    controller: 'RarityCreateCtrl'
                })
                .state('admin.rarities.edit', {
                    url: '/:id',
                    templateUrl: 'scripts/rarity/rarity-details.html',
                    controller: 'RarityEditCtrl'
                });
        })
        .constant('RARITY_RESOURCE_URL', 'http://localhost/bl2items-backend/rarities/:id');

    return rarityModule;

});