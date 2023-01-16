const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const categoriesArray = [...numberOfCategories]
  .map(cat => {
    return `Category: ${cat.children[0].textContent} Elements: ${cat.children[1].children.length}`
  })
  .join('\n');
    
console.log(categoriesArray);