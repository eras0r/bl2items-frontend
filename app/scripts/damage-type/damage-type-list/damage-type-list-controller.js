define([
    'angular',
    'damage-type/damage-type-module-def'
], function (angular, damageTypeModule) {

    'use strict';

    damageTypeModule.controller('DamageTypeListCtrl', [
        '$log', '$filter', 'DamageTypeService', DamageTypeListCtrl]);

    /** @ngInject */
    function DamageTypeListCtrl($log, $filter, DamageTypeService) {

        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            DamageTypeService.list().then(function (damageTypes) {
                vm.damageTypes = damageTypes;
            });
        }

        function remove(damageType) {
            DamageTypeService.remove(damageType)
                .then(function () {
                    // filter out the deleted object
                    vm.damageTypes = $filter('filter')(vm.damageTypes, {id: '!' + damageType.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting damage type');
                });
        }

    }

});