/**
 * module definition for the 'user' module.
 */
define(['angular', 'angular-ui-router', 'restangular'], function (angular) {

    'use strict';

    var userModule = angular.module('userModule', [
        'ui.router',
        'restangular'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin.users', {
                    'abstract': true,
                    url: '/users',
                    template: '<ui-view />'
                })
                .state('admin.users.list', {
                    url: '/list',
                    templateUrl: 'scripts/user/user-list/user-list.html',
                    controller: 'UserListCtrl'
                })
                .state('admin.users.create', {
                    url: '/create',
                    templateUrl: 'scripts/user/user-details.html',
                    controller: 'UserCreateCtrl',
                    resolve: {
                        roles: function (RoleService) {
                            return RoleService.list();
                        }
                    }
                })
                .state('admin.users.edit', {
                    url: '/:id',
                    templateUrl: 'scripts/user/user-details.html',
                    controller: 'UserEditCtrl',
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

    return userModule;

});