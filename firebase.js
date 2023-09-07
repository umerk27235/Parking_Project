import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "@firebase/app-compat";

const firebaseConfig = {
  apiKey: "AIzaSyDuIhyvuP0kefnX4mxjm_aAId1MjeBjl3g",
  authDomain: "login-with-firebase-b301c.firebaseapp.com",
  projectId: "login-with-firebase-b301c",
  storageBucket: "login-with-firebase-b301c.appspot.com",
  messagingSenderId: "204948135376",
  appId: "1:204948135376:web:02a291c94a24500d53edd5",
  measurementId: "G-QTN7FEM77W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

function register() {
  regname = document.getElementById("registerName").value;
  useremail = document.getElementById("registerUsername").value;
  email = document.getElementById("registerEmail").value;
  password = document.getElementById("registerPassword").value;
  reppassword = document.getElementById("registerRepeatPassword").value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or password is not correct");
    return;
  }
  if (
    validate_email(regname) == false ||
    validate_password(useremail) == false ||
    validate_password(reppassword) == false
  )
    alert("Wrong details");
  return;
}
auth
  .createUserWithEmailAndPassword(email, password)
  .then(function () {
    var user = auth.currentUser;
    alert("User created");
  })
  .catch(function (error) {});
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}
function validate_field(field) {}
if (field == null) {
  return false;
}
if (field.length <= 0) {
  return false;
} else {
  return true;
}
