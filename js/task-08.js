const form = document.querySelector("form");
const values = {
  email: "email",
  password: "password",
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      return alert("Всі поля повинні бути заповнені");
    }
    values.email = email.value;
    values.password = password.value;
  event.currentTarget.reset();
  return console.log(values);
});