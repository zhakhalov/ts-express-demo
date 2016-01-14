/// <reference path="../../_references" />

/**
 * angular styled wrapper for lodash
 */
angular.module('lodash', [])
.service('$lodash', function () {
  const self = _.noConflict();

  /**
   * define custom mixins here
   */

  return self;
});
