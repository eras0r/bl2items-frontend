define([
    'angular',
    'damage-type/damage-type-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'damageTypeModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
