/**
 * module definition for the 'weapon' module.
 */
define(['angular', 'angular-route', 'angular-resource'], function (angular) {

    /**
     * Module definition for the rarity module.
     */
    var itemModule = angular.module('itemModule', [
        'ngRoute',
        'ngResource'
    ])
        .config(function ($routeProvider) {
            $routeProvider.
                when('/items', {
                    templateUrl: '/scripts/item/item-list/item-list.html',
                    controller: 'ItemListCtrl'
                });
        })
        .constant('ITEM_RESOURCE_URL', 'http://localhost/bl2items-backend/items/:id');

    return itemModule;

});