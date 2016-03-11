define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponEditCtrl', [
        '$log', 'rarities', 'manufacturers', 'damageTypes', 'WeaponService', 'weapon', WeaponEditCtrl]);

    /** @ngInject */
    function WeaponEditCtrl($log, rarities, manufacturers, damageTypes, WeaponService, weapon) {

        var vm = this;

        vm.changeDamageType = changeDamageType;
        vm.save = save;

        init();

        function init() {
            // assign ui router resolves
            vm.rarities = rarities;
            vm.manufacturers = manufacturers;
            vm.damageTypes = damageTypes;

            // init weapon
            vm.weapon = weapon;
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
