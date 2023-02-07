const ulCategoriesRef = document.querySelector("#categories");
let items = ulCategoriesRef.querySelectorAll(`li.item`);
console.log(`Number of categories:`, items.length);

const categorItem = items.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});