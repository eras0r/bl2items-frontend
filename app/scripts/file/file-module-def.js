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

    /** @ngInject */
    function FileModuleConfig($stateProvider) {
        $stateProvider
            .state('bl2.admin.files', {
                url: '/files',
                views: {
                    'main@': {
                        templateUrl: 'scripts/file/file-list/file-list.html',
                        controller: 'FileListCtrl'
                    }
                },
                navigationItem: {
                    sortOrder: 31,
                    link: 'bl2.admin.files',
                    label: 'navigation.admin.files',
                    role: 'admin'
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
    }

    return angular
        .module('bl2.files', [
            'ui.router',
            'restangular',
            'angularFileUpload'
        ])
        .config(['$stateProvider', FileModuleConfig]);

});