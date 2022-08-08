const input = document.getElementById("validation-input");

input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (this.value && +this.getAttribute("data-length") !== this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else if (this.value) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.className = "";
  }
}

// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// }
