const btnSubmit = document.getElementById(".btn-submit");
const form = document.getElementById(".form");

btnSubmit.addEventListener("click", event => {
  form.classList.add("form-up");
});
