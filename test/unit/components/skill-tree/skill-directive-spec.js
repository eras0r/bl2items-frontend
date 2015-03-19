define(['angular', 'angular-mocks', 'components/skill-tree/skill-tree-module-inc', 'components/skill-tree/skill.html'], function (angular, mocks) {

    'use strict';

    describe('Directive: Skill', function () {
        var $compile, $rootScope;

        beforeEach(module('skillTreeModule'));
        beforeEach(module('scripts/components/skill-tree/skill.html'));

        beforeEach(inject(
            ['$compile', '$rootScope', function ($c, $r) {
                $compile = $c;
                $rootScope = $r;

                $rootScope.skill = {
                    'name': 'Locked and Loaded',
                    'levels': 5,
                    'image': 'locked-and-loaded.png',
                    'text': 'Reloading your gun gives you +5% Fire Rate per level for a short time.',
                    'points': 0
                };
                $rootScope.characterClass = 'Gunzerker';
                $rootScope.subTree = 'green';
            }]
        ));

        it('should display the correct skill image as background image', function () {
            var element = $compile('<bl2-skill data-skill="skill" data-sub-tree="{{subTree}}" data-characater-class="characterClass" data-on-add="addPoint(skill)" data-on-remove="removePoint(skill)"></bl2-skill>')($rootScope);
            $rootScope.$digest();

            var backgroundImage =  element.find('.skill-image').css('background-image');
            expect(backgroundImage).toMatch('images/dynamic/skills/gunzerker/green/locked-and-loaded.png');
        });

        it('should display the correct points image for level 1 skills', function () {
            $rootScope.skill.levels = 1;
            $rootScope.skill.points = 1;

            var element = $compile('<bl2-skill data-skill="skill" data-sub-tree="{{subTree}}" data-characater-class="characterClass" data-on-add="addPoint(skill)" data-on-remove="removePoint(skill)"></bl2-skill>')($rootScope);
            $rootScope.$digest();

            var img = element.find('img');
            expect(img).not.toBe(null);
            expect(img.attr('src')).toBe('images/dynamic/skills/points/1-1.png');
        });

        it('should display the correct points image for level 5 skills', function () {
            var element = $compile('<bl2-skill data-skill="skill" data-sub-tree="{{subTree}}" data-characater-class="characterClass" data-on-add="addPoint(skill)" data-on-remove="removePoint(skill)"></bl2-skill>')($rootScope);
            $rootScope.$digest();

            var img = element.find('img');
            expect(img).not.toBe(null);
            expect(img.attr('src')).toBe('images/dynamic/skills/points/0-5.png');
        });
    });

});
