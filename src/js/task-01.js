const categoriesListElem = document.querySelector("#categories");
console.log("Number of categories: ", categoriesListElem.children.length);

const categorieItemElem = document.querySelectorAll(".item");
// console.log(categorieItemEl);

categorieItemElem.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
