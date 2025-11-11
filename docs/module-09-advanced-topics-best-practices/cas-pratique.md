# Practical Project: Refactoring and Optimizing an Existing Web Application

## Project Context
You have now acquired all the fundamental skills of web development. This final practical project asks you to take an existing application (from Module 8) and optimize it by applying the advanced best practices learned: design patterns, performance, testing, and modern workflows.

## Objective
Completely refactor an existing web application by applying best development practices: performance optimization, modular architecture, automated testing, CI/CD, and deployment.

## Analysis of the Existing Application
Before starting, identify the problems in the current application:

### Identified Issues
1. **Performance:** Unoptimized code, no lazy loading, bulky JavaScript bundle
2. **Architecture:** Monolithic code, no clear separation of responsibilities
3. **Tests:** No automated tests, manual debugging only
4. **Security:** Potential vulnerabilities, insufficient validation
5. **Maintainability:** Duplicate code, long functions, insufficient comments
6. **Deployment:** No CI/CD, manual deployment

## Implementation Steps

### Step 1: Audit and Planning
Create a detailed improvement plan:

```markdown
# Optimization Plan - Recipe Application

## Critical Issues
- [ ] Large JS bundle (slow loading)
- [ ] No image caching
- [ ] Inefficient API requests
- [ ] Untested code

## Priority Improvements
1. **Performance** (Week 1)
   - Implement code splitting
   - Optimize images
   - Add service worker
   - Cache API calls

2. **Architecture** (Week 2)
   - Refactor into modules
   - Implement design patterns
   - Separate responsibilities
   - Create scalable architecture

3. **Tests** (Week 3)
   - Unit tests for utilities
   - Integration tests for API
   - End-to-end tests for user journeys
   - Set up Jest and Testing Library

4. **Security** (Week 4)
   - Complete security audit
   - Implement Content Security Policy
   - Strengthen data validation
   - Update dependencies

5. **CI/CD** (Week 5)
   - Configure GitHub Actions
   - Automate tests
   - Verify code quality
   - Automatic deployment

## Success Metrics
- [ ] Loading time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Test coverage > 80%
- [ ] Zero critical vulnerabilities
- [ ] Automated deployment operational
```

### Step 2: Performance Optimization
Implement performance improvements:

#### Code Splitting and Lazy Loading
```javascript
// js/app.js - Before (everything in one file)
import { ApiService } from './services/api.js';
import { AuthService } from './services/auth.js';
import { RecipeCard } from './components/RecipeCard.js';
import { Modal } from './components/Modal.js';
// ... 50+ other imports

// After - Smart code splitting
// Critical imports only
import { ApiService } from './services/api.js';

// Lazy load non-critical components
const loadRecipeComponents = async () => {
    const [
        { RecipeCard },
        { Modal },
        { InfiniteScroll }
    ] = await Promise.all([
        import('./components/RecipeCard.js'),
        import('./components/Modal.js'),
        import('./components/InfiniteScroll.js')
    ]);

    return { RecipeCard, Modal, InfiniteScroll };
};

// Lazy load pages
const loadPage = async (pageName) => {
    switch(pageName) {
        case 'recipe-detail':
            return await import('./pages/RecipeDetailPage.js');
        case 'create-recipe':
            return await import('./pages/CreateRecipePage.js');
        case 'profile':
            return await import('./pages/ProfilePage.js');
        default:
            return await import('./pages/HomePage.js');
    }
};
```

#### Service Worker for Caching
```javascript
// sw.js - Service Worker
const CACHE_NAME = 'recipe-app-v1';
const STATIC_CACHE = 'recipe-static-v1';
const API_CACHE = 'recipe-api-v1';

const STATIC_ASSETS = [
    '/',
    '/css/style.css',
    '/css/responsive.css',
    '/js/app.js',
    '/js/api.js',
    '/assets/images/logo.png',
    '/manifest.json'
];

// Installation
self.addEventListener('install', (event) => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then(cache => {
                return cache.addAll(STATIC_ASSETS);
            }),
            self.skipWaiting()
        ])
    );
});

// Activation
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            // Clean old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== API_CACHE) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim()
        ])
    );
});

// Intercept requests
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Cache First strategy for static assets
    if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
        event.respondWith(cacheFirst(request, STATIC_CACHE));
        return;
    }

    // Network First strategy for APIs
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(networkFirst(request, API_CACHE));
        return;
    }

    // Stale While Revalidate strategy for pages
    event.respondWith(staleWhileRevalidate(request));
});

async function cacheFirst(request, cacheName) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        // Fallback for images
        if (request.destination === 'image') {
            return caches.match('/assets/images/placeholder.jpg');
        }
        throw error;
    }
}

async function networkFirst(request, cacheName) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        const cached = await caches.match(request);
        if (cached) return cached;
        throw error;
    }
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request).then(response => {
        if (response.ok) {
            cache.put(request, response.clone());
        }
        return response;
    });

    return cached || fetchPromise;
}
```

