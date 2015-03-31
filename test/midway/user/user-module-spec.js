define([
    'angular',
    'user/user-module-def',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'userModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
