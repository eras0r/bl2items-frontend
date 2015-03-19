define([
    'angular',
    'file/file-module-def'
], function (angular, fileModule) {

    'use strict';

    fileModule.factory('FileService', ['Restangular', function (Restangular) {
        var resourceUrl = 'files';

        return {
            list: function () {
                return Restangular.all(resourceUrl).getList();
            },

            create: function (file) {
                return Restangular.all(resourceUrl).post(file);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (file) {
                return file.put();
            },

            remove: function (file) {
                return file.remove();
            }
        };

    }]);

});
