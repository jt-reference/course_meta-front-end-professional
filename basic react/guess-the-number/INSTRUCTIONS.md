# Instructions

## Task

1. This task's starting point is the App component's h1 element that reads: "Task: Add a button and handle a click event". As a first step in this task, you'll need to add a button element, with an opening and a closing button tag.
2. In between the opening and closing button tags, add teh following text: `Guess the number between 1 and 3`.
3. Inside the opening button tag, add the onClick event-handling attribute, and pass it the following JSX expression: `{handleClick}`.
4. Above the return statement of the App component - but still inside the App function - add the following ES5 function declaration: 
```js
function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}
```
5. Save your changes and run the app. Preview it in the browser. You should be able to click a button, which will trigger the handleClick function. The handleClick function will in turn show a prompt pop up which you can type into. After you've finished, an alert pop up will show computer's "choice" and your guess. After you click "ok" to close the alert, you'll be able to click the button again and try matching the number that the computer "chose" again.
