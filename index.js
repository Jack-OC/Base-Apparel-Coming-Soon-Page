const email_input = document.querySelector(".email-input");
const form_btn = document.querySelector(".form-btn");
const errorIcon = document.querySelector(".error-icon")
const errorMsg = document.querySelector(".error-msg")
const email_regex = /^[^@]+@\w+(\.\w+)+\w$/;


   form_btn.addEventListener("click", function () {
      if (email_input.value.length === 0 || !email_input.value.match(email_regex)) {
        errorIcon.classList.add("visible");
        errorMsg.classList.add("visible");
        email_input.style.borderColor = "hsl(0, 93%, 68%)";
      } else {
        errorIcon.classList.add("hidden");
        errorMsg.classList.add("hidden");
      }
    });