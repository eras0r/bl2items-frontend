/**
 * module definition for the 'item' module.
 */
define([
    'angular',
    'restangular',
    'angular-ui-router'
], function (angular) {

    'use strict';

    /** @ngInject */
    function ItemModuleConfig($stateProvider) {
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
                },
                navigationItem: {
                    sortOrder: 1,
                    link: 'bl2.items',
                    label: 'navigation.items'
                }

            });
    }

    return angular
        .module('itemModule', [
            'ui.router',
            'restangular'
        ])
        .config(['$stateProvider', ItemModuleConfig]);

});