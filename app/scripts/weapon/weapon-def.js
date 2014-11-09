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
                    url: '/weapons'
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
                    }
                });
        });

    return weaponModule;

});
