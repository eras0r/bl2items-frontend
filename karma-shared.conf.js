// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function () {

    var config = {
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            // bower components
            {pattern: 'app/bower_components/**/*.js', included: false},

            // application scripts
            {pattern: 'app/scripts/*.js', included: false},
            {pattern: 'app/scripts/**/*.js', included: false},

            // application templates
            {pattern: 'app/scripts/**/*.html', included: false},

            // test libs
            {pattern: 'test/lib/*.js', included: false},
            {pattern: 'test/lib/**/*.js', included: false},

            // http://karma-runner.github.io/0.10/plus/requirejs.html
            'test/test-main.js'
        ],

        reporters: [
            'progress',
            'coverage'
        ],

        preprocessors: {
            'app/scripts/**/*.html': ['ng-html2js'],
            'app/scripts/**/*.js': ['coverage']
        },

        // list of files / patterns to exclude
        exclude: [
            'app/scripts/main.js'
        ],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        //logLevel: config.LOG_INFO,

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

    };

    return config;
};
