define([
    'angular',
    'angular-mocks',
    'weapon/weapon-module-inc'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'weaponModule';
    var controllerName = 'WeaponListCtrl';
    var controller;
    var $scope;

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Controller: ' + controllerName, function () {
                // load the module
                beforeEach(module(moduleName));

                // Initialize the controller and a mock scope
                beforeEach(inject(function ($controller, $rootScope) {
                    $scope = $rootScope.$new();
                    controller = $controller(controllerName, {
                        $scope: $scope
                    });
                }));

                it('should be registered', function () {
                    expect(controller).not.toBeNull();
                });

                // TODO add unit tests
            });
        });
    });

});
