define([
    'angular',
    'components/highlight-text/highlight-text-module-def'
], function (angular, highlightTextModule) {

    'use strict';

    highlightTextModule.filter('highlightText', function () {
        return function (input) {
            var mapObj = {
                '{c}': '<span class="elem-corrosive">',
                '{/c}': '</span>',
                '{e}': '<span class="elem-electro">',
                '{/e}': '</span>',
                '{x}': '<span class="elem-explosive">',
                '{/x}': '</span>',
                '{f}': '<span class="elem-fire">',
                '{/f}': '</span>',
                '{s}': '<span class="elem-slag">',
                '{/s}': '</span>'
            };
            var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');
            if (input === null) {
                return null;
            }
            return input.replace(re, function (matched) {
                return mapObj[matched];
            });
        };
    });

});
