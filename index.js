function showpassword() {
  var password = document.getElementById("password-field");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "Password";
  }
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
console.log(loginButton);
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin") {
    alert("You have successfully logged in.");
    location.replace("http://127.0.0.1:5500/public/dashboard.html");
  } else {
    window.alert("Invalid Login");
  }
});
function registerpage() {
  location.replace("http://127.0.0.1:5500/public/register.html");
}
function test() {
  alert("test");
}
