let myDiv = document.getElementById("myDiv");

let heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.className = "highlight";
myDiv.appendChild(heading);

let paragraph = document.createElement("p");
paragraph.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(paragraph);

let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "I hope you are doing well";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "Good morning";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Good afternoon";
ul.appendChild(li3);

myDiv.appendChild(ul);

let newItemCount = 1;
let button = document.getElementById("addItemBtn");

button.addEventListener("click", function () {
  let newLi = document.createElement("li");
  newLi.textContent = "New List Item " + newItemCount;
  newLi.style.color = getRandomColor();
  ul.appendChild(newLi);
  newItemCount++;
});

myDiv.addEventListener("click", function () {
  myDiv.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  let i = 0;
  while (i < 6) {
    color += letters[Math.floor(Math.random() * 16)];
    i++;
  }
  return color;
}
