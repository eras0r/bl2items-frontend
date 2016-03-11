define([
    'angular',
    'weapon/weapon-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponListCtrl', [
        'WeaponService', WeaponListCtrl]);

    /** @ngInject */
    function WeaponListCtrl(WeaponService) {

        var vm = this;

        init();

        function init() {
            WeaponService.list().then(function (weapons) {
                vm.items = weapons;
            });
        }

    }

});
