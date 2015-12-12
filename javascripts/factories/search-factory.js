app.factory("search-factory", function() {
  var bucket = '';

  return {
    setSearch: function(value) {
      bucket = value;
      return bucket;
    },
    getSearch: function() {
      // console.log("bucket :", bucket);
      return bucket;
    }
  };
});