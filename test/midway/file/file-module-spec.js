define([
    'angular',
    'file/file-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2.files';

    var expectedDeps = [
        'ui.router',
        'restangular',
        'ngFileUpload',
        'rn.navigation'
    ];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
