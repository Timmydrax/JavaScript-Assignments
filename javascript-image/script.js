// Container creation..
const container = document.createElement("section");
container.setAttribute("class", "container");
const body = document.body.appendChild(container);

const image_container = document.createElement("div");
image_container.setAttribute("class", "image-container");

//Append the image container to the container
container.appendChild(image_container);

const quote_one = document.createElement("span");
quote_one.setAttribute("class", "quote-one");
quote_one.innerHTML = `<i class="fa-solid fa-quote-left"></i>`;

const image_text = document.createElement("p");
image_text.setAttribute("class", "image-text");
image_text.innerText =
  "See you on the other side, where we will discuss the Events in JavaScript, May the fourth be with you.";

const quote_two = document.createElement("span");
quote_two.setAttribute("class", "quote-two");
quote_two.innerHTML = `<i class="fa-solid fa-quote-right"></i>`;

//Apppend everything to the image-container...
image_container.appendChild(quote_one);
image_container.appendChild(image_text);
image_container.appendChild(quote_two);
