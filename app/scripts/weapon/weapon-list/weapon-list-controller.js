define(['angular', 'weapon/weapon-module-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponListCtrl', [
        '$scope', 'WeaponService',
        function ($scope, WeaponService) {

            WeaponService.list().then(function (weapons) {
                $scope.items = weapons;
            });

        }]);

});
