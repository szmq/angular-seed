'use strict';

describe('contact', function() {
  // Load the module that contains the `contact` component before each test
  beforeEach(module('contact'));

  // Test the controller
  describe('ContactController', function() {
    var $httpBackend;
    var ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/contact.json')
                  .respond({'key1': 'value1', 'key2': 'value2'});

      ctrl = $componentController('contact');
    }));

    it('should create a `contact` property with 2 keys' +
       'fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.contact).toEqual({});

      $httpBackend.flush();
      expect(ctrl.contact).toEqual({'key1': 'value1', 'key2': 'value2'});
    });
  });
});