#### Image Optimization
```javascript
// js/utils/image.js - Image optimization utilities
class ImageOptimizer {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Intersection Observer for lazy loading
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    this.observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
    }

    observe(img) {
        this.observer.observe(img);
    }

    async loadImage(img) {
        const src = img.dataset.src;
        if (!src) return;

        try {
            // Create image for preloading
            const image = new Image();

            image.onload = () => {
                img.src = src;
                img.classList.remove('loading');
                img.classList.add('loaded');
            };

            image.onerror = () => {
                // Fallback to placeholder image
                img.src = '/assets/images/placeholder.jpg';
                img.classList.remove('loading');
                img.classList.add('error');
            };

            img.classList.add('loading');
            image.src = src;

        } catch (error) {
            console.error('Image loading error:', error);
            img.src = '/assets/images/placeholder.jpg';
        }
    }

    // Generate srcset for responsive images
    generateSrcSet(imagePath, widths = [320, 640, 1024, 1920]) {
        return widths.map(width => {
            const height = Math.round(width * 0.75); // 4:3 ratio
            return `${imagePath}?w=${width}&h=${height}&fit=crop&auto=format&q=80 ${width}w`;
        }).join(', ');
    }

    // Generate blurred placeholder
    async generatePlaceholder(imagePath) {
        // Use an API like BlurHash or external service
        // For this example, return a gray color
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
    }
}

// Usage
const imageOptimizer = new ImageOptimizer();

// In components
class RecipeCard {
    render() {
        const img = document.createElement('img');
        img.dataset.src = this.recipe.image;
        img.src = imageOptimizer.generatePlaceholder(this.recipe.image);
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
        img.srcset = imageOptimizer.generateSrcSet(this.recipe.image);

        imageOptimizer.observe(img);
        return img;
    }
}
```

### Step 3: Architectural Refactoring
Apply design patterns:

#### Module Pattern
```javascript
// js/modules/RecipeModule.js - Dedicated recipe module
import { ApiService } from '../services/ApiService.js';
import { EventEmitter } from '../utils/EventEmitter.js';

class RecipeModule extends EventEmitter {
    constructor() {
        super();
        this.recipes = new Map();
        this.currentFilters = {};
        this.loading = false;
    }

    async loadRecipes(filters = {}, page = 1, limit = 12) {
        if (this.loading) return;

        this.loading = true;
        this.emit('loading', true);

        try {
            const response = await ApiService.getRecipes({
                ...filters,
                page,
                limit
            });

            // Transform to Map for fast access
            response.recipes.forEach(recipe => {
                this.recipes.set(recipe.id, recipe);
            });

            this.emit('recipesLoaded', {
                recipes: response.recipes,
                pagination: response.pagination,
                filters
            });

        } catch (error) {
            this.emit('error', error);
        } finally {
            this.loading = false;
            this.emit('loading', false);
        }
    }

    getRecipe(id) {
        return this.recipes.get(id);
    }

    updateRecipe(id, updates) {
        const recipe = this.recipes.get(id);
        if (recipe) {
            const updatedRecipe = { ...recipe, ...updates };
            this.recipes.set(id, updatedRecipe);
            this.emit('recipeUpdated', updatedRecipe);
        }
    }

    setFilters(filters) {
        this.currentFilters = { ...this.currentFilters, ...filters };
        this.emit('filtersChanged', this.currentFilters);
    }

    getFilteredRecipes() {
        // Client-side filtering for already loaded data
        return Array.from(this.recipes.values()).filter(recipe => {
            return this.matchesFilters(recipe, this.currentFilters);
        });
    }

    matchesFilters(recipe, filters) {
        if (filters.category && recipe.category !== filters.category) return false;
        if (filters.cuisine && recipe.cuisine !== filters.cuisine) return false;
        if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
        if (filters.maxPrepTime && recipe.prepTime > filters.maxPrepTime) return false;
        if (filters.tags && filters.tags.length > 0) {
            const hasTag = filters.tags.some(tag => recipe.tags.includes(tag));
            if (!hasTag) return false;
        }
        return true;
    }
}

// Singleton pattern
export const recipeModule = new RecipeModule();
```

