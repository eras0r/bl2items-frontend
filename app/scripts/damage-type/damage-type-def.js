/**
 * module definition for the 'damageType' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var damageTypeModule = angular.module('damageTypeModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.damageTypes', {
                    url: '/damageTypes',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/damage-type/damage-type-list/damage-type-list.html',
                            controller: 'DamageTypeListCtrl'
                        }
                    }
                })
                .state('bl2.admin.damageTypes.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/damage-type/damage-type-details.html',
                            controller: 'DamageTypeCreateCtrl'
                        }
                    }
                })
                .state('bl2.admin.damageTypes.edit', {
                    url: '/:id',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/damage-type/damage-type-details.html',
                            controller: 'DamageTypeEditCtrl'
                        }
                    }
                });
        });

    return damageTypeModule;

});