define(['angular', 'angular-mocks', 'user/user-module-inc'], function (angular, mocks, damageTypeModule) {

    'use strict';

    var controllerName = 'UserCreateCtrl';

    var userNameMissingError = 'Username is required';  // TODO use error code

    describe('Controller: ' + controllerName, function () {
        //var controller;
        var $scope;

        var UserServiceMock;

        // TODO fake roles
        var roles = [
            {'id': '1', 'rolename': 'user'},
            {'id': '2', 'rolename': 'admin'}
        ];

        // load the module
        beforeEach(module('userModule'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope, $q, _UserService_) {
            $scope = $rootScope.$new();
            UserServiceMock = _UserService_;

            //spyOn(UserServiceMock, 'create').and.returnValue($q.when({name: 'foo'}));
            spyOn(UserServiceMock, 'create').and.callFake(function (user) {
                var deferred = $q.defer();

                // fail if there is no username provided
                if (user.username === undefined) {
                    var error = {
                        status: 422,
                        data: {
                            username: userNameMissingError
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

            $controller(controllerName, {
                $scope: $scope,
                roles: roles
            });
        }));

        it('should create an emoty user upon creation', function () {
            expect($scope.user).not.toBe(undefined);
        });

        it('should attach userRoles upon creation', function () {
            expect($scope.userRoles.length).toEqual(roles.length);
            expect($scope.userRoles).toContain({id: '1', rolename: 'user', selected: false});
            expect($scope.userRoles).toContain({id: '2', rolename: 'admin', selected: false});
        });

        it('should add selected user roles to the user roles list', function () {
            expect($scope.user.roles.length).toEqual(0);
            $scope.userRoles[0].selected = true;

            // invoke save function on controller
            $scope.save();

            expect($scope.user.roles.length).toEqual(1);
            expect($scope.user.roles).toContain({id: '1', rolename: 'user'});
        });

        it('should show the user list after successfully creating a new user', function () {
            $scope.user.username = 'axton';
            // invoke save function on controller
            $scope.save();

            expect(UserServiceMock.create).toHaveBeenCalled();
            $scope.$digest();
            expect(UserServiceMock.showList).toHaveBeenCalled();
            expect($scope.errors).toEqual(null);
        });

        it('should stay on the same page and show validation errors', function () {
            // invoke action on controller
            $scope.save();

            expect(UserServiceMock.create).toHaveBeenCalled();
            $scope.$digest();

            // userlist won't be shown
            expect(UserServiceMock.showList).not.toHaveBeenCalled();

            // errors needs to be added to scaope
            expect($scope.errors).not.toEqual(null);
            expect($scope.errors.username).toEqual(userNameMissingError);
        });

        it ('should show the user list when executing the cancel action', function(){
            // invoke action on controller
            $scope.cancel();

            expect(UserServiceMock.showList).toHaveBeenCalled();
        });

    });

});
