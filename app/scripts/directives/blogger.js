'use strict';

angular.module('devnApp')
  .directive('blogger', ['bloggerService', function (bloggerService) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        blogger: '@'
      },
      templateUrl: 'views/partials/blogger.html',
      link: function (scope, element, attrs) {
        scope.pageToken = undefined;

        scope.$watch('blogger', function () {
          // Ensure a URL and API key are provided
          if (scope.blogger === '' || !attrs.apiKey) {
            return;
          }

          getPosts();
        });

        scope.getNextPage = function () {
          getPosts({ pageToken: this.pageToken });
        };

        function getPosts (options) {
          options = angular.extend(options || {}, {
            url: scope.blogger,
            apiKey: attrs.apiKey,
            maxResults: attrs.maxResults || 10,
            fields: attrs.fields || undefined
          });
          bloggerService.get(options).then(function (data) {
            scope.posts = data.items;
            scope.pageToken = data.pageToken;
          });
        }
      }
    };
  }]);
