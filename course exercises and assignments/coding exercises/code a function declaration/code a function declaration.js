/*
Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5".

Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums are not numbers, you'll throw an error.

Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  

Once you've completed this task, all the code inside the try block will be inside these conditional statements.

Task 5: Update the catch block
Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

Task 6: Invoke the addTwoNums function
Invoke the addTwoNums function using 5 and "5" as arguments.

Task 7: Add another console log under the addTwoNums function invocation
Add another line of code that console logs the string "It still works".

*/

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else console.log("please pass correct arugments to the function");
}
letterFinder(1, 7);
letterFinder("cat", "c");

// there was an error in the Meta solution... their solution had "for(i = 0.....)", but it's actualy "for (var i = 0......)"
