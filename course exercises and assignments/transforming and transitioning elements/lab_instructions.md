# Transforming and Transitioning Elements

<br>

##### **Tips: Before you Begin**

> - To view this file in Preview mode, right click on this lab_instructions.md file and `Open Preview`

<br>

<br>

### Introduction

In this lab you have been provided with an HTML code. You will practice using the transform and transition properties in CSS by applying them to specific selectors inside your code.&#x20;

### Goal

- To animate the letter boxes created on the webpage using the transform and transition properties inside CSS to add interactivity to the page.&#x20;

### Objectives

- Add set of rules to a specific selector present inside your CSS code for corresponding HTML code.&#x20;
- Add transform and transition properties for the same element in order to add interactivity to these elements.&#x20;

### Learner Instructions

Initial code for the HTML is already provided in the **transform.html** file. Additionally, rules have already been added for the ‘container’ class and the ‘letters’ class along with few more properties defined using the Universal selector. In the **transform.css** file you have to add the rules for other selectors as per the instructions below:&#x20;

Add the following rules for the element 'p' present inside the class 'letters' using descendant selector:&#x20;

**Step 1:** Align the text to center

**Step 2:** Change the background color to RGB value of 250, 150, 100 respectively.&#x20;

**Step 3:** Assign the width to be 70 pixels

**Step 4:** The right side of the margin should be assigned a value of 1.5 pixels

**Step 5:** Change the radius of the border to 15 percent.&#x20;

**Step 6:** Now assign the color of the border an RGB value of 250, 125 and 75 respectively.&#x20;

**Step 7:** Finally change the border style to be solid.&#x20;

Create new rules for the 'even' nth child of the 'p' element that follows the class 'letters'&#x20;

Make use of the descendant selector such that, once you 'hover' over the class 'letters', for the 'nth-child' of the 'p' element inside it, the rules below must be assigned:&#x20;

**Step 8:** Add a transformation where you will rotate the 'p' element tags on Y-axis by 360 degress.&#x20;

**Step 9:** You must also show transition for this over a time span of 0.5 seconds.&#x20;

**Hint:** The rules for 'even' valued children of a given selector can be specified by using a syntax such as:&#x20;
selector:n-th-child(even)&#x20;

Similar to the rules above, you must now create rules for the 'odd' nth-child of the 'p' element that follows the class 'letters'.&#x20;

Make use of the descendant selector such that, once you 'hover' over the class 'letters', for the odd 'nth-child' of the 'p' element inside it, the rules below must be assigned:&#x20;

**Step 10:** Add a transformation where you will rotate the 'p' element tags on X-axis by 360 degress.&#x20;

**Step 11:** You must also show transition for this over a time span of 1.5 seconds.&#x20;

**Hint:** The rules for 'odd' valued children of a given selector can be specified by using a syntax such as:&#x20;
selector:n-th-child(odd)&#x20;
