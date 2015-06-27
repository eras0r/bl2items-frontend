/**
 * module definition for the 'navigation' module.
 */
define([
    'angular',
    'angular-translate',
    'angular-bootstrap',
    'components/security/security-module-inc'
], function (angular) {

    'use strict';

    return angular
        .module('rn.navigation', [
            'ui.router',
            'pascalprecht.translate',
            'ui.bootstrap',
            'rn.security'
        ]);

});
