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
        .module('navigationModule', [
            'ui.router',
            'pascalprecht.translate',
            'ui.bootstrap',
            'securityModule'
        ]);

});
