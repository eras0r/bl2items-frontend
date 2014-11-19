/**
 * module definition for the 'weapon' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var weaponModule = angular.module('weaponModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.weapons', {
                    'abstract': true,
                    url: '/weapons',
                    data: {},
                    navigationItem: {
                        sortOrder: 11,
                        label: 'navigation.weapons.title',
                        group: 'bl2.weapons',
                        items: {}
                    }
                })
                .state('bl2.weapons.list', {
                    url: '/list',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/item/item-list/item-list.html',
                            controller: 'WeaponListCtrl'
                        }
                    },
                    data: {
                        pageTitle: 'weapons.list.pageTitle'
                    },
                    navigationItem: {
                        sortOrder: 1,
                        link: 'bl2.weapons.list',
                        label: 'navigation.weapons.list'
                    }
                })
                .state('bl2.weapons.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/weapon/weapon-details.html',
                            controller: 'WeaponCreateCtrl'
                        }
                    },
                    resolve: {
                        rarities: function (RarityService) {
                            return RarityService.list();
                        },
                        manufacturers: function (ManufacturerService) {
                            return ManufacturerService.list();
                        },
                        damageTypes: function (DamageTypeService) {
                            return DamageTypeService.list();
                        }
                    },
                    navigationItem: {
                        sortOrder: 11,
                        link: 'bl2.weapons.create',
                        label: 'navigation.weapons.create',
                        role: 'admin'
                    }
                });
        });

    return weaponModule;

});
