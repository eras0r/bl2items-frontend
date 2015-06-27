/**
 * module definition for the 'classMod' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular.module('classModModule', [
        'ui.router',
        'restangular'
    ])
        .config([
            '$stateProvider',
            function ($stateProvider) {

                $stateProvider
                    .state('bl2.classMods', {
                        'abstract': true,
                        url: '/class-mods',
                        data: {},
                        navigationItem: {
                            sortOrder: 31,
                            label: 'navigation.classMods.title',
                            group: 'bl2.classMods',
                            items: {}
                        }
                    })
                    .state('bl2.classMods.list', {
                        url: '/list',
                        views: {
                            'main@': {
                                templateUrl: 'scripts/item/item-list/item-list.html',
                                controller: 'ClassModListCtrl'
                            }
                        },
                        data: {
                            pageTitle: 'classMods.list.pageTitle'
                        },
                        navigationItem: {
                            sortOrder: 1,
                            link: 'bl2.classMods.list',
                            label: 'navigation.classMods.list'
                        }
                    })
                    .state('bl2.classMods.create', {
                        'abstract': true,
                        url: '/create',
                        views: {
                            'main@': {
                                templateUrl: 'scripts/class-mod/class-mod-details/class-mod-tabs.html',
                                controller: 'ClassModCreateCtrl'
                            }
                        },
                        resolve: {
                            rarities: function (RarityService) {
                                return RarityService.list();
                            },
                            manufacturers: function (ManufacturerService) {
                                return ManufacturerService.list();
                            },
                            characters: function (CharacterService) {
                                return CharacterService.list();
                            }
                        },
                        data: {
                            'pageTitle': 'classMods.create.pageTitle',
                            'formTitle': 'classMods.create.formTitle'
                        },
                        navigationItem: {
                            sortOrder: 11,
                            link: 'bl2.classMods.create.properties',
                            label: 'navigation.classMods.create',
                            role: 'admin'
                        }
                    })
                    .state('bl2.classMods.create.properties', {
                        url: '/properties',
                        views: {
                            'tabView': {
                                templateUrl: 'scripts/class-mod/class-mod-details/class-mod-properties-tab.html'
                            }
                        }
                    })
                    .state('bl2.classMods.create.skills', {
                        url: '/skills',
                        views: {
                            'tabView': {
                                templateUrl: 'scripts/class-mod/class-mod-details/class-mod-skills-tab.html'
                            }
                        }
                    })
                    .state('bl2.classMods.create.preview', {
                        url: '/skills',
                        views: {
                            'tabView': {
                                templateUrl: 'scripts/class-mod/class-mod-details/class-mod-preview-tab.html'
                            }
                        }
                    })
                    .state('bl2.classMods.edit', {
                        url: '/:id',
                        views: {
                            'main@': {
                                templateUrl: 'scripts/weapon/weapon-details.html',
                                controller: 'WeaponEditCtrl'
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
                        data: {
                            'pageTitle': 'weapons.edit.pageTitle',
                            'formTitle': 'weapons.edit.formTitle'
                        }
                    });

            }]);

});