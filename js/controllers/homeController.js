"use strict";
var homeController =[
  "$scope",
  "$rootScope",
  "apiService",
  function($scope,$rootScope,apiService){
    var page = 1,
    Pokemon = class{
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
    };

    var init = function(){
      $scope.pokemons = [];
      apiService.getPokemons(page).then(function(data){
        for (var i = 0; i < data.cards.length; i++) {
          var item = data.cards[i]
          $scope.pokemons.push(new Pokemon(item));
        }
      });
    };

    init();
  }
];
