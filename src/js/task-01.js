const categoriesListEl = document.querySelector("#categories");
console.log("Number of categories: ", categoriesListEl.children.length);

const categorieItemEl = document.querySelectorAll(".item");
// console.log(categorieItemEl);

categorieItemEl.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
