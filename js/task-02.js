const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListElem = document.querySelector("#ingredients");

const ingredientsAllItemsElem = [];
ingredients.forEach((element) => {
  const ingredientsItemElem = document.createElement("li");
  ingredientsItemElem.classList.add("item");
  ingredientsItemElem.textContent = element;
  ingredientsAllItemsElem.push(ingredientsItemElem);
});

ingredientsListElem.append(...ingredientsAllItemsElem);
