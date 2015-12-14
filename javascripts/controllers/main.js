app.controller("MainCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray,   $firebaseObject, authData){

  var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);




  $scope.reserveMeal = function (meal){
//The below code marks switches the value at the key "reserved" 
    meal.reserved = true
//The below code updates the database with the reserved status.    
    $scope.meals.$save(meal);

    donorUser = meal.createdby;
    var notificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + authData.getUid() + "/notifications/unconfirmed/");
    
    $scope.notifications = $firebaseArray(notificationRef);
    $scope.notifications.$add(meal)
  };
}]);

