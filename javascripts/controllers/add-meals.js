app.controller("AddMealCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray,   $firebaseObject, auth){

	var ref = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseObject(ref);
	$scope.newMeal = { name: "", description: "", servings: "", returnTerms: "", allergens: "", lifespan: "", createdby:"", createdbyName:"" };

  $scope.addMeal = function() {
    $scope.meals.$add({
      name: $scope.newMeal.name,
      description: $scope.newMeal.description,
      servings: $scope.newMeal.servings,
      returnTerms: $scope.newMeal.returnTerms,
			allergens: $scope.newMeal.allergens,
			lifespan: $scope.newMeal.lifespan,
			createdby: auth.getUid(),
			createdbyName: auth.getName(),
			reserved: null
    });
	  console.log("newMeal", $scope.newMeal );
	  // var ref = new Firebase("https://bigfridge.firebaseio.com/meals");
	  // ref.push($scope.newMeal)  
	  console.log("firebase meal push code ran" );
  };




  // create a synchronized array
  // $scope.meals = $firebaseArray(ref);
  // $scope.meals.name = 
  // $scope.meals.description =
  // $scope.meals.servings =
  // $scope.meals.returnTerms = 
  // $scope.meals.allergens = 
  // $scope.meals.lifespan = 



  // // add new items to the array
  // // the meal is automatically added to our Firebase database!
  // $scope.addMeal = function() {
  //   $scope.messages.$add({
  //     text: $scope.newMessageText
  //   });
  // };




}]);





