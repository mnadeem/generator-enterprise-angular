'use strict';

(function(){
/**
 * @ngdoc module
 * @name <%= appname %>.app
 * @requires <%= appname %>.components, <%= appname %>.plan.details, ui.router
 * @description
 * # <%= appname %>.app
 *
 * Main module of the application.
 */
 angular
  .module('<%= appname %>.plan', [
	'<%= appname %>.components',
	'<%= appname %>.plan.details',
	'ui.router'
  ]);
})();