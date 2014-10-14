/**
 * module definition for the 'security' module.
 */
define(['angular'], function (angular) {

    'use strict';

    var securityModule = angular.module('securityModule', [
        'ui.router'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.login', {
                    url: '/login',
                    templateUrl: 'scripts/components/security/login-form.html',
                    controller: 'LoginCtrl'
                })
                .state('bl2.logout', {
                    url: '/logout',
                    controller: 'LogoutCtrl'
                });
        });

    return securityModule;

});
