'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name <%= appname %>.components
 * @requires <%= appname %>.components.navigation, <%= appname %>.components.confirmation
 * @description
 * # <%= appname %>.components
 *
 * Main module for components
 */
 angular
	.module('<%= appname %>.components', [
	'<%= appname %>.components.confirmation'
	]);
})();