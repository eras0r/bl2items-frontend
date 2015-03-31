define([
    'angular',
    'components/color-picker/color-picker-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'colorPickerModule';

    var expectedDeps = ['angularSpectrumColorpicker'];

    describe('Midway testing', function () {
        testHelper.checkModule(moduleName, module, expectedDeps);
    });

});
