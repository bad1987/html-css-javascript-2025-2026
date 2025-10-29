# Module 9 : Sujets Avancés et Bonnes Pratiques

## Aperçu
Dans ce dernier module, nous explorerons des sujets avancés et les meilleures pratiques pour écrire du code maintenable, performant et professionnel. Vous apprendrez les patterns de conception, l'optimisation des performances, les tests, et les workflows de développement modernes.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Appliquer des patterns de conception JavaScript
- Optimiser les performances web
- Écrire et exécuter des tests automatisés
- Utiliser des outils de développement modernes
- Suivre les bonnes pratiques de sécurité
- Gérer le versioning et les déploiements

## Prérequis
- Modules 1-8 : Maîtrise complète du développement web full-stack

## Matériaux Nécessaires
- VS Code avec extensions avancées
- Node.js et npm pour les outils de développement
- Compte GitHub pour les workflows CI/CD

## Structure de Session
- Session 1 : Patterns de Conception et Architecture (30 min)
- Session 2 : Performance et Optimisation (30 min)
- Activité Pratique : Refactorisation et Tests (1 heure)

## Théorie : Patterns de Conception JavaScript

### Module Pattern (Encapsulation)
```javascript
const Calculator = (function() {
    // Variables privées
    let history = [];
    
    // Fonctions privées
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
    
    // API publique
    return {
        add(a, b) {
            if (!validateNumber(a) || !validateNumber(b)) {
                throw new Error('Arguments invalides');
            }
            const result = a + b;
            saveToHistory(`${a} + ${b}`, result);
            return result;
        },
        
        getHistory() {
            return [...history]; // Retourner une copie
        },
        
        clearHistory() {
            history = [];
        }
    };
})();

// Utilisation
const calc = Calculator;
console.log(calc.add(5, 3)); // 8
console.log(calc.getHistory()); // Historique des opérations
```

### Observer Pattern (Événements personnalisés)
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

// Utilisation
const userEvents = new EventEmitter();

userEvents.on('login', (user) => {
    console.log(`${user.name} s'est connecté`);
});

userEvents.on('logout', (user) => {
    console.log(`${user.name} s'est déconnecté`);
});

userEvents.emit('login', { name: 'Alice' });
```

### Factory Pattern (Création d'objets)
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

// Utilisation
const admin = UserFactory.createUser('admin', { name: 'Alice', email: 'alice@example.com' });
const user = UserFactory.createUser('regular', { name: 'Bob', email: 'bob@example.com' });
```

## Activité Pratique : Optimisation des Performances

### Lazy Loading d'Images
```html
<img data-src="image.jpg" alt="Image" class="lazy">
```

```javascript
// Intersection Observer pour lazy loading
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

### Debouncing et Throttling
```javascript
// Debounce : attendre que l'utilisateur arrête de taper
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

// Utilisation pour recherche
const debouncedSearch = debounce((query) => {
    console.log('Recherche:', query);
    // Appel API ici
}, 300);

// Throttle : limiter la fréquence d'exécution
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

// Utilisation pour scroll
const throttledScroll = throttle(() => {
    console.log('Scroll détecté');
}, 100);
```

### Memoization (Cache des résultats)
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

// Fonction coûteuse à mémoriser
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Calcul rapide grâce au cache
```

## Théorie : Tests Automatisés

### Introduction aux Tests
```javascript
// Fonction à tester
function sum(a, b) {
    return a + b;
}

// Tests manuels (pas idéal)
console.assert(sum(2, 3) === 5, 'La somme de 2 + 3 devrait être 5');
console.assert(sum(-1, 1) === 0, 'La somme de -1 + 1 devrait être 0');

// Framework de test simple
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
        console.log(`\n=== Suite de tests: ${this.name} ===`);
        
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
        
        console.log(`\nRésultats: ${this.passed} réussis, ${this.failed} échoués`);
    }
}

// Utilisation
const mathTests = new TestSuite('Tests Mathématiques');

mathTests.test('Addition positive', () => {
    if (sum(2, 3) !== 5) throw new Error('Échec addition');
});

mathTests.test('Addition avec négatifs', () => {
    if (sum(-1, 1) !== 0) throw new Error('Échec négatifs');
});

mathTests.run();
```

### Tests avec Jest (recommandé)
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

## Projet : Application Optimisée et Testée

Refactorisons notre application de blog avec les bonnes pratiques apprises :

### Structure de Projet Optimisée
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

### Service API avec Gestion d'Erreurs
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
                throw new ApiError(data.message || 'Erreur API', response.status);
            }
            
            return data;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError('Erreur réseau', 0);
        }
    }
    
    // Méthodes spécifiques
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

### Validation Robuste
```javascript
// src/utils/validation.js
export const validators = {
    required: (value) => {
        if (!value || (typeof value === 'string' && value.trim() === '')) {
            return 'Ce champ est obligatoire';
        }
        return null;
    },
    
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Adresse email invalide';
        }
        return null;
    },
    
    minLength: (min) => (value) => {
        if (value && value.length < min) {
            return `Minimum ${min} caractères requis`;
        }
        return null;
    },
    
    maxLength: (max) => (value) => {
        if (value && value.length > max) {
            return `Maximum ${max} caractères autorisés`;
        }
        return null;
    },
    
    password: (value) => {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            return 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre';
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

// Exemple d'utilisation
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

### Tests Automatisés
```javascript
// tests/utils/validation.test.js
import { validateField, validateForm, validators } from '../../src/utils/validation.js';

describe('Validation Utils', () => {
    describe('Field Validation', () => {
        test('required validator', () => {
            expect(validateField('', [validators.required])).toBe('Ce champ est obligatoire');
            expect(validateField('test', [validators.required])).toBeNull();
        });
        
        test('email validator', () => {
            expect(validateField('invalid-email', [validators.email])).toBe('Adresse email invalide');
            expect(validateField('test@example.com', [validators.email])).toBeNull();
        });
        
        test('minLength validator', () => {
            const min3 = validators.minLength(3);
            expect(validateField('ab', [min3])).toBe('Minimum 3 caractères requis');
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

### Outils de Développement

#### ESLint (Qualité du code)
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

#### Prettier (Formatage automatique)
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

#### Scripts npm
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

## Évaluation
1. Refactorisez une partie de votre code avec un pattern de conception
2. Implémentez des tests unitaires pour au moins 3 fonctions
3. Ajoutez ESLint et Prettier à votre projet
4. Optimisez les performances d'une page (lazy loading, etc.)
5. Implémentez un système de cache intelligent

## Défi Supplémentaire : CI/CD
Configurez un pipeline GitHub Actions :

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

## Prochaines Étapes
Félicitations ! Vous êtes maintenant un développeur web full-stack compétent avec des connaissances en bonnes pratiques et optimisation.

**Domaines à explorer ensuite :**
- Frameworks modernes : React, Vue.js, Angular
- Backend avancé : Python/Django, Ruby/Rails, Go
- Bases de données : PostgreSQL, MongoDB
- DevOps : Docker, Kubernetes, AWS
- Mobile : React Native, Flutter
- IA/ML : TensorFlow.js, intégration d'APIs IA

## Ressources
- [JavaScript Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Web Performance Optimization](https://web.dev/performance/)
- [Jest Testing Framework](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/)
- [Prettier Code Formatter](https://prettier.io/)