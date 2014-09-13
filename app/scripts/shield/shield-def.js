/**
 * module definition for the 'shield' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var shieldModule = angular.module('shieldModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('shields', {
                    'abstract': true,
                    url: '/shields',
                    template: '<ui-view />'
                })
                .state('shields.list', {
                    url: '/list',
                    templateUrl: 'scripts/item/item-list/item-list.html',
                    controller: 'ShieldListCtrl'
                })
                .state('shields.create', {
                    url: '/create',
                    templateUrl: 'scripts/shield/shield-details.html',
                    controller: 'ShieldCreateCtrl'
                });
        });

    return shieldModule;

});