#### Repository Pattern
```javascript
// js/repositories/RecipeRepository.js - Repository pattern
import { ApiService } from '../services/ApiService.js';

class RecipeRepository {
    constructor() {
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
    }

    async findById(id, useCache = true) {
        // Check cache
        if (useCache && this.isCached(id)) {
            return this.getFromCache(id);
        }

        try {
            const recipe = await ApiService.getRecipe(id);
            this.setCache(id, recipe);
            return recipe;
        } catch (error) {
            throw new Error(`Recipe with id ${id} not found`);
        }
    }

    async findAll(filters = {}, options = {}) {
        const cacheKey = this.generateCacheKey(filters, options);

        if (this.isCached(cacheKey)) {
            return this.getFromCache(cacheKey);
        }

        try {
            const recipes = await ApiService.getRecipes(filters, options);
            this.setCache(cacheKey, recipes);
            return recipes;
        } catch (error) {
            throw new Error('Failed to fetch recipes');
        }
    }

    async create(recipeData) {
        const recipe = await ApiService.createRecipe(recipeData);
        this.invalidateCache(); // Invalidate cache after creation
        return recipe;
    }

    async update(id, updates) {
        const recipe = await ApiService.updateRecipe(id, updates);
        this.setCache(id, recipe); // Update cache
        return recipe;
    }

    async delete(id) {
        await ApiService.deleteRecipe(id);
        this.removeFromCache(id);
    }

    // Cache methods
    isCached(key) {
        const cached = this.cache.get(key);
        if (!cached) return false;

        const now = Date.now();
        if (now > cached.expiry) {
            this.cache.delete(key);
            return false;
        }

        return true;
    }

    getFromCache(key) {
        return this.cache.get(key).data;
    }

    setCache(key, data) {
        this.cache.set(key, {
            data,
            expiry: Date.now() + this.cacheExpiry
        });
    }

    removeFromCache(key) {
        this.cache.delete(key);
    }

    invalidateCache() {
        this.cache.clear();
    }

    generateCacheKey(filters, options) {
        return JSON.stringify({ filters, options });
    }

    // Utility methods
    async search(query) {
        return await ApiService.searchRecipes(query);
    }

    async getPopular(limit = 10) {
        return await ApiService.getPopularRecipes(limit);
    }

    async getRecent(limit = 10) {
        return await ApiService.getRecentRecipes(limit);
    }

    async like(id) {
        return await ApiService.likeRecipe(id);
    }

    async rate(id, rating) {
        return await ApiService.rateRecipe(id, rating);
    }
}

export const recipeRepository = new RecipeRepository();
```

### Step 4: Automated Tests
Implement a complete test suite:

