/**
 * module definition for the 'weapon' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    /**
     * Module definition for the rarity module.
     */
    var weaponModule = angular.module('weaponModule', [
        'ngRoute',
        'ngResource'
    ])
        .config(function ($routeProvider) {
            $routeProvider.
                when('/weapons', {
                    templateUrl: '/scripts/item/item-list/item-list.html',
                    controller: 'WeaponListCtrl'
                })
                .when('/weapons/create', {
                    templateUrl: '/scripts/weapon/weapon-details.html',
                    controller: 'WeaponCreateCtrl'
                })
        })
        .constant('WEAPON_RESOURCE_URL', 'http://localhost/bl2items-backend/weapons/:id');

    return weaponModule;

});