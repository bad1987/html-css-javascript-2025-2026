# Module 09 - Advanced Topics and Best Practices

## Overview
In this final module, we will explore advanced topics and best practices for writing maintainable, performant, and professional code. You will learn design patterns, performance optimization, testing, and modern development workflows.

## Objectives
By the end of this module, you will be able to:
- Apply JavaScript design patterns
- Optimize web performance
- Write and run automated tests
- Use modern development tools
- Follow security best practices
- Manage versioning and deployments

## Prerequisites
- Modules 01-08: Complete mastery of full-stack web development

## Required Materials
- VS Code with advanced extensions
- Node.js and npm for development tools
- GitHub account for CI/CD workflows

## Session Structure
- Session 1: Design Patterns and Architecture (30 min)
- Session 2: Performance and Optimization (30 min)
- Practical Activity: Refactoring and Testing (1 hour)

## Theory: JavaScript Design Patterns

### Module Pattern (Encapsulation)
```javascript
const Calculator = (function() {
  // Private variables
  let history = [];

  // Private functions
  function validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }

  function saveToHistory(operation, result) {
    history.push({
      operation,
      result,
      timestamp: new Date()
    });
  }

  // Public API
  return {
    add(a, b) {
      if (!validateNumber(a) || !validateNumber(b)) {
        throw new Error('Invalid arguments');
      }
      const result = a + b;
      saveToHistory(`${a} + ${b}`, result);
      return result;
    },

    getHistory() {
      return [...history]; // Return a copy
    },

    clearHistory() {
      history = [];
    }
  };
})();

// Usage
const calc = Calculator;
console.log(calc.add(5, 3)); // 8
console.log(calc.getHistory()); // Operation history
```

### Observer Pattern (Custom Events)
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        callback(...args);
      });
    }
  }
}

// Usage
const userEvents = new EventEmitter();

userEvents.on('login', (user) => {
  console.log(`${user.name} logged in`);
});

userEvents.on('logout', (user) => {
  console.log(`${user.name} logged out`);
});

userEvents.emit('login', { name: 'Alice' });
```

### Factory Pattern (Object Creation)
```javascript
class UserFactory {
  static createUser(type, data) {
    switch(type) {
      case 'admin':
        return new AdminUser(data);
      case 'moderator':
        return new ModeratorUser(data);
      case 'regular':
      default:
        return new RegularUser(data);
    }
  }
}

class RegularUser {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
    this.role = 'user';
    this.permissions = ['read'];
  }
}

class AdminUser extends RegularUser {
  constructor(data) {
    super(data);
    this.role = 'admin';
    this.permissions = ['read', 'write', 'delete', 'manage_users'];
  }
}

// Usage
const admin = UserFactory.createUser('admin', { name: 'Alice', email: 'alice@example.com' });
const user = UserFactory.createUser('regular', { name: 'Bob', email: 'bob@example.com' });
```

## Practical Activity: Performance Optimization

### Lazy Loading Images
```html
<img data-src="image.jpg" alt="Image" class="lazy" />
```

```javascript
// Intersection Observer for lazy loading
const lazyImages = document.querySelectorAll('.lazy');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### Debouncing and Throttling
```javascript
// Debounce: wait for user to stop typing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage for search
const debouncedSearch = debounce((query) => {
  console.log('Search:', query);
  // API call here
}, 300);

// Throttle: limit execution frequency
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage for scroll
const throttledScroll = throttle(() => {
  console.log('Scroll detected');
}, 100);
```

### Memoization (Result Caching)
```javascript
function memoize(func) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Expensive function to memoize
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast calculation thanks to cache
```

## Theory: Automated Testing

### Introduction to Testing
```javascript
// Function to test
function sum(a, b) {
  return a + b;
}

// Manual tests (not ideal)
console.assert(sum(2, 3) === 5, 'Sum of 2 + 3 should be 5');
console.assert(sum(-1, 1) === 0, 'Sum of -1 + 1 should be 0');

// Simple test framework
class TestSuite {
  constructor(name) {
    this.name = name;
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, testFunction) {
    this.tests.push({ name, testFunction });
  }

  run() {
    console.log(`\n=== Test Suite: ${this.name} ===`);

    this.tests.forEach(({ name, testFunction }) => {
      try {
        testFunction();
        console.log(`✅ ${name}`);
        this.passed++;
      } catch (error) {
        console.log(`❌ ${name}: ${error.message}`);
        this.failed++;
      }
    });

    console.log(`\nResults: ${this.passed} passed, ${this.failed} failed`);
  }
}

// Usage
const mathTests = new TestSuite('Math Tests');

mathTests.test('Positive addition', () => {
  if (sum(2, 3) !== 5) throw new Error('Addition failed');
});

mathTests.test('Negative addition', () => {
  if (sum(-1, 1) !== 0) throw new Error('Negative addition failed');
});

mathTests.run();
```

### Testing with Jest (Recommended)
```bash
npm install --save-dev jest
```

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

