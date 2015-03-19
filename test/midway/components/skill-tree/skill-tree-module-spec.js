define([
    'angular',
    'components/skill-tree/skill-tree-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'skillTreeModule';

    var expectedDeps = [
        'ui.router', 'restangular'
    ];

    describe('Midway: Testing module ' + moduleName, function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
