'use strict';

var moduleName = 'rn.navigation';
var providerName = 'NavigationServiceProvider';
var serviceName = 'NavigationService';

describe('Unit testing', function () {
    describe('Module: ' + moduleName, function () {
        describe('Provider: ' + providerName, function () {

            var NavigationServiceProvider;
            var NavigationService;

            beforeEach(function() {
                module(moduleName, function (_NavigationServiceProvider_) {
                    NavigationServiceProvider = _NavigationServiceProvider_;
                });

                inject(function (_NavigationService_) {
                    NavigationService = _NavigationService_;
                })
            });

            // tests for the provider
            describe(providerName, function () {

                it('should should be defined', function () {
                    expect(NavigationService).toBeDefined();
                });

                it('should have a method addNavigationItem()', function () {
                    expect(NavigationServiceProvider.addNavigationItem).toBeDefined();
                });

                describe(providerName + '#addNavigationItem()', function () {

                    it('should add directly add a simple navigation item with a link and a label', function () {
                        var navItem = {
                            sortOrder: 1,
                            label: 'label',
                            link: 'link'
                        };

                        NavigationServiceProvider.addNavigationItem(navItem);

                        var items = NavigationService.getNavigationItems();

                        expect(items).toBeNonEmptyArray();
                        expect(items.length).toBe(2);
                        expect(items).toContain(navItem);
                    });

                    it('should add sub items as children to the correct group', function () {
                        var parentGroupName = 'parentGroup';

                        var parentItem = {
                            sortOrder: 1,
                            label: 'parentLabel',
                            group: parentGroupName,
                            items: []
                        };

                        var childItem1 = {
                            sortOrder: 1,
                            label: 'childLabel1',
                            group: parentGroupName,
                            link: 'childLink1'
                        };

                        NavigationServiceProvider.addNavigationItem(parentItem);
                        NavigationServiceProvider.addNavigationItem(childItem1);

                        var items = NavigationService.getNavigationItems();

                        // parent checks
                        expect(items).toBeNonEmptyArray();
                        expect(items.length).toBe(2);
                        expect(items).toContain(parentItem);

                        // check children
                        expect(items[0].items).toBeNonEmptyArray();
                        expect(items[0].items[0]).toBe(childItem1);
                    });

                });

            });

            // tests for the service
            describe(serviceName, function () {

                it('should be defined', function () {
                    expect(NavigationService).toBeDefined();
                });

                it('should have a method getNavigationItems()', function () {
                    expect(NavigationService.getNavigationItems).toBeDefined();
                });

                describe(serviceName + '#getNavigationItems()', function () {

                    it('should return the navigation items as array', function () {
                        expect(NavigationService.getNavigationItems()).toBeArray();
                    });

                    it('should sort items by using their sortOrder', function () {
                        var navItem1 = {
                            sortOrder: 1,
                            label: 'one',
                            link: 'one'
                        };

                        var navItem2 = {
                            sortOrder: 2,
                            label: 'two',
                            link: 'two'
                        };

                        NavigationServiceProvider.addNavigationItem(navItem2);
                        NavigationServiceProvider.addNavigationItem(navItem1);

                        var items = NavigationService.getNavigationItems();

                        expect(items[0]).toBe(navItem1);
                        expect(items[1]).toBe(navItem2);
                    });

                    it('should sort sub items by using their sortOrder', function () {
                        var parentGroupName = 'parentGroup';

                        var parentItem = {
                            sortOrder: 1,
                            label: 'parentLabel',
                            group: parentGroupName,
                            items: []
                        };

                        var childItem1 = {
                            sortOrder: 1,
                            label: 'childLabel1',
                            group: parentGroupName,
                            link: 'childLink1'
                        };

                        var childItem2 = {
                            sortOrder: 2,
                            label: 'childLabel2',
                            group: parentGroupName,
                            link: 'childLink2'
                        };

                        NavigationServiceProvider.addNavigationItem(parentItem);
                        NavigationServiceProvider.addNavigationItem(childItem2);
                        NavigationServiceProvider.addNavigationItem(childItem1);

                        var items = NavigationService.getNavigationItems();

                        // check children
                        expect(items[0].items).toBeNonEmptyArray();
                        expect(items[0].items[0]).toBe(childItem1);
                        expect(items[0].items[1]).toBe(childItem2);
                    });

                });

            });

        });

    });

});
