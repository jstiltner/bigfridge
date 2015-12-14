app.controller("MainCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray,   $firebaseObject, authData){

  var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(mealRef);

 var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + authData.getUid() + "/notifications/unconfirmed/");
  $scope.notifications = $firebaseArray(myNotificationRef);




  $scope.reserveMeal = function (meal){
    // switches the value at the key "reserved" 
    meal.reserved = true
    // updates the database with the reserved status.    
    $scope.meals.$save(meal);

    donorUser = meal.createdby;
    var notificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + donorUser + "/notifications/unconfirmed/");
    
    $scope.notifications = $firebaseArray(notificationRef);
    $scope.notifications.$add(meal)
    // console.log("scope.notifications", $scope.notifications );
  };  // reserve meal function closes


    //sandbox
    var myNotificationRef = new Firebase("https://bigfridge.firebaseio.com/users/" + authData.getUid() + "/notifications/unconfirmed/");

    var alertsRef = $firebaseArray(myNotificationRef);

    
     
      
     
      console.log("$scope.alert", $scope.notifications );
    


    // list.$add({ hello: "world" });



}]);
    

      // window.alert("your donation of", $scope.alert.name )
      


     







    // logs { event: "child_added", key: "<new _id>", prevId: "<prev_id>" }




