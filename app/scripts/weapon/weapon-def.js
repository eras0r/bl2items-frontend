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
                .state('weapons', {
                    'abstract': true,
                    url: '/weapons',
                    template: '<ui-view />'
                })
                .state('weapons.list', {
                    url: '/list',
                    templateUrl: 'scripts/item/item-list/item-list.html',
                    controller: 'WeaponListCtrl'
                })
                .state('weapons.create', {
                    url: '/create',
                    templateUrl: 'scripts/weapon/weapon-details.html',
                    controller: 'WeaponCreateCtrl',
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
