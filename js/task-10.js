function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtnElem = document.querySelector("[data-create]");
const resetBtnElem = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let totalBoxes = 0;

input.addEventListener("input", (event) => {
  totalBoxes = +event.currentTarget.value;
});

createBtnElem.addEventListener("click", onCreateBtnClick);
resetBtnElem.addEventListener("click", onResetBtnClick);

function onCreateBtnClick(amount) {
  boxes.innerHTML = "";
  amount = totalBoxes;
  let defaultSize = 30;
  for (let i = 1; i <= amount; i++) {
    let size = defaultSize + i * 10;
    let box = document.createElement("div");

    box.style = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;

    boxes.appendChild(box);
    input.value = "";
  }
}
function onResetBtnClick() {
  boxes.innerHTML = "";
  input.value = "";
}
