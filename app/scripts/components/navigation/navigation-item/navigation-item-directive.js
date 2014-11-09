define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule.directive('navigationItem', [
        function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/components/navigation/navigation-item/navigation-item.html',
                replace: true,
                scope: {
                    link: '@',
                    label: '@'
                }
            };
        }]);

});
