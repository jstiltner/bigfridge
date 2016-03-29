app.controller("BoardDetailsCtrl", ["$scope", "$routeParams", "auth-data", "$firebaseArray",
  function($scope, $routeParams, authDataStorage, $firebaseArray) {

var userID = authDataStorage.getUid();
var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/facebook:" + userId + "/" );
  $scope.all_pins = $firebaseArray(pinRef);
  console.log("all_pins", $scope.all_pins );