'use strict';

(function(){
 
 /**
 * @ngdoc module
 * @name <%= appname %>.components.confirmation.directives
 * @description
 * # <%= appname %>.components.confirmation.directives
 *
 * <%= appname %>.components.confirmation.directives module of the application.
 */
 angular
	.module('<%= appname %>.components.confirmation.directives',['ui.bootstrap']);
 
 /**
  * @ngdoc module
  * @name <%= appname %>.components.confirmation.controllers
  * @description
  * # <%= appname %>.components.confirmation.controllers
  *
  * <%= appname %>.components.confirmation.controllers module of the application.
  */
  angular
 	.module('<%= appname %>.components.confirmation.controllers',[]);
 
 /**
 * @ngdoc module
 * @name <%= appname %>.components.confirmation
 * @description
 * # <%= appname %>.components.confirmation
 *
 * <%= appname %>.components.confirmation module of the application.
 */
 angular
	.module('<%= appname %>.components.confirmation', [
	'<%= appname %>.components.confirmation.directives',
	'<%= appname %>.components.confirmation.controllers'
	]);
})();