"use strict";
app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/',{
        title: 'Home',
        templateUrl:'views/home.html',
        controller: homeController
      }).otherwise({redirectTo:'/'});
      $locationProvider.html5Mode(true);
    }
]);
