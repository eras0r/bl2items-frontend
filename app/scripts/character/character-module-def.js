/**
 * module definition for the 'characterClass' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    var characterModule = angular.module('characterModule', [
        'ui.router',
        'restangular'
    ])
        .config(['$stateProvider',
            function ($stateProvider) {

                // TODO define states

            }]);

    return characterModule;

});