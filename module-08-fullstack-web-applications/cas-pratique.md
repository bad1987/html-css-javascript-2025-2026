# Cas Pratique : Plateforme de Partage de Recettes Culinaires

## Contexte du Projet
Vous maîtrisez maintenant le développement web full-stack. Ce projet final vous permettra de créer une application complète de partage de recettes culinaires avec authentification, upload d'images, commentaires, et système de notation.

## Objectif
Créer une plateforme web complète où les utilisateurs peuvent partager, découvrir et interagir avec des recettes culinaires.

## Structure du Projet
```
recipe-platform/
├── backend/
│   ├── server.js              # Serveur Express principal
│   ├── models/
│   │   ├── User.js            # Modèle Utilisateur
│   │   ├── Recipe.js          # Modèle Recette
│   │   └── Comment.js         # Modèle Commentaire
│   ├── routes/
│   │   ├── auth.js            # Routes d'authentification
│   │   ├── recipes.js         # Routes des recettes
│   │   ├── users.js           # Routes utilisateurs
│   │   └── upload.js          # Routes d'upload
│   ├── middleware/
│   │   ├── auth.js            # Middleware d'authentification
│   │   ├── upload.js          # Middleware d'upload de fichiers
│   │   └── validation.js      # Middleware de validation
│   ├── database/
│   │   └── init.js            # Initialisation de la base de données
│   ├── config/
│   │   └── config.js          # Configuration
│   └── uploads/                # Dossier des images uploadées
├── frontend/
│   ├── index.html             # Page d'accueil
│   ├── login.html             # Page de connexion
│   ├── register.html          # Page d'inscription
│   ├── profile.html           # Page de profil
│   ├── recipe-detail.html     # Page de détail de recette
│   ├── create-recipe.html     # Page de création de recette
│   ├── css/
│   │   ├── style.css          # Styles principaux
│   │   └── responsive.css     # Styles responsives
│   ├── js/
│   │   ├── api.js             # Service API
│   │   ├── auth.js            # Gestion de l'authentification
│   │   ├── ui.js              # Interface utilisateur
│   │   └── app.js             # Application principale
│   └── assets/
│       └── images/            # Images statiques
├── package.json               # Dépendances Node.js
├── README.md                  # Documentation
└── .env                       # Variables d'environnement
```

## Étapes de Réalisation

### Étape 1 : Configuration du Backend
Configurez le serveur Express avec les middlewares nécessaires :

```javascript
// backend/server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Import des routes
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const uploadRoutes = require('./routes/upload');

// Import des middlewares
const { authenticateToken } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de sécurité
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true
}));

// Logging
app.use(morgan('combined'));

// Parser le JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Servir les fichiers statiques
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

// Route de santé
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Erreur interne du serveur',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Une erreur est survenue'
    });
});

// Route 404
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route non trouvée' });
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    console.log(`📱 Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3001'}`);
});
```

### Étape 2 : Modèles de Données
Créez les modèles de données avec validation :

```javascript
// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email invalide']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        maxlength: 500,
        default: ''
    },
    role: {
        type: String,
        enum: ['user', 'moderator', 'admin'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: null
    },
    recipesCount: {
        type: Number,
        default: 0
    },
    followersCount: {
        type: Number,
        default: 0
    },
    followingCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Index pour les performances
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

// Méthodes d'instance
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toProfile = function() {
    return {
        id: this._id,
        username: this.username,
        email: this.email,
        avatar: this.avatar,
        bio: this.bio,
        recipesCount: this.recipesCount,
        followersCount: this.followersCount,
        followingCount: this.followingCount,
        createdAt: this.createdAt
    };
};

// Middleware de hachage du mot de passe
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);
```

```javascript
// backend/models/Recipe.js
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        enum: ['g', 'kg', 'ml', 'cl', 'l', 'cuillère à soupe', 'cuillère à café', 'tasse', 'pièce', 'au goût'],
        default: 'pièce'
    }
});

