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
const form = document.getElementById("reserve");

// Form data

const firstName = document.getElementById('first').value;

// Regex rules

const firstNameRegex = "/^[a-zA-Z]{3,}$/";

form.addEventListener("submit", validate);

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

// form validation

function validate(e) {
  
  e.preventDefault();
  document.getElementById("first").className = "text-control invalid";


  
  // Check 
/*    if (firstNameRegex.test(firstName)) {
      alert("ok");
    }
    else {
      alert("erreur");
    }
*/
}