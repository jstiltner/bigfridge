app.factory("pictures-factory", function($q, $http) {
  return {
   getPics: function(url) {
     return $q(function(resolve, reject) {
       $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43bea15728db44fd9518bfe94f8527bb&format=json&nojsoncallback=1&text='+ url +'&extras=url_o')        
         .success(
           function(objectFromJSONFile) {
             // console.log("test", objectFromJSONFile);
             resolve(objectFromJSONFile);
           },function(error) {
             reject(error);
           }
         );  
      });
    }
  };
});