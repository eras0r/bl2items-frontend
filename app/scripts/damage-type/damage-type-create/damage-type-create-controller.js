define([
    'angular',
    'damage-type/damage-type-module-def'
], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeCreateCtrl', [
        '$log', 'DamageTypeService', DamageTypeCreateCtrl]);

    /** @ngInject */
    function DamageTypeCreateCtrl($log, DamageTypeService) {

        var vm = this;

        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            vm.damageType = {
                'color': '#ffffff'
            };
        }

        function save() {
            vm.errors = null;

            DamageTypeService.create(vm.damageType)
                .then(function () {
                    DamageTypeService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating damage type');
                    }
                });
        }

        function cancel() {
            DamageTypeService.showList();
        }

    }

});
