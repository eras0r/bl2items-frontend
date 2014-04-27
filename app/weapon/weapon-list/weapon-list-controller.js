'use strict';

angular.module('weaponModule').controller('WeaponListCtrl', [
    '$scope', '$q', 'WeaponService',
    function ($scope, $q, WeaponService) {

        // load weapons
        $scope.weapons = WeaponService.query();


    }]);
