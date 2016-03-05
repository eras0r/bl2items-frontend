/**
 * module definition for the 'bl2.weaponTypes' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.weaponTypes', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', WeaponTypeConfig]);

    /** @ngInject */
    function WeaponTypeConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.weaponTypes', {
                url: '/weapon-types',
                views: {
                    'main@': {
                        templateUrl: 'scripts/weapon-type/weapon-type-list/weapon-type-list.html',
                        controller: 'WeaponTypeListCtrl'
                    }
                }
            })
            .state('bl2.admin.weaponTypes.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/weapon-type/weapon-type-details.html',
                        controller: 'weaponTypeCreateCtrl'
                    }
                }
            })
            .state('bl2.admin.weaponTypes.edit', {
                url: '/:id',
                views: {
                    'main@': {
                        templateUrl: 'scripts/weapon-type/weapon-type-details.html',
                        controller: 'WeaponTypeEditCtrl'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            group: 'bl2.admin',
            items: [
                {
                    sortOrder: 31,
                    link: 'bl2.admin.weaponTypes',
                    label: 'navigation.admin.weaponTypes',
                    role: 'admin'
                }
            ]
        });
    }

});
