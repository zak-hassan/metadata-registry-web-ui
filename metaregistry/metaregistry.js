'use strict';

angular.module('Registry.metaregistry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/metaregistry', {
    templateUrl: 'metaregistry/metaregistry.html',
    controller: 'MetaRegistryCtrl'
  });
}])

.controller('MetaRegistryCtrl', [function() {

}]);
