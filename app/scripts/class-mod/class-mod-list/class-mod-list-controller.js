define([
    'angular',
    'class-mod/class-mod-module-def'
], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('ClassModListCtrl', [
        'ClassModService', ClassModListCtrl]);

    /** @ngInject */
    function ClassModListCtrl(ClassModService) {

        var vm = this;

        ClassModService.list().then(function (classMods) {
            vm.items = classMods;
        });

    }

});
