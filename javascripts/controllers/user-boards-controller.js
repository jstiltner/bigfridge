app.controller("BoardDetailsCtrl", ["$scope", "$routeParams", "auth-data", "$firebaseArray",
  function($scope, $routeParams, authDataStorage, $firebaseArray) {

  var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/");
  $scope.all_pins = $firebaseArray(pinRef);

  $scope.userId = $routeParams.userId;

  var userRef = new Firebase("https://pinterestfinterest.firebaseio.com/user_database/" + $scope.userId);

  $scope.user_pins = $firebaseArray(userRef);
  // Figure out a way to only show those pins connected to a user_pins

  $scope.matched = [];
  $scope.all_pins.$loaded(function() {


	  angular.forEach($scope.all_pins, function(fullPin) {
	  	angular.forEach($scope.user_pins, function(userPin) {
	  		if (userPin.$value === fullPin.url) {
	  			console.log("before indexOf");
	  			console.log($scope.matched);
	  			$scope.matched.push(fullPin);
	  		}
	  	});
	  	});
	  $scope.matched;
  })

}]);