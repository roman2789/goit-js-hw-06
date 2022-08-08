const input = document.getElementById("validation-input");

input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  event.currentTarget.value.length !== +this.dataset["length"]
    ? this.classList.add("invalid")
    : this.classList.remove("invalid");
  this.classList.add("valid");
  // console.log(this);
}
