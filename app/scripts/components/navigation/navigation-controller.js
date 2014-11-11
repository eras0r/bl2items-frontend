define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('NavCtrl', ['$scope', '$state', 'NavigationTestService', function ($scope, $state, NavigationTestService) {

            $scope.navItems = NavigationTestService.getNavigationItems();

        }]);

});
