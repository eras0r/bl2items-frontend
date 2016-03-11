/**
 * module definition for the 'security' module.
 */
define([
    'angular',
    'angular-http-auth'
], function (angular) {

    'use strict';

    /** @ngInject */
    function SecurityModuleConfig($stateProvider, RestangularProvider) {
        // removes the body for remove / delete requests
        RestangularProvider.addRequestInterceptor(function (elem, operation, what, url) {
            if (operation === 'remove') {
                return undefined;
            }
            return elem;
        });

        RestangularProvider.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
            return {
                element: element,
                params: params,
                headers: _.extend(headers, {
                    'Authorization': localStorage.sessionToken
                }),
                httpConfig: httpConfig
            };
        });

        // register module state's
        $stateProvider
            .state('bl2.login', {
                url: '/login',
                views: {
                    'main@': {
                        templateUrl: 'scripts/components/security/login-form.html',
                        controller: 'LoginCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('bl2.logout', {
                url: '/logout',
                views: {
                    'main@': {
                        templateUrl: 'scripts/components/security/logout.html',
                        controller: 'LogoutCtrl',
                        controllerAs: 'vm'
                    }
                }

            });
    }

    /** @ngInject */
    function SecurityModuleRun($rootScope, $state, SessionService) {
        // angular auth interceptor
        $rootScope.$on('event:auth-loginRequired', function () {
            // go to login state by keeping the current url
            $state.go('bl2.login', {}, {location: false});
        });

        // TODO move this to SessionService?
        $rootScope.$on('event:auth-loginConfirmed', function (event, loggedinUser) {
            // TODO go to previous state
            SessionService.setCurrentUser(loggedinUser);
        });
    }

    return angular
        .module('rn.security', [
            'ui.router',
            'restangular',
            'http-auth-interceptor'
        ])
        .config(['$stateProvider', 'RestangularProvider', SecurityModuleConfig])
        .run(['$rootScope', '$state', 'SessionService', SecurityModuleRun]);

});
