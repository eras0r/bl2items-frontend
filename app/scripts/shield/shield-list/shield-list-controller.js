define(['angular', 'shield/shield-module-def'], function (angular, shieldModule) {

    'use strict';

    shieldModule.controller('ShieldListCtrl', [
        '$scope', 'ShieldService',
        function ($scope, ShieldService) {

            ShieldService.list().then(function (shields) {
                $scope.items = shields;
            });

        }]);

});
