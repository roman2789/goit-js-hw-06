const input = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

input.addEventListener("change", onInputChange);

function onInputChange(event) {
  outputText.style.fontSize = event.currentTarget.value + "px";
}
