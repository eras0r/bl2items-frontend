/**
 * module definition for the 'classMod' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.classMods', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', ClassModuleConfig]);

    /** @ngInject */
    function ClassModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.classMods', {
                'abstract': true,
                url: '/class-mods',
                data: {}
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
                }
            })
            .state('bl2.classMods.create', {
                'abstract': true,
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/class-mod/class-mod-details/class-mod-tabs.html',
                        controller: 'ClassModCreateCtrl',
                        controllerAs: 'vm'
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
                url: '/preview',
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
                        templateUrl: 'scripts/class-mod/class-mod-details/class-mod-tabs.html',
                        controller: 'ClassModEditCtrl'
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
                    'pageTitle': 'classMods.edit.pageTitle',
                    'formTitle': 'classMods.edit.formTitle'
                }
            });

        NavigationServiceProvider.addNavigationItem({
            sortOrder: 40,
            label: 'navigation.classMods.title',
            group: 'bl2.classMods',
            items: [
                {
                    sortOrder: 10,
                    link: 'bl2.classMods.list',
                    label: 'navigation.classMods.list'
                },
                {
                    sortOrder: 20,
                    link: 'bl2.classMods.create.properties',
                    label: 'navigation.classMods.create',
                    role: 'admin'
                }
            ]
        });
    }

});