define(['angular', 'angular-mocks', 'components/navigation/index'], function (angular, mocks, navigationModule) {

    'use strict';

    describe('Controller: NavCtrl', function () {
        var NavCtrl;
        var $scope;

        // load the module
        beforeEach(module('navigationModule'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            NavCtrl = $controller('NavCtrl', {
                $scope: $scope
            });
        }));

        it('should have "home" set as activeView', function () {
            expect($scope.activeView).toBe('home');
        });
    });

});
