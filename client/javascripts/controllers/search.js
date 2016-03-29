app.controller("SearchCtrl", ["$q", "$http", "$scope", "search-factory", "auth-data", "$firebaseArray", "$routeParams",

  function($q, $http, $scope, searchFactory, authDataStorage, $firebaseArray, $routeParams) {
  var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/");
  $scope.all_pins = $firebaseArray(pinRef);

  }]); // closes module
