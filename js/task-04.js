
const decrementBtn = document.querySelector('[data-action="decrement"]');
const removeBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector('#value');
let counterValue = Number(spanValue.textContent);

const handleClick = () =>
    {counterValue += 1;
return spanValue.textContent = counterValue};

const handle = () =>
    {counterValue -= 1;
    return spanValue.textContent = counterValue
};

removeBtn.addEventListener("click", handleClick);
decrementBtn.addEventListener("click", handle);