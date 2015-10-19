'use strict';

angular.module('devnApp')
  .directive('picasa', ['picasaService', function (picasaService) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        picasa: '@'
      },
      templateUrl: 'views/partials/picasa.html',
      link: function (scope) {
        scope.$watch('picasa', function () {
          if (scope.picasa === '') {
            return;
          }
          picasaService.get(scope.picasa).then(function (data) {
            scope.photos = data;
          });
        });
      }
    };
  }]);
