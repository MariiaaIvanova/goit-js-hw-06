const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEL = document.querySelector("#ingredients");

const ingredientArr = ingredients.map(ingredient => { 
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList = "item";
  return liEl;

});
console.log(ingredientsEL);
ingredientsEL.append(...ingredientArr);



// const listEL = document.createElement("ul");
// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   listEL.appendChild(liEl);
  
// }
// console.log(listEL)
// document.body.appendChild(listEL);