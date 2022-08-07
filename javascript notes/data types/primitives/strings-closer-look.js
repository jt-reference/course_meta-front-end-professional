//FOR loop over arrays

var letters = ["a", "b", "c"];

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

//FOR loop over string
var letters = "abc";

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// Arrays are iterable

var veggies = ["onions", "parsley", "carrot"];

console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; 1 < veggies.length; i++) {
  console.log(veggies[i]);
}

// Strings are literals, too!
var greeting = "howdy";

console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

// not totally sure why both of the above examples are returning infinite 'undefined' results....

// strings!** arrays

var greet = "Hello";
var user = "Lisa";

console.log(greet.pop());

// console.log( greet + user ); //Hello Lisa
// console.log( greet.concat(user) ); //Hello Lisa
