define([
    'angular',
    'manufacturer/manufacturer-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.manufacturers';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'rn.navigation'
    ];


    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
