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

console.log(images);

const list = document.querySelector(".gallery");

const makeItems = images.map(({ url, alt }) => {
  return `
  <li class="list-item">
  <img src="${url}" alt="${alt}" width="240">
  </li>`;
}).join("");

list.insertAdjacentHTML("afterbegin", makeItems);

list.style.display = "flex";
list.style.gap = "24px";


console.log(list);
