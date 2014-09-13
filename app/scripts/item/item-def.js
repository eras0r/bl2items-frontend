/**
 * module definition for the 'item' module.
 */
define(['angular', 'restangular', 'angular-ui-router'], function (angular) {

    'use strict';

    var itemModule = angular.module('itemModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('items', {
                    url: '/',
                    templateUrl: 'scripts/item/item-list/item-list.html',
                    controller: 'ItemListCtrl'
                });
        });

    return itemModule;

});