define([
    'angular',
    'weapon-type/weapon-type-module-def'
], function (angular, weaponTypeModule) {

    'use strict';

    weaponTypeModule.controller('WeaponTypeListCtrl', [
        '$log', '$filter', 'WeaponTypeService', WeaponTypeListCtrl]);

    /** @ngInject */
    function WeaponTypeListCtrl($log, $filter, WeaponTypeService) {
        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            WeaponTypeService.list().then(function (weaponTypes) {
                vm.weaponTypes = weaponTypes;
            });
        }

        function remove(weaponType) {
            WeaponTypeService.remove(weaponType)
                .then(function () {
                    // filter out the deleted object
                    vm.weaponTypes = $filter('filter')(vm.weaponTypes, {id: '!' + weaponType.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting weapon type');
                });
        }

    }

});