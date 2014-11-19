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
                    if (state.navigationItem) {
                        var parentState = getParentState(state.name);
                        // current's state parent state also defines a navigation
                        if (parentState && parentState.navigationItem) {
                            // add the parent' states navigation
                            //navItems[parentState.name] = parentState.navigationItem;
                            console.log('parent sort order: ', parentState.navigationItem.sortOrder);
                            navItems[parentState.navigationItem.sortOrder] = parentState.navigationItem;
                            // add current state as sub item to parent state
                            //navItems[parentState.name].items.push(state.navigationItem);
                            navItems[parentState.navigationItem.sortOrder].items[state.navigationItem.sortOrder] = state.navigationItem;
                        }
                        else {
                            // parent state does not define a navigation
                            // just add current state as root navigation element
                            navItems[state.navigationItem.sortOrder] = state.navigationItem;
                        }
                    }
                });

                console.log('navItems: ', navItems);

                return navItems;
            }
        };

    }]);

});
