const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredients_list = document.querySelector('#ingredients');

const createIngredients = arrIngredients => arrIngredients.map((ingredient) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    return li;
  });

const listLi = createIngredients(ingredients);
ingredients_list.append(...listLi);
