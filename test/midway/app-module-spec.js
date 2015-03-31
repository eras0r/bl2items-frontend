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
        'securityModule',
        'navigationModule',
        'highlightTextModule',
        'colorPickerModule',
        'skillTreeModule',
        /* business specific modules*/
        'fileModule',
        'userModule',
        'itemModule',
        'weaponModule',
        'shieldModule',
        'damageTypeModule',
        'manufacturerModule',
        'rarityModule',
        'characterModule',
        'classModModule'
    ];

    describe('Midway testing', function () {
        describe('Module: ' + moduleName, function () {
            var module;

            beforeEach(function () {
                testHelper.setup(moduleName);
            });

            it('should be registered', function () {
                expect(module).not.toBe(null);
            });

            testHelper.checkModuleDependencies(expectedDeps);

        });
    });

});
