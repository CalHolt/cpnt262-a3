// a few objects
let raiden = {
  power: "electricity",
  age: 25,
};

let rain = {
  power: "water",
  age: 23,
};

let luiKang = {
  power: "fire",
  age: 65,
};
const characterName = ["Raiden", "Sub-Zero", "Scorpion"];

// attaching original array to before section of html page
document.querySelector("#original-array").innerText = characterName;

// After array methods

// practical use: adding another person to a server-list after they subscribe to a membership
document.querySelector("#after-array1").innerText = characterName.push("Reptile");

// practical use: removing a button from a nav bar if page is under construction
document.querySelector("#after-array2").innerText = characterName.slice(0, 3);

// practical use: removing the last li off of a ul or ol. streamline removing each if the list is in multiple spots or across multiple pages. If a company no longer offered the last listed li on a list.
document.querySelector("#after-array3").innerText = characterName.pop();

// _______________________________________________________________

// After object methods

// practical use: checking to see what information a user has added to their account.
document.querySelector("#after-object1").innerText = Object.keys(raiden);

// practical use: displaying user added information to a profile page.
document.querySelector("#after-object2").innerText = Object.values(raiden);


