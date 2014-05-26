define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.directive('displayItem', [
        '$compile', '$http', '$templateCache',
        function ($compile, $http, $templateCache) {

            var getTemplate = function (contentType) {
                var templateLoader;
                var baseUrl = 'scripts/item/display-item/';
                var templateMap = {
                    weapon: 'weapon.html',
                    shield: 'shield.html'
                };

                var templateUrl = baseUrl + templateMap[contentType];
                templateLoader = $http.get(templateUrl, {cache: $templateCache});

                return templateLoader;
            };

            var linker = function (scope, element, attrs) {

                var loader = getTemplate(scope.item.itemType);

                var promise = loader.success(function (html) {
                    element.html(html);
                }).then(function (response) {
                    element.replaceWith($compile(element.html())(scope));
                });
            };

            return {
                restrict: 'E',
                scope: {
                    item: '='
                },
                link: linker
            };
        }]);

});
