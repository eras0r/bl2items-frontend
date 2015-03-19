define([
    'angular',
    'character/character-module-def'
], function (angular, characterModule) {

    'use strict';

    characterModule.factory('CharacterService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'characters';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (characterClass) {
                return Restangular.all(resourceUrl).post(characterClass);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (characterClass) {
                return characterClass.put();
            },

            remove: function (characterClass) {
                return characterClass.remove();
            },

            /**
             * Gets the skill tree for the given character
             * @param character the character to get the skills for
             * @returns {*} skill tree (array of skills)
             */
            getSkills: function (character) {
                return character.getList('skills');
            }
        };

    }]);

})
;