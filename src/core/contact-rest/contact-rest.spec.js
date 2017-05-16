'use strict';

describe('core.contactRest', function() {
  var $httpBackend;
  var ContactRest;
  var contactData = [
    {email1: 'ContactRest X'},
    {email2: 'ContactRest Y'},
    {email3: 'ContactRest Z'},
  ];

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('core.contactRest'));

  beforeEach(inject(function(_$httpBackend_, _ContactRest_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('json/contact.json').respond(contactData);

    ContactRest = _ContactRest_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the ContactRests data from `/json/contact.json`',
    function() {
      var ContactRests = ContactRest.query();

      expect(ContactRests).toEqual([]);

      $httpBackend.flush();
      expect(ContactRests).toEqual(contactData);
  });
});
