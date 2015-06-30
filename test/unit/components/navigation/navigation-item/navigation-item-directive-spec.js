define([
    'angular',
    'angular-mocks',
    'test-helper',
    'components/navigation/navigation-module-inc'
], function (angular, mocks, testHelper, testModule) {

    'use strict';

    var moduleName = 'rn.navigation';
    var directiveName = 'navigationItem';

    var $compile;
    var $rootScope;
    var $state;

    var SessionServiceMock;

    var simpleNavItem = {
        sortOrder: 10,
        link: 'bl2.portal',
        label: 'navigation.portal'
    };

    var dropDownNavItem = {
        label: 'navigation.weapons.title',
        group: 'bl2.weapons',
        items: [
            {
                link: 'bl2.weapons.create',
                label: 'navigation.weapons.create',
                role: 'admin',
                sortOrder: 20
            },
            {
                link: 'bl2.weapons.list',
                label: 'navigation.weapons.list',
                sortOrder: 10
            },
        ]
    };

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Directive: ' + directiveName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName, function ($stateProvider) {
                        $stateProvider
                            .state('bl2', {
                                url: ''
                            })
                            .state('bl2.portal', {
                                url: 'portal'
                            });
                    });

                    // load templates
                    testHelper.includeTemplates();

                    inject(
                        ['$compile', '$rootScope', '$state', 'SessionService', function (_$compile_, _$rootScope_, _$state_, _SessionService_) {
                            $compile = _$compile_;
                            $rootScope = _$rootScope_;
                            $state = _$state_;
                            SessionServiceMock = _SessionService_;

                            spyOn(SessionServiceMock, 'hasRole').and.callFake(function (role) {
                                //return false;
                                return role === 'user';
                            });

                            $rootScope.navItem = {
                                sortOrder: 10,
                                link: 'bl2.portal',
                                label: 'navigation.portal'
                            };

                        }]
                    );
                });

                describe('should set the active css class based on the current state', function () {

                    it('should not set the active class for active navigation items', function () {
                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        // get the root element (we cannot target it by element.find('li') because replace is set to true
                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).not.toContain('active');
                    });

                    it('should set the active class for active navigation items', function () {
                        $state.go('bl2.portal');

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).toContain('active');
                    });

                    // TODO tests for navigation groups

                });

                describe('should show/hide items based on the required role', function () {

                    it('should show navigation items which do not have a required role', function () {
                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).not.toContain('ng-hide');
                    });

                    it('should show navigation items for which the user does have the required role', function () {
                        $rootScope.navItem.role = 'user';

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        console.log(liElem.getAttribute('class'));
                        expect(liElem.getAttribute('class')).not.toContain('ng-hide');
                    });

                    it('should hide navigation items for which the user does not have the required role', function () {
                        $rootScope.navItem.role = 'admin';

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($rootScope);
                        $rootScope.$digest();

                        var liElem = element[0];
                        expect(liElem.getAttribute('class')).toContain('ng-hide');
                    });
                });

                describe('should display dropdowns correctly', function () {

                    it('should render non dropdown items correctly', function () {
                        var $scope = $rootScope.$new();
                        $scope.navItem = simpleNavItem;

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($scope);
                        $scope.$digest();

                        var link = element.find('a');
                        expect(link.attr('data-ui-sref')).toEqual($scope.navItem.link);
                        expect(link.attr('data-dropdown-toggle')).toBeUndefined();

                        // check the label
                        expect(link.attr('data-translate')).toEqual($scope.navItem.label);
                    });

                    it('should render dropdown items correctly', function () {
                        var $scope = $rootScope.$new();
                        $scope.navItem = dropDownNavItem;

                        var element = $compile('<navigation-item data-nav-item="navItem"></navigation-item>')($scope);
                        $scope.$digest();

                        var link = element.find('a');
                        expect(link.attr('data-ui-sref')).toEqual($scope.navItem.link);
                        expect(link.attr('data-dropdown-toggle')).toBe('');

                        // check the label
                        var span = link.find('span');
                        expect(span.attr('data-translate')).toBe($scope.navItem.label);

                        var listItems = element.find('li');
                        //console.log(listItems);

                        // check sub navigation
                        expect(listItems.length).toBe(2);

                        // first sub item
                        expect(listItems.eq(0).hasClass('ng-hide')).toBeFalse();
                        var link1 = listItems.eq(0).find('a');
                        expect(link1.attr('data-ui-sref')).toBe($scope.navItem.items[1].link);
                        expect(link1.attr('data-translate')).toBe($scope.navItem.items[1].label);

                        // second sub item
                        expect(listItems.eq(1).hasClass('ng-hide')).toBeTrue();
                        var link2 = listItems.eq(1).find('a');
                        expect(link2.attr('data-ui-sref')).toBe($scope.navItem.items[0].link);
                        expect(link2.attr('data-translate')).toBe($scope.navItem.items[0].label);
                    });
                });

            });
        });
    });

});
