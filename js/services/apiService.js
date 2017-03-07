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

    var _getPokemons = function(){
      return _get('cards?page=1&pageSize=10');
    };

    return({
      getPokemons: _getPokemons
    });
  }
]);
