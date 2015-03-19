/**
 * bootstraps the 'manufacturer' module.
 */
define([
    'manufacturer/manufacturer-module-def',
    'manufacturer/manufacturer-service',
    'manufacturer/manufacturer-create/manufacturer-create-controller',
    'manufacturer/manufacturer-edit/manufacturer-edit-controller',
    'manufacturer/manufacturer-list/manufacturer-list-controller'
], function (manufacturerModule) {

    'use strict';

    return manufacturerModule;

});
