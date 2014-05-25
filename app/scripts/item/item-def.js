/**
 * module definition for the 'item' module.
 */
define(['angular', 'angular-resource', 'angular-ui-router'], function (angular) {

    /**
     * Module definition for the item module.
     */
    var itemModule = angular.module('itemModule', [
        'ngResource',
        'ui.router'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('items', {
                    url: "/",
                    templateUrl: '/scripts/item/item-list/item-list.html',
                    controller: 'ItemListCtrl'
                });
        })
        .constant('ITEM_RESOURCE_URL', 'http://localhost/bl2items-backend/items/:id');

    return itemModule;

});