# Homework Exercises

## Overview
These exercises allow you to master JavaScript fundamentals: variables, data types, conditions, loops, functions, and DOM manipulation. You will learn to make web pages interactive.

## Beginner Level

### Exercise 5.1: First Steps in JavaScript
**Objective**: Set up JavaScript and execute your first scripts.

**Instructions**:
1. Create a simple HTML page with content
2. Create a separate `script.js` file
3. Link the JavaScript file: `<script src="script.js"></script>`
4. In `script.js`, add:
   - `console.log("Hello JavaScript!")`
   - A comment explaining what the code does
   - A simple alert: `alert("Welcome!")`
5. Open the browser console (F12) to see the messages

**Validation Criteria**:
- [ ] JavaScript file linked correctly
- [ ] Messages visible in console
- [ ] Code commented and organized
- [ ] No errors in console

**Hints**:
- Script should be placed before `</body>` or with `defer`
- `console.log()` displays in Console tab
- Comments use `//` or `/* */`

### Exercise 5.2: Variables and Data Types
**Objective**: Declare and use different types of JavaScript variables.

**Instructions**:
1. Create a file `variables.js`
2. Declare variables of all types:
   - String: `let name = "Alice"`
   - Number: `let age = 25`
   - Boolean: `let isStudent = true`
   - Array: `let colors = ["red", "green", "blue"]`
   - Object: `let person = {name: "Alice", age: 25}`
3. Display variables in console
4. Modify values and redisplay them
5. Test types with `typeof`

**Validation Criteria**:
- [ ] All data types used
- [ ] Variables declared with `let` or `const`
- [ ] Correct display in console
- [ ] Use of `typeof` to check types

**Hints**:
- `const` for values that don't change
- `let` for modifiable variables
- Objects use `{}` and arrays `[]`

### Exercise 5.3: Operators and Expressions
**Objective**: Use mathematical, comparison, and logical operators.

**Instructions**:
1. Create a file `operateurs.js`
2. Test mathematical operators:
   - Addition, subtraction, multiplication, division
   - Modulo (`%`) and power (`**`)
3. Use comparison operators:
   - `===`, `!==`, `>`, `<`, `>=`, `<=`
4. Experiment with logical operators:
   - `&&` (AND), `||` (OR), `!` (NOT)
5. Create complex expressions combining everything

**Validation Criteria**:
- [ ] All mathematical operators tested
- [ ] Strict comparisons (`===`) used
- [ ] Complex logical expressions created
- [ ] Results displayed and explained

**Hints**:
- `5 + 3 * 2` gives 11 (operator precedence)
- `true && false` gives `false`
- `!true` gives `false`

## Intermediate Level

### Exercise 5.4: Conditions and Branches
**Objective**: Master conditional structures if/else and switch.

**Instructions**:
1. Create a file `conditions.js`
2. Use `if/else if/else` for:
   - Checking age for categories (child, teenager, adult)
   - Determining season based on month
   - Calculating grade (A, B, C, D, F)
3. Implement conditions with `switch`:
   - Day of week → activity
   - Color code → color name
   - User type → permissions
4. Use ternary operator: `condition ? value1 : value2`

**Validation Criteria**:
- [ ] Complex if/else structures
- [ ] Appropriate switch statements
- [ ] Ternary operator used
- [ ] Correct logic and edge cases handled

**Hints**:
- `if (age < 13) { category = "child"; }`
- Switch without `break` continues executing
- Ternary for simple conditions

### Exercise 5.5: Basic Functions
**Objective**: Create and use simple JavaScript functions.

**Instructions**:
1. Create a file `fonctions.js`
2. Define functions for:
   - Greeting someone: `function greet(name)`
   - Calculating rectangle area
   - Converting Celsius to Fahrenheit
   - Checking if a number is even
3. Use arrow functions
4. Test functions with different parameters
5. Handle return values

**Validation Criteria**:
- [ ] Functions with parameters and return
- [ ] Arrow functions used
- [ ] Functions tested with different inputs
- [ ] Appropriate return values

**Hints**:
- `function addition(a, b) { return a + b; }`
- Arrow: `const addition = (a, b) => a + b;`
- `return` returns a value, `console.log` only displays

### Exercise 5.6: DOM Manipulation
**Objective**: Interact with HTML elements via JavaScript.

**Instructions**:
1. Create an HTML page with elements (buttons, paragraphs, inputs)
2. In `script.js`, use:
   - `document.getElementById()` to select
   - `document.querySelector()` for CSS selectors
   - `.textContent` to change text
   - `.style` to modify styles
3. Add event listeners:
   - Button that changes background color
   - Input that updates a paragraph in real-time
   - Button that hides/shows elements

**Validation Criteria**:
- [ ] Elements selected correctly
- [ ] Properties modified (text, style)
- [ ] Functional event listeners
- [ ] Smooth user interactions

**Hints**:
- `const button = document.getElementById('myButton');`
- `button.addEventListener('click', function);`
- `element.style.color = 'red';` changes color

## Advanced Level

### Exercise 5.7: Interactive Calculator
**Objective**: Create a complete calculator with user interface.

**Instructions**:
1. Create a page `calculatrice.html` with:
   - Two numeric fields
   - A select for operation (+, -, *, /)
   - A "Calculate" button
   - A result display area
   - A calculation history
