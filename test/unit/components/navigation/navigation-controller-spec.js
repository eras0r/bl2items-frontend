define([
    'angular',
    'angular-mocks',
    'components/navigation/navigation-module-inc'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'rn.navigation';
    var controllerName = 'NavigationCtrl';

    var vm;
    var $scope;

    var NavigationService, SessionService;

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Controller: ' + controllerName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName);

                    // initialize the controller and a mock scope
                    inject(function ($controller, $rootScope, _NavigationService_, _SessionService_) {

                        NavigationService = _NavigationService_;
                        SessionService = _SessionService_;

                        spyOn(SessionService, 'getCurrentUser').and.returnValue();
                        spyOn(SessionService, 'isUserLoggedIn').and.returnValue();

                        $scope = $rootScope.$new();
                        vm = $controller(controllerName, {
                            $scope: $scope
                        });
                    });
                });

                it('should be registered', function () {
                    expect(vm).not.toBeUndefined();
                });

                it('should contain a navItems array with one single entry upon creation', function () {
                    expect(vm.navItems).toBeArray();
                    expect(vm.navItems.length).toBe(1);
                    expect(vm.navItems).toContain({
                        sortOrder: 50,
                        label: 'navigation.admin.title',
                        group: 'bl2.admin',
                        role: 'admin',
                        items: []
                    });
                });

                it('should provide a getCurrentUser method', function () {
                    vm.getCurrentUser();

                    expect(SessionService.getCurrentUser).toHaveBeenCalled();
                });

                it('should provide an isUserLoggedIn method', function () {
                    vm.isUserLoggedIn();

                    expect(SessionService.isUserLoggedIn).toHaveBeenCalled();
                });

            });
        });
    });

});
