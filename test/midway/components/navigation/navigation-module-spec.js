define([
    'angular',
    'components/navigation/navigation-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'rn.navigation';

    var expectedDeps = [
        'ui.router',
        'pascalprecht.translate',
        'ui.bootstrap',
        'rn.security'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
