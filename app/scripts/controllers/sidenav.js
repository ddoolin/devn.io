'use strict';

/**
 * @ngdoc function
 * @name devnApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the devnApp
 */
angular.module('devnApp')
  .controller('SidenavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (path) {
      return path === $location.path();
    };
  }]);