const stepSchema = new mongoose.Schema({
    order: {
        type: Number,
        required: true
    },
    instruction: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number, // en minutes
        default: 0
    },
    image: {
        type: String,
        default: null
    }
});

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mainImage: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Entrée', 'Plat principal', 'Dessert', 'Boisson',
            'Accompagnement', 'Sauce', 'Conserve', 'Autre'
        ]
    },
    cuisine: {
        type: String,
        enum: [
            'Française', 'Italienne', 'Asiatique', 'Mexicaine',
            'Indienne', 'Méditerranéenne', 'Autre'
        ],
        default: 'Autre'
    },
    difficulty: {
        type: String,
        enum: ['Facile', 'Moyen', 'Difficile'],
        default: 'Facile'
    },
    prepTime: {
        type: Number, // en minutes
        required: true,
        min: 1
    },
    cookTime: {
        type: Number, // en minutes
        default: 0
    },
    servings: {
        type: Number,
        required: true,
        min: 1
    },
    ingredients: [ingredientSchema],
    steps: [stepSchema],
    tags: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    nutritionalInfo: {
        calories: { type: Number, default: 0 },
        protein: { type: Number, default: 0 }, // en grammes
        carbs: { type: Number, default: 0 },   // en grammes
        fat: { type: Number, default: 0 }      // en grammes
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
}, {
    timestamps: true
});

// Index pour les performances
recipeSchema.index({ title: 'text', description: 'text', tags: 'text' });
recipeSchema.index({ category: 1 });
recipeSchema.index({ author: 1 });
recipeSchema.index({ createdAt: -1 });
recipeSchema.index({ averageRating: -1 });

// Méthodes d'instance
recipeSchema.methods.calculateAverageRating = function() {
    if (this.ratings.length === 0) {
        this.averageRating = 0;
        return;
    }

    const sum = this.ratings.reduce((acc, rating) => acc + rating.rating, 0);
    this.averageRating = Math.round((sum / this.ratings.length) * 10) / 10;
};

recipeSchema.methods.isLikedBy = function(userId) {
    return this.likes.some(like => like.user.toString() === userId.toString());
};

recipeSchema.methods.addLike = function(userId) {
    if (!this.isLikedBy(userId)) {
        this.likes.push({ user: userId });
    }
};

recipeSchema.methods.removeLike = function(userId) {
    this.likes = this.likes.filter(like => like.user.toString() !== userId.toString());
};

// Méthodes statiques
recipeSchema.statics.getPopular = function(limit = 10) {
    return this.find({ isPublished: true })
        .sort({ views: -1, averageRating: -1 })
        .limit(limit)
        .populate('author', 'username avatar');
};

recipeSchema.statics.getRecent = function(limit = 10) {
    return this.find({ isPublished: true })
        .sort({ createdAt: -1 })
        .limit(limit)
        .populate('author', 'username avatar');
};

recipeSchema.statics.search = function(query, filters = {}) {
    const searchQuery = { isPublished: true };

    // Recherche textuelle
    if (query) {
        searchQuery.$text = { $search: query };
    }

    // Filtres
    if (filters.category) searchQuery.category = filters.category;
    if (filters.cuisine) searchQuery.cuisine = filters.cuisine;
    if (filters.difficulty) searchQuery.difficulty = filters.difficulty;
    if (filters.maxPrepTime) searchQuery.prepTime = { $lte: filters.maxPrepTime };
    if (filters.tags && filters.tags.length > 0) {
        searchQuery.tags = { $in: filters.tags };
    }

    return this.find(searchQuery)
        .populate('author', 'username avatar')
        .sort({ score: { $meta: 'textScore' }, createdAt: -1 });
};

module.exports = mongoose.model('Recipe', recipeSchema);
```

### Étape 3 : Routes API
Implémentez les routes RESTful :

```javascript
// backend/routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const { authenticateToken, requireOwnership } = require('../middleware/auth');
const { validateRecipe } = require('../middleware/validation');

