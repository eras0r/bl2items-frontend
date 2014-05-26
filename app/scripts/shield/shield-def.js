/**
 * module definition for the 'shield' module.
 */
define(['angular', 'angular-ui-router', 'angular-resource'], function (angular) {

    /**
     * Module definition for the shield module.
     */
    var shieldModule = angular.module('shieldModule', [
        'ui.router',
        'ngResource'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('shields', {
                    'abstract': true,
                    url: "/shields",
                    template: '<ui-view />'
                })
                .state('shields.list', {
                    url: "/list",
                    templateUrl: '/scripts/item/item-list/item-list.html',
                    controller: 'ShieldListCtrl'
                })
                .state('shields.create', {
                    url: "/create",
                    templateUrl: '/scripts/shield/shield-details.html',
                    controller: 'ShieldCreateCtrl'
                });
        })
        .constant('SHIELD_RESOURCE_URL', 'http://localhost/bl2items-backend/shields/:id');

    return shieldModule;

});