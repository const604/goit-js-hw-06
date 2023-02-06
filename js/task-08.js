const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === "" || password.value === ""
    ? alert("Всі поля повинні бути заповнені")
    : console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
