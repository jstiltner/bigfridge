app.controller("HistoryCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray, $firebaseObject, auth){

	var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);
  $scope.newReview;
	var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + auth.getUid() + "/notifications/");
  $scope.notifications = $firebaseArray(myNotificationRef);

	$scope.reviewTransaction = function (newReview){
		// grab text in review field
		// add it to firebase on the other user 
		// add it to firebase on the meal
		

	
	
}
	





}]);