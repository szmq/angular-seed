angular.
  module('angular-seed').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home></home>',
        }).
        when('/contact', {
          template: '<contact></contact>',
        }).
        otherwise('/');
    },
  ]);
