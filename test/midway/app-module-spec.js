define([
    'angular',
    'app',
    'test-helper'
], function (angular, module, testHelper) {

    'use strict';

    var moduleName = 'bl2ItemsDbApp';

    var expectedDeps = [
        'ngCookies',
        'ngSanitize',
        /* external 3rd party modules*/
        'ui.router',
        'restangular',
        'pascalprecht.translate',
        'ui.bootstrap',
        /* generic core modules */
        'rn.security',
        'rn.navigation',
        'rn.highlightText',
        'rn.colorPicker',
        'rn.errorHandling',
        /* business specific modules*/
        'bl2.files',
        'bl2.users',
        'bl2.items',
        'bl2.weapons',
        'bl2.shields',
        'bl2.damageTypes',
        'bl2.manufacturers',
        'bl2.rarities',
        'bl2.characters',
        'bl2.classMods',
        'bl2.skillTree'
    ];

    describe('Midway testing', function () {
        describe('Module: ' + moduleName, function () {
            var module;

            beforeEach(function () {
                testHelper.setup(moduleName);
            });

            it('should be registered', function () {
                expect(module).not.toBeNull();
            });

            testHelper.checkModuleDependencies(expectedDeps);

        });
    });

});
