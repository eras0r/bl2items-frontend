define([
    'angular',
    'manufacturer/manufacturer-module-def'
], function (angular, manufacturerModule) {

    'use strict';

    manufacturerModule.controller('ManufacturerCreateCtrl', [
        '$log', 'ManufacturerService', ManufacturerCreateCtrl]);

    /** @ngInject */
    function ManufacturerCreateCtrl($log, ManufacturerService) {

        var vm = this;

        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            vm.manufacturer = {};
        }

        function save() {
            vm.errors = null;

            ManufacturerService.create(vm.manufacturer)
                .then(function () {
                    ManufacturerService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error creating manufacturer');
                    }
                });
        }

        function cancel() {
            ManufacturerService.showList();
        }

    }

});
