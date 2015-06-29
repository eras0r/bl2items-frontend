define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule.controller('NavigationCtrl', ['NavigationService', 'SessionService', NavigationCtrl]);

    /** @ngInject */
    function NavigationCtrl(NavigationService, SessionService) {

        var vm = this;

        vm.navItems = NavigationService.getNavigationItems();
        vm.getCurrentUser = getCurrentUser;
        vm.isUserLoggedIn = isUserLoggedIn;

        function getCurrentUser() {
            return SessionService.getCurrentUser();
        }

        function isUserLoggedIn() {
            return SessionService.isUserLoggedIn();
        }
    }

});
