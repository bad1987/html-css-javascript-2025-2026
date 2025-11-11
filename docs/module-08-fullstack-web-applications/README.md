# Module 8: Full-Stack Web Applications

## Overview
Congratulations! You now have the skills to create complete web applications. This final module guides you through building a full-stack application by combining HTML, CSS, JavaScript, and a simple backend. You will learn to manage data, authenticate users, and deploy your application.

## Learning Objectives
By the end of this module, you will be able to:
- Architect a complete web application
- Implement a simple authentication system
- Manage data on both client and server sides
- Create basic REST APIs
- Deploy a web application
- Understand development best practices

## Prerequisites
- Modules 1-7: Complete mastery of HTML, CSS, JavaScript
- Understanding of APIs and asynchronous programming

## Required Materials
- VS Code editor
- Node.js installed (for backend)
- Git for version control
- Account on a deployment platform (GitHub Pages, Vercel, etc.)

## Session Structure
- Session 1: Application Architecture (30 min)
- Session 2: Backend and APIs (30 min)
- Practical Activity: Personal Blog Full-Stack (2 hours)

## Theory: Full-Stack Architecture

### Typical Web Application Architecture
```
┌─────────────────┐    HTTP/HTTPS    ┌─────────────────┐
│   Frontend      │◄────────────────►│    Backend      │
│   (Client)      │                  │    (Server)     │
│                 │                  │                 │
│ • HTML/CSS/JS   │                  │ • API Routes    │
│ • UI Interface  │                  │ • Business Logic│
│ • Local State   │                  │ • Database      │
└─────────────────┘                  └─────────────────┘
```

### Technology Choices for This Module
- **Frontend**: HTML, CSS, JavaScript (without framework for concepts focus)
- **Backend**: Node.js with Express.js (simple and popular)
- **Database**: JSON files (for simplicity - production would use SQL/NoSQL)
- **Authentication**: JWT tokens simulated
- **Deployment**: GitHub Pages (frontend) + free service (backend)

## Practical Activity: Backend Configuration

### Installing Node.js and Express
1. Download Node.js from https://nodejs.org/
2. Create a new project folder
3. Initialize a Node.js project:

```bash
npm init -y
npm install express cors body-parser jsonwebtoken bcryptjs
npm install -D nodemon
```

### Project Structure
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

## Project: Personal Blog Full-Stack

Let's create a complete blog with authentication, article creation, and comments.

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
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File paths for data
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const POSTS_FILE = path.join(__dirname, 'data', 'posts.json');

// Utility functions
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

// Authentication middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Missing token' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// Authentication routes
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields required' });
        }

        const users = await readData(USERS_FILE);

        // Check if user already exists
        if (users.find(user => user.email === email || user.username === username)) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
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

        // Create JWT token
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET);

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: { id: newUser.id, username: newUser.username, email: newUser.email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const users = await readData(USERS_FILE);
        const user = users.find(u => u.email === email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Incorrect email or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);

        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Article routes
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        // Sort by date descending
        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.id);

        if (!post) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/posts', authenticateToken, async (req, res) => {
    try {
        const { title, content, excerpt, tags } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content required' });
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
        res.status(500).json({ error: 'Server error' });
    }
});

app.put('/api/posts/:id', authenticateToken, async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const postIndex = posts.findIndex(p => p.id === req.params.id);

        if (postIndex === -1) {
            return res.status(404).json({ error: 'Article not found' });
        }

        const post = posts[postIndex];

        // Check if user is the author
        if (post.authorId !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized' });
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
        res.status(500).json({ error: 'Server error' });
    }
});

