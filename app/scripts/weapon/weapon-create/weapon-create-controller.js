define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponCreateCtrl', [
        '$log', 'rarities', 'manufacturers', 'damageTypes', 'WeaponService', WeaponCreateCtrl]);

    /** @ngInject */
    function WeaponCreateCtrl($log, rarities, manufacturers, damageTypes, WeaponService) {

        var vm = this;

        vm.changeDamageType = changeDamageType;
        vm.save = save;

        init();

        function init() {
            // assign ui router resolves
            vm.rarities = rarities;
            vm.manufacturers = manufacturers;
            vm.damageTypes = damageTypes;

            // init default weapon
            vm.weapon = {
                itemType: 'weapon',
                level: 50,
                rarity: vm.rarities[0],
                manufacturer: vm.manufacturers[0],
                damage: null,
                accuracy: null,
                fireRate: null,
                reloadSpeed: null,
                magazineSize: null,
                damageType: vm.damageTypes[0],
                uniqueText: null,
                elementalText: null,
                additionalText: null
            };
        }

        function changeDamageType() {
            vm.weapon.elementalText = vm.weapon.damageType.additionalText;

            // reset no more relevant inputs
            if (vm.weapon.damageType.damageLabel === null) {
                vm.weapon.elemDamage = null;
            }
            if (vm.weapon.damageType.chanceLabel === null) {
                vm.weapon.elemChance = null;
            }
        }

        function save() {
            WeaponService.create(vm.weapon)
                .then(function () {
                    WeaponService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating weapon');
                    }
                });
        }

    }

});
