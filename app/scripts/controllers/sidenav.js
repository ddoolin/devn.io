'use strict';

/**
 * @ngdoc function
 * @name devnApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the devnApp
 */
angular.module('devnApp')
  .controller('SidenavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.items = [
      { name: 'About', state: 'about' },
      { name: 'Blog', state: 'blog' },
      { name: 'Gallery', state: 'gallery' },
      { name: 'Portfolio', state: 'portfolio' }
    ];

    $scope.goToState = function (evt) {
      var sidenav = $mdSidenav('left');
      if (!sidenav.isLockedOpen()) {
        $mdSidenav('left').toggle();
      }
    };
  }]);
