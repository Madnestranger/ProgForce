/* global malarkey:false, moment:false */
import '../../bower_components/bootstrap/dist/js/bootstrap.min';
import '../../bower_components/angular-ui-mask/dist/mask.min';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { LocalStorageService } from '../app/services/localStorageService';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('testTaskProgForce', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ui.mask'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .service('db', LocalStorageService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective);