// sum.test.js
const sum = require('./sum');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('handles floating point', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
```

## Project: Optimized and Tested Application

Let's refactor our blog application with the best practices we've learned:

### Optimized Project Structure
```
blog-app/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── PostList.js
│   │   ├── PostDetail.js
│   │   └── AuthForm.js
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── storage.js
│   ├── utils/
│   │   ├── validation.js
│   │   ├── formatters.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── responsive.css
│   └── app.js
├── tests/
│   ├── components/
│   ├── services/
│   └── utils/
├── dist/
├── package.json
├── webpack.config.js
├── .eslintrc.js
├── .prettierrc
└── README.md
```

### API Service with Error Handling
```javascript
// src/services/api.js
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth-token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth-token', token);
    } else {
      localStorage.removeItem('auth-token');
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(data.message || 'API Error', response.status);
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error', 0);
    }
  }

  // Specific methods
  async getPosts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/posts?${queryString}`);
  }

  async createPost(postData) {
    return this.request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData)
    });
  }

  async updatePost(id, postData) {
    return this.request(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData)
    });
  }

  async deletePost(id) {
    return this.request(`/posts/${id}`, {
      method: 'DELETE'
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    this.setToken(response.token);
    return response;
  }

  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });

    this.setToken(response.token);
    return response;
  }
}

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export default new ApiService(process.env.API_BASE_URL || 'http://localhost:3000/api');
```

### Robust Validation
```javascript
// src/utils/validation.js
export const validators = {
  required: (value) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'This field is required';
    }
    return null;
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Minimum ${min} characters required`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `Maximum ${max} characters allowed`;
    }
    return null;
  },

  password: (value) => {
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return 'Password must contain at least one lowercase, one uppercase, and one number';
    }
    return null;
  }
};

export const validateField = (value, rules) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  return null;
};

export const validateForm = (formData, validationRules) => {
  const errors = {};
  let isValid = true;

  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];
    const error = validateField(value, rules);

    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Example usage
export const loginValidationRules = {
  email: [validators.required, validators.email],
  password: [validators.required, validators.minLength(6)]
};

export const registerValidationRules = {
  username: [validators.required, validators.minLength(3), validators.maxLength(20)],
  email: [validators.required, validators.email],
  password: [validators.required, validators.minLength(8), validators.password]
};
```

### Automated Tests
```javascript
// tests/utils/validation.test.js
import { validateField, validateForm, validators } from '../../src/utils/validation.js';

describe('Validation Utils', () => {
  describe('Field Validation', () => {
    test('required validator', () => {
      expect(validateField('', [validators.required])).toBe('This field is required');
      expect(validateField('test', [validators.required])).toBeNull();
    });

    test('email validator', () => {
      expect(validateField('invalid-email', [validators.email])).toBe('Invalid email address');
      expect(validateField('test@example.com', [validators.email])).toBeNull();
    });

    test('minLength validator', () => {
      const min3 = validators.minLength(3);
      expect(validateField('ab', [min3])).toBe('Minimum 3 characters required');
      expect(validateField('abc', [min3])).toBeNull();
    });
  });

  describe('Form Validation', () => {
    test('valid form', () => {
      const formData = { email: 'test@example.com', password: 'password123' };
      const rules = {
        email: [validators.required, validators.email],
        password: [validators.required]
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    test('invalid form', () => {
      const formData = { email: 'invalid-email', password: '' };
      const rules = {
        email: [validators.required, validators.email],
        password: [validators.required]
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
      expect(result.errors.password).toBeDefined();
    });
  });
});
```

### Development Tools

#### ESLint (Code Quality)
```bash
npm install --save-dev eslint
```

```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all']
  }
};
```

#### Prettier (Automatic Formatting)
```bash
npm install --save-dev prettier
```

```javascript
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

#### NPM Scripts
```json
// package.json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write src/**/*.js",
    "prepare": "husky install"
  }
}
```

## Assessment
1. Refactor part of your code with a design pattern
2. Implement unit tests for at least 3 functions
3. Add ESLint and Prettier to your project
4. Optimize page performance (lazy loading, etc.)
5. Implement an intelligent caching system

## Extra Challenge: CI/CD
Set up a GitHub Actions pipeline:

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linter
      run: npm run lint

    - name: Run tests
      run: npm run test

    - name: Build
      run: npm run build
```

## Next Steps
Congratulations! You are now a competent full-stack web developer with knowledge of best practices and optimization.

**Areas to explore next:**
- Modern frameworks: React, Vue.js, Angular
- Advanced backend: Python/Django, Ruby/Rails, Go
- Databases: PostgreSQL, MongoDB
- DevOps: Docker, Kubernetes, AWS
- Mobile: React Native, Flutter
- AI/ML: TensorFlow.js, AI API integration

## Resources
- [JavaScript Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Web Performance Optimization](https://web.dev/performance/)
- [Jest Testing Framework](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/)
- [Prettier Code Formatter](https://prettier.io/)