define([
    'angular',
    'user/user-module-def',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.users';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'rn.navigation'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
