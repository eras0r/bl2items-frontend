define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('NavCtrl', ['$scope', 'NavigationService', 'SessionService', function ($scope, NavigationService, SessionService) {

            $scope.navItems = NavigationService.getNavigationItems();

            $scope.getCurrentUser = function () {
                return SessionService.getCurrentUser();
            };

            $scope.isUserLoggedIn = function () {
                return SessionService.isUserLoggedIn();
            };

        }]);

});
