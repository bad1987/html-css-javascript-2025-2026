# Homework Exercises

## Overview
These exercises allow you to master asynchronous programming, REST APIs, local storage, and communication with external services. You will learn to create modern web applications that interact with external data.

## Beginner Level

### Exercise 7.1: Introduction to Promises
**Objective**: Understand and use JavaScript promises for asynchronous operations.

**Instructions**:
1. Create a file `promesses.js`
2. Create simple promises:
   - A promise that resolves after a delay
   - A promise that can fail randomly
   - A promise that processes data
3. Use `.then()`, `.catch()`, and `.finally()`
4. Chain multiple promises
5. Handle appropriate errors

**Validation Criteria**:
- [ ] Promises created and used correctly
- [ ] Error handling with `.catch()`
- [ ] Functional promise chaining
- [ ] Well-structured asynchronous code

**Hints**:
- `new Promise((resolve, reject) => { ... })`
- `resolve(value)` for success, `reject(error)` for failure
- `.then()` handles success, `.catch()` handles errors

### Exercise 7.2: Modern Async/Await
**Objective**: Master async/await syntax to simplify asynchronous code.

**Instructions**:
1. Create a file `async-await.js`
2. Convert functions using promises to async/await
3. Create `async` functions that:
   - Wait for a simulated delay
   - Fetch fictional data
   - Handle errors with try/catch
4. Combine multiple asynchronous operations
5. Compare with `.then()/.catch()` syntax

**Validation Criteria**:
- [ ] `async` functions created
- [ ] `await` used correctly
- [ ] Error handling with `try/catch`
- [ ] Code more readable than chained promises

**Hints**:
- `async function maFonction() { ... }`
- `const result = await promise;`
- `try { ... } catch(error) { ... }`

### Exercise 7.3: Basic Fetch API
**Objective**: Use the Fetch API to make simple HTTP requests.

**Instructions**:
1. Create a file `fetch-basics.js`
2. Use the JSONPlaceholder API (free):
   - GET: Retrieve the list of users
   - GET: Retrieve a specific user
   - POST: Create a new user
3. Handle JSON responses
4. Handle network errors
5. Display data in the console

**Validation Criteria**:
- [ ] Successful GET and POST requests
- [ ] JSON data parsed correctly
- [ ] Error handling implemented
- [ ] Functional asynchronous code

**Hints**:
- `fetch('https://jsonplaceholder.typicode.com/users')`
- `.then(response => response.json())`
- Check `response.ok` for HTTP errors

## Intermediate Level

### Exercise 7.4: Local Storage (localStorage)
**Objective**: Use localStorage to persist client-side data.

**Instructions**:
1. Create a file `localstorage.js`
2. Implement functions for:
   - Save complex objects (JSON.stringify)
   - Retrieve and parse data
   - Delete items
   - List all saved keys
3. Create a mini notes application:
   - Add a note
   - List existing notes
   - Delete a note
   - Automatic persistence

**Validation Criteria**:
- [ ] Data saved and retrieved
- [ ] Complex objects handled (JSON)
- [ ] Functional user interface
- [ ] Verified data persistence

**Hints**:
- `localStorage.setItem('key', JSON.stringify(data))`
- `JSON.parse(localStorage.getItem('key'))`
- Test by reloading the page

### Exercise 7.5: Geolocation
**Objective**: Use the browser's geolocation API.

**Instructions**:
1. Create a page `geolocalisation.html` with JavaScript
2. Implement:
   - Button to get current position
   - Display coordinates (latitude, longitude)
   - Accuracy calculation
   - Error handling (permission denied, unavailable)
3. Bonus: Display position on a simple map (text)
4. Handle different states (loading, success, error)

**Validation Criteria**:
- [ ] Functional geolocation
- [ ] User permission handling
- [ ] Appropriate error handling
- [ ] Informative user interface

**Hints**:
- `navigator.geolocation.getCurrentPosition(success, error)`
- First check if `navigator.geolocation` is available
- Handle errors: PERMISSION_DENIED, POSITION_UNAVAILABLE

### Exercise 7.6: Complete Weather API
**Objective**: Create a weather application using a real API.

**Instructions**:
1. Sign up for OpenWeatherMap (free)
2. Create a weather application with:
   - City search field
   - Display temperature, description, humidity
   - Weather icon
   - Geolocation button
   - Error handling (city not found)
3. Use async/await for requests
4. Save favorite cities (localStorage)

**Validation Criteria**:
- [ ] Configured and functional API
- [ ] Modern user interface
- [ ] Complete error handling
- [ ] Integrated geolocation
- [ ] Persisted data

**Hints**:
- URL: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric&lang=en`
- Icons: `https://openweathermap.org/img/wn/${icon}@2x.png`
- Test with different cities

## Advanced Level

### Exercise 7.7: Complete REST API Client
**Objective**: Create a reusable generic API client.

**Instructions**:
1. Create an `ApiClient` class with:
   - Basic configuration (URL, headers)
   - GET, POST, PUT, DELETE methods
   - Automatic authentication token management
   - Centralized error handling
   - Response cache (optional)
2. Use it to create a task management application:
   - List tasks (GET)
   - Create a task (POST)
   - Edit a task (PUT)
   - Delete a task (DELETE)
