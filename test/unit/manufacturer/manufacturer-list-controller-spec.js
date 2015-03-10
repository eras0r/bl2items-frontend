define(['angular', 'angular-mocks', 'manufacturer/index'], function (angular, mocks, manufacturerModule) {

    'use strict';

    describe('Controller: ManufacturerListCtrl', function () {
        var ManufacturerListCtrl;
        var $scope;

        // load the module
        beforeEach(module('manufacturerModule'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            ManufacturerListCtrl = $controller('ManufacturerListCtrl', {
                $scope: $scope
            });
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            // TODO some useful test
            console.log('TODO some useful test');
        });

    });

});
