define(['angular'], function (angular) {

    'use strict';

    var module;
    var deps;

    var testHelper = {

        /**
         * Sets up the test helper for the module with the given moduleName
         * @param moduleName the module name to setup the testhelper for
         */
        setup: function (moduleName) {
            module = angular.module(moduleName);
            //console.log('module: ', module);
            deps = module.value(moduleName).requires;
        },

        /**
         * Checks if the module has a dependency with the given depName
         * @param depName the name of the dependency to be checked
         */
        checkModuleDependency: function (depName) {
            it('should have "' + depName + '" as a dependency', function () {
                expect(deps).toContain(depName);
            });
        },

        /**
         * Checks if the module has every of the required dependencies
         * @param expectedDeps array containing the names of all require dependencies
         */
        checkModuleDependencies: function (expectedDeps) {
            describe('should contain the correct dependencies: ', function () {
                expectedDeps.forEach(function (dep) {
                    testHelper.checkModuleDependency(dep);
                });

                it('should have the correct number of dependencies', function () {
                    expect(expectedDeps.length).toEqual(deps.length);
                });
            });
        },

        /**
         * Checks if the module has every of the required dependencies
         * @param expectedDeps array containing the names of all require dependencies
         */
        checkModule: function (moduleName, moduleFile, expectedDeps) {
            // setup the module
            beforeEach(function () {
                testHelper.setup(moduleName);
            });

            it('should be registered', function () {
                expect(module).not.toBe(null);
            });

            it('should return the module in the module-inc file', function () {
                expect(moduleFile).not.toBeUndefined();
                expect(moduleFile.name).toEqual(moduleName);
            });

            testHelper.checkModuleDependencies(expectedDeps);
        }

    };

    return testHelper;

});
