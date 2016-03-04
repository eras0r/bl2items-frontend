// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    var conf = sharedConfig();

    conf.files = conf.files.concat([
        {pattern: 'test/unit/**/*.js', included: false}
    ]);

    config.set(conf);
};