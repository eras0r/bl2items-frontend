define([
    'angular',
    'components/skill-tree/skill-tree-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.skillTree';

    var expectedDeps = [
        'ui.router', 'restangular'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
