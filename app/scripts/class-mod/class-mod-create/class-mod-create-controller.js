define([
    'angular',
    'class-mod/class-mod-module-def'
], function (angular, classModModule) {

    'use strict';

    classModModule.controller('ClassModCreateCtrl', [
        '$log', 'rarities', 'manufacturers', 'characters', 'ClassModService', 'CharacterService', ClassModCreateCtrl]);

    /** @ngInject */
    function ClassModCreateCtrl($log, rarities, manufacturers, characters, ClassModService, CharacterService) {

        var vm = this;

        vm.loadSkillTree = loadSkillTree;
        vm.addPoint = addPoint;
        vm.removePoint = removePoint;
        vm.save = save;

        init();

        // constructor
        function init() {

            // assign ui router resolves
            vm.rarities = rarities;
            vm.manufacturers = manufacturers;
            vm.characters = characters;

            // init default classMod
            vm.classMod = {
                itemtype: 'classMod',
                level: 50,
                rarity: vm.rarities[0],
                manufacturer: vm.manufacturers[0],
                characterClass: vm.characters[0],
                damage: null,
                accuracy: null,
                fireRate: null,
                reloadSpeed: null,
                magazineSize: null,
                uniqueText: null,
                elementalText: null,
                additionalText: null,
                skills: {}
            };

            vm.loadSkillTree();
        }

        function loadSkillTree() {
            CharacterService.getSkills(vm.classMod.characterClass).then(function (skills) {
                vm.skills = skills;

                // reset selected skills
                vm.classMod.skills = {};

                // init point property for each skill within the skill tree

                // iterate sub trees
                angular.forEach(vm.skills, function (subTree) {
                    // iterate skillTiers
                    angular.forEach(subTree.skillTiers, function (tier) {
                        if (tier.leftSkill) {
                            tier.leftSkill.points = 0;
                        }
                        if (tier.middleSkill) {
                            tier.middleSkill.points = 0;
                        }
                        if (tier.rightSkill) {
                            tier.rightSkill.points = 0;
                        }
                    });
                });
            });
        }

        function addPoint(skill) {
            // first skill point added?
            if (!vm.classMod.skills[skill.name]) {
                // add new selected skill entry
                vm.classMod.skills[skill.name] = skill;
            }

            // spend one point if the skills level has not been reached
            if (skill.points < skill.levels) {
                skill.points++;
            }
        }

        function removePoint(skill) {
            // remove one spent point
            if (skill.points > 0) {
                skill.points--;
            }

            // last skill point removed?
            if (skill.points === 0) {
                delete vm.classMod.skills[skill.name];
            }
        }

        function save() {
            ClassModService.create(vm.classMod)
                .then(function () {
                    ClassModService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating class mod');
                    }
                });
        }

    }

});
