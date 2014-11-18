define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule.factory('NavigationTestService', ['$state', function ($state) {

        function getParentState(stateName) {
            if (!stateName) {
                return undefined;
            }

            var parentName = stateName.substring(0, stateName.lastIndexOf('.'));
            return $state.get(parentName);

        }

        return {
            getNavigationItems: function () {
                var navItems = {};

                // iterate over defined states
                angular.forEach($state.get(), function (state) {

                    // add nav item, if state has a defined navigation element
                    if (state.navigation) {
                        var parentState = getParentState(state.name);
                        // current's state parent state also defines a navigation
                        if (parentState && parentState.navigation) {
                            // add the parent' states navigation
                            navItems[parentState.name] = parentState.navigation;
                            // add current state as sub item to parent state
                            navItems[parentState.name].items.push(state.navigation);
                        }
                        else {
                            // parent state does not define a navigation
                            // just add current state as root navigation element
                            navItems[state.name] = state.navigation;
                        }
                    }
                });

                return navItems;
            }
        };

    }]);

});
