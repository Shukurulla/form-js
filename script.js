const email = document.querySelector("#email");
const check = document.querySelector(".bi-check-lg");
const password = document.querySelector("#password");
const eye = document.querySelector(".bi-eye");
const button = document.querySelector("button");
const formInput = document.querySelectorAll(".form__input");

function validate(value) {
  if (value.length == 0) {
    formInput[0].classList.add("error");
    formInput[0].classList.remove("success");
    check.classList.add("bi-x-lg");
    check.classList.remove("bi-check-lg");
  } else {
    formInput[0].classList.remove("error");
    formInput[0].classList.add("success");
    check.classList.remove("bi-x-lg");
    check.classList.add("bi-check-lg");
  }
}

eye.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eye.classList.add("bi-eye-slash");
    eye.classList.remove("bi-eye");
  } else {
    password.type = "password";
    eye.classList.remove("bi-eye-slash");
    eye.classList.add("bi-eye");
  }
});

email.addEventListener("input", () => {
  validate(email.value);
});

// button.addEventListener("click", (e) => {
//   e.preventDefault();
// });

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    formInput[1].classList.add("error");
    formInput[1].classList.remove("success");
  } else {
    formInput[1].classList.remove("error");
    formInput[1].classList.add("success");
  }
});

const data = fetch("http://localhost:3000/request")
  .then((data) => data.json())
  .then((res) => console.log(res));
