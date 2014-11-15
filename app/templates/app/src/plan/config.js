'use strict';

/**
 * @ngdoc overview
 * @name <%= appname %>
 * @requires $stateProvider
 * @description
 *
 * Configures the @module <%= appname %> $stateProvider
 */
angular
  .module('<%= appname %>.plan')
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