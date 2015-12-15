app.controller("MainCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray,   $firebaseObject, authData){

  var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);

  var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + authData.getUid() + "/notifications/");
  $scope.notifications = $firebaseArray(myNotificationRef);

  $scope.reserveMeal = function (meal){
    // switches the value at the key "reserved" 
    meal.reserved = true;
    meal.reservedby = authData.getName();
    meal.reservationConf = false;
    // updates the database with the reserved status.    
    $scope.meals.$save(meal);

    donorUser = meal.createdby;
    $scope.notifications.$add(meal);
  };  // reserve meal function closes

  $scope.confirmReservation = function (notification){
    notification.reservationConf = true;
    $scope.notifications.$save(notification);
  };
    
  $scope.cancelReservation = function (notification){
    notification.reserved = false;
    notification.reservationConf = false;
    notification.reservedby="";
    console.log(notification );
    $scope.meals.$add(notification);

    $scope.notifications.$remove(notification);
  };

  $scope.moveToHistory = function (notification){
    notification.inHistory = true;
    notification.reviewed = false;
    $scope.notifications.$save(notification);
    // $(this).parent().remove();
  };

}]);
    

      


     











