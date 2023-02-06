const ulCategoriesRef = document.querySelector('#categories');
const categRef = ulCategoriesRef.querySelectorAll(`li.item`);
console.log(`Number of categories:`, categRef.length);

const animalsItemsRef = ulCategoriesRef.firstElementChild;
const animalsTitleRef = animalsItemsRef.querySelector(`h2`);
console.log(`Category:`, animalsTitleRef.textContent);

const animalsItemRef = animalsItemsRef.querySelectorAll(`li`);
console.log(`Elements:`, animalsItemRef.length);


const productsItemsRef = animalsItemsRef.nextElementSibling;
const productsTitleRef = productsItemsRef.querySelector(`h2`);
console.log(`Category:`, productsTitleRef.textContent);

const productsItemRef = productsItemsRef.querySelectorAll(`li`);
console.log(`Elements:`, productsItemRef.length);



const technologiesItemsRef = productsItemsRef.nextElementSibling;
const technologiesTitleRef = technologiesItemsRef.querySelector(`h2`);
console.log(`Category:`, technologiesTitleRef.textContent);

const technologiesItemRef = technologiesItemsRef.querySelectorAll(`li`);
console.log(`Elements:`, technologiesItemRef.length);
