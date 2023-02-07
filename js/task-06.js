const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  const currentActiveValid = document.querySelector(".valid");
  const currentActiveInvalid = document.querySelector(".invalid");
  if (currentActiveValid || currentActiveInvalid) {
    inputRef.classList.remove("valid") || inputRef.classList.remove("invalid");
  }
  event.currentTarget.value.length == inputRef.dataset.length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});
