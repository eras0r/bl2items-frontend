/**
 * module definition for the 'skillTree' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.skillTree', [
            'ui.router',
            'restangular'
        ]);

});
