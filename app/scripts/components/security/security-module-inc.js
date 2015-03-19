/**
 * bootstraps the 'security' module.
 */
define([
    'components/security/security-module-def',
    'components/security/login-controller',
    'components/security/logout-controller',
    'components/security/session-service'
], function (securityModule) {

    'use strict';

    return securityModule;

});
