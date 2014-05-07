define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
            $scope.activeView = 'items';

            $scope.showItems = function () {
                $scope.activeView = 'items';
                $location.path('/items');
            };

            $scope.showWeapons = function () {
                $scope.activeView = 'weapons';
                $location.path('/weapons');
            };

            $scope.showShields = function () {
                $scope.activeView = 'shields';
                $location.path('/shields');
            };

            $scope.showBrands = function () {
                $scope.activeView = 'brands';
                $location.path('brands');
            };

            $scope.getClass = function (path) {
                if ($scope.activeView == path) {
                    return "active";
                } else {
                    return "";
                }
            };

            $scope.createWeapon = function () {
                $scope.activeView = 'createNewItem';
                $location.path('/weapons/create');
            };

            $scope.showRarities = function () {
                $scope.activeView = 'admin';
                $location.path('/rarities');
            };

            $scope.showManufacturers = function () {
                $scope.activeView = 'admin';
                $location.path('/manufacturers');
            };

            $scope.showDamageTypes = function () {
                $scope.activeView = 'admin';
                $location.path('/damageTypes');
            };

        }]);

});
