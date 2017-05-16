/**
 * @ngdoc factory
 * @name core.factory:contact
 * @description
 *   Return contact info from json/contact.json
 */

angular.
  module('core.contactRest').
  factory('ContactRest', ['$resource',
    function($resource) {
      return $resource('json/contact.json');
    },
  ]);
