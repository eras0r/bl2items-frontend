/**
 * module definition for the 'manufacturer' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.manufacturers', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', ManufacturerConfig]);

    /** @ngInject */
    function ManufacturerConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.manufacturers', {
                url: '/manufacturers',
                views: {
                    'main@': {
                        templateUrl: 'scripts/manufacturer/manufacturer-list/manufacturer-list.html',
                        controller: 'ManufacturerListCtrl',
                        controllerAs:'vm'
                    }
                }
            })
            .state('bl2.admin.manufacturers.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                        controller: 'ManufacturerCreateCtrl',
                        controllerAs:'vm'
                    }
                }
            })
            .state('bl2.admin.manufacturers.edit', {
                url: '/:id',
                views: {
                    'main@': {
                        templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                        controller: 'ManufacturerEditCtrl',
                        controllerAs:'vm'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            group: 'bl2.admin',
            items: [
                {
                    sortOrder: 30,
                    link: 'bl2.admin.manufacturers',
                    label: 'navigation.admin.manufacturers',
                    role: 'admin'
                }
            ]
        });
    }

});
