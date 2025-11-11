# Module 06 - JavaScript Functions and Objects

## Overview
Now that you have mastered the basics of JavaScript, let's learn how to organize your code with functions and objects. These concepts will allow you to write more modular, reusable, and maintainable code.

## Objectives
By the end of this module, you will be able to:
- Create and use advanced functions
- Work with objects and their properties
- Understand arrays and their methods
- Use loops to automate tasks
- Handle errors with try/catch
- Organize code into logical modules

## Prerequisites
- Module 05 - JavaScript Basics
- Understanding of variables and conditions

## Required Materials
- VS Code with JavaScript console
- Browser with developer tools

## Session Structure
- Session 1: Advanced Functions (30 min)
- Session 2: Objects and Arrays (30 min)
- Practical Activity: Task Management Application (1 hour)

## Theory: Functions in Depth

### Variable Scope
```javascript
let global = "I am global"; // Accessible everywhere

function testScope() {
  let local = "I am local"; // Only in the function
  console.log(global); // ✓ Accessible
  console.log(local);  // ✓ Accessible
}

console.log(global); // ✓ Accessible
console.log(local);  // ✗ Error: undefined
```

### Functions as Parameters
```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}

function addition(a, b) { return a + b; }
function multiplication(a, b) { return a * b; }

console.log(applyOperation(5, 3, addition));        // 8
console.log(applyOperation(5, 3, multiplication)); // 15
```

### Closures
```javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1 (new counter)
```

## Practical Activity: Arrays and Methods

### Essential Array Methods
```javascript
const fruits = ['apple', 'banana', 'orange'];

// Add/Remove
fruits.push('kiwi');        // ['apple', 'banana', 'orange', 'kiwi']
fruits.pop();               // ['apple', 'banana', 'orange']
fruits.unshift('strawberry'); // ['strawberry', 'apple', 'banana', 'orange']
fruits.shift();             // ['apple', 'banana', 'orange']

// Search
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.includes('apple')); // true

// Transform
const uppercase = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercase); // ['APPLE', 'BANANA', 'ORANGE']

const long = fruits.filter(fruit => fruit.length > 5);
console.log(long); // ['banana', 'orange']

const allLong = fruits.every(fruit => fruit.length > 3);
console.log(allLong); // false

const someLong = fruits.some(fruit => fruit.length > 5);
console.log(someLong); // true
```

## Theory: JavaScript Objects

### Creating and Manipulating Objects
```javascript
// Object literal
const person = {
  name: 'Alice',
  age: 25,
  city: 'Paris',
  hobbies: ['reading', 'sports'],

  // Method
  introduce: function() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
};

// Access properties
console.log(person.name);        // Alice
console.log(person['age']);      // 25

// Modify
person.age = 26;
person.profession = 'Developer';

// Method
console.log(person.introduce());
```

### Constructors and Classes
```javascript
// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.start = function() {
    return `${this.make} ${this.model} starts!`;
  };
}

const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.start());

// Modern class (ES6+)
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    return `${this.name} makes a sound!`;
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name} barks!`;
  }
}

