define([
    'angular',
    'manufacturer/manufacturer-module-inc',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'manufacturerModule';

    var expectedDeps = [
        'ui.router',
        'restangular'
    ];

    describe('Midway: Testing module ' + moduleName, function () {
        var module;

        beforeEach(function () {
            testHelper.setup(moduleName);
        });

        it('should be registered', function () {
            expect(module).not.toBe(null);
        });

        describe('should contain the correct dependencies: ', function () {
            testHelper.checkModuleDependencies(expectedDeps);
        });

    });

});