#### Unit Tests
```javascript
// tests/unit/utils/validation.test.js
import { validateEmail, validatePassword, validateRecipe } from '../../../src/utils/validation.js';

describe('Validation Utils', () => {
    describe('validateEmail', () => {
        test('should validate correct email addresses', () => {
            expect(validateEmail('test@example.com')).toBe(true);
            expect(validateEmail('user.name@domain.co.uk')).toBe(true);
        });

        test('should reject invalid email addresses', () => {
            expect(validateEmail('invalid-email')).toBe(false);
            expect(validateEmail('@domain.com')).toBe(false);
            expect(validateEmail('user@')).toBe(false);
        });

        test('should handle edge cases', () => {
            expect(validateEmail('')).toBe(false);
            expect(validateEmail(null)).toBe(false);
            expect(validateEmail(undefined)).toBe(false);
        });
    });

    describe('validatePassword', () => {
        test('should validate strong passwords', () => {
            expect(validatePassword('StrongPass123!')).toBe(true);
            expect(validatePassword('MySecure789#')).toBe(true);
        });

        test('should reject weak passwords', () => {
            expect(validatePassword('weak')).toBe(false);
            expect(validatePassword('12345678')).toBe(false);
            expect(validatePassword('password')).toBe(false);
        });

        test('should enforce minimum requirements', () => {
            expect(validatePassword('Short1!')).toBe(false); // Too short
            expect(validatePassword('nouppercase1!')).toBe(false); // No uppercase
            expect(validatePassword('NOLOWERCASE1!')).toBe(false); // No lowercase
            expect(validatePassword('NoNumber!')).toBe(false); // No number
        });
    });

    describe('validateRecipe', () => {
        const validRecipe = {
            title: 'Delicious Pasta Carbonara',
            description: 'A classic Italian pasta dish',
            category: 'Main dish',
            prepTime: 15,
            cookTime: 20,
            servings: 4,
            ingredients: [
                { name: 'spaghetti', quantity: '400', unit: 'g' },
                { name: 'eggs', quantity: '4', unit: 'piece' }
            ],
            steps: [
                { order: 1, instruction: 'Cook pasta', duration: 10 }
            ]
        };

        test('should validate correct recipe data', () => {
            const errors = validateRecipe(validRecipe);
            expect(errors).toHaveLength(0);
        });

        test('should reject recipes without required fields', () => {
            const invalidRecipe = { ...validRecipe };
            delete invalidRecipe.title;

            const errors = validateRecipe(invalidRecipe);
            expect(errors).toContain('Title is required');
        });

        test('should validate prepTime constraints', () => {
            const recipe = { ...validRecipe, prepTime: 0 };
            const errors = validateRecipe(recipe);
            expect(errors).toContain('Preparation time must be positive');
        });

        test('should validate ingredients structure', () => {
            const recipe = {
                ...validRecipe,
                ingredients: [
                    { name: '', quantity: '100', unit: 'g' } // Empty name
                ]
            };

            const errors = validateRecipe(recipe);
            expect(errors).toContain('Ingredient name is required');
        });

        test('should validate steps structure', () => {
            const recipe = {
                ...validRecipe,
                steps: [
                    { order: 1, instruction: '', duration: 5 } // Empty instruction
                ]
            };

            const errors = validateRecipe(recipe);
            expect(errors).toContain('Step instruction is required');
        });
    });
});
```

