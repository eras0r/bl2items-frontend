define([
    'angular',
    'damage-type/damage-type-module-def'
], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('WeaponTypeEditCtrl', [
        '$state', '$log', 'Restangular', 'WeaponTypeService', WeaponTypeEditCtrl]);

    /** @ngInject */
    function WeaponTypeEditCtrl($state, $log, Restangular, WeaponTypeService) {

        var vm = this;

        vm.isNotDirty = isNotDirty;
        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            WeaponTypeService.read($state.params.id).then(function (weaponType) {
                vm.originalDamageType = Restangular.copy(weaponType);
                vm.weaponType = weaponType;
            });
        }

        function isNotDirty() {
            return angular.equals(vm.originalDamageType, vm.weaponType);
        }

        function save() {
            WeaponTypeService.update(vm.weaponType)
                .then(function () {
                    WeaponTypeService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error updating damage type');
                    }
                });
        }

        function cancel() {
            WeaponTypeService.showList();
        }

    }

});