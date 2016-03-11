/**
 * module definition for the 'user' module.
 */
define([
    'angular',
    'angular-ui-router',
    'restangular',
    'components/navigation/navigation-service'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.users', ['ui.router', 'restangular', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', UserModuleConfig]);

    /** @ngInject */
    function UserModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.users', {
                url: '/users',
                views: {
                    'main@': {
                        templateUrl: 'scripts/user/user-list/user-list.html',
                        controller: 'UserListCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.admin.users.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: 'scripts/user/user-details.html',
                        controller: 'UserCreateCtrl',
                        controllerAs: 'vm'
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
                        controller: 'UserEditCtrl',
                        controllerAs: 'vm'
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

        NavigationServiceProvider.addNavigationItem({
            group: 'bl2.admin',
            items: [
                {
                    sortOrder: 50,
                    link: 'bl2.admin.users',
                    label: 'navigation.admin.users',
                    role: 'admin'
                }
            ]
        });

    }

});