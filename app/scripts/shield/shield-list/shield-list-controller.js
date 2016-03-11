define([
    'angular',
    'shield/shield-module-def'
], function (angular, shieldModule) {

    'use strict';

    shieldModule.controller('ShieldListCtrl', [
        'ShieldService', ShieldListCtrl]);

    /** @ngInject */
    function ShieldListCtrl(ShieldService) {

        var vm = this;

        init();

        function init() {
            ShieldService.list().then(function (shields) {
                vm.items = shields;
            });
        }
    }

});
