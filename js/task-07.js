const inputText = document.querySelector("#text");
const inputSizeControl = document.querySelector("#font-size-control");

inputSizeControl.oninput = function () {
    inputText.style.fontSize = inputSizeControl.value + 'px';
};