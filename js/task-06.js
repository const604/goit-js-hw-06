const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", (event) => {
  event.currentTarget.value.length == inputRef.dataset.length
    ? (inputRef.style.borderColor = "#4caf50")
    : (inputRef.style.borderColor = "#f44336");
});