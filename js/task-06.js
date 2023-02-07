const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
  event.currentTarget.value.length == inputRef.dataset.length
    ? inputRef.classList.add("valid").replace("invalid", "valid")
    : inputRef.classList.add("invalid").replace("valid", "invalid");
});
