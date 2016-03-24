define([
    'angular',
    'angular-mocks',
    'test-helper',
    'components/navigation/navigation-module-inc'
], function (angular, mocks, testHelper, testModule) {

    'use strict';

    describe('Unit testing', function () {

        var moduleName = 'rn.navigation';
        var directiveName = 'navigationItem';

        var $compile;
        var $rootScope;
        var $scope;
        var $state;

        var homeNavItem = {
            sortOrder: 1,
            link: 'ipplus.home',
            label: 'global.navigation.home.title'
        };

        var managementItem = {
            label: 'global.navigation.management.title',
            group: 'ipplus.management',
            items: [
                {
                    link: 'ipplus.management.settings',
                    label: 'global.navigation.management.settings.title',
                    sortOrder: 1
                },
                {
                    link: 'ipplus.management.dns',
                    label: 'global.navigation.management.dns.title',
                    sortOrder: 2
                }
            ]
        };

        describe('Module: ' + moduleName, function () {

            describe('Directive: ' + directiveName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName, function ($stateProvider) {

                        // setup some ui router fake states
                        $stateProvider
                            .state('ipplus', {
                                'abstract': true
                            })
                            .state('ipplus.home', {
                                url: '/'
                            })
                            .state('ipplus.management', {
                                url: 'management'
                            })
                            .state('ipplus.management.settings', {
                                url: 'settings'
                            })
                            .state('ipplus.management.dns', {
                                url: 'dns'
                            });
                    });

                    // load templates
                    testHelper.includeTemplates();

                    inject(
                        function (_$compile_, _$rootScope_, _$state_) {
                            $compile = _$compile_;
                            $rootScope = _$rootScope_;
                            $state = _$state_;

                            $scope = $rootScope.$new();
                        }
                    );

                });

                it('should render navigation items by using the uib-dropdown directive', function () {
                    $rootScope.navItem = homeNavItem;

                    var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                    $rootScope.$digest();

                    var liElem = element[0];
                    expect(liElem.getAttribute('data-uib-dropdown')).toBeDefined();
                });

                describe('highlight active navigation items', function () {

                    it('should not set the active css class on inactive navigation items', function () {
                        $rootScope.navItem = homeNavItem;

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).not.toContain('active');
                    });

                    it('should set the active css class on active navigation items', function () {
                        $rootScope.navItem = homeNavItem;

                        $state.go('ipplus.home');

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).toContain('active');
                    });

                });

                describe('non dropdown navigation items', function () {

                    var element;
                    var link;

                    beforeEach(function () {
                        $scope.navItem = homeNavItem;

                        element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($scope);
                        $scope.$digest();

                        link = element.find('a');
                    });

                    it('should use the ui-sref directive with the proper link', function () {
                        expect(link.attr('data-ui-sref')).toEqual($scope.navItem.link);
                    });

                    it('should not use the dropdown-toggle directive', function () {
                        expect(link.attr('data-dropdown-toggle')).toBeUndefined();
                    });

                    it('should use the correct label', function () {
                        expect(link.attr('data-translate')).toEqual($scope.navItem.label);
                    });

                });

                describe('dropdown navigation items', function () {

                    var element;
                    var link;

                    beforeEach(function () {
                        $scope.navItem = managementItem;

                        element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($scope);
                        $scope.$digest();

                        link = element.find('a');
                    });

                    it('should use the ui-sref directive with the proper link', function () {
                        expect(link.attr('data-ui-sref')).toBeUndefined();
                    });

                    it('should not use the dropdown-toggle directive', function () {
                        expect(link.attr('data-uib-dropdown-toggle')).toBeDefined();
                    });

                    it('should use the correct label', function () {
                        var span = element.find('a span');
                        expect(span.attr('data-translate')).toEqual($scope.navItem.label);
                    });

                    it('should display the items as sub navigation items', function () {
                        var list = element.find('ul');

                        expect(list.eq(0).hasClass('dropdown-menu')).toBeTruthy();

                        var listItems = element.find('ul li');
                        expect(listItems.length).toBe(2);

                        // first sub item
                        var link1 = listItems.eq(0).find('a');
                        expect(link1.attr('data-ui-sref')).toBe($scope.navItem.items[0].link);
                        expect(link1.attr('data-translate')).toBe($scope.navItem.items[0].label);

                        // second sub item
                        var link2 = listItems.eq(1).find('a');
                        expect(link2.attr('data-ui-sref')).toBe($scope.navItem.items[1].link);
                        expect(link2.attr('data-translate')).toBe($scope.navItem.items[1].label);
                    });

                    describe('highlight active items', function () {

                        beforeEach(function () {
                            $scope.navItem = managementItem;

                            $state.go('ipplus.management.settings');

                            element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($scope);
                            $scope.$digest();

                            link = element.find('a');
                        });

                        it('should highlight active parent navigation items', function () {
                            expect(element.eq(0).hasClass('active')).toBeTruthy();
                        });

                        it('should highlight active sub navigation items', function () {
                            var listItems = element.find('ul li');
                            expect(listItems.eq(0).hasClass('active')).toBeTruthy();
                        });

                        it('should not highlight inactive sub navigation items', function () {
                            var listItems = element.find('ul li');
                            expect(listItems.eq(1).hasClass('active')).toBeFalsy();
                        });

                    });

                });

            });

        });

    });

});