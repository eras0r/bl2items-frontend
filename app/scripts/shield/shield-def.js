/**
 * module definition for the 'shield' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    /**
     * Module definition for the rarity module.
     */
    var shieldModule = angular.module('shieldModule', [
        'ngRoute',
        'ngResource'
    ])
        .config(function ($routeProvider) {
            $routeProvider.
                when('/shields', {
                    templateUrl: '/scripts/shield/shield-list/shield-list.html',
                    controller: 'ShieldListCtrl'
                })
                .when('/shields/create', {
                    templateUrl: '/scripts/shield/shield-details.html',
                    controller: 'ShieldCreateCtrl'
                })
        })
        .constant('SHIELD_RESOURCE_URL', 'http://localhost/bl2items-backend/shields/:id');

    return shieldModule;

});