// Array methods:

// const skillers = ["Adrian", "Williams", "Gonzalo", "Sofía", "Mariano"]; // Original array of skillers.

const skillers = ["Gonzalo", "Alan", "Mariano", "German", "Maximiliano"];

const orderedArray = [...skillers].sort(); // Sorts names in alphabetical order. Returns mutated array.
const orderedByLength = [...skillers].sort((a, b) => a.length - b.length); // Sorts names by length. Returns mutated array.
const reversedArray = [...skillers].reverse(); // Reverses array. Returns mutated array.
const newAtEnd = [...skillers].push("John Doe"); // Adds a name to the end of the array. Returns length of the new array.
const newAtStart = [...skillers].unshift("John Doe"); // Adds a name to the beginning of the array. Returns length of the new array.
const firstOut = [...skillers].shift(); // Removes first name from the array. Returns added name.
const lastOut = [...skillers].pop(); // Removes last name from the array. Returns added name.

console.log(
  `%c Original array: ${skillers}`,
  "background: #3693af; color: white"
); // Original, unmutated array.

console.log("Ordered by length: ", orderedByLength);
console.log("Ordered alphabetically: ", orderedArray);
console.log("Reversed array: ", reversedArray);
console.log("Name added at the end, new length: ", newAtEnd);
console.log("Name added at the beginning, new length: ", newAtStart);
console.log("First name out: ", firstOut);
console.log("Last name out: ", lastOut);
