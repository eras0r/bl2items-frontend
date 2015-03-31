define([
    'angular',
    'manufacturer/manufacturer-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'manufacturerModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];


    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
