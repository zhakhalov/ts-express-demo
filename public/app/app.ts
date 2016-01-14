/// <reference path="./modules/lodash/lodash" />
/// <reference path="_references" />

namespace app {

  /**
   * Application module dependencies
   */
  const $inject: string[] = [
    'lodash'
  ];

  export var Application = {
    context: angular.module('app', $inject)
  };
}
