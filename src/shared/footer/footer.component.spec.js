'use strict';

describe('shared.footer', function() {
  beforeEach(module('shared'));

  describe('sharedHeaderController', function() {
    it('Should return true', inject(function($componentController) {
      var ctrl = $componentController('sharedFooter');
      expect(ctrl.author).toEqual(jasmine.any(String));
    }));
  });
});
