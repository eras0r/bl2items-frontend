/**
 * module definition for the 'damageType' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-service'
], function (angular) {

    'use strict';

    return angular.module('bl2.damageTypes', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', DamageTypeModuleConfig]);

    /** @ngInject */
    function DamageTypeModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.damageTypes', {
                url: '/damageTypes',
                views: {
                    'main@': {
                        templateUrl: 'scripts/damage-type/damage-type-list/damage-type-list.html',
                        controller: 'DamageTypeListCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.admin.damageTypes.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/damage-type/damage-type-details.html',
                        controller: 'DamageTypeCreateCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.admin.damageTypes.edit', {
                url: '/:id',
                views: {
                    'main@': {
                        templateUrl: 'scripts/damage-type/damage-type-details.html',
                        controller: 'DamageTypeEditCtrl',
                        controllerAs: 'vm'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            sortOrder: 50,
            label: 'navigation.admin.title',
            group: 'bl2.admin',
            role: 'admin',
            items: [
                {
                    sortOrder: 20,
                    link: 'bl2.admin.damageTypes',
                    label: 'navigation.admin.damageTypes',
                    role: 'admin'
                }
            ]
        });
    }

});