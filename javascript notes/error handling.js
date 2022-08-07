/* Syntax, logical and runtime errors

Here are some of the most common errors in JavaScript: 

- ReferenceError 
    A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

- SyntaxError 
    Any kind of invalid JavaScript code will cause a SyntaxError.

- TypeError 
    A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

- RangeError
    A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

There are some other errors in JavaScript. These other errors include: 

- AggregateError 

- Error 

- InternalError 

- URIError
*/

// console.log(a + b);
// console.log("this line is never reached");

// throw new ReferenceError();

// try - catch method

try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was a Reference Error");
}
console.log("My Program does not stop");

// to intentionally throw an error

try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was a Reference Error");
}
console.log("My Program does not stop");
