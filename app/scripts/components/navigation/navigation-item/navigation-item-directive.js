define([
    'angular',
    'components/navigation/navigation-module-def',
    'components/security/security-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule.directive('navigationItem', NavigationItemDirective);

    /** @ngInject */
    function NavigationItemDirective() {

        var navigationItemDirective = {
            restrict: 'E',
            templateUrl: 'scripts/components/navigation/navigation-item/navigation-item.html',
            replace: true,
            scope: {
                navItem: '='
            },
            controller: ['$state', 'SessionService', NavigationItemDirectiveController],
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return navigationItemDirective;
    }

    /** @ngInject */
    function NavigationItemDirectiveController($state, SessionService) {

        var vm = this;

        vm.isDropdown = isDropdown;
        vm.isActive = isActive;
        vm.hasRole = hasRole;

        function isDropdown(navItem) {
            navItem = navItem || vm.navItem;
            return navItem && navItem.items !== undefined;
        }

        function isActive(navItem) {
            navItem = navItem || vm.navItem;
            var stateToCheck = isDropdown(navItem) ? navItem.group : navItem.link;
            return $state.includes(stateToCheck);
        }

        function hasRole(role) {
            return !role || SessionService.hasRole(role);
        }

    }

});
