
const textInput = document.querySelector('#validation-input');
const length = Number(textInput.dataset.length);

textInput.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === length) {
    textInput.classList.add('valid');
    textInput.classList.remove("invalid");
  }
  else {
    textInput.classList.add("invalid");
    textInput.classList.remove('valid');
  }
});
