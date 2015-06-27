define([
    'angular',
    'angular-mocks',
    'manufacturer/manufacturer-module-inc'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'bl2.manufacturers';
    var controllerName = 'ManufacturerListCtrl';
    var controller;
    var $scope;

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Controller: ' + controllerName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName);

                    // initialize the controller and a mock scope
                    inject(function ($controller, $rootScope) {
                        $scope = $rootScope.$new();
                        controller = $controller(controllerName, {
                            $scope: $scope
                        });
                    });
                });

                it('should be registered', function () {
                    expect(controller).not.toBeUndefined();
                });

                // TODO add unit tests
            });
        });
    });

});
