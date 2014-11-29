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
                    subTree: '@'
                },
                controller: function ($scope) {

                    $scope.getIcon = function () {
                        if (!$scope.characaterClass || !$scope.subTree || !$scope.skill || !$scope.skill.image) {
                            return undefined;
                        }

                        return 'images/skills/' + $scope.characaterClass.toLowerCase() + '/' + $scope.subTree + '/' + $scope.skill.image;
                    };

                    $scope.isValid = function () {
                        return $scope.getIcon() !== undefined;
                    };
                }
            };
        }]);


});
