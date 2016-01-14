/// <reference path="../app" />

namespace app.services {
  export interface IAppService {
    apiCall(): ng.IPromise<{}>;
    apiCallParams(param: string | number | boolean, query?: {}): ng.IPromise<{}>;
  }

  class AppService implements IAppService {

    public static $inject: string[] = [
      '$q',
      '$http',
      '$lodash'
    ];

    constructor(
      private $q: ng.IQService,
      private $http: ng.IHttpService,
      private $lodash: _.LoDashStatic
    ) {
    }

    public apiCall(): ng.IPromise<{}> {
      return this.$q((resolve: (res: {}) => any) => {

      });
    }

    public apiCallParams(param: string | number | boolean, query: {} = {}): ng.IPromise<{}> {
      // using a $q service just for demonstraion of thenable construnction
      return this.$q((resolve: (res: {}) => any) => {
        this.$http.get(`/api/${param}`, {
          params: query
        })
          .success((data: {}) => {
            resolve(data);
          });
      })
        .then((data: {}) => {
          return this.$lodash.merge(data, {
            reqQuery: query,
            reqParam: param
          });
        });
    }
  }

  Application.context.service('AppService', AppService);
}
