# Homework Exercises

## Overview
These exercises allow you to apply development best practices, optimize performance, implement automated tests, and use modern development tools. You will learn to create maintainable, performant, and professional code.

## Beginner Level

### Exercise 9.1: Module Pattern in JavaScript
**Objective**: Implement the module pattern to organize code.

**Instructions**:
1. Create a file `calculator-module.js`
2. Implement a calculator using the module pattern:
   - Private functions for basic operations
   - Private calculation history
   - Public interface with limited methods
   - Private input validation
3. Test encapsulation:
   - Private variables are not accessible from outside
   - Only public methods are exposed
   - Internal state is preserved

**Validation Criteria**:
- [ ] Module pattern correctly implemented
- [ ] Encapsulation respected (private/public)
- [ ] Private functions inaccessible externally
- [ ] Functional public interface

**Hints**:
- `(function() { ... })()` to create a module
- `return { publicMethod: function }` for the public API
- Test with `console.log(module.private)` (should be undefined)

### Exercise 9.2: Observer Pattern
**Objective**: Implement the Observer pattern for event management.

**Instructions**:
1. Create a simple `EventEmitter` class
2. Implement the methods:
   - `on(event, callback)`: Subscribe to an event
   - `off(event, callback)`: Unsubscribe
   - `emit(event, ...args)`: Emit an event
3. Create a notification system:
   - User subscribes to notifications
   - System emits events (new article, message)
   - Unsubscription management

**Validation Criteria**:
- [ ] Observer pattern implemented
- [ ] Functional subscribe/unsubscribe
- [ ] Event emission with data
- [ ] Multiple subscriber management

**Hints**:
- Store callbacks in `this.events = {}`
- `this.events[event].push(callback)`
- `callback(...args)` to call subscribers

### Exercise 9.3: Introduction to Testing
**Objective**: Write and execute simple unit tests.

**Instructions**:
1. Create a file `math-utils.js` with mathematical functions
2. Create a file `math-utils.test.js` with tests
3. Use a simple testing approach (without framework first):
   - `test()` function that runs assertions
   - `assertEqual(actual, expected, message)` for checks
   - Counting successful/failed tests
4. Test different functions:
   - Addition, subtraction
   - Factorial, power
   - Input validation

**Validation Criteria**:
- [ ] Mathematical functions created
- [ ] Basic testing system implemented
- [ ] Tests covering normal and edge cases
- [ ] Test report generated

**Hints**:
- `function assertEqual(a, b, msg) { if (a !== b) throw new Error(msg); }`
- Test errors: `expect(() => { throw new Error(); }).toThrow()`
- Cover edge cases (0, negatives, large numbers)

## Intermediate Level

### Exercise 9.4: Performance Optimizations
**Objective**: Implement common performance optimizations.

**Instructions**:
1. Create an application with a list of 1000 elements
2. Implement optimizations:
   - **Debouncing** for real-time search
   - **Memoization** for expensive calculations
   - **Virtual scrolling** for long lists (simulation)
   - **Lazy loading** for images
3. Measure improvements:
   - Render time before/after
   - Number of avoided operations
   - User-perceived performance

**Validation Criteria**:
- [ ] Performance optimizations implemented
- [ ] Performance measurements taken
- [ ] Measurable improvement demonstrated
- [ ] Optimized code maintainable

**Hints**:
- Debounce: `setTimeout` with `clearTimeout`
- Memoization: `Map` to store results
- Measure with `performance.now()`

### Exercise 9.5: Simple Test Framework
**Objective**: Create a basic test framework with assertions and reports.

**Instructions**:
1. Create a `TestFramework` class with:
   - `describe(name, fn)` method to group tests
   - `it(name, fn)` method to define a test
   - `expect(value)` method for assertions
   - Final report with results
2. Implement matchers:
   - `toBe(expected)` for strict equality
   - `toEqual(expected)` for deep equality
   - `toThrow()` for exceptions
   - `toBeGreaterThan(expected)` for comparisons
3. Handle asynchronous tests

**Validation Criteria**:
- [ ] Functional test framework
- [ ] Various matchers implemented
- [ ] Synchronous and asynchronous tests supported
- [ ] Detailed test report generated

**Hints**:
- Use a data structure to store tests
- `expect(value).toBe(expected)` returns a matcher object
- Handle promises for async tests

### Exercise 9.6: Development Tools
**Objective**: Configure and use ESLint and Prettier.

