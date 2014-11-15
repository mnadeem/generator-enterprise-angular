'use strict';

/**
 * @ngdoc overview
 * @name sample-app
 * @requires $stateProvider
 * @description
 *
 * Configures the @module sample-app $stateProvider
 */
angular
  .module('sample-app.plan')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		// For any unmatched url, redirect to /plan
		$urlRouterProvider.otherwise("/plan");

		$stateProvider.state('plan', {
			url : '/plan',
			templateUrl : 'src/plan/main.tpl.html'
		}).state('details', {
			url : '/details',
			templateUrl : 'src/plan/details/main.tpl.html'
		}).state('summary', {
			url : '/summary',
			templateUrl : 'src/plan/summary/main.tpl.html'
		});
  }]);