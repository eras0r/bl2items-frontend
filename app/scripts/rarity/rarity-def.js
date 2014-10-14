/**
 * module definition for the 'rarity' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var rarityModule = angular.module('rarityModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('bl2.admin.rarities', {
                    url: '/rarities',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/rarity/rarity-list/rarity-list.html',
                            controller: 'RarityListCtrl'
                        }
                    }
                })
                //.state('bl2.admin.rarities.list', {
                //    url: '/list',
                //    views: {
                //        'main@': {
                //            templateUrl: 'scripts/rarity/rarity-list/rarity-list.html',
                //            controller: 'RarityListCtrl'
                //        }
                //    }
                //})
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

            // default state for rarities module
            //$urlRouterProvider.when('/admin/rarities', '/admin/rarities/list');
        });

    return rarityModule;

});