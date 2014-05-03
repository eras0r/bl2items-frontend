
define(['angular', 'angular-mocks', 'rarity/index'], function (angular, mocks, jasmineMatchers, rarityModule) {

    'use strict';

    describe('Controller: RarityListCtrl', function () {
        var RarityListCtrl;
        var $scope;

        // load the module
        beforeEach(module('rarityModule'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();

            RarityListCtrl = $controller('RarityListCtrl', {
                $scope: $scope
            });

            spyOn($scope, 'loadRarities');
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            // TODO some useful test
            console.log('TODO some useful test');
        });

    });

});