app.delete('/api/posts/:id', authenticateToken, async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const postIndex = posts.findIndex(p => p.id === req.params.id);

        if (postIndex === -1) {
            return res.status(404).json({ error: 'Article not found' });
        }

        const post = posts[postIndex];

        // Check if user is the author
        if (post.authorId !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        posts.splice(postIndex, 1);
        await writeData(POSTS_FILE, posts);

        res.json({ message: 'Article deleted' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Comment routes
app.get('/api/posts/:postId/comments', async (req, res) => {
    try {
        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.postId);

        if (!post) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json(post.comments || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/posts/:postId/comments', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: 'Content required' });
        }

        const posts = await readData(POSTS_FILE);
        const post = posts.find(p => p.id === req.params.postId);

        if (!post) {
            return res.status(404).json({ error: 'Article not found' });
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
        res.status(500).json({ error: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
```

### Frontend (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>📝 My Personal Blog</h1>
            <nav class="nav">
                <a href="#" id="home-link">Home</a>
                <a href="#" id="login-link">Login</a>
                <a href="#" id="register-link">Register</a>
                <a href="#" id="profile-link" class="hidden">Profile</a>
                <a href="#" id="logout-link" class="hidden">Logout</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <!-- Home page -->
        <section id="home-page" class="page">
            <div class="container">
                <div class="hero">
                    <h2>Welcome to my blog!</h2>
                    <p>Share your thoughts, ideas, and experiences with the world.</p>
                    <button id="create-post-btn" class="btn-primary hidden">Create Article</button>
                </div>

                <div class="posts-section">
                    <h3>Latest Articles</h3>
                    <div id="posts-container" class="posts-container">
                        <!-- Articles will be loaded here -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Login form -->
        <section id="login-page" class="page hidden">
            <div class="container">
                <div class="auth-form">
                    <h2>Login</h2>
                    <form id="login-form">
                        <div class="form-group">
                            <label for="login-email">Email</label>
                            <input type="email" id="login-email" required>
                        </div>
                        <div class="form-group">
                            <label for="login-password">Password</label>
                            <input type="password" id="login-password" required>
                        </div>
                        <button type="submit" class="btn-primary">Login</button>
                    </form>
                    <p>No account yet? <a href="#" id="switch-to-register">Sign up</a></p>
                </div>
            </div>
        </section>

        <!-- Registration form -->
        <section id="register-page" class="page hidden">
            <div class="container">
                <div class="auth-form">
                    <h2>Register</h2>
                    <form id="register-form">
                        <div class="form-group">
                            <label for="register-username">Username</label>
                            <input type="text" id="register-username" required>
                        </div>
                        <div class="form-group">
                            <label for="register-email">Email</label>
                            <input type="email" id="register-email" required>
                        </div>
                        <div class="form-group">
                            <label for="register-password">Password</label>
                            <input type="password" id="register-password" required>
                        </div>
                        <button type="submit" class="btn-primary">Register</button>
                    </form>
                    <p>Already have an account? <a href="#" id="switch-to-login">Login</a></p>
                </div>
            </div>
        </section>

        <!-- Article creation/editing -->
        <section id="post-form-page" class="page hidden">
            <div class="container">
                <div class="post-form-container">
                    <h2 id="form-title">Create Article</h2>
                    <form id="post-form">
                        <div class="form-group">
                            <label for="post-title">Title</label>
                            <input type="text" id="post-title" required>
                        </div>
                        <div class="form-group">
                            <label for="post-excerpt">Excerpt (optional)</label>
                            <textarea id="post-excerpt" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="post-content">Content</label>
                            <textarea id="post-content" rows="10" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="post-tags">Tags (comma-separated)</label>
                            <input type="text" id="post-tags" placeholder="javascript, web, tutorial">
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn-primary">Publish</button>
                            <button type="button" id="cancel-post" class="btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Article detail -->
        <section id="post-detail-page" class="page hidden">
            <div class="container">
                <article id="post-content" class="post-detail">
                    <!-- Article content will be loaded here -->
                </article>

                <div class="comments-section">
                    <h3>Comments</h3>
                    <div id="comments-container">
                        <!-- Comments will be loaded here -->
                    </div>

                    <form id="comment-form" class="comment-form hidden">
                        <h4>Add a comment</h4>
                        <textarea id="comment-content" placeholder="Your comment..." required></textarea>
                        <button type="submit" class="btn-primary">Publish</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 My Personal Blog. All rights reserved.</p>
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

// Application state
let currentUser = null;
let currentToken = null;
let currentPostId = null;

// Utilities
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function showMessage(message, type = 'info') {
    // Simple notification implementation
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
        throw new Error(data.error || 'API Error');
    }

    return data;
}

// Authentication
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
    showMessage('Login successful!');
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
    showMessage('Registration successful!');
    showPage('home-page');
}

function logout() {
    currentToken = null;
    currentUser = null;
    localStorage.removeItem('blog-token');
    localStorage.removeItem('blog-user');
    setAuthState(false);
    showMessage('Logout successful');
    showPage('home-page');
}

// Articles
async function loadPosts() {
    try {
        const posts = await apiCall('/posts');
        displayPosts(posts);
    } catch (error) {
        console.error('Error loading articles:', error);
        showMessage('Error loading articles');
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = '<p class="no-posts">No articles yet.</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h3><a href="#" class="post-link" data-post-id="${post.id}">${post.title}</a></h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span class="author">By ${post.author}</span>
                <span class="date">${new Date(post.createdAt).toLocaleDateString('en-US')}</span>
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
        console.error('Error loading article:', error);
        showMessage('Error loading article');
    }
}

function displayPostDetail(post) {
    const container = document.getElementById('post-content');
    container.innerHTML = `
        <header class="post-header">
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span class="author">By ${post.author}</span>
                <span class="date">${new Date(post.createdAt).toLocaleDateString('en-US')}</span>
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
                <button class="btn-secondary" onclick="editPost('${post.id}')">Edit</button>
                <button class="btn-danger" onclick="deletePost('${post.id}')">Delete</button>
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

        showMessage('Article created successfully!');
        showPage('home-page');
        loadPosts();

    } catch (error) {
        console.error('Error creating article:', error);
        showMessage('Error creating article');
    }
}

async function editPost(postId) {
    try {
        const post = await apiCall(`/posts/${postId}`);

        document.getElementById('form-title').textContent = 'Edit Article';
        document.getElementById('post-title').value = post.title;
        document.getElementById('post-excerpt').value = post.excerpt;
        document.getElementById('post-content').value = post.content;
        document.getElementById('post-tags').value = post.tags ? post.tags.join(', ') : '';

        currentPostId = postId;
        showPage('post-form-page');

    } catch (error) {
        console.error('Error loading article:', error);
        showMessage('Error loading article');
    }
}

async function updatePost(postId, postData) {
    try {
        const post = await apiCall(`/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(postData)
        });

        showMessage('Article updated successfully!');
        showPage('home-page');
        loadPosts();

    } catch (error) {
        console.error('Error updating article:', error);
        showMessage('Error updating article');
    }
}

async function deletePost(postId) {
    if (!confirm('Are you sure you want to delete this article?')) {
        return;
    }

    try {
        await apiCall(`/posts/${postId}`, {
            method: 'DELETE'
        });

        showMessage('Article deleted successfully!');
        showPage('home-page');
        loadPosts();

    } catch (error) {
        console.error('Error deleting article:', error);
        showMessage('Error deleting article');
    }
}

// Comments
async function loadComments(postId) {
    try {
        const comments = await apiCall(`/posts/${postId}/comments`);
        displayComments(comments);

        // Show comment form if logged in
        document.getElementById('comment-form').classList.toggle('hidden', !currentUser);

    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

function displayComments(comments) {
    const container = document.getElementById('comments-container');

    if (comments.length === 0) {
        container.innerHTML = '<p class="no-comments">No comments yet.</p>';
        return;
    }

    container.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${new Date(comment.createdAt).toLocaleDateString('en-US')}</span>
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

        showMessage('Comment added!');
        document.getElementById('comment-content').value = '';
        loadComments(postId);

    } catch (error) {
        console.error('Error adding comment:', error);
        showMessage('Error adding comment');
    }
}

// Event handlers
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
        document.getElementById('form-title').textContent = 'Create Article';
        document.getElementById('post-form').reset();
        showPage('post-form-page');
    });

    // Authentication
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

    // Article link delegation
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

    // Comments
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

## Evaluation
### Intermediate Level
1. Implement complete client-side validation for forms
2. Add article search functionality with filtering
3. Create a like system for articles with persistence
4. Implement pagination for article lists

### Advanced Level
5. Add real-time notifications (optional with WebSockets)
6. Implement client-side caching for better performance
7. Create an admin API for managing users and articles
8. Deploy the complete application with persistent database

## Additional Challenge: Deployment
Deploy your application:
1. **Frontend**: GitHub Pages or Vercel
2. **Backend**: Heroku, Railway, or Render
3. Configure environment variables
4. Set up HTTPS

## Next Steps
Congratulations! You have created your first full-stack web application!

**Next steps to continue your learning:**
- Learn a frontend framework (React, Vue, Angular)
- Explore databases (MongoDB, PostgreSQL)
- Discover cloud deployment and DevOps
- Contribute to open source projects
- Build your professional portfolio

## Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [JWT.io](https://jwt.io/)
- [REST API Design](https://restfulapi.net/)
