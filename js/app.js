"use strict";

var app = angular.module("app", ["ngRoute","ngSanitize","infinite-scroll"]);

app.constant('CONFIG',{
  api:{
    url:'https://api.pokemontcg.io/v1/',
  }
});

app.run(['$rootScope','$route', function($rootScope,$route) {
  var init = function(){
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = 'Infinite Scroll - ' + $route.current.title;
    });
  };

  init();
}]);