**Instructions**:
1. Install ESLint and Prettier: `npm install --save-dev eslint prettier`
2. Create configuration:
   - `.eslintrc.js` with appropriate rules
   - `.prettierrc` with consistent formatting
   - npm scripts for lint and format
3. Fix identified issues:
   - Syntax errors
   - Inconsistent code style
   - Potential performance issues
4. Integrate into development workflow

**Validation Criteria**:
- [ ] ESLint and Prettier configured
- [ ] npm scripts created (`lint`, `format`)
- [ ] Code compliant with rules
- [ ] Improved development workflow

**Hints**:
- ESLint: `extends: ['eslint:recommended']`
- Prettier: `"semi": true, "singleQuote": true`
- `npm run lint` and `npm run format`

## Advanced Level

### Exercise 9.7: Application with Design Patterns
**Objective**: Refactor an application using advanced patterns.

**Instructions**:
1. Take your todo list application
2. Apply design patterns:
   - **Factory Pattern** to create different types of tasks
   - **Observer Pattern** for interface updates
   - **Module Pattern** to organize code
   - **Strategy Pattern** for different sorting algorithms
3. Implement clean architecture:
   - Separation of responsibilities
   - Dependency injection
   - Consistent interfaces

**Validation Criteria**:
- [ ] Design patterns correctly applied
- [ ] Modular architecture implemented
- [ ] More maintainable and extensible code
- [ ] Best practices respected

**Hints**:
- Factory: function that returns different classes
- Observer: custom event system
- Module: private/public functions organized

### Exercise 9.8: Testing with Jest
**Objective**: Implement complete automated tests with Jest.

**Instructions**:
1. Install Jest: `npm install --save-dev jest`
2. Create tests for your application:
   - Unit tests for utility functions
   - Integration tests for modules
   - Tests for design patterns
   - Mocks for external APIs
3. Configure Jest:
   - `jest.config.js` with configuration
   - npm scripts to run tests
   - Test coverage
4. Achieve 80%+ code coverage

**Validation Criteria**:
- [ ] Jest configured and functional
- [ ] Unit and integration tests written
- [ ] Appropriate mocks for external dependencies
- [ ] High code coverage achieved

**Hints**:
- `jest.fn()` to mock functions
- `describe()` and `test()` to organize
- `expect().toBe()` for assertions

### Exercise 9.9: Advanced Optimization and Performance
**Objective**: Audit and optimize a complete web application.

**Instructions**:
1. Perform a complete performance audit:
   - Use Lighthouse to measure metrics
   - Analyze Core Web Vitals
   - Identify bottlenecks (network, JavaScript, rendering)
2. Implement optimizations:
   - Code splitting to reduce bundle size
   - Lazy loading of components
   - Image and asset optimization
   - Intelligent data caching
3. Measure improvements:
   - Lighthouse scores before/after
   - Reduced loading time
   - Improved perceived performance

**Validation Criteria**:
- [ ] Complete performance audit performed
- [ ] Measurable optimizations implemented
- [ ] Metric improvement demonstrated
- [ ] More performant application maintained

**Hints**:
- Lighthouse: Performance, Accessibility, SEO
- Bundle analyzer to identify large modules
- `loading="lazy"` for images
- Service Worker for offline cache

## Bonus Challenge

### Exercise 9.10: CI/CD Pipeline
**Objective**: Configure a continuous integration pipeline.

**Instructions**:
1. Create a GitHub repository for your project
2. Configure GitHub Actions:
   - `.github/workflows/ci.yml`
   - Automatic tests on each push
   - Linting and formatting verification
   - Production build
3. Implement steps:
   - Dependency installation
   - Test execution
   - Code verification (ESLint, Prettier)
   - Build and automatic deployment
4. Manage environments (development, staging, production)

**Validation Criteria**:
- [ ] CI/CD pipeline configured
- [ ] Tests run automatically
- [ ] Code quality verified
- [ ] Functional automated deployment

**Hints**:
- `uses: actions/checkout@v2`
- `uses: actions/setup-node@v2`
- `run: npm run test`
- Protected branches with required checks

### Exercise 9.11: Complete Progressive Web App (PWA)
**Objective**: Transform an application into a complete and modern PWA.

**Instructions**:
1. Implement all PWA features:
   - Manifest.json with complete metadata
   - Service Worker with advanced caching strategy
   - Offline mode with fallback pages
   - Background synchronization
