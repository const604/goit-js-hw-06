const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInputChange = (event) => {
  event.currentTarget.value.length > 0
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = "Anonymous");
};
input.addEventListener("input", onInputChange);
