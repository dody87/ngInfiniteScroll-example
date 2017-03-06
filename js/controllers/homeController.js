"use strict";
var homeController =[
  "$scope",
  "$rootScope",
  "apiService",
  function($scope,$rootScope,apiService){
    var topics = [
      'home','opinion','world','national',
      'politics','upshot','nyregion','business',
      'technology','science','health','sports','arts',
      'books','movies','theater','sundayreview','fashion',
      'tmagazine','food','travel','magazine','realestate',
      'automobiles','obituaries','insider'
    ];
    var init = function(){
      //Include init funcitons here.
    };
    init();
  }
];
