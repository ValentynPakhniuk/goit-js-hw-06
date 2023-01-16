
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputListener);

function onInputListener(event) {
    output.textContent = event.currentTarget.value || 'Anonymous';
};