# Homework Exercises

## Overview
These exercises allow you to build complete web applications by integrating frontend and backend. You will learn to manage data, implement authentication, create REST APIs, and deploy full-stack applications.

## Beginner Level

### Exercise 8.1: Basic Express.js Server
**Objective**: Create and configure a simple Express.js server.

**Instructions**:
1. Create a new folder `mon-serveur`
2. Initialize a Node.js project: `npm init -y`
3. Install Express: `npm install express`
4. Create `server.js` with:
   - Express import
   - Server configuration (port 3000)
   - GET route `/` that returns "Hello World"
   - GET route `/api/test` that returns JSON
   - Server start with `app.listen()`
5. Test with `node server.js` and visit `http://localhost:3000`

**Validation Criteria**:
- [ ] Functional Express server
- [ ] GET routes created and tested
- [ ] Appropriate responses (text and JSON)
- [ ] Server starts without errors

**Hints**:
- `const express = require('express');`
- `app.get('/', (req, res) => { res.send('Hello'); });`
- `npm start` in package.json for `node server.js`

### Exercise 8.2: Simple REST API
**Objective**: Create a basic REST API with CRUD operations.

**Instructions**:
1. In your Express server, create routes to manage "tasks":
   - GET `/api/tasks`: List all tasks
   - GET `/api/tasks/:id`: Retrieve a specific task
   - POST `/api/tasks`: Create a new task
   - PUT `/api/tasks/:id`: Update a task
   - DELETE `/api/tasks/:id`: Delete a task
2. Store data in memory (array)
3. Handle URL parameters and request bodies
4. Return appropriate HTTP codes (200, 201, 404, 400)

**Validation Criteria**:
- [ ] All CRUD routes implemented
- [ ] Correct parameter handling
- [ ] Appropriate HTTP codes
- [ ] Data persisted in memory

**Hints**:
- `req.params.id` for URL parameters
- `req.body` for request body (requires body-parser)
- `res.status(404).json({ error: 'Not found' })`

### Exercise 8.3: Frontend Connected to API
**Objective**: Create a frontend that communicates with your backend API.

**Instructions**:
1. Create a `public` folder in your project
2. Create `public/index.html` with a simple interface:
   - Task list
   - Form to add a task
   - Buttons to edit/delete
3. In `public/script.js`, implement:
   - `loadTasks()` function that fetches GET `/api/tasks`
   - `createTask()` function that POSTs a new task
   - Event handling for buttons
4. Configure Express to serve static files

**Validation Criteria**:
- [ ] Functional user interface
- [ ] Successful frontend/backend communication
- [ ] Complete CRUD from frontend
- [ ] Basic error handling

**Hints**:
- `app.use(express.static('public'));` to serve files
- `fetch('/api/tasks')` from frontend
- Update UI after each operation

## Intermediate Level

### Exercise 8.4: JWT Authentication
**Objective**: Implement an authentication system with JWT.

**Instructions**:
1. Install dependencies: `npm install jsonwebtoken bcryptjs`
2. Create authentication routes:
   - POST `/api/auth/register`: User registration
   - POST `/api/auth/login`: User login
3. Store users in memory with hashed passwords
4. Implement authentication middleware:
   - Verify JWT token in Authorization header
   - Protect routes requiring authentication
5. Modify task routes to require authentication

**Validation Criteria**:
- [ ] Functional registration and login
- [ ] Secure hashed passwords
- [ ] Operational authentication middleware
- [ ] Protected routes accessible only with token

**Hints**:
- `jwt.sign(payload, secret)` to create token
- `jwt.verify(token, secret)` to verify
- Header: `Authorization: Bearer <token>`

### Exercise 8.5: Data Persistence
**Objective**: Replace in-memory storage with JSON files.

**Instructions**:
1. Create utility functions to read/write JSON files
2. Store users in `data/users.json`
3. Store tasks in `data/tasks.json`
4. Implement:
   - Data loading on server start
   - Automatic saving on each modification
   - File error handling
5. Handle basic concurrency (one user at a time)

**Validation Criteria**:
- [ ] Data persisted in JSON files
- [ ] Automatic loading on startup
- [ ] Saving on each modification
- [ ] File error handling
- [ ] Data preserved between restarts

**Hints**:
- `const fs = require('fs').promises;`
- `fs.readFile('data/users.json', 'utf8')`
- `fs.writeFile('data/users.json', JSON.stringify(data, null, 2))`

### Exercise 8.6: Modern User Interface
**Objective**: Create a modern and responsive user interface.

**Instructions**:
1. Create a complete interface with:
   - Login/registration page
   - Task dashboard after login
   - Add/edit task form
   - Responsive navigation (mobile/desktop)
2. Implement:
   - JWT token management on frontend
   - Loading states (loading spinners)
   - User-friendly error messages
   - Smooth transitions and animations
3. Make everything responsive with CSS Grid and Flexbox

**Validation Criteria**:
- [ ] Complete and modern user interface
- [ ] Integrated frontend/backend authentication
- [ ] Functional responsive design
- [ ] Loading states and errors handled
- [ ] Smooth and intuitive UX

**Hints**:
- Store token in localStorage
- Add `Authorization: Bearer ${token}` to headers
- Use CSS for states: `.loading`, `.error`

## Advanced Level

### Exercise 8.7: Complete Blog Full-Stack Application
**Objective**: Build a complete blog application with authentication.

**Instructions**:
1. Create a blog application with:
   - Article model (title, content, author, date, tags)
   - Comment model linked to articles
   - User system with roles (admin, author, reader)
   - Admin interface for authors
