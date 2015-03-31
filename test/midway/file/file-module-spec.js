define([
    'angular',
    'file/file-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'fileModule';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'angularFileUpload'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
