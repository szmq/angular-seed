'use strict';

describe('home', function() {
  beforeEach(module('home'));

  describe('PhoneListController', function() {
    it('Should return true', inject(function($componentController) {
      var ctrl = $componentController('home');
      expect(ctrl.page).toEqual(jasmine.any(String));
    }));
  });
});
