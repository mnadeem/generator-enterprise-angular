'use strict';

(function(){
 
/**
 * @ngdoc module
 * @name sample-app
 * @requires ngAnimate, ngCookies, ngResource, ui.router, ngSanitize
 * @description
 * # sample-app
 *
 * Main module of the application.
 */
 angular
  .module('sample-app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
	'sample-app-templates',
	'ui.bootstrap',
	'sample-app.plan'
  ]);
})();
