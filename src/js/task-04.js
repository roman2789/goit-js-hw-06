const incrementBtnElem = document.querySelector('[data-action = "increment"]');
const decrementBtnElem = document.querySelector('[data-action = "decrement"]');
const counterValue = document.getElementById("value");

let count = 0;

const handleIncrement = () => {
  count++;
  counterValue.innerHTML = count;
};
incrementBtnElem.addEventListener("click", handleIncrement);

const handleDecrement = () => {
  count--;
  counterValue.innerHTML = count;
};
decrementBtnElem.addEventListener("click", handleDecrement);
