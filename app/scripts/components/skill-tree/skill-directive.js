define(['angular', 'components/skill-tree/module-def'], function (angular, skillTreeModule) {

    'use strict';

    skillTreeModule.directive('bl2Skill', [
        function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/components/skill-tree/skill.html',
                replace: true,
                scope: {
                    skill: '=',
                    characaterClass: '=',
                    subTree: '@',
                    onAdd: '&',
                    onRemove: '&'
                },
                controller: function ($scope) {

                    $scope.getIcon = function () {
                        if (!$scope.characaterClass || !$scope.subTree || !$scope.skill || !$scope.skill.image) {
                            return undefined;
                        }

                        return 'images/dynamic/skills/' + $scope.characaterClass.toLowerCase() + '/' + $scope.subTree + '/' + $scope.skill.image;
                    };

                    $scope.getPointsIcon = function () {
                        if (!$scope.skill) {
                            return undefined;
                        }

                        return 'images/dynamic/skills/points/' + $scope.skill.points + '-' + $scope.skill.levels + '.png';
                    };

                    $scope.isValid = function () {
                        return $scope.getIcon() !== undefined;
                    };

                    $scope.addPoint = function () {
                        // call the outer scope's passed onAdd callback with an argument
                        // see http://www.whatibroke.com/?p=894
                        $scope.onAdd({skill: $scope.skill});
                    };

                    $scope.removePoint = function () {
                        // call the outer scope's passed onRemove callback an argument
                        $scope.onRemove({skill: $scope.skill});
                    };
                },
                link: function ($scope, element, attrs) {

                }

            };
        }]);


});
