define([
    'angular',
    'user/user-module-def',
    'test-helper'
], function (angular, userModule, testHelper) {

    'use strict';

    var moduleName = 'userModule';

    describe('Midway: Testing module ' + moduleName, function () {
        var module;

        beforeEach(function () {
            testHelper.setup('userModule');
        });

        it('should be registered', function () {
            expect(module).not.toBe(null);
        });

        describe('should contain the correct dependencies: ', function () {
            testHelper.checkModuleDependency('ui.router');
            testHelper.checkModuleDependency('restangular');
        });

    });

});
