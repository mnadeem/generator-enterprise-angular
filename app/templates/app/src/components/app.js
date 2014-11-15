'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name sample-app.components
 * @requires sample-app.components.navigation, sample-app.components.confirmation
 * @description
 * # sample-app.components
 *
 * Main module for components
 */
 angular
	.module('sample-app.components', [
	'sample-app.components.navigation',
	'sample-app.components.confirmation'
	]);
})();