#### Integration Tests
```javascript
// tests/integration/api/recipes.test.js
import { apiService } from '../../../src/services/api.js';
import { Recipe } from '../../../src/models/Recipe.js';

describe('Recipes API Integration', () => {
    let testRecipe;
    let authToken;

    beforeAll(async () => {
        // Login to get token
        const loginResponse = await apiService.post('/auth/login', {
            email: 'test@example.com',
            password: 'TestPassword123!'
        });
        authToken = loginResponse.token;

        // Create test recipe
        testRecipe = {
            title: 'Test Recipe',
            description: 'A test recipe for integration tests',
            category: 'Main dish',
            prepTime: 10,
            cookTime: 20,
            servings: 2,
            ingredients: [
                { name: 'test ingredient', quantity: '100', unit: 'g' }
            ],
            steps: [
                { order: 1, instruction: 'Test instruction' }
            ]
        };
    });

    describe('CRUD Operations', () => {
        test('should create a new recipe', async () => {
            const response = await apiService.post('/recipes', testRecipe, {
                headers: { Authorization: `Bearer ${authToken}` }
            });

            expect(response).toHaveProperty('id');
            expect(response.title).toBe(testRecipe.title);
            expect(response.author).toBeDefined();

            testRecipe.id = response.id;
        });

        test('should retrieve the created recipe', async () => {
            const response = await apiService.get(`/recipes/${testRecipe.id}`);

            expect(response.id).toBe(testRecipe.id);
            expect(response.title).toBe(testRecipe.title);
            expect(response.views).toBeGreaterThanOrEqual(1);
        });

        test('should update the recipe', async () => {
            const updates = {
                title: 'Updated Test Recipe',
                prepTime: 15
            };

            const response = await apiService.put(`/recipes/${testRecipe.id}`, updates, {
                headers: { Authorization: `Bearer ${authToken}` }
            });

            expect(response.title).toBe(updates.title);
            expect(response.prepTime).toBe(updates.prepTime);
            expect(response.updatedAt).toBeDefined();
        });

        test('should like the recipe', async () => {
            const response = await apiService.post(`/recipes/${testRecipe.id}/like`, {}, {
                headers: { Authorization: `Bearer ${authToken}` }
            });

            expect(response).toHaveProperty('liked');
            expect(response).toHaveProperty('likesCount');
        });

        test('should rate the recipe', async () => {
            const rating = 4;
            const response = await apiService.post(`/recipes/${testRecipe.id}/rate`, { rating }, {
                headers: { Authorization: `Bearer ${authToken}` }
            });

            expect(response.rating).toBe(rating);
            expect(response).toHaveProperty('averageRating');
            expect(response).toHaveProperty('ratingsCount');
        });

        test('should delete the recipe', async () => {
            await apiService.delete(`/recipes/${testRecipe.id}`, {
                headers: { Authorization: `Bearer ${authToken}` }
            });

            // Verify recipe no longer exists
            await expect(apiService.get(`/recipes/${testRecipe.id}`))
                .rejects
                .toThrow('Recipe not found');
        });
    });

    describe('Search and Filtering', () => {
        beforeAll(async () => {
            // Create multiple recipes for search tests
            const recipes = [
                {
                    title: 'Pasta Carbonara',
                    description: 'Classic Italian pasta',
                    category: 'Main dish',
                    prepTime: 10,
                    cookTime: 15,
                    servings: 4,
                    ingredients: [{ name: 'pasta', quantity: '400', unit: 'g' }],
                    steps: [{ order: 1, instruction: 'Cook pasta' }],
                    tags: ['italian', 'pasta', 'quick']
                },
                {
                    title: 'Caesar Salad',
                    description: 'Fresh and crispy salad',
                    category: 'Appetizer',
                    prepTime: 15,
                    cookTime: 0,
                    servings: 2,
                    ingredients: [{ name: 'lettuce', quantity: '1', unit: 'piece' }],
                    steps: [{ order: 1, instruction: 'Mix ingredients' }],
                    tags: ['salad', 'quick', 'healthy']
                }
            ];

            for (const recipe of recipes) {
                await apiService.post('/recipes', recipe, {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
            }
        });

        test('should search recipes by title', async () => {
            const response = await apiService.get('/recipes?search=pasta');

            expect(response.recipes.length).toBeGreaterThan(0);
            expect(response.recipes[0].title.toLowerCase()).toContain('pasta');
        });

        test('should filter recipes by category', async () => {
            const response = await apiService.get('/recipes?category=Main dish');

            expect(response.recipes.length).toBeGreaterThan(0);
            response.recipes.forEach(recipe => {
                expect(recipe.category).toBe('Main dish');
            });
        });

        test('should sort recipes by creation date', async () => {
            const response = await apiService.get('/recipes?sort=createdAt&order=desc');

            expect(response.recipes.length).toBeGreaterThan(1);
            for (let i = 1; i < response.recipes.length; i++) {
                expect(new Date(response.recipes[i-1].createdAt).getTime())
                    .toBeGreaterThanOrEqual(new Date(response.recipes[i].createdAt).getTime());
            }
        });

        test('should paginate results', async () => {
            const response = await apiService.get('/recipes?page=1&limit=1');

            expect(response.recipes.length).toBe(1);
            expect(response.pagination.currentPage).toBe(1);
            expect(response.pagination.hasNext).toBe(true);
        });
    });
});
```

