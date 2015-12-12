app.factory("auth-data", function() {
  var storage1 = '';
  var storage2 = '';
  

  return {

  setUid: function(value) {
    storage1 = value;
    return storage1;

  },
  getUid: function() {
    return storage1;
  },
  setName: function(value) {
    storage2 = value;
    return storage2;
    },
  getName: function() {
    return storage2;
  }
}

});