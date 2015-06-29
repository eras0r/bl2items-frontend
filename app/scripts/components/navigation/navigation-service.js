define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

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

        function addNavigationItem(navigationItem) {
            // TODO introduce angular constant for lodash (_)
            var group = _.find(navItems, {'group': navigationItem.group});

            if (group === undefined) {
                navItems.push(navigationItem);
            }
            else {
                // group was already found -> just add a all new items
                _.forEach(navigationItem.items, function (item) {
                    group.items.push(item);
                });
            }
        }

        /** @ngInject */
        function NavigationService($filter) {

            var navigationService = {
                getNavigationItems: getNavigationItems
            };

            return navigationService;

            function getNavigationItems() {
                return $filter('orderBy')(navItems, 'sortOrder');
            }

        }

    }

});
