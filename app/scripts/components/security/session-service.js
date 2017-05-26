define([
    'angular',
    'components/security/security-module-def'
], function (angular, securityModule) {

    'use strict';

    securityModule.factory('SessionService', ['$localStorage', '$state', 'Restangular', function ($localStorage, $state, Restangular) {

        var currentUser;

        var sessionService = {

            getCurrentUser: function () {
                if (typeof currentUser === 'undefined') {
                    var filter = {include: ['roles']};
                    currentUser = Restangular.one('users/' + $localStorage.userId + '/').get({filter: filter}).$object;
                }

                return currentUser;
            },

            setCurrentUser: function (user) {
                currentUser = user;
            },

            /**
             * Returns whether the current user has the given role or not.
             * Note: roles are always in capital letters and start with 'ROLE_'
             * @param role the role to be tested
             * @returns {boolean} whether the user has the given role or not.
             */
            hasRole: function (roleName) {
                if (typeof roleName === 'undefined') {
                    return true;
                }

                if (currentUser && currentUser.roles) {
                    // search the user's roles for the required role
                    var matchedRoles = _.filter(currentUser.roles, function (role) {
                        return role.name === roleName;
                    });

                    return matchedRoles.length > 0;
                }
                // current user is not set or does not have any roles
                else {
                    return false;
                }
            },

            login: function (username, password) {
                // POST Data
                var postData = {
                    username: username,
                    password: password
                };

                return Restangular.all('users/login').post(postData);
            },

            isUserLoggedIn: function () {
                return currentUser !== undefined && currentUser.username;
            },

            logout: function () {
                return Restangular.all('users/logout').post();
            }

        };

        return sessionService;

    }]);

});