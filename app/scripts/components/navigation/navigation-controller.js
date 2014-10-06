define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
            $scope.showItems = function () {
                $location.path('/items');
            };

            $scope.showWeapons = function () {
                $location.path('/weapons');
            };

            $scope.showShields = function () {
                $location.path('/shields');
            };

            $scope.showBrands = function () {
                $location.path('brands');
            };

            $scope.createWeapon = function () {
                $location.path('/weapons/create');
            };

            $scope.showRarities = function () {
                $location.path('/rarities');
            };

            $scope.showManufacturers = function () {
                $location.path('/manufacturers');
            };

            $scope.showDamageTypes = function () {
                $location.path('/damageTypes');
            };

        }]);

});
