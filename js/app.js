
'use strict';

// Declare app level module which depends on views, and components
angular.module('Registry', [
  'ngRoute',
  'Registry.metaregistry',
  'Registry.metasearch',
  'Registry.metadatastream'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/metaregistry'});
}]).controller('NavCtrl', function($rootScope, $scope, $location) {
    $scope.isActive = function(route) {
        $scope.path = $location.path();
        return $location.path() === route;
    };
    $scope.logout = function() {
        //OshinkoAuthService.ClearCredentials();
        $location.path('/login');
    };
});
