/**
 * module definition for the 'rarity' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular.module('rarityModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.rarities', {
                    url: '/rarities',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/rarity/rarity-list/rarity-list.html',
                            controller: 'RarityListCtrl'
                        }
                    },
                    navigationItem: {
                        sortOrder: 1,
                        link: 'bl2.admin.rarities',
                        label: 'navigation.admin.rarities',
                        role: 'admin'
                    }
                })
                .state('bl2.admin.rarities.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/rarity/rarity-details.html',
                            controller: 'RarityCreateCtrl'
                        }
                    }
                })
                .state('bl2.admin.rarities.edit', {
                    url: '/:id',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/rarity/rarity-details.html',
                            controller: 'RarityEditCtrl'
                        }
                    }
                });

        });

});