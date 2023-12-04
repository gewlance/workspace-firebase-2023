// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var currentuser="";
var currentemail= "";

//check if user is logged in or out
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    currentuser = user.displayName;
    currentemail = user.email;
    console.log("Logged in ", currentuser, currentemail);
  }else{
    console.log("User is logged out");
    window.location.href="Login.html";
  }
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

//SIGN OUT CODE
$("#signout").click(function(e) {
  firebase.auth().signOut().then(()=>{
    console.log("user sign out");
    window.location.href = "index.html";
  }).catch((error)=> {
    console.log(error.message);
  });
});

// update the result in table
