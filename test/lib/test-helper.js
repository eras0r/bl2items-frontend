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
            expectedDeps.forEach(function (dep) {
                testHelper.checkModuleDependency(dep);
            });
        }

    };

    return testHelper;

});
