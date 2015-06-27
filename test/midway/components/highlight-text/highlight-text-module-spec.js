define([
    'angular',
    'components/highlight-text/highlight-text-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'rn.highlightText';

    var expectedDeps = [

    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
