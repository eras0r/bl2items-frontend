define([
    'angular',
    'damage-type/damage-type-module-def'
], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeEditCtrl', [
        '$state', '$log', 'Restangular', 'DamageTypeService', DamageTypeEditCtrl]);

    /** @ngInject */
    function DamageTypeEditCtrl($state, $log, Restangular, DamageTypeService) {

        var vm = this;

        vm.isNotDirty = isNotDirty;
        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {

            DamageTypeService.read($state.params.id).then(function (damageType) {
                vm.originalDamageType = damageType;
                vm.damageType = Restangular.copy(vm.originalDamageType);
            });

        }

        function isNotDirty() {
            return angular.equals(vm.originalDamageType, vm.damageType);
        }

        function save() {
            DamageTypeService.update(vm.damageType)
                .then(function () {
                    DamageTypeService.showList();
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
            DamageTypeService.showList();
        }

    }

});