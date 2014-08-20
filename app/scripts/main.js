require.config({
    paths: {
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        angular: '../bower_components/angular/angular',
        jQuery: '../bower_components/jQuery/dist/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-cookies': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'angular-resource': [
            'angular'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ]
        },
        'sass-bootstrap': [
            'jquery'
        ]
    },
    priority: [
        'angular'
    ],
    packages: [

    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',
    'angular-ui-router',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'jquery'
], function (angular, app, ngUiRouter, ngCookies, ngSanitize, ngResource, jquery) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});