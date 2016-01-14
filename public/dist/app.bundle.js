angular.module('lodash', [])
    .service('$lodash', function () {
    var self = _.noConflict();
    return self;
});
var app;
(function (app) {
    var $inject = [
        'lodash'
    ];
    app.Application = {
        context: angular.module('app', $inject)
    };
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var AppService = (function () {
            function AppService($q, $http, $lodash) {
                this.$q = $q;
                this.$http = $http;
                this.$lodash = $lodash;
            }
            AppService.prototype.apiCall = function () {
                return this.$q(function (resolve) {
                });
            };
            AppService.prototype.apiCallParams = function (param, query) {
                var _this = this;
                if (query === void 0) { query = {}; }
                return this.$q(function (resolve) {
                    _this.$http.get("/api/" + param, {
                        params: query
                    })
                        .success(function (data) {
                        resolve(data);
                    });
                })
                    .then(function (data) {
                    return _this.$lodash.merge(data, {
                        reqQuery: query,
                        reqParam: param
                    });
                });
            };
            AppService.$inject = [
                '$q',
                '$http',
                '$lodash'
            ];
            return AppService;
        })();
        app.Application.context.service('AppService', AppService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var AppController = (function () {
            function AppController($scope, appService) {
                this.$scope = $scope;
                this.appService = appService;
            }
            AppController.prototype.performApiCall = function () {
                var _this = this;
                this.appService.apiCallParams(45)
                    .then(function (response) {
                    _this.$scope.response = response;
                });
            };
            AppController.$inject = [
                '$scope',
                'AppService'
            ];
            return AppController;
        })();
        app.Application.context.controller('AppController', AppController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=app.bundle.js.map