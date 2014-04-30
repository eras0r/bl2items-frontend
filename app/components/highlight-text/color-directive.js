'use strict';

angular.module('highlightTextModule')
    .directive('color', function () {
        return {
            restrict: 'A',
            scope: {
                color: '@'
            },
            link: function (scope, elem) {
                scope.$watch('color', function (color) {
                    elem.css({"color": color});
                }, true);
            }
        }
    });
