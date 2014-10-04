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
                .state('admin.files', {
                    'abstract': true,
                    url: '/files',
                    template: '<ui-view />'
                })
                .state('admin.files.list', {
                    url: '/list',
                    templateUrl: 'scripts/file/file-list/file-list.html',
                    controller: 'FileListCtrl'
                })
                .state('admin.files.upload', {
                    url: '/upload',
                    templateUrl: 'scripts/file/file-upload/file-upload.html',
                    controller: 'FileUploadCtrl'
                });
        });

    return fileModule;

});