describe('core.title', function() {
  beforeEach(module('core'));

  it('should return title',
    inject(function(Title) {
     expect(Title.title()).toBe('Angular Seed');

     Title.setTitle('title');
     expect(Title.title()).toBe('title');
    })
  );
});
