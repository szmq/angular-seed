angular.
  module('shared').
  component('sharedFooter', {
    templateUrl: 'shared/footer/footer.template.html',

    /**
    * @ngdoc controller
    * @name shared.controller:footer
    * @description
    *   Footer
    */

    controller:
        function sharedHeaderController() {
          this.author = 'Szymon Ryczek';
        },
  });
