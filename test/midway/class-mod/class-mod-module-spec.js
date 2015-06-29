define([
    'angular',
    'class-mod/class-mod-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.classMods';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'rn.navigation'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
