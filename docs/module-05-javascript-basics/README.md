# Module 05 - JavaScript Basics

## Overview
Welcome to the world of programming! This module introduces you to JavaScript, the language that makes web pages interactive. You will learn fundamental programming concepts while applying them to the web.

## Objectives
By the end of this module, you will be able to:
- Understand what JavaScript is and why it is important
- Write and execute basic JavaScript code
- Use variables, data types, and operators
- Create simple functions
- Manipulate the DOM to change page content
- Add basic interactivity to web pages

## Prerequisites
- Modules 1-4: Solid HTML and CSS knowledge
- No programming experience required

## Required Materials
- VS Code with Live Server extension
- Browser with developer console (F12)
- HTML/CSS files from previous modules

## Session Structure
- Session 1: JavaScript Introduction (30 min)
- Session 2: Variables and Data Types (30 min)
- Practical Activity: First Interactive Script (1 hour)

## Theory: What is JavaScript?

JavaScript is a programming language that:
- **Makes pages interactive**: Buttons, forms, animations
- **Processes data**: Calculations, validation, logic
- **Communicates with servers**: Loads dynamic content
- **Runs in the browser**: No special installation needed

### How to Add JavaScript
Three main methods:

1. **Inline** (in HTML tags):
```html
<button onclick="alert('Hello!')">Click me</button>
```

2. **Internal** (in `<script>` tags):
```html
<script>
  console.log("Hello from JavaScript!");
</script>
```

3. **External** (separate file - recommended):
```html
<script src="script.js"></script>
```

## Practical Activity: Your First Script

### Step 1: Set Up JavaScript
1. Create a `script.js` file in your project folder
2. Link it in your HTML: `<script src="script.js"></script>`
3. Open the browser console (F12) to see messages

### Step 2: Variables and Data Types

```javascript
// Variables: store information
let name = "Alice";           // String (text)
let age = 25;                 // Number
let isStudent = true;         // Boolean (true/false)
let grades = [85, 92, 78];    // Array (list)
let person = {                // Object
  name: "Alice",
  age: 25,
  city: "Paris"
};

// Constants (don't change)
const PI = 3.14159;
const DAYS_WEEK = 7;
```

### Step 3: Operators and Expressions

```javascript
// Math
let sum = 10 + 5;        // 15
let difference = 10 - 3; // 7
let product = 4 * 3;     // 12
let quotient = 15 / 3;   // 5
let remainder = 17 % 3;  // 2 (modulo)

// Comparisons
let isEqual = (5 === 5);      // true
let isGreater = (10 > 5);     // true
let isDifferent = (5 !== 3);  // true

// Logical
let and = true && false;  // false (AND)
let or = true || false;   // true (OR)
let not = !true;          // false (NOT)
```

### Step 4: Conditions (if/else)

```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Ternary condition (short)
let message = (hour >= 12) ? "Afternoon" : "Morning";
```

### Step 5: Functions

```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function call
let message = greet("Alice");
console.log(message); // "Hello, Alice!"

// Arrow function (modern)
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12
```

## Project: Simple Calculator

Let's create an interactive calculator:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Calculator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Simple Calculator</h1>

    <div class="calculator">
      <input type="number" id="number1" placeholder="First number" />
      <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input type="number" id="number2" placeholder="Second number" />
      <button id="calculate">Calculate</button>

      <div id="result" class="result">
        Result: <span id="result-value">-</span>
      </div>
    </div>

    <div class="history">
      <h2>History</h2>
      <ul id="history-list"></ul>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
// DOM elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate');
const resultSpan = document.getElementById('result-value');
const historyList = document.getElementById('history-list');

// Calculation history
let history = [];

// Calculation function
function calculate(a, b, operation) {
  let result;

  switch(operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        return "Error: Division by zero!";
      }
      result = a / b;
      break;
    default:
      return "Unknown operation";
  }

  return result;
}

// Display result function
function displayResult(result) {
  resultSpan.textContent = result;
}

// Add to history function
function addToHistory(calc) {
  history.unshift(calc);
  if (history.length > 5) {
    history.pop(); // Keep only the last 5
  }
  updateHistoryDisplay();
}

// Update history display function
function updateHistoryDisplay() {
  historyList.innerHTML = '';
  history.forEach(calc => {
    const li = document.createElement('li');
    li.textContent = calc;
    historyList.appendChild(li);
  });
}

// Event handler for button
calculateBtn.addEventListener('click', function() {
  const number1 = parseFloat(number1Input.value);
  const number2 = parseFloat(number2Input.value);
  const operation = operationSelect.value;

  // Validation
  if (isNaN(number1) || isNaN(number2)) {
    displayResult("Please enter valid numbers");
    return;
  }

  // Calculate
  const result = calculate(number1, number2, operation);

  // Display
  displayResult(result);

  // History
  const calcText = `${number1} ${operation} ${number2} = ${result}`;
  addToHistory(calcText);
});

// Clear fields after calculation
calculateBtn.addEventListener('click', function() {
  number1Input.value = '';
  number2Input.value = '';
  number1Input.focus();
});
```

```css
/* style.css */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.calculator {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

input, select {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.result {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin-top: 10px;
}

.history {
  margin-top: 30px;
}

.history h2 {
  color: #666;
  margin-bottom: 15px;
}

#history-list {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  list-style-type: none;
}

#history-list li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#history-list li:last-child {
  border-bottom: none;
}
```

## Assessment
1. Create a script that asks for the user's name and displays a personalized message with error handling
2. Build a temperature converter (Celsius ↔ Fahrenheit) with input validation
3. Add complete validation to input fields with error messages
4. Implement at least 3 custom functions with comments
5. Handle user events appropriately

## Extra Challenge
Add a simple stopwatch with Start/Stop/Reset buttons:

```javascript
let timer;
let seconds = 0;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    document.getElementById('timer').textContent = seconds;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById('timer').textContent = '0';
}
```

## Next Steps
Congratulations on your first JavaScript steps! In the next module, we will dive deeper into functions and objects to write more organized and powerful code.

## Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info Tutorial](https://javascript.info/)
- [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)