require.config({
    paths: {
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        restangular: '../bower_components/restangular/dist/restangular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-http-auth': '../bower_components/angular-http-auth/src/http-auth-interceptor',
        'angular-minicolors': '../bower_components/angular-minicolors/angular-minicolors',
        'jquery-minicolors': '../bower_components/jquery-minicolors/jquery.minicolors',
        angular: '../bower_components/angular/angular',
        'cryptojs.core': '../bower_components/cryptojslib/components/core',
        'cryptojs.x64-core': '../bower_components/cryptojslib/components/x64-core',
        'cryptojs.sha512': '../bower_components/cryptojslib/components/sha512',
        'cryptojs.hmac': '../bower_components/cryptojslib/components/hmac',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        'ng-file-upload': '../bower_components/ng-file-upload/angular-file-upload'
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
        restangular: [
            'angular',
            'lodash'
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
        'angular-http-auth': {
            deps: [
                'angular'
            ]
        },
        'angular-minicolors': {
            deps: [
                'angular',
                'jquery-minicolors'
            ]
        },
        'jquery-minicolors': {
            deps: [
                'jquery'
            ]
        },
        'sass-bootstrap': {
            deps: [
                'jquery'
            ]
        },
        'cryptojs.core': {
            exports: 'CryptoJS'
        },
        'cryptojs.x64-core': {
            deps: [
                'cryptojs.core'
            ],
            exports: 'CryptoJS'
        },
        'cryptojs.sha512': {
            deps: [
                'cryptojs.core',
                'cryptojs.x64-core'
            ],
            exports: 'CryptoJS'
        },
        'cryptojs.hmac': {
            deps: [
                'cryptojs.core'
            ],
            exports: 'CryptoJS'
        },
        'ng-file-upload': {
            deps: [
                'angular'
            ]
        }
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
    'angular-http-auth',
    'restangular',
    'jquery'
], function (angular, app, ngUiRouter, ngCookies, ngSanitize, restangular, jquery) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});