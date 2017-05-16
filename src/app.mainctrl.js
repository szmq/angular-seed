/**
 * @ngdoc controller
 * @name app.controller:MyCtrl
 * @description
 *   Main ctrl
 */

angular.module('angular-seed')
       .controller('MainCtrl', ['Title',
        /**
          * @memberof app.controller:MyCtrl
          * @function function(Title)
          * @param Title {core.factory_title} factory service
          * @description
          *   set Title to default
          */
          function(Title) {
                  this.Title = Title;
              },
        ]);
