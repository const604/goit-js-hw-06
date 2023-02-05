const inputRef = document.querySelector("#font-size-control");
let outputRef = document.querySelector('#text');
console.log(inputRef);
console.log(outputRef);
console.log(outputRef.style.fontSize);

inputRef.addEventListener('change', (event) => {
  console.log(event.currentTarget.value);
outputRef.style.fontSize = event.currentTarget.value;
console.log(outputRef.style.fontSize);
});