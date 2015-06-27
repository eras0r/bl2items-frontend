/**
 * module definition for the 'characterClass' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    /** @ngInject */
    function CharactersModuleConfig($stateProvider) {
        // TODO register states
    }

    return angular
        .module('bl2.characters', [
            'ui.router',
            'restangular'
        ])
        .config(['$stateProvider', CharactersModuleConfig]);

});