#### End-to-End Tests
```javascript
// tests/e2e/user-journey.test.js
import { test, expect } from '@playwright/test';

test.describe('User Journey - Recipe Sharing', () => {
    test.beforeEach(async ({ page }) => {
        // Go to home page
        await page.goto('http://localhost:3001');

        // Login if necessary
        const loginButton = page.locator('[data-testid="login-button"]');
        if (await loginButton.isVisible()) {
            await loginButton.click();

            await page.fill('[data-testid="email-input"]', 'test@example.com');
            await page.fill('[data-testid="password-input"]', 'TestPassword123!');
            await page.click('[data-testid="submit-login"]');

            // Wait for redirection
            await page.waitForURL('**/');
        }
    });

    test('should complete full recipe creation journey', async ({ page }) => {
        // Click "Create Recipe"
        await page.click('[data-testid="create-recipe-button"]');

        // Fill form
        await page.fill('[data-testid="recipe-title"]', 'Test E2E Recipe');
        await page.fill('[data-testid="recipe-description"]', 'A recipe created during E2E testing');

        // Select category
        await page.selectOption('[data-testid="recipe-category"]', 'Main dish');

        // Fill times
        await page.fill('[data-testid="prep-time"]', '15');
        await page.fill('[data-testid="cook-time"]', '30');
        await page.fill('[data-testid="servings"]', '4');

        // Add ingredient
        await page.click('[data-testid="add-ingredient"]');
        await page.fill('[data-testid="ingredient-0-name"]', 'Tomatoes');
        await page.fill('[data-testid="ingredient-0-quantity"]', '500');
        await page.selectOption('[data-testid="ingredient-0-unit"]', 'g');

        // Add step
        await page.click('[data-testid="add-step"]');
        await page.fill('[data-testid="step-0-instruction"]', 'Cut tomatoes into cubes');

        // Submit recipe
        await page.click('[data-testid="submit-recipe"]');

        // Verify redirection to detail page
        await expect(page).toHaveURL(/\/recipe\/.+/);

        // Verify recipe appears in list
        await page.goto('/');
        await expect(page.locator('text=Test E2E Recipe')).toBeVisible();
    });

    test('should handle recipe search and filtering', async ({ page }) => {
        // Perform search
        await page.fill('[data-testid="search-input"]', 'pasta');
        await page.click('[data-testid="search-button"]');

        // Verify results
        await expect(page.locator('[data-testid="recipe-card"]')).toHaveCount(await page.locator('[data-testid="recipe-card"]').count());

        // Apply filter
        await page.selectOption('[data-testid="category-filter"]', 'Main dish');
        await page.click('[data-testid="apply-filters"]');

        // Verify only main dishes are displayed
        const recipes = page.locator('[data-testid="recipe-card"]');
        const count = await recipes.count();

        for (let i = 0; i < count; i++) {
            await expect(recipes.nth(i)).toContainText('Main dish');
        }
    });

    test('should handle user authentication', async ({ page }) => {
        // Logout
        await page.click('[data-testid="user-menu"]');
        await page.click('[data-testid="logout-button"]');

        // Verify redirection to login page
        await expect(page).toHaveURL('**/login');

        // Try login with wrong credentials
        await page.fill('[data-testid="email-input"]', 'wrong@example.com');
        await page.fill('[data-testid="password-input"]', 'wrongpassword');
        await page.click('[data-testid="submit-login"]');

        // Verify error message
        await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
        await expect(page.locator('[data-testid="error-message"]')).toContainText('invalid credentials');

        // Login with correct credentials
        await page.fill('[data-testid="email-input"]', 'test@example.com');
        await page.fill('[data-testid="password-input"]', 'TestPassword123!');
        await page.click('[data-testid="submit-login"]');

        // Verify successful login
        await expect(page).toHaveURL('**/');
        await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
    });

    test('should handle recipe interaction', async ({ page }) => {
        // Click on a recipe
        await page.click('[data-testid="recipe-card"]:first-child');

        // Verify detail page
        await expect(page).toHaveURL(/\/recipe\/.+/);

        // Like the recipe
        const likeButton = page.locator('[data-testid="like-button"]');
        const initialLikes = await likeButton.textContent();

        await likeButton.click();

        // Verify likes count changed
        await expect(likeButton).not.toHaveText(initialLikes);

        // Rate the recipe
        await page.click('[data-testid="star-4"]');

        // Verify rating is saved
        await expect(page.locator('[data-testid="rating-confirm"]')).toBeVisible();
    });

    test('should handle error states gracefully', async ({ page }) => {
        // Go to invalid URL
        await page.goto('http://localhost:3001/recipe/invalid-id');

        // Verify error page
        await expect(page.locator('[data-testid="error-page"]')).toBeVisible();
        await expect(page.locator('text=Recipe not found')).toBeVisible();

        // Verify back link
        await page.click('[data-testid="back-home"]');
        await expect(page).toHaveURL('**/');
    });
});
```

### Step 5: CI/CD Configuration
Set up a deployment pipeline:

