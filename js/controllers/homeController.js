"use strict";
var homeController =[
  "$scope",
  "$rootScope",
  "apiService",
  function($scope,$rootScope,apiService){
    var Pokemon = class{
      constructor(data){
        this.id = data.nationalPokedexNumber;
        this.name = data.name;
        this.img = data.imageUrl;
        this.subtype = data.subtype;
        this.rarity = data.rarity;
      }
    };

    var init = function(){
      $scope.pokemons = [];

      apiService.getPokemons().then(function(data){
        console.log(data);
        for (var i = 0; i < data.cards.length; i++) {
          var item = data.cards[i]
          $scope.pokemons.push(new Pokemon(item));
        }
      });
    };
    init();
  }
];
