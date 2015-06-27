/**
 * module definition for the 'shield' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular.module('shieldModule', [
        'ui.router',
        'restangular'
    ])
        .config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('bl2.shields', {
                        'abstract': true,
                        url: '/shields',
                        navigationItem: {
                            sortOrder: 21,
                            label: 'navigation.shields.title',
                            group: 'bl2.shields',
                            items: {}
                        }
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
                        },
                        navigationItem: {
                            sortOrder: 1,
                            link: 'bl2.shields.list',
                            label: 'navigation.shields.list'
                        }
                    })
                    .state('bl2.shields.create', {
                        url: '/create',
                        views: {
                            'main@': {
                                templateUrl: 'scripts/shield/shield-details.html',
                                controller: 'ShieldCreateCtrl'
                            }
                        },
                        navigationItem: {
                            sortOrder: 11,
                            link: 'bl2.shields.create',
                            label: 'navigation.shields.create',
                            role: 'admin'
                        }
                    });
            }]);

});