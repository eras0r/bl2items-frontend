define([
    'angular',
    'components/error-handling/error-handling-module-def'
], function (angular, errorHandlingModule) {

    'use strict';

    errorHandlingModule.controller('MessageCtrl', ['MessageService', MessageCtrl]);

    /** @ngInject */
    function MessageCtrl(MessageService) {

        var vm = this;

        vm.messages = MessageService.messages;

        vm.closeMessage = closeMessage;
        vm.addMessage = addMessage;
        vm.closeAllMessages = closeAllMessages;

        function addMessage() {
            MessageService.addMessage({type: 'success', text: 'some text..'});
        }

        function closeMessage(index) {
            MessageService.closeMessage(index);
        }

        function closeAllMessages() {
            MessageService.closeAllMessages();
        }
    }

});