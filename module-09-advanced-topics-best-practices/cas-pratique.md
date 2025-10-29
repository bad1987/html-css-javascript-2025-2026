# Cas Pratique : Refactorisation et Optimisation d'une Application Web Existante

## Contexte du Projet
Vous avez maintenant acquis toutes les compétences fondamentales du développement web. Ce dernier projet pratique vous demande de prendre une application existante (celle du Module 8) et de l'optimiser en appliquant les bonnes pratiques avancées apprises : patterns de conception, performance, tests, et workflows modernes.

## Objectif
Refactoriser complètement une application web existante en appliquant les meilleures pratiques de développement : optimisation des performances, architecture modulaire, tests automatisés, CI/CD, et déploiement.

## Analyse de l'Application Existante
Avant de commencer, identifiez les problèmes dans l'application actuelle :

### Problèmes Identifiés
1. **Performance :** Code non optimisé, pas de lazy loading, bundle JavaScript volumineux
2. **Architecture :** Code monolithique, pas de séparation claire des responsabilités
3. **Tests :** Aucun test automatisé, débogage manuel uniquement
4. **Sécurité :** Vulnérabilités potentielles, validation insuffisante
5. **Maintenabilité :** Code dupliqué, fonctions longues, commentaires insuffisants
6. **Déploiement :** Pas de CI/CD, déploiement manuel

## Étapes de Réalisation

### Étape 1 : Audit et Planification
Créez un plan détaillé d'amélioration :

```markdown
# Plan d'Optimisation - Application de Recettes

## Problèmes Critiques
- [ ] Bundle JS trop volumineux (chargement lent)
- [ ] Pas de cache des images
- [ ] Requêtes API inefficaces
- [ ] Code non testé

## Améliorations Prioritaires
1. **Performance** (Semaine 1)
   - Implémenter le code splitting
   - Optimiser les images
   - Ajouter un service worker
   - Mettre en cache les API calls

2. **Architecture** (Semaine 2)
   - Refactoriser en modules
   - Implémenter des design patterns
   - Séparer les responsabilités
   - Créer une architecture scalable

3. **Tests** (Semaine 3)
   - Tests unitaires pour les utilitaires
   - Tests d'intégration pour l'API
   - Tests end-to-end pour les parcours utilisateur
   - Mise en place de Jest et Testing Library

4. **Sécurité** (Semaine 4)
   - Audit de sécurité complet
   - Implémenter Content Security Policy
   - Renforcer la validation des données
   - Mettre à jour les dépendances

5. **CI/CD** (Semaine 5)
   - Configurer GitHub Actions
   - Automatiser les tests
   - Déploiement automatique
   - Monitoring des performances

## Métriques de Succès
- [ ] Temps de chargement < 3 secondes
- [ ] Score Lighthouse > 90
- [ ] Coverage de tests > 80%
- [ ] Zéro vulnérabilité critique
- [ ] Déploiement automatisé opérationnel
```

### Étape 2 : Optimisation des Performances
Implémentez les améliorations de performance :

#### Code Splitting et Lazy Loading
```javascript
// js/app.js - Avant (tout dans un fichier)
import { ApiService } from './services/api.js';
import { AuthService } from './services/auth.js';
import { RecipeCard } from './components/RecipeCard.js';
import { Modal } from './components/Modal.js';
// ... 50+ autres imports

// Après - Code splitting intelligent
// Imports critiques seulement
import { ApiService } from './services/api.js';

// Lazy loading des composants non critiques
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

// Lazy loading des pages
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

#### Service Worker pour le Cache
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
            // Nettoyer les anciens caches
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

// Interception des requêtes
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Stratégie Cache First pour les assets statiques
    if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
        event.respondWith(cacheFirst(request, STATIC_CACHE));
        return;
    }

    // Stratégie Network First pour les API
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(networkFirst(request, API_CACHE));
        return;
    }

    // Stratégie Stale While Revalidate pour les pages
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
        // Fallback pour les images
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

#### Optimisation des Images
```javascript
// js/utils/image.js - Utilitaires d'optimisation d'images
class ImageOptimizer {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Intersection Observer pour lazy loading
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
            // Créer une image pour précharger
            const image = new Image();

            image.onload = () => {
                img.src = src;
                img.classList.remove('loading');
                img.classList.add('loaded');
            };

            image.onerror = () => {
                // Fallback vers une image placeholder
                img.src = '/assets/images/placeholder.jpg';
                img.classList.remove('loading');
                img.classList.add('error');
            };