// GET /api/recipes - Récupérer toutes les recettes
router.get('/', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 12,
            category,
            cuisine,
            difficulty,
            sort = 'createdAt',
            order = 'desc',
            search
        } = req.query;

        const query = { isPublished: true };

        // Filtres
        if (category) query.category = category;
        if (cuisine) query.cuisine = cuisine;
        if (difficulty) query.difficulty = difficulty;

        // Recherche
        if (search) {
            query.$text = { $search: search };
        }

        // Tri
        const sortOptions = {};
        sortOptions[sort] = order === 'desc' ? -1 : 1;

        const recipes = await Recipe.find(query)
            .populate('author', 'username avatar')
            .sort(sortOptions)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await Recipe.countDocuments(query);

        res.json({
            recipes,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                totalRecipes: total,
                hasNext: page * limit < total,
                hasPrev: page > 1
            }
        });

    } catch (error) {
        console.error('Erreur récupération recettes:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// GET /api/recipes/:id - Récupérer une recette spécifique
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
            .populate('author', 'username avatar bio recipesCount')
            .populate('ratings.user', 'username avatar');

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée' });
        }

        // Incrémenter les vues
        recipe.views += 1;
        await recipe.save();

        res.json(recipe);

    } catch (error) {
        console.error('Erreur récupération recette:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST /api/recipes - Créer une nouvelle recette
router.post('/', authenticateToken, validateRecipe, async (req, res) => {
    try {
        const recipeData = {
            ...req.body,
            author: req.user.id
        };

        const recipe = new Recipe(recipeData);
        await recipe.save();

        // Incrémenter le compteur de recettes de l'auteur
        await User.findByIdAndUpdate(req.user.id, { $inc: { recipesCount: 1 } });

        res.status(201).json(recipe);

    } catch (error) {
        console.error('Erreur création recette:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                error: 'Données invalides',
                details: Object.values(error.errors).map(err => err.message)
            });
        }

        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// PUT /api/recipes/:id - Modifier une recette
router.put('/:id', authenticateToken, requireOwnership('Recipe'), validateRecipe, async (req, res) => {
    try {
        const updates = req.body;
        delete updates.author; // Ne pas permettre de changer l'auteur
        delete updates.createdAt; // Ne pas permettre de changer la date de création

        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { ...updates, updatedAt: new Date() },
            { new: true, runValidators: true }
        ).populate('author', 'username avatar');

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée' });
        }

        res.json(recipe);

    } catch (error) {
        console.error('Erreur modification recette:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                error: 'Données invalides',
                details: Object.values(error.errors).map(err => err.message)
            });
        }

        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// DELETE /api/recipes/:id - Supprimer une recette
router.delete('/:id', authenticateToken, requireOwnership('Recipe'), async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée' });
        }

        // Décrémenter le compteur de recettes de l'auteur
        await User.findByIdAndUpdate(recipe.author, { $inc: { recipesCount: -1 } });

        res.json({ message: 'Recette supprimée avec succès' });

    } catch (error) {
        console.error('Erreur suppression recette:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST /api/recipes/:id/like - Aimer une recette
router.post('/:id/like', authenticateToken, async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée' });
        }

        const userId = req.user.id;

        if (recipe.isLikedBy(userId)) {
            recipe.removeLike(userId);
        } else {
            recipe.addLike(userId);
        }

        await recipe.save();

        res.json({
            liked: recipe.isLikedBy(userId),
            likesCount: recipe.likes.length
        });

    } catch (error) {
        console.error('Erreur like recette:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST /api/recipes/:id/rate - Noter une recette
router.post('/:id/rate', authenticateToken, async (req, res) => {
    try {
        const { rating } = req.body;

        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Note invalide (1-5)' });
        }

        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ error: 'Recette non trouvée' });
        }

        const userId = req.user.id;

        // Supprimer l'ancienne note si elle existe
        recipe.ratings = recipe.ratings.filter(r => r.user.toString() !== userId);

        // Ajouter la nouvelle note
        recipe.ratings.push({ user: userId, rating });

        // Recalculer la moyenne
        recipe.calculateAverageRating();

        await recipe.save();

        res.json({
            rating,
            averageRating: recipe.averageRating,
            ratingsCount: recipe.ratings.length
        });

    } catch (error) {
        console.error('Erreur notation recette:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;
```

### Étape 4 : Frontend - Interface Utilisateur
Créez l'interface utilisateur réactive :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🍳 Partage de Recettes - Découvrez et Partagez</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <i class="fas fa-utensils"></i>
                        <span>Partage de Recettes</span>
                    </a>
                </div>

                <div class="nav-menu">
                    <div class="search-bar">
                        <input type="text" id="search-input" placeholder="Rechercher des recettes...">
                        <button id="search-btn"><i class="fas fa-search"></i></button>
                    </div>

                    <div class="nav-links">
                        <a href="index.html" class="nav-link active">Accueil</a>
                        <a href="#" class="nav-link" id="categories-link">Catégories</a>
                        <a href="create-recipe.html" class="nav-link">Créer</a>
                        <div class="user-menu" id="user-menu">
                            <button class="user-btn" id="user-btn">
                                <img src="assets/images/default-avatar.png" alt="Avatar" class="avatar-small">
                                <span id="user-name">Connexion</span>
                            </button>
                            <div class="dropdown-menu" id="dropdown-menu">
                                <a href="profile.html">Mon Profil</a>
                                <a href="my-recipes.html">Mes Recettes</a>
                                <a href="#" id="logout-btn">Déconnexion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="main">
        <!-- Section Hero -->
        <section class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">Découvrez les Meilleures Recettes</h1>
                    <p class="hero-subtitle">Explorez, partagez et cuisinez des plats délicieux préparés par notre communauté passionnée.</p>
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number" id="total-recipes">0</span>
                            <span class="stat-label">Recettes</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number" id="total-users">0</span>
                            <span class="stat-label">Chefs</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number" id="total-likes">0</span>
                            <span class="stat-label">Likes</span>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="assets/images/hero-cooking.jpg" alt="Cuisine délicieuse" class="hero-img">
                </div>
            </div>
        </section>

        <!-- Filtres et recherche avancée -->
        <section class="filters-section">
            <div class="container">
                <div class="filters-container">
                    <div class="filter-group">
                        <label for="category-filter">Catégorie:</label>
                        <select id="category-filter">
                            <option value="">Toutes</option>
                            <option value="Entrée">Entrée</option>
                            <option value="Plat principal">Plat principal</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Boisson">Boisson</option>
                            <option value="Accompagnement">Accompagnement</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="cuisine-filter">Cuisine:</label>
                        <select id="cuisine-filter">
                            <option value="">Toutes</option>
                            <option value="Française">Française</option>
                            <option value="Italienne">Italienne</option>
                            <option value="Asiatique">Asiatique</option>
                            <option value="Mexicaine">Mexicaine</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="difficulty-filter">Difficulté:</label>
                        <select id="difficulty-filter">
                            <option value="">Toutes</option>
                            <option value="Facile">Facile</option>
                            <option value="Moyen">Moyen</option>
                            <option value="Difficile">Difficile</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="sort-filter">Trier par:</label>
                        <select id="sort-filter">
                            <option value="createdAt">Plus récent</option>
                            <option value="averageRating">Mieux noté</option>
                            <option value="views">Plus populaire</option>
                            <option value="prepTime">Plus rapide</option>
                        </select>
                    </div>

                    <button id="reset-filters" class="btn-secondary">Réinitialiser</button>
                </div>
            </div>
        </section>

        <!-- Liste des recettes -->
        <section class="recipes-section">
            <div class="container">
                <div class="recipes-header">
                    <h2>Recettes Populaires</h2>
                    <div class="view-toggle">
                        <button class="view-btn active" data-view="grid"><i class="fas fa-th"></i></button>
                        <button class="view-btn" data-view="list"><i class="fas fa-list"></i></button>
                    </div>
                </div>

                <div id="recipes-loading" class="loading">
                    <div class="spinner"></div>
                    <p>Chargement des recettes...</p>
                </div>

                <div id="recipes-container" class="recipes-container grid-view">
                    <!-- Les recettes seront chargées ici -->
                </div>

                <div class="pagination" id="pagination">
                    <!-- Pagination sera générée ici -->
                </div>
            </div>
        </section>

        <!-- Call to action -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>Partagez Votre Talent Culinaire</h2>
                    <p>Rejoignez notre communauté et partagez vos meilleures recettes avec le monde !</p>
                    <a href="register.html" class="btn btn-primary">Commencer</a>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>🍳 Partage de Recettes</h3>
                    <p>La plateforme communautaire pour les passionnés de cuisine.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="#categories">Catégories</a></li>
                        <li><a href="create-recipe.html">Créer une recette</a></li>
                        <li><a href="about.html">À propos</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="help.html">Aide</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="privacy.html">Confidentialité</a></li>
                        <li><a href="terms.html">Conditions</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Newsletter</h3>
                    <p>Recevez nos meilleures recettes directement dans votre boîte mail.</p>
                    <div class="newsletter">
                        <input type="email" placeholder="Votre email" id="newsletter-email">
                        <button id="newsletter-btn" class="btn btn-primary">S'inscrire</button>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 Partage de Recettes. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Toast notifications -->
    <div id="toast-container" class="toast-container"></div>

    <script src="js/api.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

## Instructions de Test

### Validation Architecture Full-Stack (40%)
- [ ] Serveur Express configuré correctement avec tous les middlewares
- [ ] Modèles MongoDB bien structurés avec validation
- [ ] Routes API RESTful implémentées correctement
- [ ] Authentification JWT fonctionnelle
- [ ] Upload de fichiers sécurisé

### Validation Base de Données (30%)
- [ ] Connexion MongoDB établie et configurée
- [ ] Schémas de données valides et optimisés
- [ ] Relations entre modèles correctement définies
- [ ] Index de performance créés
- [ ] Données de seed présentes pour les tests

### Validation Interface Utilisateur (20%)
- [ ] Interface responsive et moderne
- [ ] Authentification côté client fonctionnelle
- [ ] Gestion d'état réactive
- [ ] Upload d'images fonctionnel
- [ ] Interface d'administration présente

### Validation Sécurité (10%)
- [ ] Mots de passe hashés avec bcrypt
- [ ] Validation des données d'entrée
- [ ] Protection contre les attaques XSS
- [ ] Gestion appropriée des erreurs

## Défis Supplémentaires

### Niveau 1 : Fonctionnalités Sociales
- Ajouter un système de commentaires sur les recettes
- Implémenter un système de favoris personnels
- Créer un système de suivi d'utilisateurs
- Ajouter des notifications en temps réel

### Niveau 2 : Fonctionnalités Avancées
- Implémenter un système de recherche avancée avec filtres
- Ajouter des plans de repas hebdomadaires
- Créer une liste de courses générée automatiquement
- Intégrer une API de nutrition

### Niveau 3 : Performance et Déploiement
- Optimiser les images et implémenter le lazy loading
- Ajouter un cache Redis pour les données fréquemment accédées
- Configurer le déploiement sur Heroku ou Vercel
- Implémenter des tests automatisés complets

## Critères d'Évaluation

### Backend (35%)
- Architecture Express.js propre et organisée
- Modèles de données bien conçus et validés
- API RESTful complète et sécurisée
- Gestion d'erreurs appropriée
- Performance optimisée

### Frontend (30%)
- Interface utilisateur moderne et intuitive
- Consommation d'API réactive
- Gestion d'état efficace
- Responsive design complet
- Accessibilité respectée

### Base de Données (20%)
- Schémas optimisés pour MongoDB
- Relations correctement définies
- Index appropriés pour les performances
- Migrations et seeds présents

### Sécurité et Qualité (15%)
- Authentification et autorisation sécurisées
- Validation des données complète
- Protection contre les vulnérabilités communes
- Code maintenable et testé

## Prochaines Étapes
Félicitations ! Vous avez créé votre première application web full-stack complète. Au prochain module, nous explorerons les sujets avancés et les bonnes pratiques pour devenir un développeur web professionnel.