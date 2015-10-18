'use strict';

/**
 * @ngdoc overview
 * @name devnApp
 * @description
 * # devnApp
 *
 * Main module of the application.
 */
angular
  .module('devnApp', [
    'ngAnimate',
    'ngAria',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ])
  .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('about', {
        url: '/',
        templateUrl: 'views/about.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'views/blog.html'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'views/gallery.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio.html'
      });

    var brandRedMap = $mdThemingProvider.extendPalette('red', {
      '500': 'C42A37'
    });
    $mdThemingProvider.definePalette('brandRed', brandRedMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('brandRed');
  }]);
