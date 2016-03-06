define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponEditCtrl', [
        '$log', 'rarities', 'manufacturers', 'damageTypes', 'weaponTypes', 'WeaponService', 'weapon', WeaponEditCtrl]);

    /** @ngInject */
    function WeaponEditCtrl($log, rarities, manufacturers, damageTypes, weaponTypes, WeaponService, weapon) {

        var vm = this;

        // assign ui router resolves
        vm.rarities = rarities;
        vm.manufacturers = manufacturers;
        vm.damageTypes = damageTypes;
        vm.weaponTypes = weaponTypes;

        // init weapon
        vm.weapon = weapon;

        vm.changeDamageType = changeDamageType;
        vm.changeRarity = changeRarity;
        vm.changeWeaponType = changeWeaponType;
        vm.changeManufacturer = changeManufacturer;
        vm.save = save;

        function changeDamageType() {
            vm.weapon.damageTypeId = vm.weapon.damageType.id;

            vm.weapon.elementalText = vm.weapon.damageType.additionalText;

            // reset no more relevant inputs
            if (!vm.weapon.damageType.damageLabel) {
                vm.weapon.elemDamage = null;
            }
            if (!vm.weapon.damageType.chanceLabel) {
                vm.weapon.elemChance = null;
            }
        }

        function changeRarity() {
            vm.weapon.rarityId = vm.weapon.rarity.id;
        }

        function changeWeaponType() {
            vm.weapon.weaponTypeId = vm.weapon.weaponType.id;
        }

        function changeManufacturer() {
            vm.weapon.manufacturerId = vm.weapon.manufacturer.id;
        }

        function save() {
            WeaponService.update(vm.weapon)
                .then(function () {
                    WeaponService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error saving weapon');
                    }
                });
        }

    }

});
