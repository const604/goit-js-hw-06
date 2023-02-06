const button = document.querySelector("button");
const span = document.querySelector(".color");

button.addEventListener("click", () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  span.style.color = getRandomHexColor();
  console.log(span.style.color);
});
