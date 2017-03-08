"use strict";
var homeController =[
  "$scope",
  "$rootScope",
  "apiService",
  "$anchorScroll",
  function($scope,$rootScope,apiService,$anchorScroll){
    var Pokemon = class{
      constructor(data){
        this.id = data.nationalPokedexNumber;
        this.name = data.name;
        this.img = data.imageUrl;
        this.subtype = data.subtype;
        this.rarity = data.rarity;
        this.hp = data.hp;
        this.series = data.series;
        this.set = data.set;
        this.artist = data.artist;
      }
    },
    page = 1,
    LIMIT = 10;

    $scope.getPokemons = function(){
      if(page < LIMIT){
        apiService.getPokemons(page).then(function(data){
          for (var i = 0; i < data.cards.length; i++) {
            var item = data.cards[i]
            $scope.pokemons.push(new Pokemon(item));
          }
        });
        page = page + 1;
      }
      else {
        $scope.end = true;
      }
    };

    $scope.scrollUp = function () {
       $anchorScroll();
    };

    var init = function(){
      $scope.end = false;
      $scope.pokemons = [];
      $scope.getPokemons();//
    };

    init();
  }
];
