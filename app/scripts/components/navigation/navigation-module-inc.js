/**
 * bootstraps the 'navigation' module.
 */
define([
    'components/navigation/navigation-module-def',
    // required for responsive bootstrap navigation
    'collapse',
    'dropdown',
    'components/navigation/navigation-service',
    'components/navigation/navigation-controller',
    'components/navigation/navigation-item/navigation-item-directive',
    'components/navigation/language-controller'
], function (navigationModule) {

    'use strict';

    return navigationModule;

});
