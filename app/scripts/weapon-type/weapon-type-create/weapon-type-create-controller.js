define([
    'angular',
    'weapon-type/weapon-type-module-def'
], function (angular, weaponTypeModule) {

    'use strict';

    weaponTypeModule.controller('WeaponTypeCreateCtrl', [
        '$state', '$log', 'WeaponTypeService', WeaponTypeCreateCtrl]);

    function WeaponTypeCreateCtrl($state, $log, WeaponTypeService) {
        var vm = this;

        vm.weaponType = initWeaponType();
        vm.save = save;
        vm.cancel = cancel;

        function initWeaponType() {
            return {
                'color': '#ffffff'
            };
        }

        function save() {
            vm.errors = null;

            WeaponTypeService.create(vm.weaponType)
                .then(function () {
                    WeaponTypeService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        //vm.errors = response.data;
                        vm.errors = response.data.error.details.messages;

                        $log.debug('response', response.data.error.details.messages);
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating weapon type');
                        $log.debug('response', response);
                    }
                });
        }

        function cancel() {
            WeaponTypeService.showList();
        }

    }

});
