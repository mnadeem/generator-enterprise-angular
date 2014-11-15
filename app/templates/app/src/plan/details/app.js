'use strict';

(function(){

/**
 * @ngdoc module
 * @name <%= appname %>.plan.details.controllers
 * @requires 
 * @description
 * # <%= appname %>.plan.details.controllers
 *
 * Plan details controller module.
 */
 angular
  .module('<%= appname %>.plan.details.controllers',[]);

/**
 * @ngdoc overview
 * @name <%= appname %>.plan.details
 * @requires <%= appname %>.plan.details.controllers
 * @description
 * # <%= appname %>.plan.details
 *
 * Plan details module.
 */
 angular
  .module('<%= appname %>.plan.details', ['<%= appname %>.plan.details.controllers']);
})();