angular.
  module('shared').
  component('sharedHeader', {
    templateUrl: 'shared/header/header.template.html',

    /**
    * @ngdoc controller
    * @name shared.controller:header
    * @param $location {string} location url
    * @description
    *   Header
    */

    controller:
      ['$location',
        function sharedHeaderController($location) {
          this.page = 'Header';

         /**
          * @memberof shared.controller:header
          * @function isActive
          * @param {string} viewLocation location url
          * @return {boolean} return to template
          * @description
          *   Return isActive boolean
          */
          this.isActive = function(viewLocation) {
            return viewLocation === $location.path();
          };
        },
      ],
  });
