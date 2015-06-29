define([
    'angular',
    'damage-type/damage-type-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.damageTypes';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'rn.navigation'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
