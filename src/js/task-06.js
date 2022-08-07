const input = document.getElementById("validation-input");

input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  event.currentTarget.value.length === +input.dataset["length"]
    ? (event.currentTarget.style.borderColor = "green")
    : (event.currentTarget.style.borderColor = "red");
}
