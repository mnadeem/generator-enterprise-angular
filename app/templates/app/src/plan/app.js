'use strict';

(function(){
/**
 * @ngdoc module
 * @name sample-app.app
 * @requires sample-app.components, sample-app.plan.details, ui.router
 * @description
 * # sample-app.app
 *
 * Main module of the application.
 */
 angular
  .module('sample-app.plan', [
	'sample-app.components',
	'sample-app.plan.details',
	'ui.router'
  ]);
})();