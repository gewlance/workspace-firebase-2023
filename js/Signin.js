const firebaseConfig = {
  apiKey: "AIzaSyDh7XeTWyEZnULNde-wQAHi0YYxFNntXhQ",
  authDomain: "database2023-9510d.firebaseapp.com",
  projectId: "database2023-9510d",
  storageBucket: "database2023-9510d.appspot.com",
  messagingSenderId: "414589827395",
  appId: "1:414589827395:web:5ccfe3d7b039fd6c8397f6",
  measurementId: "G-4LCJ70N7GV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('input[name="login"]').val();
  var password = $('input[name="pwd"]').val();

   console.log(email);
   console.log(password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});