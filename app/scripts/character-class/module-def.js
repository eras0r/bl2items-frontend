/**
 * module definition for the 'characterClass' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var characterClassModule = angular.module('characterClassModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {


        });

    return characterClassModule;

});