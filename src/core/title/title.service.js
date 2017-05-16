/**
 * @ngdoc factory
 * @name core.factory:title
 * @description
 *   Return default title or title for setTitle("title")
 */

angular.
  module('core.title').
  factory('Title',
    function() {
      var title = 'Angular Seed';
      return {
        title: function() {
          return title;
        },
        setTitle: function(newTitle) {
          title = newTitle;
        },
      };
    });
