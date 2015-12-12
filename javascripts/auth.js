app.controller("AuthCtrl", 

  ["$q", "$http", "$scope","$firebaseAuth", "$firebaseArray", "auth-data", "$location", function($q, $http, $scope, $firebaseAuth, $firebaseArray, auth, $location) {
  var ref = new Firebase("https://bigfridge.firebaseio.com/");
 
    var authData = ref.getAuth();
    console.log("authdata", authData );
      
      // If no authData exists
      if (authData === null){ 
        
        // Getting auth from Facebook
        ref.authWithOAuthPopup("facebook", function(error, authData) {
      
          // Setting uid to newuid
          auth.setUid(authData.uid);
          
          // Declaring variables 
          var usersref = ref.child("users");
          var userExists = false;
          var userName = authData.facebook.displayName;
          var userImage = authData.facebook.profileImageURL;
          var userId = authData.facebook.id;
          console.log("userId", userId );

          //Using real time snapshot because it kept adding users each time we signed in
          usersref.once("value", function(dataSnapshot) {
            dataSnapshot.forEach(function(childSnapshot) {
              //If facebook uid matches, then user already exits
              console.log("childSnapshot.val().uid",childSnapshot.val().uid);
              console.log("authData.uid",authData.uid );
              if (childSnapshot.val().uid === authData.uid) {
                userExists = true;
                alert("Welcome back");
                // $('.show').remove();
                }
              });
              //If doesn't match, then push uid, image, displayname to user in firebase
                if (userExists === false) {
                    console.log("push to firebase attempted");
                    usersref.child(userId).set({

                    
                        "user_name":userName,
                    "user_image": userImage
                    });
                    $('.show').remove();
                    console.log("success");
                    // $('#myModal').modal('show');
                }   
          });
      });
    } else {
            auth.setUid(authData.uid);
            auth.setName(authData.facebook.displayName);

            // window.location.assign("home.html");
            // profileInputFields.profileInputDisplay();
            console.log("Already logged in as ", auth.getUid() );
            // $('.show').remove();

        } 

  
}]);