define(['angular', 'class-mod/module-def'], function (angular, classModModule) {

    'use strict';

    classModModule.controller('ClassModCreateCtrl', [
        '$scope', '$log', 'rarities', 'manufacturers', 'characters', 'ClassModService', 'CharacterService',
        function ($scope, $log, rarities, manufacturers, characters, ClassModService, CharacterService) {

            $scope.loadSkillTree = function () {
                CharacterService.getSkills($scope.classMod.characterClass).then(function (skills) {
                    $scope.skills = skills;

                    // init point property for each skill within the skill tree

                    // iterate sub trees
                    angular.forEach($scope.skills, function (subTree) {
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
            };

            $scope.addPoint = function (skill) {
                // first skill point added?
                if (!$scope.classMod.skills[skill.name]) {
                    $scope.classMod.skills[skill.name] = skill;
                }

                if (skill.points < skill.levels) {
                    skill.points++;
                }
            };

            $scope.removePoint = function (skill) {
                if (skill.points > 0) {
                    skill.points--;
                }

                // last skill point removed?
                if (skill.points === 0) {
                    delete $scope.classMod.skills[skill.name];
                }
            };

            $scope.save = function () {
                ClassModService.create($scope.classMod)
                    .then(function () {
                        ClassModService.showList();
                    }, function (response) {
                        if (response.status === 422) {
                            $scope.errors = response.data;
                        }
                        else {
                            // TODO show error message
                            $log.error('error creating class mod');
                        }
                    });
            };

            // constructor
            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.characters = characters;

            // init default classMod
            $scope.classMod = {
                itemtype: 'classMod',
                level: 50,
                rarity: $scope.rarities[0],
                manufacturer: $scope.manufacturers[0],
                characterClass: $scope.characters[0],
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

            $scope.loadSkillTree();

        }]);

});
