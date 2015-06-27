define([
    'angular',
    'components/navigation/navigation-module-def',
    'components/security/security-module-def'
], function (angular, navigationModule) {

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
                controller: [
                    '$scope',
                    function ($scope) {

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
                ]
            };
        }]);

});
