'use strict';

describe('shared.sharedHeader', function() {
  var $location;

  beforeEach(module('shared'));
  beforeEach(inject(function(_$location_) {
    $location = _$location_;
    spyOn($location, 'path').and.returnValue('/');
  }));

  describe('sharedHeaderController', function() {
    it('Should return true', inject(function($componentController) {
      var ctrl = $componentController('sharedHeader');
      expect(ctrl.isActive('/')).toEqual(true);
    }));
  });
});
