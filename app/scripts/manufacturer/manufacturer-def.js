/**
 * module definition for the 'manufacturer' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var manufacturerModule = angular.module('manufacturerModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.manufacturers', {
                    url: '/manufacturers',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/manufacturer/manufacturer-list/manufacturer-list.html',
                            controller: 'ManufacturerListCtrl'
                        }
                    },
                    navigationItem: {
                        sortOrder: 21,
                        link: 'bl2.admin.manufacturers',
                        label: 'navigation.admin.manufacturers',
                        role: 'admin'
                    }
                })
                .state('bl2.admin.manufacturers.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                            controller: 'ManufacturerCreateCtrl'
                        }
                    }
                })
                .state('bl2.admin.manufacturers.edit', {
                    url: '/:id',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                            controller: 'ManufacturerEditCtrl'
                        }
                    }
                });
        });

    return manufacturerModule;

});