            img.classList.add('loading');
            image.src = src;

        } catch (error) {
            console.error('Erreur chargement image:', error);
            img.src = '/assets/images/placeholder.jpg';
        }
    }

    // Génération de srcset pour images responsives
    generateSrcSet(imagePath, widths = [320, 640, 1024, 1920]) {
        return widths.map(width => {
            const height = Math.round(width * 0.75); // Ratio 4:3
            return `${imagePath}?w=${width}&h=${height}&fit=crop&auto=format&q=80 ${width}w`;
        }).join(', ');
    }

    // Génération de placeholder flou
    async generatePlaceholder(imagePath) {
        // Utiliser une API comme BlurHash ou un service externe
        // Pour cet exemple, retourner une couleur moyenne
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
    }
}

// Utilisation
const imageOptimizer = new ImageOptimizer();

// Dans les composants
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

### Étape 3 : Refactorisation Architecturale
Appliquez des design patterns :

#### Pattern Module
```javascript
// js/modules/RecipeModule.js - Module dédié aux recettes
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

            // Transformer en Map pour un accès rapide
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
        // Logique de filtrage côté client pour les données déjà chargées
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

#### Pattern Repository
```javascript
// js/repositories/RecipeRepository.js - Pattern Repository
import { ApiService } from '../services/ApiService.js';

class RecipeRepository {
    constructor() {
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
    }

    async findById(id, useCache = true) {
        // Vérifier le cache
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
        this.invalidateCache(); // Invalider le cache après création
        return recipe;
    }

    async update(id, updates) {
        const recipe = await ApiService.updateRecipe(id, updates);
        this.setCache(id, recipe); // Mettre à jour le cache
        return recipe;
    }

    async delete(id) {
        await ApiService.deleteRecipe(id);
        this.removeFromCache(id);
    }

    // Méthodes de cache
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

    // Méthodes utilitaires
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

### Étape 4 : Tests Automatisés
Implémentez une suite de tests complète :

#### Tests Unitaires
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
            expect(validatePassword('Short1!')).toBe(false); // Trop court
            expect(validatePassword('nouppercase1!')).toBe(false); // Pas de majuscule
            expect(validatePassword('NOLOWERCASE1!')).toBe(false); // Pas de minuscule
            expect(validatePassword('NoNumber!')).toBe(false); // Pas de chiffre
        });
    });

    describe('validateRecipe', () => {
        const validRecipe = {
            title: 'Delicious Pasta Carbonara',
            description: 'A classic Italian pasta dish',
            category: 'Plat principal',
            prepTime: 15,
            cookTime: 20,
            servings: 4,
            ingredients: [
                { name: 'spaghetti', quantity: '400', unit: 'g' },
                { name: 'eggs', quantity: '4', unit: 'pièce' }
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
            expect(errors).toContain('Le titre est requis');
        });

        test('should validate prepTime constraints', () => {
            const recipe = { ...validRecipe, prepTime: 0 };
            const errors = validateRecipe(recipe);
            expect(errors).toContain('Le temps de préparation doit être positif');
        });

        test('should validate ingredients structure', () => {
            const recipe = {
                ...validRecipe,
                ingredients: [
                    { name: '', quantity: '100', unit: 'g' } // Nom vide
                ]
            };

            const errors = validateRecipe(recipe);
            expect(errors).toContain('Le nom de l\'ingrédient est requis');
        });

        test('should validate steps structure', () => {
            const recipe = {
                ...validRecipe,
                steps: [
                    { order: 1, instruction: '', duration: 5 } // Instruction vide
                ]
            };

            const errors = validateRecipe(recipe);
            expect(errors).toContain('L\'instruction de l\'étape est requise');
        });
    });
});
```

#### Tests d'Intégration
```javascript
// tests/integration/api/recipes.test.js
import { apiService } from '../../../src/services/api.js';
import { Recipe } from '../../../src/models/Recipe.js';

