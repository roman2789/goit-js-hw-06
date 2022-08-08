function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeBtnElem = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeBtnElem.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
console.log();
