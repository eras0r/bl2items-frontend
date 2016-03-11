define([
    'angular',
    'components/navigation/navigation-module-def'
], function (angular, navigationModule) {

    'use strict';

    navigationModule
        .controller('LanguageCtrl', [
            '$translate', LanguageCtrl]);

    /** @ngInject */
    function LanguageCtrl($translate) {

        var vm = this;

        vm.changeLanguage = changeLanguage;
        vm.getCurrentLanguage = getCurrentLanguage;

        init();

        function init() {
            // supported languages
            // TODO move to service
            vm.languages = [
                'en',
                'de'
            ];
        }

        function changeLanguage(language) {
            $translate.use(language);
        }

        function getCurrentLanguage() {
            return $translate.use();
        }

    }

});
