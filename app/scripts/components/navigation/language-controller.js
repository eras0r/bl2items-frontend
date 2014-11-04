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
                console.log('angular-translate current langugae: ', $translate.use());
                console.log('language has been changed to ', language);
                $translate.use(language);
            };

            $scope.getCurrentLanguage = function () {
                return $translate.use();
            };

        }]);

});
