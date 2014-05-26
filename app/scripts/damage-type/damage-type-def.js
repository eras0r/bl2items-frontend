/**
 * module definition for the 'damageType' module.
 */
define(['angular', 'angular-ui-router', 'angular-resource'], function (angular) {

    'use strict';

    /**
     * Module definition for the damageType module.
     */
    var damageTypeModule = angular.module('damageTypeModule', [
        'ui.router',
        'ngResource'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin.damageTypes', {
                    'abstract': true,
                    url: "/damageTypes",
                    template: '<ui-view />'
                })
                .state('admin.damageTypes.list', {
                    url: "/list",
                    templateUrl: '/scripts/damage-type/damage-type-list/damage-type-list.html',
                    controller: 'DamageTypeListCtrl'
                })
                .state('admin.damageTypes.create', {
                    url: "/create",
                    templateUrl: '/scripts/damage-type/damage-type-details.html',
                    controller: 'DamageTypeCreateCtrl'
                })
                .state('admin.damageTypes.edit', {
                    url: '/:id',
                    templateUrl: '/scripts/damage-type/damage-type-details.html',
                    controller: 'DamageTypeEditCtrl'
                });
        })
        .constant('DAMAGE_TYPE_RESOURCE_URL', 'http://localhost/bl2items-backend/damageTypes/:id');

    return damageTypeModule;

});