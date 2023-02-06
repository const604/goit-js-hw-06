const input = document.querySelector("#font-size-control");
let output = document.querySelector('#text');

input.addEventListener('change', (event) => {
output.style.fontSize = `${event.currentTarget.value}px`;
});