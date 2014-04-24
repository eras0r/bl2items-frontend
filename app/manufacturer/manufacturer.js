'use strict';

/**
 * Module definition for the manufacturer module.
 */

angular.module('manufacturerModule', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/manufacturers', {
                templateUrl: '/manufacturer/manufacturer-list/manufacturer-list.html',
                controller: 'ManufacturerListCtrl'
            })
            .when('/manufacturers/create', {
                templateUrl: '/manufacturer/manufacturer-details.html',
                controller: 'ManufacturerCreateCtrl'
            })
            .when('/manufacturers/:id', {
                templateUrl: '/manufacturer/manufacturer-details.html',
                controller: 'ManufacturerEditCtrl'
            })
    });
