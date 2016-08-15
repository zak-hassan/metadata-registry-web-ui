'use strict';

angular.module('Registry.metasearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/metasearch', {
    templateUrl: 'metadatasearch/metadatasearch.html',
    controller: 'MetaSearchCtrl'
  });
}])

.controller('MetaSearchCtrl', [function() {

}]);
