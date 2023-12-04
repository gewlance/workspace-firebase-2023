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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name="username"]').val();
  var password = $('input[name="password"]').val();
  var confirmedpassword = $('input[name="cpassword"]').val();
  console.log(username, emailaddress, password, confirmedpassword);
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      // ...
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(()=>{
        console.log("updated profile successfully");
        console.log(user.displayName, " is signed up");
        var date = "Wednesday, 29 Nov 23 2023";
        var userinformation ={
          "username":user.displayName,
          "email":emailaddress,
          "signupDate":date
        };
        
        var db = firebase.firebase();
        db.collection("usertable").doc(user.displayName).set(userinformation).then(()=>{

          console.log("You are signed up");
          console.log(user.displayName)
          window.location.href = "Login.html";
        });
      
      });
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
