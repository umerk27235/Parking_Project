function showpassword() {
  var password = document.getElementById("password-field");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
function play() {
  welcomeAudio.play();
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const usernameField = document.getElementById("username-field");
const passwordField = document.getElementById("password-field");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const welcomeAudio = document.getElementById("welcome-audio"); // Added this line

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;

  // Reset previous error messages
  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username.trim() === "") {
    usernameError.textContent = "Username is required.";
    usernameError.style.color = "red";
  }

  if (password.trim() === "") {
    passwordError.textContent = "Password is required.";
    passwordError.style.color = "red";
  }

  if (username === "admin" && password === "admin") {
    // Check for successful login
    // Play the welcome audio
    alert("success");
    play();
    setTimeout(() => {
      location.replace("http://127.0.0.1:5500/public/dashboard.html");
    }, 3000);
  } else {
    // Handle invalid login
    usernameError.textContent = "Invalid login credentials.";
    usernameError.style.color = "red";
  }
});

function registerpage() {
  location.replace("http://127.0.0.1:5500/public/register.html");
}

function registerpage() {
  location.replace("http://127.0.0.1:5500/public/register.html");
}
