define(['angular', 'components/color-picker/color-picker-module-def'], function (angular, colorPickerModule) {

    'use strict';

    colorPickerModule.directive('colorPicker', [
        '$compile', '$http', '$templateCache',
        function ($compile, $http, $templateCache) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/components/color-picker/color-picker.html',
                replace: true,
                scope: {
                    name: '@',
                    color: '=',
                    error: '='
                }
                //controller: function ($scope) {
                //
                //    $scope.isDropdown = function () {
                //        return $scope.navItem && $scope.navItem.items !== undefined;
                //    };
                //
                //    $scope.isActive = function () {
                //        var stateToCheck = $scope.isDropdown() ? $scope.navItem.group : $scope.navItem.link;
                //        return $scope.$parent.$state.includes(stateToCheck);
                //    };
                //
                //    $scope.hasRole = function (role) {
                //        return SessionService.hasRole(role);
                //    };
                //}
            };
        }]);


});
