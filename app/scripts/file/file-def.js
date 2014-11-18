/**
 * module definition for the 'file' module.
 */
define(['angular', 'restangular', 'angular-ui-router', 'ng-file-upload'], function (angular) {

    'use strict';

    var fileModule = angular.module('fileModule', [
        'ui.router',
        'restangular',
        'angularFileUpload'
    ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bl2.admin.files', {
                    url: '/files',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/file/file-list/file-list.html',
                            controller: 'FileListCtrl'
                        }
                    },
                    navigation: {
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
        });

    return fileModule;

});