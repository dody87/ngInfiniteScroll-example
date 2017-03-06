"use strict";
app.factory('apiService', [
  "$http",
  "$q",
  function($http, $q){
    $http.defaults.headers.common['Token'] = localStorage.getItem('auth');

    var reportError = function(error){
      console.error(error);
      //Add issue tracking here.
    };

    var _call = function(method,url,data){
        var deferred = $q.defer();
        $http({
            method: method,
            url: encodeURI(CONFIG.url + url),
            data: data
          }
        ).then(function(response){
          deferred.resolve(response.data);
        },function(response){
          reportError(response.data.error);
          deferred.reject(response.data.error);
        });
        return(deferred.promise);
    };

    var _post = function(url,data){
      return _call('POST',url,data);
    };
    var _get = function(url){
      return _call('GET',url);
    };
    var _put = function(url,data){
      return _call('PUT',url,data);
    };
    var _delete = function(url,data){
      return _call('DELETE',url,data);
    };

    var _postExample = function(data){
      return _post('example',{
        data:data
      });
    };

    var _getExample = function(data){
      return _get('example/'+data);
    };

    return({
      getExample: _getExample,
      postExample: _postExample
    });
  }
]);
