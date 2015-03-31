define([
    'angular',
    'shield/shield-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'shieldModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
