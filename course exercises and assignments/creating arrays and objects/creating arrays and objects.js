/*
Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console. */

var clothes = [];
clothes.push("Brooks Brothers Jacket");
clothes.push("Danskos");
clothes.push("L.A. Hat");
clothes.push("Mala Beads");
clothes.push("Martin Guitars Shirt");
clothes.pop();
clothes.push("Hawaiian Shirt");
console.log(clothes[2]);

/* Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.*/

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
