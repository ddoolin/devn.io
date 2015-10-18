'use strict';

/**
 * @ngdoc function
 * @name devnApp.controller:ToolbarCtrl
 * @description
 * # ToolbarCtrl
 * Controller of the devnApp
 */
angular.module('devnApp')
  .controller('ToolbarCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.openSiteSidenav = function () {
      $mdSidenav('left').toggle();
    };
  }]);
