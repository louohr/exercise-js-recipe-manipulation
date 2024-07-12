// Part 2

// 1
let logoText = document.querySelector(".logo-text");
logoText.style.color = "black";

// 2
document.querySelector("header").style.justifyContent = "flex-start";

// 3
header.style.borderBottomColor = "lightgray";

// 4
let recipeName = document.getElementById("recipe-name");
recipeName.innerText = "Frozen Cheesecake";

// 5 add clock
let timeContainer = document.querySelector("div > span");
timeContainer.classList.add("material-icons");

// 6
let time = document.querySelector(".time");
time.innerText = "60+ min";

// 7 insert new image
let img = document.querySelector("img");
const newImage = "assets/frozen-cheesecake-slice.jpg";
img.setAttribute("src", newImage);

// 8
let ingredients = document.querySelector(".ingredients-container");
ingredients.style.backgroundColor = "#f9f9f9";

// 9
let ingredientsListBottom = document.querySelector(".ingredients-list-bottom");

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
listItem1.textContent = "15st digestivekex";
listItem2.textContent = "Lite smör";

ingredientsListBottom.innerHTML = "";
ingredientsListBottom.appendChild(listItem1);
ingredientsListBottom.appendChild(listItem2);

// 10
let ingredientsListPaste = document.querySelector(".ingredients-list-paste");
let thirdIngredient = ingredientsListPaste.children[2];
thirdIngredient.textContent = "3 tsk vaniljsocker";

// 11
let missingIngredient = document.createElement("li");
missingIngredient.textContent = "400 g naturell philadelphiaost";
ingredientsListPaste.appendChild(missingIngredient);

// 12
let instructionsHeading = document.querySelector(".instructions");
instructionsHeading.style.boxShadow = "none";

// 13
let instructionsList = document.querySelector(".instructions-list");
let listItemNmbr2 = instructionsList.children[1];
let listItemNmbr9 = instructionsList.children[8];
listItemNmbr2.textContent =
  "Separera äggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
listItemNmbr9.textContent = "Ställ in i frysen över natten.";
