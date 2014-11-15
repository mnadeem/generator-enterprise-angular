'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name sample-app.components.confirmation.directives
 * @description
 * # sample-app.components.confirmation.directives
 *
 * sample-app.components.confirmation.directives module of the application.
 */
 angular
	.module('sample-app.components.confirmation.directives',['ui.bootstrap']);
 
 /**
  * @ngdoc module
  * @name sample-app.components.confirmation.controllers
  * @description
  * # sample-app.components.confirmation.controllers
  *
  * sample-app.components.confirmation.controllers module of the application.
  */
  angular
 	.module('sample-app.components.confirmation.controllers',[]);
 
 /**
 * @ngdoc module
 * @name sample-app.components.confirmation
 * @description
 * # sample-app.components.confirmation
 *
 * sample-app.components.confirmation module of the application.
 */
 angular
	.module('sample-app.components.confirmation', [
	'sample-app.components.confirmation.directives',
	'sample-app.components.confirmation.controllers'
	]);
})();