require.config({
    paths: {
        'bootstrap-sass-official': '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        restangular: '../bower_components/restangular/dist/restangular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-http-auth': '../bower_components/angular-http-auth/src/http-auth-interceptor',
        'angular-translate': '../bower_components/angular-translate/angular-translate',
        'angular-translate-loader-static-files': '../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
        angular: '../bower_components/angular/angular',
        'cryptojs.core': '../bower_components/cryptojslib/components/core',
        'cryptojs.x64-core': '../bower_components/cryptojslib/components/x64-core',
        'cryptojs.sha512': '../bower_components/cryptojslib/components/sha512',
        'cryptojs.hmac': '../bower_components/cryptojslib/components/hmac',
        lodash: '../bower_components/lodash/lodash',
        'ng-file-upload': '../bower_components/ng-file-upload/angular-file-upload',
        affix: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix',
        alert: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert',
        button: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button',
        carousel: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel',
        collapse: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse',
        dropdown: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown',
        tab: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab',
        transition: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition',
        scrollspy: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy',
        modal: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal',
        tooltip: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip',
        popover: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover',
        'angular-spectrum-colorpicker': '../bower_components/angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min',
        spectrum: '../bower_components/spectrum/spectrum',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: [
                'jquery'
            ]
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
        'angular-translate': {
            deps: [
                'angular'
            ]
        },
        'angular-translate-loader-static-files': {
            deps: [
                'angular-translate'
            ]
        },
        'angular-spectrum-colorpicker': {
            deps: [
                'angular',
                'spectrum'
            ]
        },
        spectrum: {
            deps: [
                'jquery'
            ]
        },
        affix: {
            deps: [
                'jquery'
            ]
        },
        alert: {
            deps: [
                'jquery'
            ]
        },
        button: {
            deps: [
                'jquery'
            ]
        },
        carousel: {
            deps: [
                'jquery'
            ]
        },
        collapse: {
            deps: [
                'jquery'
            ]
        },
        dropdown: {
            deps: [
                'jquery'
            ]
        },
        tab: {
            deps: [
                'jquery'
            ]
        },
        transition: {
            deps: [
                'jquery'
            ]
        },
        scrollspy: {
            deps: [
                'jquery'
            ]
        },
        modal: {
            deps: [
                'jquery'
            ]
        },
        tooltip: {
            deps: [
                'jquery'
            ]
        },
        popover: {
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
        },
        'angular-bootstrap': {
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

require([
    'angular',
    'app',
    'angular-ui-router',
    'angular-cookies',
    'angular-sanitize',
    'restangular',
    'jquery'
], function (angular, app, ngUiRouter, ngCookies, ngSanitize, restangular, jquery) {
    'use strict';
    //var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        // as we use requirejs to load our js files asynchronously we need to ensure that all javascript files have been
        // loaded before the angular application is being bootstraped. Thats why we do a manualy boostrap og the angular application here
        // this means there is no ng-app directive within our html present
        angular.bootstrap(document, [app.name], {strictDi: true});
    });

});
