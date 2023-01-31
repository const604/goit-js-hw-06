const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.log(list);

const potatoes = document.createElement('li');
potatoes.textContent = "Potatoes";
potatoes.classList.add('item');

const mushrooms = document.createElement('li');
mushrooms.textContent = "Mushrooms";
mushrooms.classList.add('item');

const garlic = document.createElement('li');
garlic.textContent = "Garlic";
garlic.classList.add('item');

const tomatos = document.createElement('li');
tomatos.textContent = "Tomatos";
tomatos.classList.add('item');

const herbs = document.createElement('li');
herbs.textContent = "Herbs";
herbs.classList.add('item');

const condiments = document.createElement('li');
condiments.textContent = "Condiments";
condiments.classList.add('item');

list.prepend(potatoes, mushrooms, garlic, tomatos, herbs, condiments)

console.log(list);