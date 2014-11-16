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
                var itemType;
                if (attrs.itemType) {
                    itemType = attrs.itemType;
                }
                else {
                    itemType = scope.item.itemtype;
                }

                var loader = getTemplate(itemType);

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
                link: linker,
                controller: function($scope) {
                    $scope.getAdditionalText = function() {
                        console.log('getAdditionalText()');
                        return $scope.item.additionalText.split('\n');
                    };
                }
            };
        }]);

});
