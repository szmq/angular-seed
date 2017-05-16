'use strict';

angular.module('angular-seed', [
  'ngAnimate',
  'ngRoute',
  'shared',
  'core',
  'home',
  'contact',
]);

require('./app.config.js');
require('./app.mainctrl.js');
require('./core/core.module.js');
require('./core/contact-rest/contact-rest.module.js');
require('./core/contact-rest/contact-rest.service.js');
require('./core/title/title.module.js');
require('./core/title/title.service.js');
require('./shared/shared.module.js');
require('./shared/header/header.component.js');
require('./shared/footer/footer.component.js');
require('./home/home.module.js');
require('./home/home.component.js');
require('./contact/contact.module.js');
require('./contact/contact.component.js');
//  require('./app.animations.js');