#### GitHub Actions
```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mongodb:
        image: mongo:4.4
        ports:
          - 27017:27017

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run unit tests
      run: npm run test:unit
      env:
        DATABASE_URL: mongodb://localhost:27017/recipe-test

    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: mongodb://localhost:27017/recipe-test

    - name: Build application
      run: npm run build

    - name: Run Lighthouse audit
      uses: treosh/lighthouse-ci-action@v10
      with:
        urls: http://localhost:3001
        configPath: .lighthouserc.json

    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  e2e:
    runs-on: ubuntu-latest
    needs: test

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Start MongoDB
      uses: supercharge/mongodb-github-action@1.8.0
      with:
        mongodb-version: '4.4'

    - name: Start application
      run: |
        npm ci
        npm run build
        npm run start &
        sleep 10

    - name: Run E2E tests
      run: npm run test:e2e
      env:
        BASE_URL: http://localhost:3001

  deploy-staging:
    runs-on: ubuntu-latest
    needs: [test, e2e]
    if: github.ref == 'refs/heads/develop'

    steps:
    - name: Deploy to staging
      run: |
        echo "Deploying to staging"
        # Staging deployment commands

  deploy-production:
    runs-on: ubuntu-latest
    needs: [test, e2e]
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to production
      run: |
        echo "Deploying to production"
        # Production deployment commands
```

#### Lighthouse Configuration
```json
// .lighthouserc.json
{
  "ci": {
    "collect": {
      "startServerCommand": "npm run start",
      "startServerReadyPattern": "Server running on",
      "url": ["http://localhost:3001"]
    },
    "assert": {
      "assertions": {
        "categories:performance": "error",
        "categories:accessibility": "error",
        "categories:best-practices": "error",
        "categories:seo": "error",
        "categories:pwa": "error"
      }
    }
  }
}
```

#### Package.json Scripts
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "nodemon server.js",
    "dev:client": "live-server --port=3001 --host=localhost",
    "build": "webpack --mode=production",
    "start": "NODE_ENV=production node server.js",
    "test": "npm run test:unit && npm run test:integration",
    "test:unit": "jest --coverage --testPathPattern=tests/unit",
    "test:integration": "jest --testPathPattern=tests/integration",
    "test:e2e": "playwright test",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write src/**/*.js",
    "analyze": "webpack-bundle-analyzer dist/stats.json",
    "security:audit": "npm audit",
    "security:check": "snyk test",
    "performance:budget": "bundlesize",
    "prepare": "husky install"
  }
}
```

## Test Instructions

### Performance Optimization Validation (30%)
- [ ] JavaScript bundle reduced by 50%
- [ ] Images optimized and lazy loaded
- [ ] Service worker operational
- [ ] Efficient API cache
- [ ] Lighthouse score > 90

### Architecture Validation (25%)
- [ ] Code modularized and organized
- [ ] Design patterns correctly applied
- [ ] Clear separation of responsibilities
- [ ] Scalable architecture

### Tests Validation (25%)
- [ ] Complete unit tests (>80% coverage)
- [ ] Functional integration tests
- [ ] Operational end-to-end tests
- [ ] Functional CI/CD pipeline

### Quality Validation (20%)
- [ ] Code linted and formatted
- [ ] Complete documentation
- [ ] Enhanced security
- [ ] Best practices applied

## Additional Challenges

### Level 1: Monitoring and Analytics
- Implement a performance monitoring system
- Add user analytics (Google Analytics)
- Create metrics dashboards
- Set up automatic alerts

### Level 2: Microservices
- Split application into microservices
- Implement an API Gateway
- Add event management (event sourcing)
- Create a distributed cache system (Redis)

### Level 3: Artificial Intelligence
- Integrate an AI recommendation system
- Implement image recognition for ingredients
- Add a virtual assistant for recipes
- Create an automatic recipe generation system

## Evaluation Criteria

### Performance (30%)
- Optimized loading time
- Efficient resource usage
- Intelligent cache implemented
- Optimized bundle

### Tests and Quality (30%)
- Complete and maintained test suite
- High code coverage
- Robust CI/CD pipeline
- Ensured code quality

### Architecture (20%)
- Appropriate design patterns
- Modular architecture
- Separation of responsibilities
- Maintainable code

### DevOps and Deployment (20%)
- Complete deployment automation
- Separate environments (dev/staging/prod)
- Monitoring and alerting
- Enhanced security

## Next Steps
Congratulations! You have completed your web development journey. You are now a competent full-stack web developer with knowledge of best practices and optimization.

**Continue your learning:**
- Explore modern frameworks (React, Vue, Angular)
- Learn cloud deployment (AWS, Vercel, Netlify)
- Specialize in a domain (frontend, backend, DevOps)
- Contribute to open source projects
- Build your professional portfolio
