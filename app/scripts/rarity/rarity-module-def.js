/**
 * module definition for the 'rarity' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.rarities', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', RarityModuleConfig]);

    /** @ngInject */
    function RarityModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.rarities', {
                url: '/rarities',
                views: {
                    'main@': {
                        templateUrl: 'scripts/rarity/rarity-list/rarity-list.html',
                        controller: 'RarityListCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.admin.rarities.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/rarity/rarity-details.html',
                        controller: 'RarityCreateCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.admin.rarities.edit', {
                url: '/:id',
                views: {
                    'main@': {
                        templateUrl: 'scripts/rarity/rarity-details.html',
                        controller: 'RarityEditCtrl',
                        controllerAs: 'vm'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            group: 'bl2.admin',
            sortOrder: 10,
            link: 'bl2.admin.rarities',
            label: 'navigation.admin.rarities',
            role: 'admin'
        });
    }

});