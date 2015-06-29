define([
    'angular',
    'angular-mocks',
    'user/user-module-inc'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'bl2.users';
    var controllerName = 'UserEditCtrl';
    var vm;
    var $scope;

    var UserServiceMock;

    // TODO fake roles
    var roles = [
        {'id': '1', 'rolename': 'user'},
        {'id': '2', 'rolename': 'admin'}
    ];

    // the user to be edited
    var user = {
        username: 'admin',
        roles: [
            roles[0]
        ]
    };

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Controller: ' + controllerName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName);

                    // initialize the controller and a mock scope
                    inject(function ($controller, $rootScope, $q, _UserService_) {
                        $scope = $rootScope.$new();
                        UserServiceMock = _UserService_;

                        spyOn(UserServiceMock, 'update').and.callFake(function (user) {
                            var deferred = $q.defer();

                            // fail if there is no username provided
                            if (user.username === 'admin') {
                                var error = {
                                    status: 422,
                                    data: {
                                        username: 'username.not.unique.error'
                                    }
                                };
                                deferred.reject(error);
                            }
                            else {
                                deferred.resolve(user);
                            }

                            return deferred.promise;
                        });

                        spyOn(UserServiceMock, 'showList').and.returnValue();

                        vm = $controller(controllerName, {
                            $scope: $scope,
                            roles: roles,
                            user: user,
                            UserService: UserServiceMock
                        });
                    });
                });


                it('should be registered', function () {
                    expect(vm).not.toBeUndefined();
                });

                it('should init the proper user to be edited', function () {
                    expect(vm.user).not.toBeUndefined();
                    expect(vm.user.username).toEqual('admin');

                    // check roles
                    expect(vm.user.roles).toContain(roles[0]);
                    expect(vm.user.roles).not.toContain(roles[1]);
                });

                it('should contain the proper userRoles upon creation', function () {
                    expect(vm.userRoles).not.toBeUndefined();
                    expect(vm.userRoles.length).toBe(2);
                });

                it('should have a working cancel function', function () {
                    vm.cancel();

                    expect(UserServiceMock.showList).toHaveBeenCalled();
                });

                describe('should have a working save function', function () {

                    it('should work properly in case of validation errors', function () {
                        vm.user.username = 'admin';
                        vm.save();

                        // ensures that the promise is resolved
                        $scope.$digest();

                        expect(UserServiceMock.update).toHaveBeenCalled();

                        expect(vm.errors).not.toBeUndefined();

                        expect(Object.keys(vm.errors).length).toBe(1);
                        expect(vm.errors).toEqual({'username': 'username.not.unique.error'});

                        expect(UserServiceMock.showList).not.toHaveBeenCalled();
                    });

                    it('should work properly if there are no validation errors', function () {
                        vm.user.username = 'axton';
                        vm.save();

                        // ensures that the promise is resolved
                        $scope.$digest();

                        expect(UserServiceMock.update).toHaveBeenCalled();

                        // no validation errors
                        expect(vm.errors).toBeNull();

                        // list must be shown
                        expect(UserServiceMock.showList).toHaveBeenCalled();
                    });

                });

            });
        });
    });

});
