// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    var conf = sharedConfig();

    conf.files = conf.files.concat([
        {pattern: 'test/unit/**/*.js', included: false},
        'node_modules/ng-midway-tester/src/ngMidwayTester.js',
        {pattern: 'test/midway/**/*.js', included: false},
    ]);

    config.set(conf);
};