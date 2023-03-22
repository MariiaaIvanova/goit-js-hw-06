
const listItem = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${listItem.length}`);

const categoryEl = document.querySelector('.item');

listItem.forEach(el =>
console.log(`Category: ${el.firstElementChild.textContent} \nElements: ${el.lastElementChild.childElementCount}`));



 
// const listItem = document.querySelectorAll(".item");
// console.log(`Number of categories: ${listItem.length}`);
// const categoryEl = document.querySelector(".item");

// // listItem.forEach(el => console.log (
// // `Category: ${el.firstElementChild.textContent}
// // Elements: ${el.lastElementChild.querySelectorAll('li').length}`
// // ));

