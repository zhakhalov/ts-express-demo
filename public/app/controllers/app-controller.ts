/// <reference path="../app" />
/// <reference path="../services/app-service" />

namespace app.controllers {
  interface IAppScope extends ng.IScope {
    appCtrl: AppController;
    response: {}
  }

  class AppController {
    /**
     * controller specifoc dependencies
     */
    public static $inject: string[] = [
      '$scope',
      'AppService'
    ];

    constructor(
      private $scope: IAppScope,
      private appService: services.IAppService
    ) {

    }

    public performApiCall(): void {
      this.appService.apiCallParams(45)
        .then((response: {}) => {
          this.$scope.response = response;
        });
    }
  }

  Application.context.controller('AppController', AppController);
}
