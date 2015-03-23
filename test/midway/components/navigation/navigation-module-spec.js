define([
    'angular',
    'components/navigation/navigation-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'navigationModule';

    var expectedDeps = [
        'ui.router',
        'pascalprecht.translate',
        'ui.bootstrap',
        'securityModule'
    ];

    describe('Midway: Testing module ' + moduleName, function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
