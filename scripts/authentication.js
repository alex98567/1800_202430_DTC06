// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var user = authResult.user;                       // get the user object from the Firebase authentication database
      if (authResult.additionalUserInfo.isNewUser) {         //if new user
        db.collection("users").doc(user.uid).set({         //write to firestore. We are using the UID for the ID in users collection
          name: user.displayName,                    //"users" collection
          email: user.email,                         //with authenticated user's ID (user.uid)
          country: "Canada",                      //optional default profile info      
          school: "BCIT",                          //optional default profile info
          favorites: [],
          profile: "https://upload.wikimedia.org/wikipedia/commons/6/6f/BCIT_logo.svg"
        }).then(function () {
          console.log("New user added to firestore");
          window.location.assign("home.html");       //re-direct to home.html after signup
        }).catch(function (error) {
          console.log("Error adding new user: " + error);
        });
      } else {
        return true;
      }
      return false;
    },
    uiShown: function () {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'home.html',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);