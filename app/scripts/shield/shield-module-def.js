/**
 * module definition for the 'shield' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.shields', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', ShieldModuleConfig]);

    /** @ngInject */
    function ShieldModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.shields', {
                'abstract': true,
                url: '/shields'
            })
            .state('bl2.shields.list', {
                url: '/list',
                views: {
                    'main@': {
                        templateUrl: 'scripts/item/item-list/item-list.html',
                        controller: 'ShieldListCtrl'
                    }
                },
                data: {
                    pageTitle: 'shields.list.pageTitle'
                }
            })
            .state('bl2.shields.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/shield/shield-details.html',
                        controller: 'ShieldCreateCtrl'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            sortOrder: 30,
            label: 'navigation.shields.title',
            group: 'bl2.shields',
            items: [
                {
                    sortOrder: 10,
                    link: 'bl2.shields.list',
                    label: 'navigation.shields.list'
                },
                {
                    sortOrder: 20,
                    link: 'bl2.shields.create',
                    label: 'navigation.shields.create',
                    role: 'admin'
                }
            ]
        });
    }

});