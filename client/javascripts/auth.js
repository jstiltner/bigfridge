app.controller("AuthCtrl",

  ["$q", "$http", "$scope","$firebaseAuth", "$firebaseArray", "auth-data", "$location", function($q, $http, $scope, $firebaseAuth, $firebaseArray, auth, $location) {
    var ref = new Firebase("https://bigfridge.firebaseio.com/");
    var authData = ref.getAuth();

      // If no authData exists
      if (authData === null){

        // Getting auth from Facebook
        ref.authWithOAuthRedirect("facebook", function(error, authData) {
            if (error){ throw err };

          // Setting uid to newuid
          auth.setUid(authData.uid);

          // Declaring variables
          var usersref = ref.child("users");
          var userExists = false;
          var userName = authData.facebook.displayName;
          var userImage = authData.facebook.profileImageURL;
          var userId = authData.facebook.id;
          console.log("userId", userId );

          //Using real time snapshot
          dusersref.once("value", function(dataSnapshot) {
            dataSnapshot.forEach(function(childSnapshot) {
              //If facebook uid matches, then user already exits
              console.log("childSnapshot.val().uid",childSnapshot.val().uid);
              console.log("authData.uid",authData.uid );
              if (childSnapshot.val().uid === authData.uid) {
                userExists = true;
                alert("Welcome back");

                }
              });

              //If doesn't match, then store uid, image_link, displayname to /user in firebase
                if (userExists === false) {
                    usersref.child(userId).set({


                        "user_name":userName,
                    "user_image": userImage
                    });
                    $('.show').remove();
                    console.log("success");
                }
          });
      });
    } else {
            auth.setUid(authData.facebook.cachedUserProfile.id);
            auth.setName(authData.facebook.displayName);

            console.log("Already logged in as ", auth.getUid() );

        }


}]);
