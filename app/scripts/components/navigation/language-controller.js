define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('LanguageCtrl', ['$scope', '$state', '$translate', function ($scope, $state, $translate) {

            // supported languages
            $scope.languages = [
                'en',
                'de'
            ];

            $scope.changeLanguage = function (language) {
                $translate.use(language);
            };

            $scope.getCurrentLanguage = function () {
                return $translate.use();
            };

        }]);

});
