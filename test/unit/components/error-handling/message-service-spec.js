define([
    'angular',
    'components/error-handling/error-handling-module-inc'
], function (angular, testModule) {

    'use strict';

    var moduleName = 'rn.errorHandling';
    var serviceName = 'MessageService';

    describe('Unit testing', function () {
        describe('Module: ' + moduleName, function () {
            describe('Service: ' + serviceName, function () {

                beforeEach(function () {
                    // load the module
                    module(moduleName);
                });

                it('should contain a service ' + serviceName,
                    inject(function (MessageService) {
                        expect(MessageService).not.toBeUndefined();
                        expect(MessageService).not.toBeNull();
                    }));

                it('should have a no initial messages ' + serviceName,
                    inject(function (MessageService) {
                        expect(MessageService.messages).toBeEmptyArray();
                    }));

                it('should have a a working addMessage ' + serviceName,
                    inject(function (MessageService) {
                        var message = {type: 'danger', text: 'An error occurred'};
                        MessageService.addMessage(message);
                        expect(MessageService.messages).toEqual([message]);
                    }));

                it('should have a a working closeMessage ' + serviceName,
                    inject(function (MessageService) {
                        var errorMessage = {type: 'danger', text: 'An error occurred'};
                        var infoMessage = {type: 'info', text: 'Some information'};
                        MessageService.addMessage(errorMessage);
                        MessageService.addMessage(infoMessage);

                        MessageService.closeMessage(0);

                        expect(MessageService.messages).toEqual([infoMessage]);
                    }));

                it('should have a a working closeAllMessages ' + serviceName,
                    inject(function (MessageService) {
                        var errorMessage = {type: 'danger', text: 'An error occurred'};
                        var infoMessage = {type: 'info', text: 'Some information'};
                        MessageService.addMessage(errorMessage);
                        MessageService.addMessage(infoMessage);

                        MessageService.closeAllMessages();

                        expect(MessageService.messages).toBeEmptyArray();
                    }));

            });
        });
    });

});
