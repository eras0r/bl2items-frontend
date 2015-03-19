define([
    'angular',
    'components/security/security-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'securityModule';

    var expectedDeps = [
        'ui.router', 'http-auth-interceptor'
    ];

    describe('Midway: Testing module ' + moduleName, function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
