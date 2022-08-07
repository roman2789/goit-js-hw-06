const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListElem = document.querySelector(".gallery");

const galleryItemsElem = images
  .map((item) => `<li><img src=${item.url} alt=${item.alt} width=250 height=100%></li>`)
  .join("");

galleryListElem.style.display = "flex";
galleryListElem.style.justifyContent = "space-around";
galleryListElem.style.listStyleType = "none";

galleryListElem.insertAdjacentHTML("beforeend", galleryItemsElem);
console.log(galleryListElem);
