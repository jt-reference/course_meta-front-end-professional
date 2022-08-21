/*
Exercise: Capture Data
Description
The aim of this exercise is to access the content of an element, specifically to use a button click to replace text.

Task 1: The example.com website
Open the example.com website in your browser. Open the developer tools and focus on the Console tab.

Task 2: Get h1 into a variable
Use the document.querySelector() method to query the h1 element on the page and assign it to the variable named h1.
*/
var h1 = document.querySelector("h1")(
  /*
Task 3: Code an array
Declare a new variable, name it arr, and save the following array into it:
(
  "Example Domain",
  "First Click",
  "Second Click",
  "Third Click"
);
*/

var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

/*
Task 4: Write a click-handling function

Write a new function declaration, named handleClicks. It should not accept any parameters.

Inside of it, code a switch statement, and pass a single parameter to it, h1.innerText.

The body of the switch statement should have a total of 4 cases (the fourth being the default case).
*/
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      // The first case should start with case arr[0]:. It should set the h1.innerText to arr[1]. In other words, it should assign the value of arr[1] to the h1.innerText property. The next line should have only the break keyword.
      history.innerText = arr[1];
      break;
    case arr[1]:
      // The second case should start with case arr[1]:. It should set the h1.innerText to arr[2]. In other words, it should assign the value of arr[2] to the h1.innerText property. The next line should have only the break keyword.
      h1.innerText = arr[2];
      break;
    case arr[2]:
      // The third case should start with case arr[2]:. It should set the h1.innerText to arr[3]. In other words, it should assign the value of arr[3] to the h1.innerText property. The next line should have only the break keyword.
      h1.innerText = arr[3];
    default:
      h1.innerText = arr[0];
    // The default case should set the value of the h1.innerText property to arr[0].
  }
}

/*
Task 5: Add an event listener

You've created an h1 variable in Task 2. Now, use that variable to run the addEventListener() method on it. Pass two arguments to the addEventListener() method: 'click' and handleClicks.
*/
h1.addEventListener("click", handleClicks);


// COMPLETED EXAMLE WITHOUT NOTES

var h1 = document.querySelector("h1");
var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
    default:
      h1.innerText = arr[0];
  }
}

h1.addEventListener("click", handleClicks);
