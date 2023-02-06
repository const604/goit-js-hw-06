function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const form = document.querySelector("#controls");

form.addEventListener("submit", (event) => {

  const formElements = event.currentTarget.elements;
  
  console.dir(formElements);

  const createBtn = formElements.dataset.create;
  
  console.log(createBtn);

});
