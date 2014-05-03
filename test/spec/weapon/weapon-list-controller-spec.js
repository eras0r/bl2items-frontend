define(['angular', 'angular-mocks', 'weapon/index'], function (angular, mocks, weaponModule) {

    'use strict';

    describe('Controller: WeaponListCtrl', function () {
        var WeaponListCtrl;
        var $scope;

// load the module
        beforeEach(module('weaponModule'));


        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            WeaponListCtrl = $controller('WeaponListCtrl', {
                $scope: $scope
            });
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            // TODO some useful test
            console.log('TODO some useful test');
        });
    });

});
