define(['angular', 'angular-mocks', 'angular-midway-tester', 'user/user-def'], function (angular, mocks, angularMidwayTester, userModule) {

    'use strict';

    var moduleName = 'userModule';

    describe('Midway: Testing modules ' + moduleName, function () {
        var module;
        beforeEach(function () {
            module = angular.module('userModule');
        });

        it('should be registered', function () {
            expect(module).not.toBe(null);
        });

        describe('Dependencies: ', function () {

            var deps;
            var hasModule = function (m) {
                return deps.indexOf(m) >= 0;
            };
            beforeEach(function () {
                deps = module.value(moduleName).requires;
            });

            //you can also test the module's dependencies
            it('should have App.Controllers as a dependency', function () {
                expect(hasModule('ui.router')).toBe(true);
            });

            it('should have App.Directives as a dependency', function () {
                expect(hasModule('restangular')).toBe(true);
            });

        });

    });

});
