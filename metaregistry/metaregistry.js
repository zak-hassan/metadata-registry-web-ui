'use strict';

angular.module('Registry.metaregistry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/metaregistry', {
    templateUrl: 'metaregistry/metaregistry.html',
    controller: 'MetaRegistryCtrl'
  });
}])
.factory("SchemaService",function(){
  var schemas=[
    { schemaId: "24190df4-e7fd-4a05-b0d9-a3b384c076e3", type: "a",name: "a", namespace: "a", doc: "a", fields: [ { name: "occupation", type: "string" }, { name: "name", type: "string" }, { name: "age", type: "string" } ] }
  ];

  var getSchemas = function() {
    return schemas;
  };

  return {
    getSchemas: getSchemas
  };

})
.controller('MetaRegistryCtrl',['SchemaService', function($scope, SchemaService) {

$scope.name=SchemaService.getSchemas();


// $rootScope.getSchemas(function(){
//
//   $http({
//     method: 'GET',
//     url: '/api/schema'
//   }).then(function successCallback(response) {
//       // this callback will be called asynchronously
//       // when the response is available
//     }, function errorCallback(response) {
//       // called asynchronously if an error occurs
//       // or server returns response with an error status.
//     });
// }]);


}]);
