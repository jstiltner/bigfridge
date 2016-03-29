app.controller("AddMealCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "auth-data", function($scope, $firebaseArray, $firebaseObject, auth){


	var ref = new Firebase("https://bigfridge.firebaseio.com/meals");
  $scope.meals = $firebaseArray(ref);
	$scope.newMeal = { name: "", description: "", servings: "", returnTerms: "", allergens: "", lifespan: "", createdby:"", createdbyName:"", reserved:"" };

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
			reserved: false,
      inHistory: false
    });

    $scope.newMeal.name = "";
    $scope.newMeal.description="";
    $scope.newMeal.servings="";
    $scope.newMeal.returnTerms="";
		$scope.newMeal.allergens="";
		$scope.newMeal.lifespan="";

		$("#success-box").html("<strong>Meal Added!</strong>")

  };

}]);





