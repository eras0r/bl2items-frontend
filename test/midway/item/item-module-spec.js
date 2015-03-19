define([
    'angular',
    'item/item-module-def',
    'test-helper'
], function (angular, userModule, testHelper) {

    'use strict';

    var moduleName = 'itemModule';

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
