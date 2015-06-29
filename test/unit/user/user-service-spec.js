define([
    'angular',
    'angular-mocks',
    'user/user-module-inc'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'bl2.users';
    var serviceName = 'UserService';

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Service: ' + serviceName, function () {

                var $state;

                beforeEach(function () {
                    // load the module
                    module(moduleName);

                    inject(function (_$state_) {

                        $state = _$state_;

                        spyOn($state, 'go');
                    });
                });

                it('should contain a service ' + serviceName,
                    inject(function (UserService) {
                        expect(UserService).not.toBeUndefined();
                        expect(UserService).not.toBeNull();
                    }));

                // TODO
                it('should have a working showList method ' + serviceName,
                    inject(function (UserService) {
                        UserService.showList();
                        expect($state.go).toHaveBeenCalledWith('^');
                    }));

            });
        });
    });

});
