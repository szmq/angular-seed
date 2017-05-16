angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',

    /**
    * @ngdoc controller
    * @name home.controller:home
    * @param Title {core.factory_contact} factory service
    * @description
    *   Home page
    */

    controller: ['Title',
      function HomeController(Title) {
        Title.setTitle('Home Page - Angular Seed');
        this.page = 'Home Page';
      },
    ],
  });