describe('Recipes API Integration', () => {
    let testRecipe;
    let authToken;

    beforeAll(async () => {
        // Se connecter pour obtenir un token
        const loginResponse = await apiService.post('/auth/login', {
            email: 'test@example.com',
            password: 'TestPassword123!'
        });
        authToken = loginResponse.token;

        // Créer une recette de test
        testRecipe = {
            title: 'Test Recipe',
            description: 'A test recipe for integration tests',
            category: 'Plat principal',
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

            // Vérifier que la recette n'existe plus
            await expect(apiService.get(`/recipes/${testRecipe.id}`))
                .rejects
                .toThrow('Recipe not found');
        });
    });

    describe('Search and Filtering', () => {
        beforeAll(async () => {
            // Créer plusieurs recettes pour les tests de recherche
            const recipes = [
                {
                    title: 'Pasta Carbonara',
                    description: 'Classic Italian pasta',
                    category: 'Plat principal',
                    prepTime: 10,
                    cookTime: 15,
                    servings: 4,
                    ingredients: [{ name: 'pasta', quantity: '400', unit: 'g' }],
                    steps: [{ order: 1, instruction: 'Cook pasta' }],
                    tags: ['italien', 'pasta', 'rapide']
                },
                {
                    title: 'Caesar Salad',
                    description: 'Fresh and crispy salad',
                    category: 'Entrée',
                    prepTime: 15,
                    cookTime: 0,
                    servings: 2,
                    ingredients: [{ name: 'lettuce', quantity: '1', unit: 'pièce' }],
                    steps: [{ order: 1, instruction: 'Mix ingredients' }],
                    tags: ['salade', 'rapide', 'sain']
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
            const response = await apiService.get('/recipes?category=Plat principal');

            expect(response.recipes.length).toBeGreaterThan(0);
            response.recipes.forEach(recipe => {
                expect(recipe.category).toBe('Plat principal');
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

#### Tests End-to-End
```javascript
// tests/e2e/user-journey.test.js
import { test, expect } from '@playwright/test';

test.describe('User Journey - Recipe Sharing', () => {
    test.beforeEach(async ({ page }) => {
        // Aller sur la page d'accueil
        await page.goto('http://localhost:3001');

        // Se connecter si nécessaire
        const loginButton = page.locator('[data-testid="login-button"]');
        if (await loginButton.isVisible()) {
            await loginButton.click();

            await page.fill('[data-testid="email-input"]', 'test@example.com');
            await page.fill('[data-testid="password-input"]', 'TestPassword123!');
            await page.click('[data-testid="submit-login"]');

            // Attendre la redirection
            await page.waitForURL('**/');
        }
    });

    test('should complete full recipe creation journey', async ({ page }) => {
        // Cliquer sur "Créer une recette"
        await page.click('[data-testid="create-recipe-button"]');

        // Remplir le formulaire
        await page.fill('[data-testid="recipe-title"]', 'Test E2E Recipe');
        await page.fill('[data-testid="recipe-description"]', 'A recipe created during E2E testing');

        // Sélectionner une catégorie
        await page.selectOption('[data-testid="recipe-category"]', 'Plat principal');

        // Remplir les temps
        await page.fill('[data-testid="prep-time"]', '15');
        await page.fill('[data-testid="cook-time"]', '30');
        await page.fill('[data-testid="servings"]', '4');

        // Ajouter un ingrédient
        await page.click('[data-testid="add-ingredient"]');
        await page.fill('[data-testid="ingredient-0-name"]', 'Tomates');
        await page.fill('[data-testid="ingredient-0-quantity"]', '500');
        await page.selectOption('[data-testid="ingredient-0-unit"]', 'g');

        // Ajouter une étape
        await page.click('[data-testid="add-step"]');
        await page.fill('[data-testid="step-0-instruction"]', 'Couper les tomates en dés');

        // Soumettre la recette
        await page.click('[data-testid="submit-recipe"]');

        // Vérifier la redirection vers la page de détail
        await expect(page).toHaveURL(/\/recipe\/.+/);

        // Vérifier que la recette apparaît dans la liste
        await page.goto('/');
        await expect(page.locator('text=Test E2E Recipe')).toBeVisible();
    });

    test('should handle recipe search and filtering', async ({ page }) => {
        // Effectuer une recherche
        await page.fill('[data-testid="search-input"]', 'pasta');
        await page.click('[data-testid="search-button"]');

        // Vérifier les résultats
        await expect(page.locator('[data-testid="recipe-card"]')).toHaveCount(await page.locator('[data-testid="recipe-card"]').count());

        // Appliquer un filtre
        await page.selectOption('[data-testid="category-filter"]', 'Plat principal');
        await page.click('[data-testid="apply-filters"]');

        // Vérifier que seuls les plats principaux sont affichés
        const recipes = page.locator('[data-testid="recipe-card"]');
        const count = await recipes.count();

        for (let i = 0; i < count; i++) {
            await expect(recipes.nth(i)).toContainText('Plat principal');
        }
    });

    test('should handle user authentication', async ({ page }) => {
        // Se déconnecter
        await page.click('[data-testid="user-menu"]');
        await page.click('[data-testid="logout-button"]');

        // Vérifier la redirection vers la page de connexion
        await expect(page).toHaveURL('**/login');

        // Tenter une connexion avec de mauvais identifiants
        await page.fill('[data-testid="email-input"]', 'wrong@example.com');
        await page.fill('[data-testid="password-input"]', 'wrongpassword');
        await page.click('[data-testid="submit-login"]');

        // Vérifier le message d'erreur
        await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
        await expect(page.locator('[data-testid="error-message"]')).toContainText('identifiants invalides');

        // Se connecter avec de bons identifiants
        await page.fill('[data-testid="email-input"]', 'test@example.com');
        await page.fill('[data-testid="password-input"]', 'TestPassword123!');
        await page.click('[data-testid="submit-login"]');

        // Vérifier la connexion réussie
        await expect(page).toHaveURL('**/');
        await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
    });

    test('should handle recipe interaction', async ({ page }) => {
        // Cliquer sur une recette
        await page.click('[data-testid="recipe-card"]:first-child');

        // Vérifier la page de détail
        await expect(page).toHaveURL(/\/recipe\/.+/);

        // Liker la recette
        const likeButton = page.locator('[data-testid="like-button"]');
        const initialLikes = await likeButton.textContent();

        await likeButton.click();

        // Vérifier que le nombre de likes a changé
        await expect(likeButton).not.toHaveText(initialLikes);

        // Noter la recette
        await page.click('[data-testid="star-4"]');

        // Vérifier que la note est enregistrée
        await expect(page.locator('[data-testid="rating-confirm"]')).toBeVisible();
    });

    test('should handle error states gracefully', async ({ page }) => {
        // Aller sur une URL invalide
        await page.goto('http://localhost:3001/recipe/invalid-id');

        // Vérifier la page d'erreur
        await expect(page.locator('[data-testid="error-page"]')).toBeVisible();
        await expect(page.locator('text=Recette non trouvée')).toBeVisible();

        // Vérifier le lien de retour
        await page.click('[data-testid="back-home"]');
        await expect(page).toHaveURL('**/');
    });
});
```

### Étape 5 : Configuration CI/CD
Mettez en place un pipeline de déploiement :

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
        echo "Déploiement en staging"
        # Commandes de déploiement staging

  deploy-production:
    runs-on: ubuntu-latest
    needs: [test, e2e]
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to production
      run: |
        echo "Déploiement en production"
        # Commandes de déploiement production
```

#### Configuration Lighthouse
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

#### Scripts Package.json
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

## Instructions de Test

### Validation Optimisation Performance (30%)
- [ ] Bundle JavaScript réduit de 50%
- [ ] Images optimisées et lazy loaded
- [ ] Service worker opérationnel
- [ ] Cache API efficace
- [ ] Score Lighthouse > 90

### Validation Architecture (25%)
- [ ] Code modularisé et organisé
- [ ] Design patterns correctement appliqués
- [ ] Séparation claire des responsabilités
- [ ] Architecture scalable

### Validation Tests (25%)
- [ ] Tests unitaires complets (>80% coverage)
- [ ] Tests d'intégration fonctionnels
- [ ] Tests end-to-end opérationnels
- [ ] Pipeline CI/CD fonctionnel

### Validation Qualité (20%)
- [ ] Code linté et formaté
- [ ] Documentation complète
- [ ] Sécurité renforcée
- [ ] Bonnes pratiques appliquées

## Défis Supplémentaires

### Niveau 1 : Monitoring et Analytics
- Implémenter un système de monitoring des performances
- Ajouter des analytics utilisateur (Google Analytics)
- Créer des tableaux de bord de métriques
- Mettre en place des alertes automatiques

### Niveau 2 : Microservices
- Séparer l'application en microservices
- Implémenter une API Gateway
- Ajouter une gestion d'événements (event sourcing)
- Créer un système de cache distribué (Redis)

### Niveau 3 : Intelligence Artificielle
- Intégrer un système de recommandations IA
- Implémenter la reconnaissance d'images pour les ingrédients
- Ajouter un assistant virtuel pour les recettes
- Créer un système de génération automatique de recettes

## Critères d'Évaluation

### Performance (30%)
- Temps de chargement optimisé
- Utilisation efficiente des ressources
- Cache intelligent implémenté
- Bundle optimisé

### Tests et Qualité (30%)
- Suite de tests complète et maintenue
- Code coverage élevé
- Pipeline CI/CD robuste
- Qualité du code assurée

### Architecture (20%)
- Design patterns appropriés
- Architecture modulaire
- Séparation des responsabilités
- Maintenabilité du code

### DevOps et Déploiement (20%)
- Automatisation complète du déploiement
- Environnements séparés (dev/staging/prod)
- Monitoring et alerting
- Sécurité renforcée

## Prochaines Étapes
Félicitations ! Vous avez terminé votre parcours de développement web. Vous êtes maintenant un développeur web full-stack compétent avec des connaissances en bonnes pratiques et optimisation. 

**Continuez votre apprentissage :**
- Explorez des frameworks modernes (React, Vue, Angular)
- Apprenez le déploiement cloud (AWS, Vercel, Netlify)
- Spécialisez-vous dans un domaine (frontend, backend, DevOps)
- Contribuez à des projets open source
- Créez votre portfolio professionnel