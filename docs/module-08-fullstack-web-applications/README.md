# Module 8 : Applications Web Full-Stack

## Aperçu
Félicitations ! Vous avez maintenant les compétences pour créer des applications web complètes. Ce module final vous guide dans la construction d'une application full-stack en combinant HTML, CSS, JavaScript, et un backend simple. Vous apprendrez à gérer des données, authentifier les utilisateurs, et déployer votre application.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Architecturer une application web complète
- Implémenter un système d'authentification simple
- Gérer des données côté client et serveur
- Créer des API REST de base
- Déployer une application web
- Comprendre les bonnes pratiques de développement

## Prérequis
- Modules 1-7 : Maîtrise complète de HTML, CSS, JavaScript
- Compréhension des APIs et de la programmation asynchrone

## Matériaux Nécessaires
- Éditeur VS Code
- Node.js installé (pour le backend)
- Git pour le contrôle de version
- Compte sur une plateforme de déploiement (GitHub Pages, Vercel, etc.)

## Structure de Session
- Session 1 : Architecture d'Application (30 min)
- Session 2 : Backend et APIs (30 min)
- Activité Pratique : Blog Personnel Full-Stack (2 heures)

## Théorie : Architecture Full-Stack

### Architecture Typique d'une Application Web
```
┌─────────────────┐    HTTP/HTTPS    ┌─────────────────┐
│   Frontend      │◄────────────────►│    Backend      │
│   (Client)      │                  │    (Server)     │
│                 │                  │                 │
│ • HTML/CSS/JS   │                  │ • API Routes    │
│ • Interface UI  │                  │ • Business Logic│
│ • État Local    │                  │ • Base de Données│
└─────────────────┘                  └─────────────────┘
```

### Choix Technologiques pour ce Module
- **Frontend** : HTML, CSS, JavaScript (sans framework pour focus sur concepts)
- **Backend** : Node.js avec Express.js (simple et populaire)
- **Base de données** : JSON files (pour simplicité - en production utiliserait SQL/NoSQL)
- **Authentification** : JWT tokens simulés
- **Déploiement** : GitHub Pages (frontend) + service gratuit (backend)

## Activité Pratique : Configuration Backend

### Installation de Node.js et Express
1. Téléchargez Node.js depuis https://nodejs.org/
2. Créez un nouveau dossier pour votre projet
3. Initialisez un projet Node.js :

```bash
npm init -y
npm install express cors body-parser jsonwebtoken bcryptjs
npm install -D nodemon
```

### Structure du Projet
```
blog-app/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── backend/
│   ├── server.js
│   ├── data/
│   │   ├── users.json
│   │   └── posts.json
│   └── middleware/
│       └── auth.js
├── package.json
└── README.md
```

## Projet : Blog Personnel Full-Stack

Créons un blog complet avec authentification, création d'articles, et commentaires.

