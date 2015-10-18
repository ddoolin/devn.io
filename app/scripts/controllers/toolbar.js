'use strict';

/**
 * @ngdoc function
 * @name devnApp.controller:ToolbarCtrl
 * @description
 * # ToolbarCtrl
 * Controller of the devnApp
 */
angular.module('devnApp')
  .controller('ToolbarCtrl', ['$scope', '$mdSidenav', '$state', function ($scope, $mdSidenav, $state) {
    $scope.$state = $state;

    $scope.openSiteSidenav = function () {
      $mdSidenav('left').toggle();
    };
  }]);
