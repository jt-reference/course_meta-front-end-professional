// When a function calls itself, this is what's known as recursion. Recursion is an alternative way to run repetitive code without the use of loops.

//this will run in an infinte loop since there is no stop condition.
function example() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
  example();
}

// to fix this, you need to add a counter

let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}
