app.controller("HistoryCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray, $firebaseObject, auth){

	var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);
  $scope.newReview;
	var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + auth.getUid() + "/notifications/");
  $scope.notifications = $firebaseArray(myNotificationRef);

	$scope.reviewTransaction = function (notification){
		
		console.log("notification.review", notification.review);
		console.log("notification", notification );
		if (auth.getUid() === notification.createdby){
			eaterId = notification.reservedbyUid;		
			// push it to firebase on the createdbyUid
			var reviewDropRef = new Firebase("https://bigfridge.firebaseio.com/users/" + eaterId + "/reviews")
			$scope.reviews = $firebaseArray(reviewDropRef);
			$scope.reviews.$add(notification);
			// push it to firebase on the meal (reviewOfEater)
			$scope.meals.$save(notification);
		}
		else{
			// push it to firebase on the reservedbyUid
			var reviewDropRef = new Firebase("https://bigfridge.firebaseio.com/users/" + notification.createdbyUid + "/reviews")
			$scope.reviews = $firebaseArray(reviewDropRef);
			$scope.reviews.$add(notification);
			// push it to firebase on the meal (reviewOfCook)
			$scope.meals.$save(notification);
		};
	
	


	}
}]);