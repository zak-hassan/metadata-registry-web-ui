'use strict';

angular.module('Registry.metadatastream', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/metadatastream', {
    templateUrl: 'metadatastream/metadatastream.html',
    controller: 'MetaDataStreamCtrl'
  });
}])

.controller('MetaDataStreamCtrl', [function() {

}]);
