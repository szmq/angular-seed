describe('PhoneCat Application', function() {
  it('should get `index.html`', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/');
  });

  describe('View: Home', function() {
    beforeEach(function() {
      browser.get('index.html#!/');
     });

    it('should get index', function() {
      expect(browser.getLocationAbsUrl()).toBe('/');
    });
  });

  describe('View: Contact', function() {
    beforeEach(function() {
      browser.get('index.html#!/contact');
    });

    it('should get /contact', function() {
      expect(browser.getLocationAbsUrl()).toBe('/contact');
    });
  });
});

