'use strict';

(function(){

/**
 * @ngdoc module
 * @name sample-app.plan.details.controllers
 * @requires rc
 * @description
 * # sample-app.plan.details.controllers
 *
 * Plan details controller module.
 */
 angular
  .module('sample-app.plan.details.controllers',[]);

/**
 * @ngdoc overview
 * @name sample-app.plan.details
 * @requires sample-app.plan.details.controllers
 * @description
 * # sample-app.plan.details
 *
 * Plan details module.
 */
 angular
  .module('sample-app.plan.details', ['sample-app.plan.details.controllers']);
})();