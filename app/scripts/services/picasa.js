'use strict';

angular.module('devnApp')
  .factory('picasaService', ['$http', '$q', function ($http, $q) {
    function parsePhoto (entry) {
      var lastThumb = entry.media$group.media$thumbnail.length - 1;
      var photo = {
        width: entry.media$group.media$content.width,
        height: entry.media$group.media$content.height,
        thumb: entry.media$group.media$thumbnail[lastThumb].url,
        thumbHeight: entry.media$group.media$thumbnail[lastThumb].height,
        thumbWidth: entry.media$group.media$thumbnail[lastThumb].width,
        caption: entry.media$group.media$description.$t,
        url: entry.media$group.media$content[0].url
      };
      return photo;
    }

    function parsePhotos (url) {
      var d = $q.defer();
      var photos = [];
      loadPhotos(url).then(function (data) {
        if (!data.feed) {
          photos.push(parsePhoto(data.entry));
        } else {
          var entries = data.feed.entry;
          for (var i = 0; i < entries.length; i++) {
            photos.push(parsePhoto(entries[i]));
          }
        }
        d.resolve(photos);
      });
      return d.promise;
    }

    function loadPhotos (url) {
      var d = $q.defer();
      $http.jsonp(url + '?alt=json&kind=photo&hl=pl&imgmax=912&callback=JSON_CALLBACK').success(function (data) {
        d.resolve(data);
      });
      return d.promise;
    }

    // Public API here
    return {
      get: function (url) {
        return parsePhotos(url);
      }
    };
  }]);
