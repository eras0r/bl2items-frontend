define(['angular', 'item/item-def'], function (angular, itemModule) {

    'use strict';

    itemModule.directive('displayItem', [
        '$compile', '$http', '$templateCache', '$state',
        function ($compile, $http, $templateCache, $state) {

            var getTemplate = function (contentType) {
                var templateLoader;
                var baseUrl = 'scripts/item/display-item/';
                var templateMap = {
                    weapon: 'weapon.html',
                    shield: 'shield.html',
                    classMod: 'class-mod.html'
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
                controller: function ($scope) {
                    $scope.getAdditionalText = function () {
                        var additionalText = [];
                        if ($scope.item && $scope.item.additionalText) {
                            additionalText = $scope.item.additionalText.split('\n');
                        }

                        // show skills for class mods
                        if ($scope.item.itemtype === 'classMod') {

                            // iterate sub trees
                            angular.forEach($scope.item.skills, function (skill) {
                                // TODO use angular translate with params
                                additionalText.push('+' + skill.points + ' ' + skill.name + ' Skill');
                            });

                        }

                        return additionalText;
                    };

                    $scope.edit = function (item) {
                        switch (item.itemtype) {
                            case 'weapon':
                                $state.go('bl2.weapons.edit', {id: item.id});
                                break;
                            // TODO add cases for other item types
                        }
                    };

                    $scope.hasSepcialDamageType = function () {
                        return $scope.getDamageType().id !== '1';
                    };

                    $scope.getDamageType = function () {
                        if ($scope.item && $scope.item.damageType) {
                            return $scope.item.damageType;
                        }
                    };
                }
            };
        }]);

});
