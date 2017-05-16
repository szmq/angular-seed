'use strict';

describe('MainCtrl', function() {
  beforeEach(module('angular-seed'));

  describe('MainCtrl', function() {
    it('Should return true', inject(function($controller) {
      var ctrl = $controller('MainCtrl');
      expect(ctrl.Title).toEqual(jasmine.any(Object));
    }));
  });
});
