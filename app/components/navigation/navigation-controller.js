'use strict';

angular.module('navigationModule')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.activeView = 'home';

        $scope.showHome = function () {
            $scope.activeView = 'home';

            $location.path('/home');
        };

        $scope.showBrands = function () {
            $scope.activeView = 'brands';
            $location.path('brands');
        };

        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
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