2. Advanced optimizations:
   - API cache with expiration
   - Intelligent resource preloading
   - Push notifications (with permission)
   - Smooth installation
3. Test on different devices and browsers

**Validation Criteria**:
- [ ] Complete and functional PWA
- [ ] Valid and complete manifest.json
- [ ] Service Worker with intelligent cache
- [ ] Operational offline mode
- [ ] Installable on mobile/desktop

**Hints**:
- Manifest: multiple icons, colors, categories
- Cache: `cache.addAll()` for static resources
- `self.addEventListener('install')` and `'fetch'`
- Test with Lighthouse PWA audit

### Exercise 9.12: Final Optimized Application
**Objective**: Create a complete web application using all best practices.

**Instructions**:
1. Build a final application that integrates:
   - Modular architecture with design patterns
   - Complete automated tests
   - Optimized performance
   - WCAG 2.1 AA accessibility
   - PWA with offline mode
   - Automated CI/CD
2. Chosen features (examples):
   - Personal blog with comments
   - Productivity application (tasks, calendar)
   - Interactive portfolio with projects
   - Data visualization tool
3. Deploy and monitor:
   - Performance metrics
   - User analytics
   - Error monitoring

**Validation Criteria**:
- [ ] Complete and professional application
- [ ] All best practices applied
- [ ] Excellent performance and accessibility
- [ ] Tests and CI/CD configured
- [ ] Successful deployment with monitoring

**Hints**:
- Start with architecture (MVC, patterns)
- Implement tests in parallel with development
- Use monitoring tools like Sentry
- Document the entire process

## Inter-module Integration

### Exercise 9.13: Code Review and Refactoring
**Objective**: Perform a complete review and refactor an existing project.

**Instructions**:
1. Take your Module 8 project
2. Perform a complete code review:
   - Static analysis with ESLint/SonarJS
   - Performance and security tests
   - Accessibility audit
   - Manual code review
3. Refactor according to best practices:
   - Structure and readability improvements
   - Identified performance optimizations
   - Security corrections
   - Test improvements
4. Document changes and justifications

**Validation Criteria**:
- [ ] Complete code review performed
- [ ] Justified refactoring applied
- [ ] Measurable improvements demonstrated
- [ ] Final professional-quality code

**Hints**:
- Use static analysis tools
- Focus on important metrics
- Document each change with the why
- Keep track of improvements

### Exercise 9.14: Complete Technical Documentation
**Objective**: Create professional technical documentation for a project.

**Instructions**:
1. Completely document your application:
   - Detailed README.md with setup and usage
   - Architecture guide and technical decisions
   - API documentation (endpoints, parameters)
   - Developer contribution guide
2. Include:
   - Architecture diagrams
   - Complete code examples
   - Deployment guide
   - FAQ and troubleshooting
3. Make documentation living:
   - Automatic updates where possible
   - Executable examples
   - Links to external resources

**Validation Criteria**:
- [ ] Complete and professional documentation
- [ ] Architecture clearly explained
- [ ] Practical and usable guides
- [ ] Maintained updates

**Hints**:
- Use badges for project status
- Include diagrams (Mermaid or PlantUML)
- Structure with clear table of contents
- Keep documentation updated with code

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Quality**: Clean, well-tested, and documented code
- **Performance**: Applied and measured optimizations
- **Maintainability**: Modular architecture and appropriate patterns
- **Security**: Implemented security best practices
- **Scalability**: Code designed to grow and adapt
- **Professionalism**: Respected industry standards

## Help Resources

- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Web Performance Optimization](https://web.dev/performance/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [PWA Guides](https://web.dev/progressive-web-apps/)

## Congratulations!

You have completed the complete web development curriculum! You now master:

- **Basic HTML/CSS/JS**: Structure, style, interactivity
- **Advanced Programming**: Objects, APIs, asynchronous
- **Full-stack**: Frontend, backend, databases
- **Best Practices**: Tests, performance, security

You are now ready to:
- Build complex web applications
- Work in teams on real projects
- Continue learning new frameworks and technologies
- Contribute to open source projects
- Apply for web developer jobs

Keep practicing, stay curious, and don't hesitate to share your creations with the community!

## Possible Next Steps

- Learn React, Vue.js, or Angular
- Explore Node.js and backend APIs
- Discover databases (SQL, NoSQL)
- Specialize in mobile (React Native)
- Contribute to open source projects
- Obtain recognized certifications