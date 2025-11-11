# Homework Exercises

## Overview
These exercises allow you to master advanced JavaScript concepts: organized functions, objects, arrays with methods, loops, and error handling. You will learn to structure maintainable and reusable code.

## Beginner Level

### Exercise 6.1: Variable Scope
**Objective**: Understand the difference between local and global variables.

**Instructions**:
1. Create a file `scope.js`
2. Declare a global variable
3. Create a function that declares a local variable with the same name
4. Display values inside and outside the function
5. Test with `var`, `let`, and `const`
6. Explain the differences in comments

**Validation Criteria**:
- [ ] Global and local variables tested
- [ ] Differences between `var`, `let`, `const` demonstrated
- [ ] Explanatory comments present
- [ ] No unresolved name conflicts

**Hints**:
- `var` creates functional variables
- `let` and `const` create block variables
- Local variables hide globals

### Exercise 6.2: Functions as Parameters
**Objective**: Pass functions as parameters to other functions.

**Instructions**:
1. Create a file `fonctions-parametres.js`
2. Define a function `appliquerOperation` that takes a function as parameter
3. Create simple operation functions (addition, multiplication, power)
4. Test `appliquerOperation` with different functions
5. Use arrow functions as parameters

**Validation Criteria**:
- [ ] Higher-order function created
- [ ] Multiple callback functions tested
- [ ] Arrow and traditional syntaxes used
- [ ] Correct results displayed

**Hints**:
- `function appliquerOperation(a, b, operation) { return operation(a, b); }`
- Callback: `function addition(a, b) { return a + b; }`
- Call: `appliquerOperation(5, 3, addition)`

### Exercise 6.3: Closures
**Objective**: Understand and use closures to create functions with state.

**Instructions**:
1. Create a file `closures.js`
2. Implement a function `creerCompteur` that returns a function
3. The inner function must be able to access a variable from the outer function
4. Test multiple independent counters
5. Create a closure to generate unique IDs

**Validation Criteria**:
- [ ] Closure created and functional
- [ ] State preserved between calls
- [ ] Independent counters tested
- [ ] Practical application (ID generator)

**Hints**:
- The inner function "remembers" external variables
- Each call to `creerCompteur()` creates separate state
- Useful for encapsulating private data

## Intermediate Level

### Exercise 6.4: Advanced Array Methods
**Objective**: Master JavaScript array manipulation methods.

**Instructions**:
1. Create a file `tableaux-avances.js`
2. Use all main methods:
   - `forEach` to iterate
   - `map` to transform
   - `filter` to filter
   - `find` and `findIndex` to search
   - `some` and `every` to test conditions
   - `reduce` to accumulate
3. Create practical examples with an array of objects
4. Combine multiple methods in chains

**Validation Criteria**:
- [ ] All main methods used
- [ ] Practical examples with objects
- [ ] Method chaining demonstrated
- [ ] Correct results explained

**Hints**:
- `map` transforms each element
- `filter` keeps only matching elements
- `reduce` accumulates a single value

### Exercise 6.5: Objects and Methods
**Objective**: Create and manipulate JavaScript objects with methods.

**Instructions**:
1. Create a file `objets-methodes.js`
2. Define a `Voiture` object with properties and methods
3. Add methods for:
   - Start engine
   - Accelerate
   - Brake
   - Display information
4. Create multiple car instances
5. Test methods with different values

**Validation Criteria**:
- [ ] Object with properties and methods created
- [ ] Functional and coherent methods
- [ ] Multiple instances tested
- [ ] Object state modified correctly

**Hints**:
- `this` refers to the current instance
- Methods are functions in the object
- Use properties to store state

### Exercise 6.6: Constructors and Classes
**Objective**: Use constructors and modern class syntax.

**Instructions**:
1. Create a file `constructeurs-classes.js`
2. Implement a constructor function `Personne`
3. Convert it to ES6 class
4. Add methods and properties
5. Create a subclass `Etudiant` that inherits from `Personne`
6. Test inheritance and polymorphism

**Validation Criteria**:
- [ ] Constructor function created
- [ ] Equivalent ES6 class implemented
- [ ] Functional inheritance
- [ ] Polymorphism demonstrated

**Hints**:
- Constructor: `function Personne(nom, age) { this.nom = nom; ... }`
- Class: `class Personne { constructor(nom, age) { ... } }`
- Inheritance: `class Etudiant extends Personne { ... }`

## Advanced Level

### Exercise 6.7: Library Manager
**Objective**: Create a library management system with objects and arrays.

**Instructions**:
1. Create classes for:
   - `Livre` (title, author, ISBN, available)
   - `Utilisateur` (name, id, borrowed books)
   - `Bibliotheque` (book collection, users)
2. Implement methods for:
   - Add/remove books
   - Register users
   - Borrow/return books
   - Search books by title/author
   - List available/borrowed books
3. Use arrays to store data
4. Handle errors (unavailable book, user not found)

**Validation Criteria**:
- [ ] Well-structured classes created
- [ ] Complete CRUD methods implemented
- [ ] Appropriate error handling
- [ ] Functional search and filtering

