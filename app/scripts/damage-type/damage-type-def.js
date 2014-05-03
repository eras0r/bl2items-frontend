/**
 * module definition for the 'damageType' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    'use strict';

    /**
     * Module definition for the rarity module.
     */
    var damageTypeModule = angular.module('damageTypeModule', [
        'ngResource',
        'ngRoute'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/damageTypes', {
                    templateUrl: '/scripts/damage-type/damage-type-list/damage-type-list.html',
                    controller: 'DamageTypeListCtrl'
                })
                .when('/damageTypes/create', {
                    templateUrl: '/scripts/damage-type/damage-type-details.html',
                    controller: 'DamageTypeCreateCtrl'
                })
                .when('/damageTypes/:id', {
                    templateUrl: '/scripts/damage-type/damage-type-details.html',
                    controller: 'DamageTypeEditCtrl'
                })
        });

    return damageTypeModule;

});