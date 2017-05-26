/**
 * module definition for the 'weapon' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.weapons', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', WeaponModuleConfig]);

    /** @ngInject */
    function WeaponModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.weapons', {
                'abstract': true,
                url: '/weapons',
                data: {}
            })
            .state('bl2.weapons.list', {
                url: '/list',
                views: {
                    'main@': {
                        templateUrl: 'scripts/item/item-list/item-list.html',
                        controller: 'WeaponListCtrl',
                        controllerAs: 'vm'
                    }
                },
                data: {
                    pageTitle: 'weapons.list.pageTitle'
                }
            })
            .state('bl2.weapons.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/weapon/weapon-details.html',
                        controller: 'WeaponCreateCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    rarities: ['RarityService', function (RarityService) {
                        return RarityService.list();
                    }],
                    manufacturers: ['ManufacturerService', function (ManufacturerService) {
                        return ManufacturerService.list();
                    }],
                    damageTypes: ['DamageTypeService', function (DamageTypeService) {
                        return DamageTypeService.list();
                    }],
                    weaponTypes: ['WeaponTypeService', function (WeaponTypeService) {
                        return WeaponTypeService.list();
                    }]
                },
                data: {
                    'pageTitle': 'weapons.create.pageTitle',
                    'formTitle': 'weapons.create.formTitle'
                }
            })
            .state('bl2.weapons.edit', {
                url: '/:id',
                views: {
                    'main@': {
                        templateUrl: 'scripts/weapon/weapon-details.html',
                        controller: 'WeaponEditCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    rarities: ['RarityService', function (RarityService) {
                        return RarityService.list();
                    }],
                    manufacturers: ['ManufacturerService', function (ManufacturerService) {
                        return ManufacturerService.list();
                    }],
                    damageTypes: ['WeaponTypeService', function (DamageTypeService) {
                        return DamageTypeService.list();
                    }],
                    weaponTypes: ['WeaponTypeService', function (WeaponTypeService) {
                        return WeaponTypeService.list();
                    }],
                    weapon: ['$stateParams', 'WeaponService', function ($stateParams, WeaponService) {
                        return WeaponService.read($stateParams.id);
                    }]
                },
                data: {
                    'pageTitle': 'weapons.edit.pageTitle',
                    'formTitle': 'weapons.edit.formTitle'
                }
            });

        NavigationServiceProvider.addNavigationItem({
            sortOrder: 20,
            label: 'navigation.weapons.title',
            group: 'bl2.weapons',
            items: [
                {
                    sortOrder: 10,
                    link: 'bl2.weapons.list',
                    label: 'navigation.weapons.list'
                },
                {
                    sortOrder: 20,
                    link: 'bl2.weapons.create',
                    label: 'navigation.weapons.create',
                    role: 'admin'
                }
            ]
        });

    }

});