### Backend (server.js)
```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'your-secret-key'; // En production, utiliser une variable d'environnement

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chemins des fichiers de données
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const POSTS_FILE = path.join(__dirname, 'data', 'posts.json');

// Fonctions utilitaires
async function readData(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function writeData(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Middleware d'authentification
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Token manquant' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

// Routes d'authentification
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }
        
        const users = await readData(USERS_FILE);
        
        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.email === email || user.username === username)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }
        
        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        await writeData(USERS_FILE, users);
        
        // Créer le token JWT
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET);
        
        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            token,
            user: { id: newUser.id, username: newUser.username, email: newUser.email }
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const users = await readData(USERS_FILE);
        const user = users.find(u => u.email === email);
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
        }
        
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
        
        res.json({
            message: 'Connexion réussie',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Routes des articles
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        // Trier par date décroissante
        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.post('/api/posts', authenticateToken, async (req, res) => {
    try {
        const { title, content, excerpt, tags } = req.body;
        
        if (!title || !content) {
            return res.status(400).json({ error: 'Titre et contenu requis' });
        }
        
        const posts = await readData(POSTS_FILE);
        
        const newPost = {
            id: Date.now().toString(),
            title,
            content,
            excerpt: excerpt || content.substring(0, 150) + '...',
            tags: tags || [],
            author: req.user.username,
            authorId: req.user.id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            comments: []
        };
        
        posts.push(newPost);
        await writeData(POSTS_FILE, posts);
        
        res.status(201).json(newPost);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.put('/api/posts/:id', authenticateToken, async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const postIndex = posts.findIndex(p => p.id === req.params.id);
        
        if (postIndex === -1) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        
        const post = posts[postIndex];
        
        // Vérifier que l'utilisateur est l'auteur
        if (post.authorId !== req.user.id) {
            return res.status(403).json({ error: 'Non autorisé' });
        }
        
        const { title, content, excerpt, tags } = req.body;
        
        post.title = title || post.title;
        post.content = content || post.content;
        post.excerpt = excerpt || post.excerpt;
        post.tags = tags || post.tags;
        post.updatedAt = new Date().toISOString();
        
        await writeData(POSTS_FILE, posts);
        
        res.json(post);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.delete('/api/posts/:id', authenticateToken, async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const postIndex = posts.findIndex(p => p.id === req.params.id);
        
        if (postIndex === -1) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        
        const post = posts[postIndex];
        
        // Vérifier que l'utilisateur est l'auteur
        if (post.authorId !== req.user.id) {
            return res.status(403).json({ error: 'Non autorisé' });
        }
        
        posts.splice(postIndex, 1);
        await writeData(POSTS_FILE, posts);
        
        res.json({ message: 'Article supprimé' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Routes des commentaires
app.get('/api/posts/:postId/comments', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.postId);
        
        if (!post) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        
        res.json(post.comments || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.post('/api/posts/:postId/comments', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;
        
        if (!content) {
            return res.status(400).json({ error: 'Contenu requis' });
        }
        
        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.postId);
        
        if (!post) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        
        const newComment = {
            id: Date.now().toString(),
            content,
            author: req.user.username,
            authorId: req.user.id,
            createdAt: new Date().toISOString()
        };
        
        if (!post.comments) post.comments = [];
        post.comments.push(newComment);
        
        await writeData(POSTS_FILE, posts);
        
        res.status(201).json(newComment);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
```

### Frontend (index.html)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>📝 Mon Blog Personnel</h1>
            <nav class="nav">
                <a href="#" id="home-link">Accueil</a>
                <a href="#" id="login-link">Connexion</a>
                <a href="#" id="register-link">Inscription</a>
                <a href="#" id="profile-link" class="hidden">Profil</a>
                <a href="#" id="logout-link" class="hidden">Déconnexion</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <!-- Page d'accueil -->
        <section id="home-page" class="page">
            <div class="container">
                <div class="hero">
                    <h2>Bienvenue sur mon blog !</h2>
                    <p>Partagez vos pensées, idées et expériences avec le monde.</p>
                    <button id="create-post-btn" class="btn-primary hidden">Créer un article</button>
                </div>
                
                <div class="posts-section">
                    <h3>Derniers articles</h3>
                    <div id="posts-container" class="posts-container">
                        <!-- Les articles seront chargés ici -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Formulaire de connexion -->
        <section id="login-page" class="page hidden">
            <div class="container">
                <div class="auth-form">
                    <h2>Connexion</h2>
                    <form id="login-form">
                        <div class="form-group">
                            <label for="login-email">Email</label>
                            <input type="email" id="login-email" required>
                        </div>
                        <div class="form-group">
                            <label for="login-password">Mot de passe</label>
                            <input type="password" id="login-password" required>
                        </div>
                        <button type="submit" class="btn-primary">Se connecter</button>
                    </form>
                    <p>Pas encore de compte ? <a href="#" id="switch-to-register">S'inscrire</a></p>
                </div>
            </div>
        </section>

        <!-- Formulaire d'inscription -->
        <section id="register-page" class="page hidden">
            <div class="container">
                <div class="auth-form">
                    <h2>Inscription</h2>
                    <form id="register-form">
                        <div class="form-group">
                            <label for="register-username">Nom d'utilisateur</label>
                            <input type="text" id="register-username" required>
                        </div>
                        <div class="form-group">
                            <label for="register-email">Email</label>
                            <input type="email" id="register-email" required>
                        </div>
                        <div class="form-group">
                            <label for="register-password">Mot de passe</label>
                            <input type="password" id="register-password" required>
                        </div>
                        <button type="submit" class="btn-primary">S'inscrire</button>
                    </form>
                    <p>Déjà un compte ? <a href="#" id="switch-to-login">Se connecter</a></p>
                </div>
            </div>
        </section>

        <!-- Création/édition d'article -->
        <section id="post-form-page" class="page hidden">
            <div class="container">
                <div class="post-form-container">
                    <h2 id="form-title">Créer un article</h2>
                    <form id="post-form">
                        <div class="form-group">
                            <label for="post-title">Titre</label>
                            <input type="text" id="post-title" required>
                        </div>
                        <div class="form-group">
                            <label for="post-excerpt">Extrait (optionnel)</label>
                            <textarea id="post-excerpt" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="post-content">Contenu</label>
                            <textarea id="post-content" rows="10" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="post-tags">Tags (séparés par des virgules)</label>
                            <input type="text" id="post-tags" placeholder="javascript, web, tutorial">
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn-primary">Publier</button>
                            <button type="button" id="cancel-post" class="btn-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Détail d'article -->
        <section id="post-detail-page" class="page hidden">
            <div class="container">
                <article id="post-content" class="post-detail">
                    <!-- Le contenu de l'article sera chargé ici -->
                </article>
                
                <div class="comments-section">
                    <h3>Commentaires</h3>
                    <div id="comments-container">
                        <!-- Les commentaires seront chargés ici -->
                    </div>
                    
                    <form id="comment-form" class="comment-form hidden">
                        <h4>Ajouter un commentaire</h4>
                        <textarea id="comment-content" placeholder="Votre commentaire..." required></textarea>
                        <button type="submit" class="btn-primary">Publier</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Mon Blog Personnel. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js

