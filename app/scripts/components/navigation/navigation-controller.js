define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('NavCtrl', ['$scope', '$state', 'NavigationTestService', 'SessionService', function ($scope, $state, NavigationTestService, SessionService) {

            $scope.navItems = NavigationTestService.getNavigationItems();

            $scope.getCurrentUser = function () {
                return SessionService.getCurrentUser();
            };

            $scope.isUserLoggedIn = function () {
                return SessionService.isUserLoggedIn();
            };

        }]);

});
