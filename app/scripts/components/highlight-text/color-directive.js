define(['angular', 'components/highlight-text/highlight-text-def'], function (angular, highlightTextModule) {

    'use strict';

    highlightTextModule.directive('color', function () {
            return {
                restrict: 'A',
                scope: {
                    color: '@'
                },
                link: function ($scope, elem) {
                    elem.css({"color": $scope.color});
                    $scope.$watch('color', function (color) {
                        elem.css({"color": color});
                    }, true);
                }
            }
        });

});
