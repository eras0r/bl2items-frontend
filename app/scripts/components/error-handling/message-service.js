define([
    'angular',
    'components/error-handling/error-handling-module-def'
], function (angular, errorHandlingModule) {

    'use strict';

    errorHandlingModule.factory('MessageService', function () {

        return {

            /**
             * accessor to the currently hold messages.
             */
            messages: [],

            /**
             * Adds a message to be displayed.
             * @param {Object} message - The message to be added.
             * @param {string} message.type - The type of the message (one of 'success', 'info', 'warning', 'danger').
             * @param {string} message.text - The employee's department.
             */
            addMessage: function (message) {
                this.messages.push(message);
            },

            /**
             * Closes the message with the given index.
             * @param {number} index the index of the message to be closed.
             */
            closeMessage: function (index) {
                this.messages.splice(index, 1);
            },

            /**
             * Closes all messages
             */
            closeAllMessages: function () {
                this.messages.length = 0;
            }

        };

    });

});