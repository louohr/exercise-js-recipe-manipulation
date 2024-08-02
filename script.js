// Part 1

// 1 The name of the recipe
let recipeName = document.getElementById("recipe-name");
console.log("The name of the recipe is " + recipeName.innerText);

// 2 Recipe tag
console.log("The name of the tag is " + recipeName.tagName);

// 3 Font size
let description = document.querySelector(".description");
let computedStyle = window.getComputedStyle(description);
let fontSize = computedStyle.getPropertyValue("font-size");
console.log('Font size of the paragraph with class "description": ' + fontSize);

// 4 alt attribute
let img = document.querySelector("img");
console.log(img.getAttribute("alt"));

// 5 dimension and the url of image
let image = document.querySelector("img");
let imageUrl = img.src;
let height = img.naturalHeight;
let width = img.naturalWidth;
let imageInfo = {
  url: imageUrl,
  height: height,
  width: width,
};

console.log("Information of the image:", imageInfo);

// 6 ingredients
let pasteIngredients = document.querySelector(".ingredients-list-paste");
// count the number of list items (ingredients) within the paste ingredients list
let numberOfPasteIngredients = pasteIngredients.getElementsByTagName("li").length;
console.log("Number of ingredients for the paste:", numberOfPasteIngredients);

// 7 fourth element ingredients
console.log(pasteIngredients.getElementsByTagName("li")[3].innerText);

// 8 array instructions
let instructions = document.querySelector(".instructions-container");
let instructionItems = instructions.getElementsByTagName("li");
// create an array
let instructionsArray = [];
// iterate through each instruction item and create an object for each
for (let i = 0; i < instructionItems.length; i++) {
  let order = i + 1; // add 1 to start the order from 1
  let text = instructionItems[i].textContent.trim(); // trim to remove whitespaces
  // create object
  let instructionObject = {
    order: order,
    text: text,
  };
  instructionsArray.push(instructionObject);
}
console.log("Array of instruction objects:", instructionsArray);
