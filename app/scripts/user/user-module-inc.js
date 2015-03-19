/**
 * bootstraps the 'user' module.
 */
define([
    'user/user-module-def',
    'user/user-service',
    'user/role-service',
    'user/user-create/user-create-controller',
    'user/user-edit/user-edit-controller',
    'user/user-list/user-list-controller'
], function (userModule) {

    'use strict';

    return userModule;

});
