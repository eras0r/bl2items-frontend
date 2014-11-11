define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule.directive('navigationItem', [
        function () {

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
                }
            };
        }]);

});
