# WRITING TESTS

### ENTER COMMAND:

_npm init -y_

adds a package.json file
the -y automatically answers yes to all questions from the init command after installation

now you have a package.json file - a way to keep track of node modules that the project depends on - the project dependencies

now you need to install jest locally for the project

### ENTER COMMAND:

_npm install --sav-dev jest_

this will update the package.json to include the jest testing library

you also now have "node modules" folder where all of the modules for the project are stored

you need to make a few changes in package.json

in the "test" entry you need to change the entry to "jest"

now when you run the command "npm run test" it will run the test

next, create a test.js file

then, import the test function input:

_const { default: TestRunner } = require("jest-runner");_
_const addFive = require(`./addFive`);_

here's the function which checks the expectation of the code:

_test('returns the number plus 5', () => {expect(addFive(1)).toBe(6);})_

save and run the test:

_npm run test_

<!-->

In this video, you'll explore how to install the packages needed to test your JavaScript code and the Jest framework, as well as how to set up a test. Let's say I need to write a function that takes a value and adds five to it. I'll start by creating a new file and naming it addFive.js. The code in the addFive function starts with function addFive and then vowel in parentheses. In between curly braces, I have returned vowel plus five on the next line, and then on a new line, I have module.exports equals add five. This is a simple function which will make it easier to analyze when I write tests for it. I've also added a line to export this function so that it can be used by other files in this project. Now I'll switch over to using the jest testing framework to write some expectations of how this function should behave. Before doing so, I'll check if I have no JS and NPM installed on my system. In the terminal tab, I type node dash, dash version to check for NodeJS. And it shows that I have version 16.15. Now I check for NPM and it tells me I have version 8.5 installed. One more step before I continue is to check if Jest installed by typing Jest dash dash version. In this case, it returns command jest not found, meaning that it is not globally installed on my machine. So I'll install it for this project using only NPM, since jest needs NodeJS to run and NPM as a way to install Node modules into my web projects. I'll first type and run NPM dash y to add a package.json file. The dash y File automatically answers yes to all the questions that init command asks during installation. Now I have my package.json file. In other words, I have a way to keep track of node modules that this project depends on. Since I want to use the jest testing library, I'll need to install it locally, which means installing it for this project. So I run NPM install dash, dash, save, dash, dash Jest. After a few moments, the package.json file will be updated with the addition of the jest testing library. I also have a folder called Node underscore modules, which is where the code for all the modules in this project is stored. In the package.json file, I'll need to make a few changes to the script section. In the test entry, I replace the text that is assigned to test with jest within double-quotes and save it. Now when I run the command NPM run test, it will run the Jest command in this folder. What does this Jest command do? It runs tests for the code in my project. Right now, I only have a single file, addFive.js. So it makes sense to create a test file for this one JavaScript file. I'll name it addFive.test.js. In the naming convention I use, I add the dot test just before the dot js section of the file's name. To set this file up, I'll first import the exported addFive function by typing const, addFive equals require, and then in parentheses, backtick dot, forward slash, addFive, backtick. The reason for the forward-slash is to indicate that the function is in the same folder as a test file, and I've omitted the dot js because Node understands what I mean, even if I don't use it. So my expectation is that this function returns whatever value I input plus five. To check, I'll use the test method with a string as a parameter that describes the test. This string will be output in the command line when I run the test along with the words pass or fail, and the function to run when I execute the NPM run test command. The function will check if my expectation is correct. The string will be output in the command line when I run the test along with the words pass or fail, and the function to run when I execute the NPM run test command. The function will check if my expectation is correct. I have test and as the first argument, I have the string returns the number plus five, which is what I want to output on the command line when the test is run. Then as a second argument, I have a function which checks my expectation, I'll save and run the test and I get back a pass result. In this video, you learned how to ready your system for testing in Jest and how to set up and run a test.
