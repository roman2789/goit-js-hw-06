const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
let formData = {};

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   !formElements.password.value || !formElements.email.value
//     ? alert(`Всі поля повинні бути заповнені!`)
//     : (formData.password = formElements.password.value) &&
//       (formData.email = formElements.email.value);

//   console.log(formData);
// }

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  !formElements.password.value || !formElements.email.value
    ? alert(`Всі поля повинні бути заповнені!`)
    : (formData = new FormData(event.currentTarget));
  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });
}
