const firebaseConfig = {
    apiKey: "AIzaSyD9kvR5kvrW5pjYoHHpaLrOK5-EeYEb47c",
    authDomain: "emsdemo-f7aca.firebaseapp.com",
    databaseURL: "https://emsdemo-f7aca-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "emsdemo-f7aca",
    storageBucket: "emsdemo-f7aca.appspot.com",
    messagingSenderId: "771731028396",
    appId: "1:771731028396:web:fdb89d795b3b118a2ce209"
  };

//initialisation
firebase.initializeApp(firebaseConfig);

//auth and database instance
const auth = firebase.auth();

const database = firebase.database();


//creating account 
function createAccount() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  userName = document.getElementById("userName").value;

  //validation
  if (emailValidation(email) == false || passValidate(password)==false) {
    return alert("check credentials");
  }

  auth.createUserWithEmailAndPassword(email, password).then(function () {
    var user = auth.currentUser;
    var dbReference = database.ref();
    var userData = {
      email: email,
      name: userName,
    };
    //saving in db
    dbReference.child("user/" + user.uid).set(userData);
    alert("You are registered successfully").catch(function (error) {
      emsg = error.message;
      alert(errorMsg);
    });
  });
}

//user sign in function
function signIn() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    auth.signInWithEmailAndPassword(email, password).then(alert("signed in"))

}




function emailValidation(email) {
  exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (exp.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function passValidate(password) {
    if(password<6){
        alert("check credentials")
        return false
    }else{return true}
}
