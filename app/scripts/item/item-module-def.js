/**
 * module definition for the 'item' module.
 */
define([
    'angular',
    'restangular',
    'angular-ui-router',
    'components/navigation/navigation-service'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.items', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', ItemModuleConfig]);

    /** @ngInject */
    function ItemModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.items', {
                url: '/items',
                views: {
                    'main@': {
                        templateUrl: 'scripts/item/item-list/item-list.html',
                        controller: 'ItemListCtrl'
                    }
                },
                data: {
                    pageTitle: 'items.list.pageTitle'
                }

            });

        NavigationServiceProvider.addNavigationItem({
            sortOrder: 10,
            link: 'bl2.items',
            label: 'navigation.items'
        });
    }

});