// Configuration
const API_BASE = 'http://localhost:3000/api';

// État de l'application
let currentUser = null;
let currentToken = null;
let currentPostId = null;

// Utilitaires
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function showMessage(message, type = 'info') {
    // Implémentation simple d'un système de notifications
    alert(message);
}

function setAuthState(isLoggedIn) {
    const authLinks = document.querySelectorAll('#login-link, #register-link');
    const userLinks = document.querySelectorAll('#profile-link, #logout-link, #create-post-btn');
    
    if (isLoggedIn) {
        authLinks.forEach(link => link.classList.add('hidden'));
        userLinks.forEach(link => link.classList.remove('hidden'));
    } else {
        authLinks.forEach(link => link.classList.remove('hidden'));
        userLinks.forEach(link => link.classList.add('hidden'));
    }
}

function checkAuth() {
    const token = localStorage.getItem('blog-token');
    const user = localStorage.getItem('blog-user');
    
    if (token && user) {
        currentToken = token;
        currentUser = JSON.parse(user);
        setAuthState(true);
    } else {
        setAuthState(false);
    }
}

// API calls
async function apiCall(endpoint, options = {}) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };
    
    if (currentToken) {
        config.headers.Authorization = `Bearer ${currentToken}`;
    }
    
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Erreur API');
    }
    
    return data;
}

// Authentification
async function login(email, password) {
    const data = await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    
    currentToken = data.token;
    currentUser = data.user;
    
    localStorage.setItem('blog-token', currentToken);
    localStorage.setItem('blog-user', JSON.stringify(currentUser));
    
    setAuthState(true);
    showMessage('Connexion réussie !');
    showPage('home-page');
}

async function register(username, email, password) {
    const data = await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    });
    
    currentToken = data.token;
    currentUser = data.user;
    
    localStorage.setItem('blog-token', currentToken);
    localStorage.setItem('blog-user', JSON.stringify(currentUser));
    
    setAuthState(true);
    showMessage('Inscription réussie !');
    showPage('home-page');
}

function logout() {
    currentToken = null;
    currentUser = null;
    localStorage.removeItem('blog-token');
    localStorage.removeItem('blog-user');
    setAuthState(false);
    showMessage('Déconnexion réussie');
    showPage('home-page');
}