2. Implement features:
   - Complete CRUD for articles (admin/authors only)
   - Comment system (logged-in users)
   - Search and filtering by tags/author
   - Article pagination
3. Secure the application:
   - Server-side data validation
   - Content sanitization
   - Basic protection against XSS attacks

**Validation Criteria**:
- [ ] Complete and functional application
- [ ] Authentication and authorization implemented
- - [ ] Separate admin interface
- [ ] Basic security ensured
- [ ] MVC architecture respected

**Hints**:
- Use middlewares for authorization
- Validate data with utility functions
- Implement server-side pagination

### Exercise 8.8: Complete REST API with Validation
**Objective**: Create a robust REST API with validation and error handling.

**Instructions**:
1. Create an API to manage "projects" with complete validation:
   - Project model (name, description, status, members, deadline)
   - Input data validation
   - Detailed error handling
   - Pagination and filtering
2. Implement:
   - Data validation middleware
   - Centralized error handling
   - Request logging
   - Basic rate limiting
3. Document the API with usage examples

**Validation Criteria**:
- [ ] Server-side data validation
- [ ] Complete and informative error handling
- [ ] Documented and tested API
- [ ] Basic security and performance
- [ ] Maintainable and organized code

**Hints**:
- Create reusable validation functions
- Use appropriate HTTP error codes
- Implement a global error middleware

## Bonus Challenge

### Exercise 8.9: E-commerce Application
**Objective**: Build a complete online store with cart and simulated payment.

**Instructions**:
1. Create an e-commerce application with:
   - Product model (name, price, description, stock, category)
   - User cart (session or database)
   - Order system
   - Product admin interface
2. Implement:
   - Product catalog with search/filtering
   - Cart management (add, modify, delete)
   - Simulated order process
   - Admin interface to manage products
3. Add advanced features:
   - Product reviews/comments
   - Rating system
   - Simple recommendations

**Validation Criteria**:
- [ ] Complete e-commerce application
- [ ] Functional cart management
- [ ] Intuitive user interface
- [ ] Product administration
- [ ] Scalable architecture prepared

**Hints**:
- Use sessions or localStorage for cart
- Validate stock before adding to cart
- Implement pagination for catalog

### Exercise 8.10: Testing and Deployment
**Objective**: Test and deploy your full-stack application.

**Instructions**:
1. Add tests to your application:
   - Unit tests for utility functions
   - Integration tests for API routes
   - End-to-end tests for critical features
2. Prepare for deployment:
   - Environment variables (PORT, JWT_SECRET)
   - Build and start scripts
   - Configuration for different environments
3. Deploy on a free platform:
   - Backend on Railway or Render
   - Frontend on Vercel or Netlify
4. Configure domain and HTTPS

**Validation Criteria**:
- [ ] Automated tests implemented
- [ ] Application deployed online
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] Application publicly accessible

**Hints**:
- Use Jest for tests: `npm install --save-dev jest`
- Create a `.env` file for sensitive variables
- Configure CORS for deployment

## Inter-module Integration

### Exercise 8.11: Module 9 Preparation
**Objective**: Refactor your code with learned best practices.

**Instructions**:
1. Refactor your application with advanced patterns:
   - Module pattern for code organization
   - Observer pattern for events
   - Factory pattern to create similar objects
   - Performance optimizations (memoization, lazy loading)
2. Implement automated tests:
   - Unit tests for pure functions
   - Integration tests for APIs
   - Basic CI/CD configuration
3. Optimize performance:
   - API response caching
   - Response compression
   - Database query optimization

**Validation Criteria**:
- [ ] Code refactored with design patterns
- [ ] Automated tests implemented
- [ ] Measurable performance optimization
- [ ] Maintainable and documented code
- [ ] Best practices applied

**Hints**:
- Use classes for organization
- Implement a simple cache system
- Configure ESLint and Prettier

### Exercise 8.12: Full-Stack Developer Portfolio
**Objective**: Create a professional portfolio showcasing your full-stack skills.

**Instructions**:
1. Build a complete portfolio with:
   - Presentation section with photo and description
   - Project gallery with screenshots
   - Integrated technical blog
   - Functional contact form
   - Skills section with visualization
2. Integrate modern technologies:
   - API for dynamic data
   - Smooth animations and transitions
   - Perfect responsive design
   - SEO optimizations
3. Deploy and monitor:
   - Automated deployment
   - Basic analytics
   - Performance tests

**Validation Criteria**:
- [ ] Complete professional portfolio
- [ ] Modern technologies integrated
- [ ] Performance and SEO optimized
- [ ] Successful deployment
- [ ] Organized source code

**Hints**:
- Use an API for projects/blog
- Implement Open Graph metadata
- Test with Lighthouse for performance

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Architecture**: Clear frontend/backend separation
- **Security**: Authentication and data validation
- **Performance**: Appropriate optimizations implemented
- **Maintainability**: Organized and documented code
- **Deployment**: Application deployed and accessible
- **Tests**: Critical features tested

## Help Resources

- [Express.js Documentation](https://expressjs.com/)
- [JWT Authentication](https://jwt.io/)
- [REST API Design](https://restfulapi.net/)
- [Node.js File System](https://nodejs.org/api/fs.html)
- [Deployment Guides](https://render.com/docs/deploy-node-express-app)

## Next Steps

These exercises perfectly prepare you for Module 9 where you will apply advanced best practices and optimize your applications. You will now be capable of building and deploying professional full-stack web applications!