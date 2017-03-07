"use strict";
app.factory('apiService', [
  '$http',
  '$q',
  'CONFIG',
  function($http, $q, CONFIG){
    var _get = function(method){
      var deferred = $q.defer();
      $http.get(encodeURI(CONFIG.api.url + method)).then(function(response){
        deferred.resolve(response.data);
      },function(response){
        console.error(response);
        deferred.reject(response);
      });
      return(deferred.promise);
    };

    var _getPokemons = function(page){
      return _get('cards?page='+page+'&pageSize=12');
    };

    return({
      getPokemons: _getPokemons
    });
  }
]);