// Articles
async function loadPosts() {
    try {
        const posts = await apiCall('/posts');
        displayPosts(posts);
    } catch (error) {
        console.error('Erreur chargement articles:', error);
        showMessage('Erreur lors du chargement des articles');
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    
    if (posts.length === 0) {
        container.innerHTML = '<p class="no-posts">Aucun article pour le moment.</p>';
        return;
    }
    
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h3><a href="#" class="post-link" data-post-id="${post.id}">${post.title}</a></h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span class="author">Par ${post.author}</span>
                <span class="date">${new Date(post.createdAt).toLocaleDateString('fr-FR')}</span>
                ${post.tags && post.tags.length > 0 ? 
                    `<div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : 
                    ''}
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

async function loadPostDetail(postId) {
    try {
        const post = await apiCall(`/posts/${postId}`);
        displayPostDetail(post);
        await loadComments(postId);
    } catch (error) {
        console.error('Erreur chargement article:', error);
        showMessage('Erreur lors du chargement de l\'article');
    }
}

function displayPostDetail(post) {
    const container = document.getElementById('post-content');
    container.innerHTML = `
        <header class="post-header">
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span class="author">Par ${post.author}</span>
                <span class="date">${new Date(post.createdAt).toLocaleDateString('fr-FR')}</span>
                ${post.tags && post.tags.length > 0 ? 
                    `<div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : 
                    ''}
            </div>
        </header>
        <div class="post-body">
            <p>${post.content.replace(/\n/g, '</p><p>')}</p>
        </div>
        ${currentUser && currentUser.id === post.authorId ? 
            `<div class="post-actions">
                <button class="btn-secondary" onclick="editPost('${post.id}')">Modifier</button>
                <button class="btn-danger" onclick="deletePost('${post.id}')">Supprimer</button>
            </div>` : 
            ''}
    `;
}

async function createPost(postData) {
    try {
        const post = await apiCall('/posts', {
            method: 'POST',
            body: JSON.stringify(postData)
        });
        
        showMessage('Article créé avec succès !');
        showPage('home-page');
        loadPosts();
        
    } catch (error) {
        console.error('Erreur création article:', error);
        showMessage('Erreur lors de la création de l\'article');
    }
}

async function editPost(postId) {
    try {
        const post = await apiCall(`/posts/${postId}`);
        
        document.getElementById('form-title').textContent = 'Modifier l\'article';
        document.getElementById('post-title').value = post.title;
        document.getElementById('post-excerpt').value = post.excerpt;
        document.getElementById('post-content').value = post.content;
        document.getElementById('post-tags').value = post.tags ? post.tags.join(', ') : '';
        
        currentPostId = postId;
        showPage('post-form-page');
        
    } catch (error) {
        console.error('Erreur chargement article:', error);
        showMessage('Erreur lors du chargement de l\'article');
    }
}

async function updatePost(postId, postData) {
    try {
        const post = await apiCall(`/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(postData)
        });
        
        showMessage('Article modifié avec succès !');
        showPage('home-page');
        loadPosts();
        
    } catch (error) {
        console.error('Erreur modification article:', error);
        showMessage('Erreur lors de la modification de l\'article');
    }
}

async function deletePost(postId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        return;
    }
    
    try {
        await apiCall(`/posts/${postId}`, {
            method: 'DELETE'
        });
        
        showMessage('Article supprimé avec succès !');
        showPage('home-page');
        loadPosts();
        
    } catch (error) {
        console.error('Erreur suppression article:', error);
        showMessage('Erreur lors de la suppression de l\'article');
    }
}

// Commentaires
async function loadComments(postId) {
    try {
        const comments = await apiCall(`/posts/${postId}/comments`);
        displayComments(comments);
        
        // Montrer le formulaire de commentaire si connecté
        document.getElementById('comment-form').classList.toggle('hidden', !currentUser);
        
    } catch (error) {
        console.error('Erreur chargement commentaires:', error);
    }
}

function displayComments(comments) {
    const container = document.getElementById('comments-container');
    
    if (comments.length === 0) {
        container.innerHTML = '<p class="no-comments">Aucun commentaire pour le moment.</p>';
        return;
    }
    
    container.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${new Date(comment.createdAt).toLocaleDateString('fr-FR')}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
        </div>
    `).join('');
}

async function addComment(postId, content) {
    try {
        const comment = await apiCall(`/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ content })
        });
        
        showMessage('Commentaire ajouté !');
        document.getElementById('comment-content').value = '';
        loadComments(postId);
        
    } catch (error) {
        console.error('Erreur ajout commentaire:', error);
        showMessage('Erreur lors de l\'ajout du commentaire');
    }
}

// Gestionnaires d'événements
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadPosts();
    
    // Navigation
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('home-page');
        loadPosts();
    });
    
    document.getElementById('login-link').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login-page');
    });
    
    document.getElementById('register-link').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('register-page');
    });
    
    document.getElementById('logout-link').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
    
    document.getElementById('create-post-btn').addEventListener('click', (e) => {
        e.preventDefault();
        currentPostId = null;
        document.getElementById('form-title').textContent = 'Créer un article';
        document.getElementById('post-form').reset();
        showPage('post-form-page');
    });
    
    // Authentification
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        try {
            await login(email, password);
        } catch (error) {
            showMessage(error.message);
        }
    });
    
    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        try {
            await register(username, email, password);
        } catch (error) {
            showMessage(error.message);
        }
    });
    
    document.getElementById('switch-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('register-page');
    });
    
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login-page');
    });
    
    // Délégation d'événements pour les liens d'articles
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('post-link')) {
            e.preventDefault();
            const postId = e.target.dataset.postId;
            loadPostDetail(postId);
            showPage('post-detail-page');
        }
    });
    
    // Articles
    document.getElementById('post-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const postData = {
            title: document.getElementById('post-title').value,
            excerpt: document.getElementById('post-excerpt').value,
            content: document.getElementById('post-content').value,
            tags: document.getElementById('post-tags').value.split(',').map(tag => tag.trim()).filter(tag => tag)
        };
        
        try {
            if (currentPostId) {
                await updatePost(currentPostId, postData);
            } else {
                await createPost(postData);
            }
        } catch (error) {
            showMessage(error.message);
        }
    });
    
    document.getElementById('cancel-post').addEventListener('click', () => {
        showPage('home-page');
    });
    
    // Commentaires
    document.getElementById('comment-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const content = document.getElementById('comment-content').value;
        
        if (currentPostId && content.trim()) {
            try {
                await addComment(currentPostId, content);
            } catch (error) {
                showMessage(error.message);
            }
        }
    });
});
```

## Évaluation
### Niveau Intermédiaire
1. Implémentez un système de validation côté client complet pour les formulaires
2. Ajoutez une fonctionnalité de recherche d'articles avec filtrage
3. Créez un système de likes/pouces pour les articles avec persistance
4. Implémentez la pagination pour les listes d'articles

### Niveau Avancé
5. Ajoutez un système de notifications en temps réel (optionnel avec WebSockets)
6. Implémentez un système de cache côté client pour améliorer les performances
7. Créez une API d'administration pour gérer les utilisateurs et articles
8. Déployez l'application complète avec base de données persistante

## Défi Supplémentaire : Déploiement
Déployez votre application :
1. **Frontend** : GitHub Pages ou Vercel
2. **Backend** : Heroku, Railway, ou Render
3. Configurez les variables d'environnement
4. Mettez en place HTTPS

## Prochaines Étapes
Félicitations ! Vous avez créé votre première application web full-stack ! 

**Prochaines étapes pour continuer votre apprentissage :**
- Apprendre un framework frontend (React, Vue, Angular)
- Explorer les bases de données (MongoDB, PostgreSQL)
- Découvrir le déploiement cloud et DevOps
- Participer à des projets open source
- Construire votre portfolio professionnel

## Ressources
- [Node.js Documentation](https://nodejs.org/fr/docs/)
- [Express.js Guide](https://expressjs.com/fr/guide/routing.html)
- [JWT.io](https://jwt.io/)
- [REST API Design](https://restfulapi.net/)