define(['angular', 'components/security/security-def'], function (angular, securityModule) {

    'use strict';

    securityModule
        .controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
            $scope.activeView = 'items';

            $scope.login = function () {
                // Generate HMAC secret (sha512('username:password'))
                localStorage.hmacSecret = CryptoJS.SHA512($scope.user.name + ":" + $scope.user.password).toString(CryptoJS.enc.Hex);

                // POST Data
                var randomString = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
                var postData = {payload: randomString, username: $scope.user.name, password: $scope.user.password};
                $scope.user.name = '';
                $scope.user.password = '';

                // FIXME use configurable url
                $http.post('http://localhost/bl2items-backend/sessions/', postData, {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}}).
                    success(function (data, status, headers, config) {
                        // Store session token
                        localStorage.sessionToken = data.sessionToken;

                        // Generate new HMAC secret out of our previous (username + password) and the new session token
                        // sha512("sha512('username:password'):sessionToken")
                        localStorage.hmacSecret = CryptoJS.SHA512(localStorage.hmacSecret + ':' + data.sessionToken);

                        $scope.message = 'Login Successful: ' + localStorage.sessionToken;
                    }).
                    error(function (data, status, headers, config) {
                        $scope.message = data.message;
                    });
            };

        }]);

});
