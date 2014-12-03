// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'app/bower_components/angular/angular.js', included: false},
            {pattern: 'app/bower_components/angular-mocks/angular-mocks.js', included: false},
            {pattern: 'app/bower_components/restangular/dist/restangular.js', included: false},
            {pattern: 'app/bower_components/angular-cookies/angular-cookies.js', included: false},
            {pattern: 'app/bower_components/angular-sanitize/angular-sanitize.js', included: false},
            {pattern: 'app/bower_components/angular-ui-router/release/angular-ui-router.js', included: false},
            {pattern: 'app/bower_components/angular-http-auth/src/http-auth-interceptor.js', included: false},
            {pattern: 'app/bower_components/jquery/dist/jquery.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js', included: false},
            {pattern: 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js', included: false},
            {pattern: 'app/bower_components/cryptojslib/components/core.js', included: false},
            {pattern: 'app/bower_components/cryptojslib/components/x64-core.js', included: false},
            {pattern: 'app/bower_components/cryptojslib/components/sha512.js', included: false},
            {pattern: 'app/bower_components/cryptojslib/components/hmac.js', included: false},
            {pattern: 'app/bower_components/lodash/dist/lodash.compat.js', included: false},
            {pattern: 'app/scripts/*.js', included: false},
            {pattern: 'app/scripts/**/*.js', included: false},
            {pattern: 'app/scripts/**/*.html', included: false},
            {pattern: 'test/spec/**/*.js', included: false},

            // http://karma-runner.github.io/0.10/plus/requirejs.html
            'test/test-main.js'
        ],

        preprocessors: {
            'app/scripts/**/*.html': ['ng-html2js']
        },

        // list of files / patterns to exclude
        exclude: [
            'app/scripts/main.js'
        ],

        // web server port
        port: 9100,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'app/'
        }

    });
};
