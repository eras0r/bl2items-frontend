define([
    'angular',
    'item/item-module-def',
    'components/highlight-text/highlight-text-filter' // TODO introduce common module, which is more generic than highlight-text-module?
], function (angular, itemModule) {

    'use strict';

    itemModule.filter('damage', ['$filter', function ($filter) {
        return function (damage, damageMultiplier) {
            var damageValue = '';

            if (damage) {
                damageValue += damage;
            }
            if (damageMultiplier > 1) {
                damageValue += ' {x}x' + damageMultiplier + '{x}';
            }

            return $filter('highlightText')(damageValue);

        };
    }]);

});
