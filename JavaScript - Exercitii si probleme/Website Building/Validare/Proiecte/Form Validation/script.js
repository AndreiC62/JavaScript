let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("login-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkUsername();
  checkPassword();
  Validate();
});

const checkUsername = function () {
  const correctUser = "new_user";

  let succes = document.querySelector(".fa-check");
  let fail = document.querySelector(".fa-x");

  let error = document.getElementById("userError");

  if (username.value == "" || username.value == null) {
    fail.style.display = "block";
    succes.style.display = "none";

    username.classList.add("fail");
    username.classList.remove("succes");

    error.innerText = "Please Enter Username";
  } else if (username.value === correctUser) {
    fail.style.display = "none";
    succes.style.display = "block";

    username.classList.add("succes");
    username.classList.remove("fail");

    error.innerText = "";
  } else if (username.value !== correctUser) {
    fail.style.display = "block";
    succes.style.display = "none";

    username.classList.add("fail");
    username.classList.remove("succes");

    error.innerText = "Please Enter a valid Username";
  }
};

const checkPassword = function () {
  const correctPassword = "123456789";

  let succes = document.querySelector(".fa-p");
  let fail = document.querySelector(".fa-pa");

  let error = document.getElementById("passError");

  if (password.value == "" || password.value == null) {
    fail.style.display = "block";
    succes.style.display = "none";

    password.classList.add("fail");
    password.classList.remove("succes");

    error.innerText = "Please Enter Password";
  } else if (password.value !== correctPassword) {
    fail.style.display = "block";
    succes.style.display = "none";

    password.classList.add("fail");
    password.classList.remove("succes");

    error.innerText = "Please Enter a valid Password";
  } else if (password.value == "123456789") {
    fail.style.display = "none";
    succes.style.display = "block";

    password.classList.add("succes");
    password.classList.remove("fail");

    error.innerText = "";
  }
};

const Validate = function () {
  let succesHere = document.getElementById("userError");
  let message = document.getElementById("messageForProfessor");

  if (username.value == "new_user" && password.value == "123456789") {
    succesHere.innerText = "Successful Login";
  }
};
