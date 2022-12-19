// Validate form input
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cfPassword = document.querySelector("#cf-password");
let form = document.querySelector("form");

let showError = (input, message) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
};

let showSuccess = (input) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmptyPassword(password);
  if (!checkEmptyPassword(password)) {
    checkLengthPassword(password);
    if (!checkMatchPassword(password, cfPassword)) {
      return;
    }
  }

  checkEmail(email);

  checkEmptyUsername(userName);
  if (!checkEmptyUsername(userName)) {
    checkLengthUsername(userName);
    return;
  }
});

let checkEmptyUsername = (username) => {
  username.value = username.value.trim();
  if (!username.value) {
    showError(username, "Enter Username");
    return true;
  }
  return showSuccess(username);
};

let checkLengthUsername = (username) => {
  username.value = username.value.trim();
  if (username.value.length < 3) {
    showError(username, `At least 3 characters`);
    return true;
  }
  if (username.value.length > 8) {
    showError(username, `No more than 8 characters`);
    return true;
  }
  return showSuccess(username);
};

let checkEmail = (email) => {
  email.value = email.value.trim();
  if (!email.value) {
    showError(email, "Email Invalid");
    return true;
  }
  return showSuccess(email);
};

let checkEmptyPassword = (password) => {
  password.value = password.value.trim();
  if (!password.value) {
    showError(password, "Enter Password");
    return true;
  }
  return showSuccess(password);
};

let checkLengthPassword = (password) => {
  password.value = password.value.trim();
  if (password.value.length < 5) {
    showError(password, `At least 5 characters`);
    return true;
  }
  return showSuccess(password);
};

let checkMatchPassword = (password, cfPassword) => {
  if (password.value !== cfPassword.value) {
    showError(cfPassword, "Those passwords didn't match. Try again.");
    return true;
  }
  return showSuccess(cfPassword);
};

// Show Password & Confirm Password
let showPassword = document.querySelector(".show-password");
let showCfPassword = document.querySelector(".show-cfpassword");

showPassword.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
  } else {
    password.type = "password";
    showPassword.innerHTML = `<ion-icon class="icon-icon" name="eye-outline"></ion-icon
    >`;
  }
});

showCfPassword.addEventListener("click", (e) => {
  e.preventDefault();
  if (cfPassword.type === "password") {
    cfPassword.type = "text";
    showCfPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
  } else {
    cfPassword.type = "password";
    showCfPassword.innerHTML = `<ion-icon class="icon-icon" name="eye-outline"></ion-icon
    >`;
  }
});
