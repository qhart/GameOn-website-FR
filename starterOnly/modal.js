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
const submitBtn = document.querySelector(".btn-submit");

// Form data

const firstName = document.getElementById('first').value;

// Regex rules

const firstNameRegex = '[a-z][A-Z]{2,}';


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Disable submit function
function disableSubmit(disabled) {
  if (disabled) {
    document
      .getElementByClass("btn-submit")
      .setAttribute("disabled", true);
  } else {
    document
      .getElementByClass("btn-submit")
      .removeAttribute("disabled");
  }
}

