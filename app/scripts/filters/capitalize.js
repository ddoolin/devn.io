'use strict';

angular.module('devnApp')
  .filter('capitalize', function () {
    return function (input) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
      }) : '';
    };
  });
