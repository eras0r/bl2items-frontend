define([
    'angular',
    'components/color-picker/color-picker-module-def'
], function (angular, colorPickerModule) {

    'use strict';

    colorPickerModule.directive('colorPicker', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/components/color-picker/color-picker.html',
                replace: true,
                scope: {
                    name: '@',
                    color: '=',
                    error: '='
                }
            };
        }]);

});
