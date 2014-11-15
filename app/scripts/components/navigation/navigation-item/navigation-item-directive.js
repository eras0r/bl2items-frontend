define(['angular', 'components/navigation/navigation-def', 'components/security/security-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule.directive('navigationItem', ['SessionService',
        function (SessionService) {

            return {
                restrict: 'E',
                templateUrl: 'scripts/components/navigation/navigation-item/navigation-item.html',
                replace: true,
                scope: {
                    navItem: '='
                },
                controller: function ($scope) {

                    $scope.isDropdown = function () {
                        return $scope.navItem && $scope.navItem.items !== undefined;
                    };

                    $scope.isActive = function () {
                        var stateToCheck = $scope.isDropdown() ? $scope.navItem.group : $scope.navItem.link;
                        return $scope.$parent.$state.includes(stateToCheck);
                    };

                    $scope.hasRole = function (role) {
                        return SessionService.hasRole(role);
                    };
                }
            };
        }]);

});
