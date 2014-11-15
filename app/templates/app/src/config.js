'use strict';

angular.module('<%= appname %>')
  .constant('APP_HOME_URL', '/xyz/app');

/**
 * @ngdoc overview
 * @name <%= appname %>
 * @requires $httpProvider
 * @description
 *
 * Configures the @module <%= appname %> $httpProvider to disable IE caching
 */
angular
  .module('<%= appname %>')
  .config(['$httpProvider', '$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
 }]);

