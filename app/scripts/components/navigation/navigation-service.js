define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule.factory('NavigationService', ['$state', NavigationService]);

    /** @ngInject */
    function NavigationService($state) {

        var navigationService = {
            getNavigationItems: getNavigationItems
        };

        return navigationService;

        function getNavigationItems() {
            var navItems = {};

            // iterate over defined states
            angular.forEach($state.get(), function (state) {

                // add nav item, if state has a defined navigation element
                if (state.navigationItem) {
                    var parentState = getParentState(state.name);
                    // current's state parent state also defines a navigation
                    if (parentState && parentState.navigationItem) {
                        // add the parent' states navigation
                        navItems[parentState.navigationItem.sortOrder] = parentState.navigationItem;
                        // add current state as sub item to parent state
                        navItems[parentState.navigationItem.sortOrder].items[state.navigationItem.sortOrder] = state.navigationItem;
                    }
                    else {
                        // parent state does not define a navigation
                        // just add current state as root navigation element
                        navItems[state.navigationItem.sortOrder] = state.navigationItem;
                    }
                }
            });

            return navItems;
        }

        function getParentState(stateName) {
            if (!stateName) {
                return undefined;
            }

            var parentName = stateName.substring(0, stateName.lastIndexOf('.'));
            return $state.get(parentName);
        }

    }

});
