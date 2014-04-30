'use strict';

angular.module('highlightTextModule')
    .directive('color', function () {
        return {
            restrict: 'A',
            scope: {
                color: '@'
            },
            link: function (scope, elem, attrs) {
                elem.css({"color": scope.color});
            }
        }
    });
