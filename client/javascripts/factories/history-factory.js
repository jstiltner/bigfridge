app.factory("history-factory", function() {
  var bucket = '';

  return {
    setHistory: function(value) {
      bucket = value;
      console.log("bucket :", bucket);
      return bucket;
    },
    getHistory: function() {
      console.log("bucket :", bucket);
      return bucket;
    }
  };
});