/**
 * module definition for the 'manufacturer' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    'use strict';

    var manufacturerModule = angular.module('manufacturerModule', [
        'ngResource',
        'ngRoute'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/manufacturers', {
                    templateUrl: '/scripts/manufacturer/manufacturer-list/manufacturer-list.html',
                    controller: 'ManufacturerListCtrl'
                })
                .when('/manufacturers/create', {
                    templateUrl: '/scripts/manufacturer/manufacturer-details.html',
                    controller: 'ManufacturerCreateCtrl'
                })
                .when('/manufacturers/:id', {
                    templateUrl: '/scripts/manufacturer/manufacturer-details.html',
                    controller: 'ManufacturerEditCtrl'
                })
        });

    return manufacturerModule;

});
