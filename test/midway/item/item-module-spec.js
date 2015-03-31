define([
    'angular',
    'item/item-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'itemModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
