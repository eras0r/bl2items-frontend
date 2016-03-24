define([
    'angular',
    'lodash',
    'components/navigation/navigation-module-def'
], function (angular, _, navigationModule) {

    'use strict';

    navigationModule.provider('NavigationService', NavigationServiceProvider);

    NavigationServiceProvider.$inject = [];

    /** @ngInject */
    function NavigationServiceProvider() {

        this.$get = NavigationService;

        // functions provided by the NavigationServiceProvider
        this.addNavigationItem = addNavigationItem;

        NavigationService.$inject = ['$filter'];

        var navItems = [
            {
                sortOrder: 50,
                label: 'navigation.admin.title',
                group: 'bl2.admin',
                role: 'admin',
                items: []
            }
        ];

        // function addNavigationItem(navigationItem) {
        //     // TODO introduce angular constant for lodash (_)
        //     var group = _.find(navItems, {'group': navigationItem.group});
        //
        //     if (group === undefined) {
        //         navItems.push(navigationItem);
        //     }
        //     else {
        //         // group was already found -> just add a all new items
        //         _.forEach(navigationItem.items, function (item) {
        //             group.items.push(item);
        //         });
        //     }
        // }

        function addNavigationItem(navigationItem) {
            var group = _.find(navItems, {'group': navigationItem.group});

            if (group === undefined) {
                navItems.push(navigationItem);
            }
            else {
                // group was already found -> just add a all new items
                group.items.push(navigationItem);
            }
        }

        /** @ngInject */
        function NavigationService() {

            return {
                getNavigationItems: getNavigationItems
            };

            function getNavigationItems() {
                return sortRecursive(navItems, 'sortOrder');
            }

            function sortRecursive(array, propertyName) {
                array.forEach(function (item) {
                    var keys = _.keys(item);
                    keys.forEach(function (key) {
                        if (_.isArray(item[key])) {
                            item[key] = sortRecursive(item[key], propertyName);
                        }
                    });
                });

                return _.sortBy(array, propertyName);
            }

        }

    }

});