const myDog = new Dog('Rex', 'Dog');
console.log(myDog.makeSound()); // Rex barks!
```

## Project: Task Management Application

Let's create a complete task management application:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Task Manager</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>📝 Task Manager</h1>

    <form id="task-form" class="task-form">
      <input type="text" id="task-input" placeholder="New task..." required />
      <select id="priority-select">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <div class="filters">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="pending">Pending</button>
      <button class="filter-btn" data-filter="completed">Completed</button>
    </div>

    <ul id="task-list" class="task-list">
      <!-- Tasks will be added here -->
    </ul>

    <div class="stats">
      <p>Total: <span id="total-tasks">0</span></p>
      <p>Completed: <span id="completed-tasks">0</span></p>
      <p>Rate: <span id="completion-rate">0%</span></p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js

// Task class
class Task {
  constructor(id, text, priority = 'medium') {
    this.id = id;
    this.text = text;
    this.priority = priority;
    this.completed = false;
    this.createdAt = new Date();
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  toString() {
    return `${this.text} (${this.priority}) - ${this.completed ? '✓' : '○'}`;
  }
}

// Task manager
class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(text, priority) {
    const task = new Task(this.nextId++, text, priority);
    this.tasks.push(task);
    return task;
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.toggleComplete();
    }
  }

  getTasks(filter = 'all') {
    switch(filter) {
      case 'pending':
        return this.tasks.filter(task => !task.completed);
      case 'completed':
        return this.tasks.filter(task => task.completed);
      default:
        return this.tasks;
    }
  }

  getStats() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(task => task.completed).length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, rate };
  }
}

// User interface
class TaskUI {
  constructor(taskManager) {
    this.taskManager = taskManager;
    this.taskForm = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.prioritySelect = document.getElementById('priority-select');
    this.taskList = document.getElementById('task-list');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.currentFilter = 'all';

    this.setupEventListeners();
    this.render();
  }

  setupEventListeners() {
    // Add a task
    this.taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = this.taskInput.value.trim();
      const priority = this.prioritySelect.value;

      if (text) {
        this.taskManager.addTask(text, priority);
        this.taskInput.value = '';
        this.render();
      }
    });

    // Filters
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.currentFilter = button.dataset.filter;
        this.updateFilterButtons();
        this.render();
      });
    });

    // Event delegation for tasks
    this.taskList.addEventListener('click', (e) => {
      const taskItem = e.target.closest('.task-item');
      if (!taskItem) return;

      const taskId = parseInt(taskItem.dataset.id);

      if (e.target.classList.contains('delete-btn')) {
        this.taskManager.removeTask(taskId);
        this.render();
      } else if (e.target.classList.contains('toggle-btn')) {
        this.taskManager.toggleTask(taskId);
        this.render();
      }
    });
  }

  updateFilterButtons() {
    this.filterButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.filter === this.currentFilter);
    });
  }

  render() {
    const tasks = this.taskManager.getTasks(this.currentFilter);
    this.taskList.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
      li.dataset.id = task.id;

      li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <span class="task-priority">${task.priority}</span>
        <button class="toggle-btn">${task.completed ? '↶' : '✓'}</button>
        <button class="delete-btn">🗑️</button>
      `;

      this.taskList.appendChild(li);
    });

    this.updateStats();
  }

  updateStats() {
    const stats = this.taskManager.getStats();
    document.getElementById('total-tasks').textContent = stats.total;
    document.getElementById('completed-tasks').textContent = stats.completed;
    document.getElementById('completion-rate').textContent = `${stats.rate}%`;
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const taskManager = new TaskManager();
  new TaskUI(taskManager);
});
```

```css
/* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.2em;
}

.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

input, select, button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

#task-input {
  flex: 1;
  min-width: 200px;
  border: 2px solid #e1e5e9;
}

select {
  border: 2px solid #e1e5e9;
}

button[type="submit"] {
  background: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #45a049;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 8px 16px;
  background: #f1f3f4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active {
  background: #2196F3;
  color: white;
}

.task-list {
  list-style: none;
  margin-bottom: 30px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s;
  border-left: 4px solid #ddd;
}

.task-item.completed {
  background: #e8f5e8;
  text-decoration: line-through;
  opacity: 0.7;
}

.priority-high { border-left-color: #f44336; }
.priority-medium { border-left-color: #ff9800; }
.priority-low { border-left-color: #4caf50; }

.task-text {
  flex: 1;
  font-weight: 500;
}

.task-priority {
  font-size: 0.8em;
  padding: 2px 8px;
  background: #e1e5e9;
  border-radius: 12px;
  text-transform: uppercase;
}

.toggle-btn, .delete-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.toggle-btn {
  background: #2196F3;
  color: white;
}

.toggle-btn:hover {
  background: #1976D2;
}

.delete-btn {
  background: #f44336;
  color: white;
}

.delete-btn:hover {
  background: #d32f2f;
}

.stats {
  display: flex;
  justify-content: space-around;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.stats p {
  font-weight: bold;
  color: #555;
}

.stats span {
  color: #2196F3;
  font-size: 1.2em;
}
```

## Assessment
1. Create a `Book` class with title, author, year properties
2. Implement methods to borrow and return books
3. Use arrays to manage a collection of books
4. Add a search function by title or author

## Extra Challenge
Implement data persistence with localStorage:

```javascript
// Save
localStorage.setItem('tasks', JSON.stringify(this.tasks));

// Load
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
  this.tasks = JSON.parse(savedTasks);
}
```

## Next Steps
Great work with functions and objects! In the next module, we will explore advanced JavaScript with browser APIs and asynchronous requests.

## Resources
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [Eloquent JavaScript: Chapters 3-6](https://eloquentjavascript.net/)