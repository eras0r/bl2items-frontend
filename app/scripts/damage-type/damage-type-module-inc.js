/**
 * bootstraps the 'damageType' module.
 */
define([
    'damage-type/damage-type-module-def',
    'damage-type/damage-type-service',
    'damage-type/damage-type-create/damage-type-create-controller',
    'damage-type/damage-type-edit/damage-type-edit-controller',
    'damage-type/damage-type-list/damage-type-list-controller'
], function (damageTypeModule) {

    'use strict';

    return damageTypeModule;

});
