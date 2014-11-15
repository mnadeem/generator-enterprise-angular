'use strict';

(function(){
 
/**
 * @ngdoc module
 * @name <%= appname %>
 * @requires ngAnimate, ngCookies, ngResource, ui.router, ngSanitize
 * @description
 * # <%= appname %>
 *
 * Main module of the application.
 */
 angular
  .module('<%= appname %>', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
	'app-templates',
	'ui.bootstrap',
	'<%= appname %>.plan'
  ]);
})();
