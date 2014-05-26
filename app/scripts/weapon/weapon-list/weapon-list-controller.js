define(['angular', 'weapon/weapon-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('WeaponListCtrl', [
        '$scope', '$q', 'WeaponService',
        function ($scope, $q, WeaponService) {

            // load weapons
            $scope.items = WeaponService.query();

        }]);

});
