define(['angular', 'jquery-minicolors', 'components/highlight-text/highlight-text-def'], function (angular, minicolors, highlightTextModule) {

    'use strict';

    // TODO move to another location (does not belong to the highlight text module!)

    highlightTextModule.directive('color', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/highlight-text/color-picker.html',
            scope: {
                ngModel: '=',
                error: '='
            },
            link: function ($scope, elem) {
                elem.find('input').minicolors({
                    defaultValue: $scope.ngModel,
                    theme: 'bootstrap'
                });

                // update the color square which display the current color within the input field
                $scope.$watch('ngModel', function (color) {
                    elem.find('.minicolors-swatch-color').css({"color": color, "background-color": color});
                });
            }
        }
    });

});
