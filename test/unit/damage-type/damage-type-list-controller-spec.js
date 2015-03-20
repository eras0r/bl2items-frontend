define([
    'angular',
    'angular-mocks',
    'damage-type/damage-type-module-inc'
], function (angular, mocks, damageTypeModule) {

    'use strict';

    describe('Controller: DamageTypeListCtrl', function () {
        var DamageTypeListCtrl;
        var $scope;

        // load the module
        beforeEach(module('damageTypeModule'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            DamageTypeListCtrl = $controller('DamageTypeListCtrl', {
                $scope: $scope
            });
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            // TODO some useful test
            console.log('TODO some useful test');
        });
    });

});
