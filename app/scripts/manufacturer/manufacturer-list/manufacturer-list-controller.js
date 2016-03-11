define([
    'angular',
    'manufacturer/manufacturer-module-def'
], function (angular, manufacturerModule) {

    'use strict';

    manufacturerModule.controller('ManufacturerListCtrl', [
        '$log', '$filter', 'ManufacturerService', ManufacturerListCtrl]);

    function ManufacturerListCtrl($log, $filter, ManufacturerService) {

        var vm = this;

        vm.remove = remove;

        init();

        function init() {
            ManufacturerService.list().then(function (manufacturers) {
                vm.manufacturers = manufacturers;
            });
        }

        function remove(manufacturer) {
            ManufacturerService.remove(manufacturer)
                .then(function () {
                    // filter out the deleted object
                    vm.manufacturers = $filter('filter')(vm.manufacturers, {id: '!' + manufacturer.id});
                }, function (response) {
                    // TODO show error message
                    $log.error('error deleting manufacturer');
                });
        }

    }

});
