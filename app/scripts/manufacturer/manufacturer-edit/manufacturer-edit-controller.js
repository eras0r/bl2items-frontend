define([
    'angular',
    'manufacturer/manufacturer-module-def'
], function (angular, manufacturerModule) {

    'use strict';

    manufacturerModule.controller('ManufacturerEditCtrl', [
        '$state', '$log', 'Restangular', 'ManufacturerService', ManufacturerEditCtrl]);

    /** @ngInject */
    function ManufacturerEditCtrl($state, $log, Restangular, ManufacturerService) {

        var vm = this;

        vm.isNotDirty = isNotDirty;
        vm.save = save;
        vm.cancel = cancel;

        init();

        function init() {
            ManufacturerService.read($state.params.id).then(function (manufacturer) {
                vm.originalManufacturer = manufacturer;
                vm.manufacturer = Restangular.copy(vm.originalManufacturer);
            });
        }

        function isNotDirty() {
            return angular.equals(vm.originalManufacturer, vm.manufacturer);
        }

        function save() {
            ManufacturerService.update(vm.manufacturer)
                .then(function () {
                    ManufacturerService.showList();
                }, function (response) {
                    if (response.status === 422) {
                        vm.errors = response.data;
                    }
                    else {
                        // TODO show error message
                        $log.error('error updating manufacturer');
                    }
                });
        }

        function cancel() {
            ManufacturerService.showList();
        }

    }

});
