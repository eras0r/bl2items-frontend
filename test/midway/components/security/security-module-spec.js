define([
    'angular',
    'components/security/security-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'securityModule';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'http-auth-interceptor'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