**Hints**:
- Use arrays for `livres` and `utilisateurs`
- `find()` to search for elements
- `filter()` to list available ones

### Exercise 6.8: Card Game
**Objective**: Create a playing card game with objects and methods.

**Instructions**:
1. Create classes for:
   - `Carte` (value, suit, symbol)
   - `Paquet` (card collection, manipulation methods)
   - `Joueur` (hand, score)
   - `Jeu` (deck, players, game logic)
2. Implement:
   - Deck creation and shuffling
   - Card dealing
   - Point counting
   - Simple game logic (simplified Blackjack)
3. Use arrays to manage collections
4. Manage game state

**Validation Criteria**:
- [ ] Well-designed game classes
- [ ] Functional game logic
- [ ] Correct shuffling and dealing
- [ ] Turn and score management

**Hints**:
- Cards: Ace=11, face cards=10, others=numeric value
- Shuffle: Fisher-Yates algorithm or `sort` with random
- Check win conditions

## Bonus Challenge

### Exercise 6.9: Advanced Task Management Application
**Objective**: Completely refactor the task application with advanced patterns.

**Instructions**:
1. Create classes to structure the application:
   - `Task` (id, title, description, priority, deadline, status)
   - `TaskManager` (task management, filters, search)
   - `TaskUI` (user interface, events)
   - `Storage` (data persistence)
2. Implement advanced features:
   - Sort by priority/deadline/status
   - Text search in tasks
   - Categorization by projects
   - Statistics (completed tasks, overdue)
   - Data export/import
3. Use design patterns:
   - Observer for UI updates
   - Factory to create different task types
   - Singleton for the manager

**Validation Criteria**:
- [ ] MVC-like architecture implemented
- [ ] Design patterns used
- [ ] Advanced features present
- [ ] Modular and maintainable code
- [ ] Improved user interface

**Hints**:
- Separate responsibilities (model/view/controller)
- Use modules to organize code
- Implement search with `filter` and `includes`

### Exercise 6.10: Reservation System
**Objective**: Create a resource reservation system with error handling.

**Instructions**:
1. Create classes for:
   - `Ressource` (name, type, availability)
   - `Reservation` (resource, user, startDate, endDate)
   - `Utilisateur` (name, email, reservations)
   - `ReservationManager` (business logic)
2. Implement:
   - Availability checking
   - Reservation creation/modification/cancellation
   - Conflict management
   - Due date notifications
3. Handle errors:
   - Unavailable resource
   - Invalid dates
   - Reservation conflicts
   - Unauthorized user
4. Use `try/catch` for error handling

**Validation Criteria**:
- [ ] Well-designed business classes
- [ ] Complete error handling
- [ ] Robust reservation logic
- [ ] Input data validation
- [ ] Functional management interface

**Hints**:
- Use `Date` for time comparisons
- `throw new Error("Message")` for errors
- `try { ... } catch(error) { ... }` for handling

## Inter-module Integration

### Exercise 6.11: Module 7 Preparation
**Objective**: Prepare API integration by structuring code for asynchronous requests.

**Instructions**:
1. Refactor your task application
2. Create functions to simulate API calls:
   - `fetchTasks()` - returns a promise
   - `saveTask(task)` - saves with simulated delay
   - `updateTask(id, updates)` - asynchronous update
   - `deleteTask(id)` - deletion with confirmation
3. Use promises for:
   - Simulated delays (`setTimeout`)
   - Network error handling
   - Operation chaining
4. Prepare for real APIs (similar structure)

**Validation Criteria**:
- [ ] Asynchronous functions created
- [ ] Promises used correctly
- [ ] Error handling implemented
- [ ] Code prepared for real APIs
- [ ] User interface preserved

**Hints**:
- `return new Promise((resolve, reject) => { ... })`
- Simulate network with `setTimeout`
- Use `async/await` in calling functions

### Exercise 6.12: Blog Application with Comments
**Objective**: Create a complete blog application with comment system.

**Instructions**:
1. Create classes for:
   - `Article` (title, content, author, date, tags)
   - `Commentaire` (author, content, date, articleId)
   - `Utilisateur` (profile, articles, comments)
   - `BlogManager` (global management)
2. Implement:
   - Complete CRUD for articles and comments
   - Simulated authentication system
   - Search and filtering by tags/author
   - Chronological and popularity sorting
   - Blog statistics (articles, comments, users)
3. Use advanced arrays and objects
4. Manage relationships between entities

**Validation Criteria**:
- [ ] Complete and functional application
- [ ] Relationships between entities managed
- [ ] Modern user interface
- [ ] Advanced search features
- [ ] Code organized in modules

**Hints**:
- Use IDs to link entities
- `filter` and `find` for relationships
- Organize code in separate files
- Think about scalability

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Modularity**: Code organized in logical functions and objects
- **Reusability**: Generic functions and classes
- **Robustness**: Error handling and data validation
- **Maintainability**: Commented and well-structured code
- **Performance**: Efficient algorithms for arrays
- **Readability**: Descriptive names and clear structure

## Help Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Next Steps

These exercises perfectly prepare you for Module 7 where you will learn asynchronous programming and APIs. You will now have a solid foundation to create complex and maintainable JavaScript applications!