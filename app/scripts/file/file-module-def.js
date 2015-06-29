/**
 * module definition for the 'file' module.
 */
define([
    'angular',
    'restangular',
    'angular-ui-router',
    'ng-file-upload'
], function (angular) {

    'use strict';

    return angular
        .module('bl2.files', ['ui.router', 'restangular', 'angularFileUpload', 'rn.navigation'])
        .config(['$stateProvider', 'NavigationServiceProvider', FileModuleConfig]);

    /** @ngInject */
    function FileModuleConfig($stateProvider, NavigationServiceProvider) {
        $stateProvider
            .state('bl2.admin.files', {
                url: '/files',
                views: {
                    'main@': {
                        templateUrl: 'scripts/file/file-list/file-list.html',
                        controller: 'FileListCtrl'
                    }
                }
            })
            .state('bl2.admin.files.upload', {
                url: '/upload',
                views: {
                    'main@': {
                        templateUrl: 'scripts/file/file-upload/file-upload.html',
                        controller: 'FileUploadCtrl'
                    }
                }
            });

        NavigationServiceProvider.addNavigationItem({
            group: 'bl2.admin',
            items: [
                {
                    sortOrder: 40,
                    link: 'bl2.admin.files',
                    label: 'navigation.admin.files',
                    role: 'admin'
                }
            ]
        });
    }

});