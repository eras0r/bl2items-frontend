define([
    'angular',
    'angular-mocks',
    'item/display-item/damage-filter'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'bl2.items';
    var filterName = 'damage';

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Filter: ' + filterName, function () {

                beforeEach(function () {
                    // load the module
                    module('rn.highlightText');
                    module(moduleName);
                });

                it('should have a damage filer', inject(function ($filter) {
                    expect($filter(filterName)).not.toBeUndefined();
                }));

                it('should return an empty string if no value is provided',
                    inject(function ($filter) {
                        var filteredText = $filter(filterName)(null, null);
                        expect(filteredText).toEqual('');
                    })
                );

                it('should return the damage value as a string if only the damage value is given',
                    inject(function ($filter) {
                        var damage = 1337;

                        var filteredText = $filter(filterName)(damage);
                        expect(filteredText).toEqual('1337');

                        filteredText = $filter(filterName)(damage, null);
                        expect(filteredText).toEqual('1337');

                        filteredText = $filter(filterName)(damage, undefined);
                        expect(filteredText).toEqual('1337');

                        filteredText = $filter(filterName)(damage, 1);
                        expect(filteredText).toEqual('1337');
                    })
                );

                it('should return the damage value followed by the formatted damageMultiplier',
                    inject(function ($filter) {
                        var damage = 1337;
                        var damageMultiplier = 2;

                        var filteredText = $filter(filterName)(damage, damageMultiplier);
                        expect(filteredText).toEqual('1337 <span class="elem-explosive">x' + damageMultiplier + '<span class="elem-explosive">');
                    })
                );

            });
        });
    });

});
