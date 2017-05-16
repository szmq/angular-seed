angular.
  module('contact').
  component('contact', {
    templateUrl: 'contact/contact.template.html',

    /**
    * @ngdoc controller
    * @name contact.controller:contact
    * @param ContactRest {core.factory_contact} factory service
    * @param Title {core.factory_title} factory service
    * @description
    *   Contact page
    */

    controller: ['ContactRest', 'Title',
      function ContactController(ContactRest, Title) {
        var self = this;
        Title.setTitle('Contact Page - Angular Seed');

        this.page = 'Contact Page';
        this.contact = ContactRest.get({}, function(data) {
          self.email = data.email;
          self.github = data.github;
        });
      },
    ],
  });
