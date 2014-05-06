define(['angular', 'shield/shield-def'], function (angular, shieldModule) {

    'use strict';

    shieldModule.controller('ShieldListCtrl', [
        '$scope', '$q', 'ShieldService',
        function ($scope, $q, ShieldService) {

            // load shields
            $scope.shields = ShieldService.query();


        }]);

});
