'use strict';

angular.module('devnApp')
  .factory('bloggerService', ['$http', '$q', function ($http, $q) {
    function parsePost (entry) {
      var post = {
        title: entry.title,
        publishDate: entry.published,
        content: entry.content,
        url: entry.selfLink
      };
      return post;
    }

    function parsePosts (options) {
      var d = $q.defer();
      var posts = [];
      loadPosts(options).then(function (data) {
        if (data.items) {
          var entries = data.items;
          for (var i = 0; i < entries.length; i++) {
            posts.push(parsePost(entries[i]));
          }
        }
        d.resolve({ items: posts, pageToken: data.nextPageToken });
      });
      return d.promise;
    }

    function loadPosts (opts) {
      var d = $q.defer();
      var url = opts.url + ('?key=AIzaSyDzOOWnf1WO08LKDtMlSRc_U7HIS2m7deo' +
        (opts.maxResults ? '&maxResults=' + opts.maxResults : '') +
        (opts.pageToken ? '&pageToken=' + opts.pageToken : '') +
        (opts.fields ? '&fields=' + encodeURIComponent(opts.fields) : '') +
        '&callback=JSON_CALLBACK'
      );
      $http.jsonp(url).success(function (data) {
        d.resolve(data);
      });
      return d.promise;
    }

    // Public API here
    return {
      get: function (options) {
        return parsePosts(options);
      }
    };
  }]);
