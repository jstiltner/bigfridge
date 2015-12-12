var app = angular.module("BigFridge", ["firebase", "ngRoute", "angular.filter"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'partials/add-meal.html',
        controller: 'AddMealCtrl'
      })
      .when('/:userId/boardId', {
        templateUrl: 'partials/meal-details.html',
        controller: 'MealDetailsCtrl'
      })
      // .when()
      .otherwise("/");
}]);