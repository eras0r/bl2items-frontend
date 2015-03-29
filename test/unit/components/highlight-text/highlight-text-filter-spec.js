define([
    'angular',
    'angular-mocks',
    'components/highlight-text/highlight-text-filter'
], function (angular, mocks, testModule) {

    'use strict';

    var moduleName = 'highlightTextModule';
    var filterName = 'highlightText';

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Filter: ' + filterName, function () {
                // load the module
                beforeEach(module(moduleName));

                it('should have a highlight-textfilter', inject(function ($filter) {
                    expect($filter(filterName)).not.toBeNull();
                }));

                it('should return null if no value is provided',
                    inject(function ($filter) {
                        var filteredText = $filter(filterName)(null);
                        expect(filteredText).toEqual(null);
                    })
                );

                it('should return the original text if it does not contain special tags',
                    inject(function ($filter) {
                        var inputText = 'some text without tags';
                        var filteredText = $filter(filterName)(inputText);
                        expect(filteredText).toEqual(inputText);
                    })
                );

                function testElementalHighlight(tagName, elementalDamage) {
                    it('should highlight "' + elementalDamage + '" text',
                        inject(function ($filter) {
                            // opening and cosing tags
                            var filteredText = $filter(filterName)('{' + tagName + '}' + elementalDamage + '{/' + tagName + '}');
                            expect(filteredText).toEqual('<span class="elem-' + elementalDamage + '">' + elementalDamage + '</span>');

                            // opening tags only
                            filteredText = $filter(filterName)('{' + tagName + '}' + elementalDamage);
                            expect(filteredText).toEqual('<span class="elem-' + elementalDamage + '">' + elementalDamage);
                        })
                    );
                }

                describe('should highlight elemental damage types', function () {
                    testElementalHighlight('c', 'corrosive');
                    testElementalHighlight('e', 'electro');
                    testElementalHighlight('x', 'explosive');
                    testElementalHighlight('f', 'fire');
                    testElementalHighlight('s', 'slag');
                });

                // TODO add unit tests
            });
        });
    });

});
