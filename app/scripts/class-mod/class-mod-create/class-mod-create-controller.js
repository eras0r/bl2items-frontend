define(['angular', 'class-mod/module-def'], function (angular, classModModule) {

    'use strict';

    classModModule.controller('ClassModCreateCtrl', [
        '$scope', '$log', 'rarities', 'manufacturers', 'characterClasses', 'ClassModService', 'CharacterClassService',
        function ($scope, $log, rarities, manufacturers, characterClasses, ClassModService, CharacterClassService) {

            // assign ui router resolves
            $scope.rarities = rarities;
            $scope.manufacturers = manufacturers;
            $scope.characterClasses = characterClasses;

            // init default classMod
            $scope.classMod = {
                level: 50,
                rarity: $scope.rarities[0],
                manufacturer: $scope.manufacturers[0],
                characterClass: $scope.characterClasses[2], // TODO use index 0
                damage: null,
                accuracy: null,
                fireRate: null,
                reloadSpeed: null,
                magazineSize: null,
                uniqueText: null,
                elementalText: null,
                additionalText: null
            };

            $scope.skills = CharacterClassService.getSkills($scope.classMod.characterClass);

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

        }]);

});
