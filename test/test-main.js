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
        lodash: '../bower_components/lodash/dist/lodash.compat'
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
//        'jquery': {'exports': '$'},
//        'jquery': {
//            exports: 'jQuery'
//        },
        'sass-bootstrap': [
            'jquery'
        ]
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
