function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const textInput = document.querySelector("input");
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const arr = [];
  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    const width = 30 + index * 10;

    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  boxes.append(...arr);
};

createButton.addEventListener('click', () => {
  const amount = textInput.value;

  createBoxes(amount);
});

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

destroyButton.addEventListener('click', destroyBoxes);
