define(['angular', 'angular-mocks', 'components/highlight-text/index'], function (angular, mocks, highlightTextModule) {

    'use strict';

    describe("Directives: color", function () {
        var staticElement;
        var dynamicElement;
        var $scope;

        // load the module
        beforeEach(module("highlightTextModule"));
        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;

            $scope.testColor = '#00ff00';

            staticElement = angular.element('<div color="red"></div>');
            dynamicElement = angular.element('<div color="{{testColor}}"></div>');
            $compile(staticElement)($scope);
            $compile(dynamicElement)($scope);
        }));

        it("should have color static color red", function () {
            expect(staticElement.attr("style")).toBe('color: red; ');
        });

        it("should have dynamic color #00ff00", function () {
            // expressions will be converted to rgb
            expect(dynamicElement.attr("style")).toBe('color: rgb(0, 255, 0); ');
        });
    });

});
