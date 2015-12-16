app.controller("MainCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray,   $firebaseObject, authData){

  var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);

  var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + authData.getUid() + "/notifications/");
  $scope.notifications = $firebaseArray(myNotificationRef);

  $scope.reserveMeal = function (meal){
    // switches the value at the key "reserved" 
    meal.reserved = true;
    meal.reservedby = authData.getName();
    meal.reservedbyUid = authData.getUid();
    meal.reservationConf = false;
    // updates the database with the reserved status.    
    $scope.meals.$save(meal);

    donorUser = meal.createdby;
    $scope.notifications.$add(meal);
  };  // reserve meal function closes

  $scope.confirmReservation = function (notification){
    notification.reservationConf = true;
    notification.readytoEat = true;
    // $scope.notifications.$save(notification);
    //send notification to the Eater when Cook confirms Reservation
    otherParty = notification.reservedbyUid;
    var sendRef = new Firebase("http://bigfridge.firebaseio.com/users/" + otherParty +"/notifications");
    $scope.othersnotifications = $firebaseArray(sendRef);
    $scope.othersnotifications.$save(notification);


    console.log("otherParty", otherParty );
  };
    
  $scope.cancelReservation = function (notification){
    notification.reserved = false;
    notification.reservationConf = false;
    notification.reservedby="";
    console.log(notification );
    $scope.meals.$save(notification);

    $scope.notifications.$remove(notification);
  };

  $scope.moveToHistory = function (notification){
    notification.inHistory = true;
    notification.reviewed = false;
    $scope.notifications.$save(notification);
    // $(this).parent().remove();
  };

}]);
    

      


     