3. Implement simulated authentication

**Validation Criteria**:
- [ ] Reusable ApiClient class created
- [ ] All HTTP methods implemented
- [ ] Functional authentication management
- [ ] Complete task interface
- [ ] Robust error handling

**Hints**:
- Use fetch in a class
- Store token in localStorage
- Handle 401 errors (unauthorized)

### Exercise 7.8: Real-time Chat Application
**Objective**: Create a chat application with simulated API.

**Instructions**:
1. Create a chat system with:
   - Message list
   - Message sending form
   - Multiple users (simulated)
   - Message timestamps
   - Automatic scroll to bottom
2. Simulate API with promises:
   - Retrieve existing messages
   - Send new messages (with delay)
   - Periodic message updates
3. Add advanced features:
   - Typing indicator
   - Online/offline status
   - Unread messages

**Validation Criteria**:
- [ ] Functional chat interface
- [ ] Simulated API with realistic delays
- [ ] Simulated real-time updates
- [ ] User state management
- [ ] Smooth and intuitive UX

**Hints**:
- Use `setInterval` to simulate updates
- Store messages in an array
- `scrollIntoView()` for automatic scrolling

## Bonus Challenge

### Exercise 7.9: Project Management Application with API
**Objective**: Create a complete application using multiple APIs.

**Instructions**:
1. Create a project management application with:
   - Complete task management (CRUD)
   - Assignment to team members
   - Deadlines and priorities
   - Comments on tasks
   - Dashboard with statistics
2. Integrate multiple APIs:
   - Weather API for "team morale"
   - Motivational quotes API
   - Avatar generation API (or simulated)
   - Local storage for persistence
3. Implement synchronization:
   - Automatic saving
   - JSON export/import
   - Inter-tab synchronization (BroadcastChannel API)

**Validation Criteria**:
- [ ] Complete and functional application
- [ ] Integration of multiple APIs
- [ ] Modern user interface
- [ ] Data synchronization
- [ ] Complete error handling

**Hints**:
- Use classes to organize code
- `BroadcastChannel` for inter-tab sync
- Handle network errors gracefully

### Exercise 7.10: Progressive Web App (PWA)
**Objective**: Transform a web application into an installable PWA.

**Instructions**:
1. Take your weather or task application
2. Add PWA features:
   - Manifest.json for installation
   - Service Worker for offline caching
   - Appropriate caching strategy
   - Push notifications (simulated)
3. Implement:
   - Cache static resources
   - Cache API data (with expiration)
   - Functional offline mode
   - Automatic cache updates
4. Test installation and offline operation

**Validation Criteria**:
- [ ] Valid manifest.json
- [ ] Registered service worker
- [ ] Installable application
- [ ] Offline operation
- [ ] Intelligent caching implemented

**Hints**:
- Manifest: icon, name, colors, scope
- Service Worker: `self.addEventListener('install')`
- Cache API: `caches.open()`, `cache.put()`

## Inter-module Integration

### Exercise 7.11: Module 8 Preparation
**Objective**: Prepare full-stack architecture by separating frontend and backend.

**Instructions**:
1. Refactor your application into separated architecture:
   - Create `frontend/` and `backend/` folders
   - Move client-side HTML/CSS/JS
   - Create a basic Express.js server
   - Simulate API routes in the backend
2. Implement:
   - Clear separation of responsibilities
   - HTTP communication between frontend/backend
   - Server-side error handling
   - Professional project structure
3. Prepare for real separation:
   - CORS configured
   - Environment variables
   - Server logs

**Validation Criteria**:
- [ ] Separated frontend/backend architecture
- [ ] Functional HTTP communication
- [ ] Server-side error handling
- [ ] Maintainable project structure
- [ ] Preparation for deployment

**Hints**:
- `npm init -y` in backend folder
- `npm install express cors`
- Use different ports (3000 for backend, 8080 for frontend)

### Exercise 7.12: Analytics Dashboard
**Objective**: Create a dashboard with data visualization.

**Instructions**:
1. Create a dashboard that displays:
   - User statistics (simulated API)
   - Data charts (simple canvas or SVG)
   - Real-time metrics
   - Date/period filters
2. Integrate external APIs:
   - Quotes API for motivation
   - Currency API for conversions
   - Tech news API (if available)
3. Implement:
   - Automatic data updates
   - Intelligent API caching
   - API quota management
   - Complete responsive interface

**Validation Criteria**:
- [ ] Informative and visual dashboard
- [ ] Integration of external APIs
- [ ] Real-time updates
- [ ] Responsive interface
- [ ] Robust error handling

**Hints**:
- Use free APIs like JSONPlaceholder
- `setInterval` for periodic updates
- Cache data with expiration
- Handle API errors gracefully

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Asynchronous**: Appropriate use of promises and async/await
- **Errors**: Complete handling of network and API errors
- **Performance**: Caching and request optimization
- **Security**: Data validation and token management
- **UX**: Loading states and user feedback
- **Compatibility**: Support for modern browsers

## Help Resources

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## Next Steps

These exercises perfectly prepare you for Module 8 where you will build complete full-stack applications. You will now master client-server interactions and modern APIs!