define(['angular', 'class-mod/class-mod-module-def'], function (angular, weaponModule) {

    'use strict';

    weaponModule.controller('ClassModListCtrl', [
        '$scope', 'ClassModService',
        function ($scope, ClassModService) {

            ClassModService.list().then(function (classMods) {
                $scope.items = classMods;
            });

        }]);

});
