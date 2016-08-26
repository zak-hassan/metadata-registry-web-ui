
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
  //
   $scope.navtitle='Metadata Registry';
   $scope.logout='Log out';
  // Defining nav items
  $scope.metadata={ name :'Meta Registry',
                    link :'#!/metadata'};
  $scope.metasearch={ name :'Schema Search',
                      link :'#!/metasearch'};
  $scope.metastream={ name :'Data Stream',
                      link :'#!/metadatastream'};
    $scope.isActive = function(route) {
        $scope.path = $location.path();
        return $location.path() === route;
    };
    $scope.logout = function() {
        //OshinkoAuthService.ClearCredentials();
        $location.path('/login');
    };
});
