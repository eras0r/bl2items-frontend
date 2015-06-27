/**
 * module definition for the 'skillTree' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular.module('skillTreeModule', ['ui.router', 'restangular'])
        .config([
            '$stateProvider', 'RestangularProvider',
            function ($stateProvider, RestangularProvider) {

            }]);

});
