/**
 * module definition for the 'weapon' module.
 */
define(['angular', 'angular-ui-router', 'angular-resource'], function (angular) {

    'use strict';

    var weaponModule = angular.module('weaponModule', [
        'ui.router',
        'ngResource'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('weapons', {
                    'abstract': true,
                    url: "/weapons",
                    template: '<ui-view />'
                })
                .state('weapons.list', {
                    url: "/list",
                    templateUrl: 'scripts/item/item-list/item-list.html',
                    controller: 'WeaponListCtrl'
                })
                .state('weapons.create', {
                    url: "/create",
                    templateUrl: 'scripts/weapon/weapon-details.html',
                    controller: 'WeaponCreateCtrl'
                });
        })
        .constant('WEAPON_RESOURCE_URL', 'http://localhost/bl2items-backend/weapons/:id');

    return weaponModule;

});
