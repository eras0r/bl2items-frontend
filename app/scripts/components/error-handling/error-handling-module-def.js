/**
 * module definition for the 'errorHandling' module.
 */
define([
    'angular',
    'lodash',
    'restangular'
], function (angular, _) {

    'use strict';

    function printState(state, stateParams) {
        var stateFormatted = '"' + state.name + '"';
        if (!_.isEmpty(stateParams)) {
            stateFormatted += ' (' + angular.toJson(stateParams) + ')';
        }

        return stateFormatted;
    }

    return angular
        .module('rn.errorHandling', [
            'restangular'
        ])
        .run(['$rootScope', 'Restangular', 'MessageService',
            function ($rootScope, Restangular, MessageService) {

                // show all REST API errors
                //noinspection JSUnusedLocalSymbols
                Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
                    MessageService.addMessage({
                        type: 'danger',
                        text: 'Error executing REST API call to ' + response.config.method + ' ' + response.config.url + '. HTTP status returned: ' + response.status
                    });

                    return true; // error not handled
                });

                // show all ui-router state change errors
                $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                    MessageService.closeAllMessages();

                    MessageService.addMessage({
                        type: 'danger',
                        text: 'Error changing state from ' + printState(fromState, fromParams) + ' to  ' + printState(toState, toParams)
                    });
                });

                //noinspection JSUnusedLocalSymbols
                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    MessageService.closeAllMessages();
                })
            }
        ]);

});