2. In JavaScript:
   - Validate inputs (numbers only)
   - Implement all operations
   - Handle division by zero
   - Save history (array)
   - Display history as a list

**Validation Criteria**:
- [ ] Complete user interface
- [ ] Input validation
- [ ] All operations functional
- [ ] Calculation history maintained
- [ ] Appropriate error handling

**Hints**:
- `parseFloat(input.value)` to convert to number
- `isNaN()` to check if it's a number
- Store history in an array

### Exercise 5.8: Mystery Number Game
**Objective**: Create an interactive game where the user guesses a number.

**Instructions**:
1. Create a page `jeu-nombre.html` with:
   - Game instructions
   - Field to enter a number
   - "Guess" button
   - Area to display clues
   - Attempt counter
   - "Play Again" button
2. JavaScript logic:
   - Generate random number (1-100)
   - Compare guess with mystery number
   - Give clues ("Too high", "Too low")
   - Count attempts
   - Allow replay

**Validation Criteria**:
- [ ] Fully functional game
- [ ] Intuitive and responsive interface
- [ ] Useful clues for the player
- - [ ] Attempt count management
- [ ] Replay possibility

**Hints**:
- `Math.floor(Math.random() * 100) + 1` for random number
- Store mystery number in a variable
- Use encouraging messages

## Bonus Challenge

### Exercise 5.9: Todo List (Task List)
**Objective**: Create a task management application with local storage.

**Instructions**:
1. Create a complete application with:
   - Form to add tasks
   - Task list with checkboxes
   - Buttons to edit/delete
   - Filtering (all, active, completed)
   - Counter of remaining tasks
   - Automatic saving (localStorage)
2. Advanced features:
   - Mark as completed
   - Inline task editing
   - Deletion with confirmation
   - Clear completed tasks

**Validation Criteria**:
- [ ] All CRUD features present
- [ ] Modern user interface
- [ ] Data persisted (localStorage)
- [ ] Functional filtering and search
- [ ] Organized and commented code

**Hints**:
- Structure data: `[{id: 1, text: "...", completed: false}]`
- `localStorage.setItem('todos', JSON.stringify(todos))`
- Use event listeners for interactions

### Exercise 5.10: Advanced Form Validation
**Objective**: Create a complete form validation system.

**Instructions**:
1. Create a registration form with:
   - First name, last name, email, password
   - Password confirmation
   - Date of birth, country
   - Terms of use (checkbox)
2. JavaScript validation:
   - Required fields not empty
   - Email in correct format
   - Password strong enough (length, special characters)
   - Password confirmation
   - Minimum age (13 years)
3. User interface:
   - Specific error messages
   - Valid fields highlighted
   - Submission only if all valid

**Validation Criteria**:
- [ ] All validations implemented
- [ ] Useful error messages
- [ ] Intuitive user interface
- [ ] Prevention of invalid submission
- [ ] Real-time visual feedback

**Hints**:
- Regex for email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- `input.addEventListener('input', validateFunction)`
- Use CSS classes for states (valid, invalid)

## Inter-module Integration

### Exercise 5.11: Module 6 Preparation
**Objective**: Refactor JavaScript code with organized functions.

**Instructions**:
1. Take your todo list application
2. Refactor the code:
   - Create separate functions for each feature
   - Use objects to store data
   - Organize code in logical sections
   - Add detailed comments
3. Prepare for advanced concepts:
   - Functions in objects (methods)
   - Arrays with advanced methods
   - Basic error handling
4. Document the improvements made

**Validation Criteria**:
- [ ] Refactored and organized code
- [ ] Modular functions created
- [ ] Explanatory comments added
- [ ] Preparation for objects visible
- [ ] Features preserved

**Hints**:
- Group similar functions together
- Use descriptive names for functions
- Prepare objects to store application state

### Exercise 5.12: Complete Interactive Application
**Objective**: Create a complete web application combining HTML, CSS, and JavaScript.

**Instructions**:
1. Create a "Recipe Manager" application
2. Features:
   - Add/edit/delete recipes
   - Categorize recipes (appetizer, main course, dessert)
   - Search by name or ingredients
   - Grid/list display
   - Recipe rating
3. Modern interface:
   - Responsive design (CSS Grid/Flexbox)
   - Animations and transitions
   - Consistent theme with CSS variables
4. Data storage (localStorage)

**Validation Criteria**:
- [ ] Fully functional application
- [ ] Modern and intuitive user interface
- [ ] Data correctly persisted
- [ ] Operational search and filtering
- [ ] Organized JavaScript code

**Hints**:
- Structure data: `{id, name, ingredients: [], instructions, category, rating}`
- Use HTML templates to generate content
- Separate logic (JavaScript) from presentation (HTML/CSS)

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Functionality**: JavaScript code executes without errors
- **Interactivity**: User events handled correctly
- **Validation**: User inputs validated and secured
- **Performance**: Efficient code without blocking
- **Maintainability**: Commented and organized code
- **Compatibility**: Works in modern browsers

## Help Resources

- [JavaScript MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info Tutorial](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [JavaScript Console Methods](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

## Next Steps

These exercises perfectly prepare you for Module 6 where you will learn advanced functions and JavaScript objects. You will now have a solid foundation to create interactive web applications!