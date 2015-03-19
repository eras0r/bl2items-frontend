define([
    'angular',
    'character/character-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'characterModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway: Testing module ' + moduleName, function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
