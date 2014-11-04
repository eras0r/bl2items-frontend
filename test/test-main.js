var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        // removed "-spec" naming from files
        if (/-spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

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
        'angular-minicolors': '../bower_components/angular-minicolors/angular-minicolors',
        'jquery-minicolors': '../bower_components/jquery-minicolors/jquery.minicolors',
        angular: '../bower_components/angular/angular',
        'cryptojs.core': '../bower_components/cryptojslib/components/core',
        'cryptojs.x64-core': '../bower_components/cryptojslib/components/x64-core',
        'cryptojs.sha512': '../bower_components/cryptojslib/components/sha512',
        'cryptojs.hmac': '../bower_components/cryptojslib/components/hmac',
        lodash: '../bower_components/lodash/dist/lodash.compat',
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
        popover: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover'
    },

    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-cookies': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'restangular': [
            'angular',
            'lodash'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            'exports': 'angular.mock'
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
        'angular-minicolors': {
            deps: [
                'angular'
            ]
        },
        'jquery-minicolors': {
            deps: [
                'jquery'
            ]
        },
        'affix': {
            deps: [
                'jquery'
            ]
        },
        'alert': {
            deps: [
                'jquery'
            ]
        },
        'button': {
            deps: [
                'jquery'
            ]
        },
        'carousel': {
            deps: [
                'jquery'
            ]
        },
        'collapse': {
            deps: [
                'jquery'
            ]
        },
        'dropdown': {
            deps: [
                'jquery'
            ]
        },
        'tab': {
            deps: [
                'jquery'
            ]
        },
        'transition': {
            deps: [
                'jquery'
            ]
        },
        'scrollspy': {
            deps: [
                'jquery'
            ]
        },
        'modal': {
            deps: [
                'jquery'
            ]
        },
        'tooltip': {
            deps: [
                'jquery'
            ]
        },
        'popover': {
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
        }
//        'jquery': {'exports': '$'},
//        'jquery': {
//            exports: 'jQuery'
//        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
