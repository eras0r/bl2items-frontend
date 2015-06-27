/**
 * module definition for the 'user' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular'
], function (angular) {

    'use strict';

    return angular.module('userModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.users', {
                    url: '/users',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/user/user-list/user-list.html',
                            controller: 'UserListCtrl'
                        }
                    },
                    navigationItem: {
                        link: 'bl2.admin.users',
                        label: 'navigation.admin.users',
                        role: 'admin'
                    }
                })
                .state('bl2.admin.users.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/user/user-details.html',
                            controller: 'UserCreateCtrl'
                        }
                    },
                    resolve: {
                        roles: function (RoleService) {
                            return RoleService.list();
                        }
                    }
                })
                .state('bl2.admin.users.edit', {
                    url: '/:id',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/user/user-details.html',
                            controller: 'UserEditCtrl'
                        }
                    },
                    resolve: {
                        roles: function (RoleService) {
                            return RoleService.list();
                        },
                        user: function ($stateParams, UserService) {
                            return UserService.read($stateParams.id);
                        }
                    }
                });
        });

});