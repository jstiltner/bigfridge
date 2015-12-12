app.controller("MainCtrl", ["$scope", "$firebaseArray", "$firebaseObject", function($scope, $firebaseArray,   $firebaseObject){


    var mealRef = new Firebase("https://bigfridge.firebaseio.com/meals");

      // download the data from a Firebase reference into a (pseudo read-only) array
      $scope.meals = $firebaseObject(mealRef);
      // all server changes are applied in realtime
    $scope.reserveMeal = function (){
      var ref = new Firebase("https://bigfridge.firebaseio.com/meals");
      var obj = $firebaseObject(ref);

obj.$bindTo($scope, "data").then(function() {
  console.log($scope.data); // { foo: "bar" }
  $scope.data.foo = "true";  // will be saved to the database
  ref.set({ foo: "baz" });  // this would update the database and $scope.data

      $scope.meals.$loaded()
        .then(function() {
        



          
});