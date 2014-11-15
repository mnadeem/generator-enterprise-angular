'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name sample-app.components.navigation.services
 * @description
 * # sample-app.components.navigation.services
 *
 * sample-app.components.navigation.services module of the application.
 */
 angular
	.module('sample-app.components.navigation.services',[]);
	
/**
 * @ngdoc module
 * @name sample-app.components.navigation.controllers
 * @requires sample-app.components.navigation.services
 * @description
 * # sample-app.components.navigation.controllers
 *
 * sample-app.components.navigation.controllers module of the application.
 */
 angular
	.module('sample-app.components.navigation.controllers',[
		'sample-app.components.navigation.services'
	]);
 
 
 /**
 * @ngdoc module
 * @name sample-app.components.navigation
 * @requires sample-app.components.navigation.controllers, sample-app.components.navigation.services
 * @description
 * # sample-app.components.navigation
 *
 * sample-app.components.navigation module of the application.
 */
 angular
	.module('sample-app.components.navigation', [
	'sample-app.components.navigation.controllers',
	'sample-app.components.navigation.services'
	]);
})();