const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInputChange = (event) => {
output.textContent = event.currentTarget.value;
}
input.addEventListener('input', onInputChange)