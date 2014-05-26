/**
 * module definition for the 'manufacturer' module.
 */
define(['angular', 'angular-ui-router', 'angular-resource'], function (angular) {

    'use strict';

    var manufacturerModule = angular.module('manufacturerModule', [
        'ui.router',
        'ngResource'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin.manufacturers', {
                    'abstract': true,
                    url: "/manufacturers",
                    template: '<ui-view />'
                })
                .state('admin.manufacturers.list', {
                    url: "/list",
                    templateUrl: 'scripts/manufacturer/manufacturer-list/manufacturer-list.html',
                    controller: 'ManufacturerListCtrl'
                })
                .state('admin.manufacturers.create', {
                    url: "/create",
                    templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                    controller: 'ManufacturerCreateCtrl'
                })
                .state('admin.manufacturers.edit', {
                    url: '/:id',
                    templateUrl: 'scripts/manufacturer/manufacturer-details.html',
                    controller: 'ManufacturerEditCtrl'
                });
        })
        .constant('MANUFACTURER_RESOURCE_URL', 'http://localhost/bl2items-backend/manufacturers/:id');

    return manufacturerModule;

});
