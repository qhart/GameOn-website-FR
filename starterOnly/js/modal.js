function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-submit");
const btnClose = document.querySelector(".btn-close");
const form = document.getElementById("reserve");
const confirmation = document.getElementById("confirmation");
const modalBody = document.querySelector(".modal-body");

// Form data

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantityPart = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const radioButtons = document.querySelectorAll('input[name="location"]');
const wrapperRadio = document.getElementById("radioButtons");
const termsAndConditions = document.getElementById("checkbox1");

// Regex const

const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

form.addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));
btnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block";
  confirmation.style.display = "none";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function inputValidation(item, state, defaultClass, invalidClass) {
  if (state == false) {
    item.className = defaultClass + " " + invalidClass;
  } else {
    item.className = defaultClass;
  }
}

function firstNameCheck() {
  if (firstName.value.length < 2 || firstName.value === "") {
    inputValidation(firstName, false, "text-control", "invalid");
    return false;
  } else {
    inputValidation(firstName, true, "text-control");
    return true;
  }
}

function lastNameCheck() {
  if (lastName.value.length < 2 || lastName.value === "") {
    inputValidation(lastName, false, "text-control", "invalid");
    return false;
  } else {
    inputValidation(lastName, true, "text-control");
    return true;
  }
}

function emailCheck() {
  if (!emailRegex.test(email.value) || email.value === "") {
    inputValidation(email, false, "text-control", "invalid");
    return false;
  } else {
    inputValidation(email, true, "text-control");
    return true;
  }
}

function birthdayCheck() {
  if (birthdate.value === "") {
    inputValidation(birthdate, false, "text-control", "invalid");
    return false;
  } else {
    inputValidation(birthdate, true, "text-control");
    return true;
  }
}

function quantityPartCheck() {
  if (isNaN(quantityPart.value) || quantityPart.value === "") {
    inputValidation(quantityPart, false, "text-control", "invalid");
    return false;
  } else {
    inputValidation(quantityPart, true, "text-control");
    return true;
  }
}

function radioCheck() {
  let isChecked = false;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      isChecked = true;
      break;
    }
  }
  if (isChecked == false) {
    inputValidation(wrapperRadio, false, "formData", "invalid-radio");
    return false;
  } else {
    inputValidation(wrapperRadio, true, "formData");
    return true;
  }
}

function checkboxVerify() {
  if (!termsAndConditions.checked) {
    inputValidation(
      termsAndConditions,
      false,
      "checkbox-input",
      "invalid-check"
    );
    return false;
  } else {
    inputValidation(termsAndConditions, true, "checkbox-input");
    return true;
  }
}

// form validation

function validate(e) {
  e.preventDefault();

  const firstNameOk = firstNameCheck();
  const lastNameOk = lastNameCheck();
  const emailOk = emailCheck();
  const birthdayOk = birthdayCheck();
  const quantityPartOk = quantityPartCheck();
  const radioOk = radioCheck();
  const checkboxOk = checkboxVerify();

  if (
    firstNameOk &&
    lastNameOk &&
    emailOk &&
    birthdayOk &&
    quantityPartOk &&
    radioOk &&
    checkboxOk
  ) {
    modalBody.style.display = "none";
    confirmation.style.display = "flex";
    btnClose.style.display = "block";
    form.reset();
  }
}
