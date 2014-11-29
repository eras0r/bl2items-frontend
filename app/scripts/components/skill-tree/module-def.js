/**
 * module definition for the 'skillTree' module.
 */
define([
    'angular'
], function (angular) {

    'use strict';

    var skillTreeModule = angular.module('skillTreeModule', [])
        .config(['$stateProvider', 'RestangularProvider', function () {

        }]);

    return skillTreeModule;

});
