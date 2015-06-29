define([
    'angular',
    'components/skill-tree/skill-tree-module-def'
], function (angular, skillTreeModule) {

    'use strict';

    skillTreeModule.directive('bl2Skill', SkillDirective);

    /** @ngInject */
    function SkillDirective() {

        var skillDirective = {
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
            controller: SkillDirectiveController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return skillDirective;
    }

    /** @ngInject */
    function SkillDirectiveController() {

        var vm = this;

        vm.getIcon = getIcon;
        vm.getPointsIcon = getPointsIcon;
        vm.addPoint = addPoint;
        vm.removePoint = removePoint;

        function getIcon() {
            if (!vm.characaterClass || !vm.subTree || !vm.skill || !vm.skill.image) {
                return undefined;
            }

            return 'images/dynamic/skills/' + vm.characaterClass.toLowerCase() + '/' + vm.subTree + '/' + vm.skill.image;
        }

        function getPointsIcon() {
            if (!vm.skill) {
                return undefined;
            }

            return 'images/dynamic/skills/points/' + vm.skill.points + '-' + vm.skill.levels + '.png';
        }

        function addPoint() {
            // call the outer scope's passed onAdd callback with an argument
            // see http://www.whatibroke.com/?p=894
            vm.onAdd({skill: vm.skill});
        }

        function removePoint() {
            // call the outer scope's passed onRemove callback an argument
            vm.onRemove({skill: vm.skill});
        }
    }

});
