# Cas Pratique : Application de Gestion de Projets Collaboratifs

## Contexte du Projet
Vous maîtrisez maintenant JavaScript avancé et vous voulez créer une application moderne utilisant les APIs du navigateur et la programmation asynchrone. Ce projet vous permettra de pratiquer la gestion d'état complexe, les appels API, la persistance des données, et l'interactivité avancée.

## Objectif
Créer une application complète de gestion de projets collaboratifs avec authentification, gestion d'équipe, tableaux Kanban, et intégration temps réel simulée.

## Structure du Projet
```
gestion-projets/
├── index.html              # Page d'accueil et tableau de bord
├── login.html              # Page de connexion
├── project.html            # Page de détail de projet
├── css/
│   ├── style.css           # Styles principaux
│   ├── kanban.css          # Styles du Kanban
│   └── responsive.css      # Styles responsives
├── js/
│   ├── models/
│   │   ├── User.js         # Classe Utilisateur
│   │   ├── Project.js      # Classe Projet
│   │   ├── Task.js         # Classe Tâche
│   │   └── Team.js         # Classe Équipe
│   ├── services/
│   │   ├── api.js          # Service API
│   │   ├── auth.js         # Service d'authentification
│   │   ├── storage.js      # Service de stockage
│   │   └── realtime.js     # Service temps réel simulé
│   ├── components/
│   │   ├── KanbanBoard.js  # Composant Kanban
│   │   ├── TaskCard.js     # Composant Carte Tâche
│   │   ├── UserList.js     # Composant Liste Utilisateurs
│   │   └── Notification.js # Composant Notifications
│   ├── utils/
│   │   ├── validation.js   # Utilitaires de validation
│   │   ├── format.js       # Utilitaires de formatage
│   │   └── helpers.js      # Fonctions utilitaires
│   └── app.js              # Application principale
└── README.md
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez le dossier `gestion-projets`
2. Organisez les fichiers selon l'arborescence ci-dessus
3. Configurez un serveur local ou utilisez Live Server

### Étape 2 : Modèles de Données
Créez les classes de données :

```javascript
// js/models/User.js
class User {
    constructor(id, name, email, avatar = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.role = 'member'; // admin, manager, member
        this.status = 'active'; // active, inactive
        this.lastSeen = new Date();
        this.projects = [];
        this.tasks = [];
    }

    isOnline() {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        return this.lastSeen > fiveMinutesAgo;
    }

    canEditProject(projectId) {
        return this.role === 'admin' ||
               this.projects.some(p => p.id === projectId && p.role !== 'viewer');
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            avatar: this.avatar,
            role: this.role,
            status: this.status,
            lastSeen: this.lastSeen,
            projects: this.projects,
            tasks: this.tasks
        };
    }
}

// js/models/Project.js
class Project {
    constructor(id, name, description, ownerId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ownerId = ownerId;
        this.status = 'active'; // active, completed, archived
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.members = [{ userId: ownerId, role: 'owner' }];
        this.columns = [
            { id: 'todo', name: 'À faire', order: 0 },
            { id: 'in-progress', name: 'En cours', order: 1 },
            { id: 'review', name: 'En révision', order: 2 },
            { id: 'done', name: 'Terminé', order: 3 }
        ];
        this.settings = {
            allowGuests: false,
            requireApproval: false,
            notifications: true
        };
    }

    addMember(userId, role = 'member') {
        if (!this.members.find(m => m.userId === userId)) {
            this.members.push({ userId, role });
            this.updatedAt = new Date();
        }
    }

    removeMember(userId) {
        this.members = this.members.filter(m => m.userId !== userId);
        this.updatedAt = new Date();
    }

    getMemberRole(userId) {
        const member = this.members.find(m => m.userId === userId);
        return member ? member.role : null;
    }

    canUserEdit(userId) {
        const role = this.getMemberRole(userId);
        return role === 'owner' || role === 'admin' || role === 'editor';
    }

    getTaskCount() {
        // Cette méthode sera implémentée avec les tâches
        return 0;
    }

    getCompletionPercentage() {
        // Calcul du pourcentage d'achèvement
        return 0;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            ownerId: this.ownerId,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            members: this.members,
            columns: this.columns,
            settings: this.settings
        };
    }
}

// js/models/Task.js
class Task {
    constructor(id, title, description, projectId, creatorId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.projectId = projectId;
        this.creatorId = creatorId;
        this.assigneeId = null;
        this.columnId = 'todo';
        this.status = 'todo';
        this.priority = 'medium'; // low, medium, high, urgent
        this.labels = [];
        this.dueDate = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.comments = [];
        this.attachments = [];
        this.timeTracking = {
            estimated: 0, // en heures
            spent: 0      // en heures
        };
    }

    assignTo(userId) {
        this.assigneeId = userId;
        this.updatedAt = new Date();
    }

    moveToColumn(columnId) {
        this.columnId = columnId;
        this.status = this.getStatusFromColumn(columnId);
        this.updatedAt = new Date();
    }

    getStatusFromColumn(columnId) {
        const statusMap = {
            'todo': 'todo',
            'in-progress': 'in-progress',
            'review': 'review',
            'done': 'completed'
        };
        return statusMap[columnId] || 'todo';
    }

    addComment(userId, content) {
        this.comments.push({
            id: Date.now().toString(),
            userId,
            content,
            createdAt: new Date()
        });
        this.updatedAt = new Date();
    }

    setPriority(priority) {
        this.priority = priority;
        this.updatedAt = new Date();
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate ? new Date(dueDate) : null;
        this.updatedAt = new Date();
    }

    isOverdue() {
        return this.dueDate && new Date() > this.dueDate && this.status !== 'completed';
    }

    getDaysUntilDue() {
        if (!this.dueDate) return null;
        const diffTime = this.dueDate - new Date();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            projectId: this.projectId,
            creatorId: this.creatorId,
            assigneeId: this.assigneeId,
            columnId: this.columnId,
            status: this.status,
            priority: this.priority,
            labels: this.labels,
            dueDate: this.dueDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            comments: this.comments,
            attachments: this.attachments,
            timeTracking: this.timeTracking
        };
    }
}

// js/models/Team.js
class Team {
    constructor(id, name, description, ownerId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ownerId = ownerId;
        this.members = [{ userId: ownerId, role: 'owner', joinedAt: new Date() }];
        this.projects = [];
        this.createdAt = new Date();
        this.settings = {
            visibility: 'private', // private, public
            allowJoinRequests: false,
            requireApproval: true
        };
    }

    addMember(userId, role = 'member') {
        if (!this.members.find(m => m.userId === userId)) {
            this.members.push({
                userId,
                role,
                joinedAt: new Date()
            });
        }
    }

    removeMember(userId) {
        this.members = this.members.filter(m => m.userId !== userId);
    }

    addProject(projectId) {
        if (!this.projects.includes(projectId)) {
            this.projects.push(projectId);
        }
    }

    getActiveMembers() {
        return this.members.filter(m => m.role !== 'removed');
    }

    getMemberRole(userId) {
        const member = this.members.find(m => m.userId === userId);
        return member ? member.role : null;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            ownerId: this.ownerId,
            members: this.members,
            projects: this.projects,
            createdAt: this.createdAt,
            settings: this.settings
        };
    }
}
```

### Étape 3 : Services API et Stockage
Implémentez les services de données :

```javascript
// js/services/api.js
class ApiService {
    constructor(baseURL = '') {
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

        if (this.token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        // Simulation de délai réseau
        await this.delay(300 + Math.random() * 700);

        try {
            // Simulation d'API - en production, ce serait un vrai appel fetch
            const response = await this.mockFetch(url, config);
            return response;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async mockFetch(url, config) {
        // Simulation d'API REST
        const method = config.method || 'GET';
        const path = url.replace(this.baseURL, '');
        const segments = path.split('/').filter(s => s);

        // Simulation de réponses selon l'endpoint
        switch (method) {
            case 'GET':
                return this.handleGet(path, segments);
            case 'POST':
                return this.handlePost(path, segments, config.body);
            case 'PUT':
                return this.handlePut(path, segments, config.body);
            case 'DELETE':
                return this.handleDelete(path, segments);
            default:
                throw new Error(`Method ${method} not supported`);
        }
    }

    handleGet(path, segments) {
        if (path === 'projects') {
            return storageService.loadProjects();
        }
        if (segments[0] === 'projects' && segments.length === 2) {
            return storageService.loadProject(segments[1]);
        }
        if (path.includes('/tasks')) {
            const projectId = segments[1];
            return storageService.loadProjectTasks(projectId);
        }
        // Autres endpoints...
        return [];
    }

    handlePost(path, segments, body) {
        if (path === 'projects') {
            const projectData = JSON.parse(body);
            return storageService.saveProject(projectData);
        }
        if (path.includes('/tasks')) {
            const taskData = JSON.parse(body);
            return storageService.saveTask(taskData);
        }
        // Autres endpoints...
        return { success: true };
    }

    handlePut(path, segments, body) {
        const data = JSON.parse(body);
        if (path.includes('/tasks/')) {
            const taskId = segments[3];
            return storageService.updateTask(taskId, data);
        }
        return { success: true };
    }

    handleDelete(path, segments) {
        if (path.includes('/tasks/')) {
            const taskId = segments[3];
            return storageService.deleteTask(taskId);
        }
        return { success: true };
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Méthodes spécifiques
    async getProjects() {
        return this.request('/projects');
    }

    async createProject(projectData) {
        return this.request('/projects', {
            method: 'POST',
            body: JSON.stringify(projectData)
        });
    }

    async getProjectTasks(projectId) {
        return this.request(`/projects/${projectId}/tasks`);
    }

    async createTask(projectId, taskData) {
        return this.request(`/projects/${projectId}/tasks`, {
            method: 'POST',
            body: JSON.stringify(taskData)
        });
    }

    async updateTask(taskId, taskData) {
        return this.request(`/tasks/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify(taskData)
        });
    }

    async deleteTask(taskId) {
        return this.request(`/tasks/${taskId}`, {
            method: 'DELETE'
        });
    }
}

// Instance globale
const apiService = new ApiService();
```

```javascript
// js/services/storage.js
class StorageService {
    constructor() {
        this.PROJECTS_KEY = 'pm_projects';
        this.TASKS_KEY = 'pm_tasks';
        this.USERS_KEY = 'pm_users';
        this.TEAMS_KEY = 'pm_teams';
    }

    // Projets
    saveProject(project) {
        const projects = this.loadProjects();
        const existingIndex = projects.findIndex(p => p.id === project.id);

        if (existingIndex !== -1) {
            projects[existingIndex] = project;
        } else {
            projects.push(project);
        }

        localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
        return project;
    }

    loadProjects() {
        const data = localStorage.getItem(this.PROJECTS_KEY);
        return data ? JSON.parse(data) : [];
    }

    loadProject(id) {
        const projects = this.loadProjects();
        return projects.find(p => p.id === id);
    }

    deleteProject(id) {
        const projects = this.loadProjects().filter(p => p.id !== id);
        localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
    }

    // Tâches
    saveTask(task) {
        const tasks = this.loadTasks();
        const existingIndex = tasks.findIndex(t => t.id === task.id);

        if (existingIndex !== -1) {
            tasks[existingIndex] = task;
        } else {
            tasks.push(task);
        }

        localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
        return task;
    }

    loadTasks() {
        const data = localStorage.getItem(this.TASKS_KEY);
        return data ? JSON.parse(data) : [];
    }

    loadProjectTasks(projectId) {
        const tasks = this.loadTasks();
        return tasks.filter(t => t.projectId === projectId);
    }

    updateTask(id, updates) {
        const tasks = this.loadTasks();
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex !== -1) {
            tasks[taskIndex] = { ...tasks[taskIndex], ...updates, updatedAt: new Date() };
            localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
            return tasks[taskIndex];
        }
        return null;
    }

    deleteTask(id) {
        const tasks = this.loadTasks().filter(t => t.id !== id);
        localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
    }

    // Utilisateurs
    saveUser(user) {
        const users = this.loadUsers();
        const existingIndex = users.findIndex(u => u.id === user.id);

        if (existingIndex !== -1) {
            users[existingIndex] = user;
        } else {
            users.push(user);
        }

        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        return user;
    }

    loadUsers() {
        const data = localStorage.getItem(this.USERS_KEY);
        return data ? JSON.parse(data) : [];
    }

    loadUser(id) {
        const users = this.loadUsers();
        return users.find(u => u.id === id);
    }

    // Équipes
    saveTeam(team) {
        const teams = this.loadTeams();
        const existingIndex = teams.findIndex(t => t.id === team.id);

        if (existingIndex !== -1) {
            teams[existingIndex] = team;
        } else {
            teams.push(team);
        }

        localStorage.setItem(this.TEAMS_KEY, JSON.stringify(teams));
        return team;
    }

    loadTeams() {
        const data = localStorage.getItem(this.TEAMS_KEY);
        return data ? JSON.parse(data) : [];
    }

    // Utilitaires
    clearAll() {
        localStorage.removeItem(this.PROJECTS_KEY);
        localStorage.removeItem(this.TASKS_KEY);
        localStorage.removeItem(this.USERS_KEY);
        localStorage.removeItem(this.TEAMS_KEY);
    }

    exportData() {
        return {
            projects: this.loadProjects(),
            tasks: this.loadTasks(),
            users: this.loadUsers(),
            teams: this.loadTeams(),
            exportedAt: new Date().toISOString()
        };
    }

    importData(data) {
        if (data.projects) {
            data.projects.forEach(project => this.saveProject(project));
        }
        if (data.tasks) {
            data.tasks.forEach(task => this.saveTask(task));
        }
        if (data.users) {
            data.users.forEach(user => this.saveUser(user));
        }
        if (data.teams) {
            data.teams.forEach(team => this.saveTeam(team));
        }
    }
}

// Instance globale
const storageService = new StorageService();
```

### Étape 4 : Composants d'Interface
Créez les composants interactifs :

```javascript
// js/components/KanbanBoard.js
class KanbanBoard {
    constructor(projectId, container) {
        this.projectId = projectId;
        this.container = container;
        this.columns = [];
        this.tasks = [];
        this.draggedTask = null;
        this.init();
    }

    async init() {
        await this.loadData();
        this.render();
        this.setupEventListeners();
    }

    async loadData() {
        try {
            const project = await apiService.request(`/projects/${this.projectId}`);
            this.columns = project.columns || [];
            this.tasks = await apiService.getProjectTasks(this.projectId);
        } catch (error) {
            console.error('Erreur chargement Kanban:', error);
        }
    }

    render() {
        this.container.innerHTML = `
            <div class="kanban-board">
                ${this.columns.map(column => `
                    <div class="kanban-column" data-column-id="${column.id}">
                        <div class="column-header">
                            <h3>${column.name}</h3>
                            <span class="task-count">${this.getTaskCount(column.id)}</span>
                        </div>
                        <div class="column-content">
                            ${this.tasks
                                .filter(task => task.columnId === column.id)
                                .map(task => this.renderTask(task))
                                .join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderTask(task) {
        const priorityClass = `priority-${task.priority}`;
        const overdueClass = task.isOverdue() ? 'overdue' : '';
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString('fr-FR') : '';

        return `
            <div class="task-card ${priorityClass} ${overdueClass}"
                 data-task-id="${task.id}"
                 draggable="true">
                <div class="task-header">
                    <h4 class="task-title">${task.title}</h4>
                    <div class="task-priority">${this.getPriorityLabel(task.priority)}</div>
                </div>
                <div class="task-meta">
                    ${task.assigneeId ? `<div class="task-assignee">👤 Assigné</div>` : ''}
                    ${dueDate ? `<div class="task-due-date">📅 ${dueDate}</div>` : ''}
                </div>
                <div class="task-description">${task.description || 'Aucune description'}</div>
                <div class="task-actions">
                    <button class="task-edit-btn" data-task-id="${task.id}">✏️</button>
                    <button class="task-delete-btn" data-task-id="${task.id}">🗑️</button>
                </div>
            </div>
        `;
    }

    getTaskCount(columnId) {
        return this.tasks.filter(task => task.columnId === columnId).length;
    }

    getPriorityLabel(priority) {
        const labels = {
            low: '🟢 Faible',
            medium: '🟡 Moyenne',
            high: '🟠 Élevée',
            urgent: '🔴 Urgente'
        };
        return labels[priority] || labels.medium;
    }

    setupEventListeners() {
        // Drag and drop
        this.setupDragAndDrop();

        // Actions des tâches
        this.container.addEventListener('click', (e) => {
            const taskId = e.target.dataset.taskId;
            if (!taskId) return;

            if (e.target.classList.contains('task-edit-btn')) {
                this.editTask(taskId);
            } else if (e.target.classList.contains('task-delete-btn')) {
                this.deleteTask(taskId);
            }
        });
    }

    setupDragAndDrop() {
        const taskCards = this.container.querySelectorAll('.task-card');
        const columns = this.container.querySelectorAll('.kanban-column');

        taskCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                this.draggedTask = e.target;
                e.target.classList.add('dragging');
            });

            card.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
                this.draggedTask = null;
            });
        });

        columns.forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                const afterElement = this.getDragAfterElement(column, e.clientY);
                const draggable = document.querySelector('.dragging');

                if (afterElement) {
                    column.querySelector('.column-content').insertBefore(draggable, afterElement);
                } else {
                    column.querySelector('.column-content').appendChild(draggable);
                }
            });

            column.addEventListener('drop', async (e) => {
                e.preventDefault();
                const columnId = column.dataset.columnId;
                const taskId = this.draggedTask.dataset.taskId;

                if (taskId && columnId) {
                    await this.moveTask(taskId, columnId);
                }
            });
        });
    }

    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    async moveTask(taskId, columnId) {
        try {
            await apiService.updateTask(taskId, { columnId });
            await this.loadData();
            this.render();
            this.showNotification('Tâche déplacée avec succès', 'success');
        } catch (error) {
            console.error('Erreur déplacement tâche:', error);
            this.showNotification('Erreur lors du déplacement', 'error');
        }
    }

    async editTask(taskId) {
        // Implémentation de l'édition de tâche
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            // Ouvrir un modal d'édition
            this.showTaskModal(task);
        }
    }

    async deleteTask(taskId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            try {
                await apiService.deleteTask(taskId);
                await this.loadData();
                this.render();
                this.showNotification('Tâche supprimée', 'success');
            } catch (error) {
                console.error('Erreur suppression tâche:', error);
                this.showNotification('Erreur lors de la suppression', 'error');
            }
        }
    }

    showTaskModal(task) {
        // Implémentation du modal de tâche
        // ...
    }

    showNotification(message, type = 'info') {
        // Afficher une notification
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}
```

### Étape 5 : Application Principale
Créez l'application principale :

```javascript
// js/app.js
class ProjectManagementApp {
    constructor() {
        this.currentUser = null;
        this.currentProject = null;
        this.kanbanBoard = null;
        this.init();
    }

    async init() {
        await this.checkAuth();
        this.setupEventListeners();
        this.loadDashboard();
    }

    async checkAuth() {
        // Simulation d'authentification
        const token = localStorage.getItem('auth-token');
        if (token) {
            // En production, valider le token avec l'API
            this.currentUser = {
                id: 'user1',
                name: 'Jean Dupont',
                email: 'jean@example.com',
                avatar: null
            };
            this.updateAuthUI();
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('href').substring(1);
                this.navigateTo(section);
            });
        });

        // Création de projet
        const createProjectBtn = document.getElementById('create-project-btn');
        if (createProjectBtn) {
            createProjectBtn.addEventListener('click', () => {
                this.showCreateProjectModal();
            });
        }

        // Création de tâche
        const createTaskBtn = document.getElementById('create-task-btn');
        if (createTaskBtn) {
            createTaskBtn.addEventListener('click', () => {
                this.showCreateTaskModal();
            });
        }
    }

    async loadDashboard() {
        try {
            const projects = await apiService.getProjects();
            this.renderProjectsList(projects);
        } catch (error) {
            console.error('Erreur chargement dashboard:', error);
        }
    }

    renderProjectsList(projects) {
        const container = document.getElementById('projects-list');
        if (!container) return;

        if (projects.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>Aucun projet</h3>
                    <p>Créez votre premier projet pour commencer !</p>
                    <button id="create-first-project" class="btn btn-primary">Créer un Projet</button>
                </div>
            `;

            document.getElementById('create-first-project')?.addEventListener('click', () => {
                this.showCreateProjectModal();
            });
            return;
        }

        container.innerHTML = projects.map(project => `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="project-status status-${project.status}">${project.status}</div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <span class="project-members">👥 ${project.members.length} membres</span>
                    <span class="project-tasks">📋 ${project.taskCount || 0} tâches</span>
                    <span class="project-progress">${project.completionPercentage || 0}% terminé</span>
                </div>
                <div class="project-actions">
                    <button class="btn btn-secondary open-project" data-project-id="${project.id}">
                        Ouvrir
                    </button>
                    <button class="btn btn-outline edit-project" data-project-id="${project.id}">
                        Modifier
                    </button>
                </div>
            </div>
        `).join('');

        // Gestionnaires d'événements
        container.addEventListener('click', (e) => {
            const projectId = e.target.dataset.projectId;
            if (!projectId) return;

            if (e.target.classList.contains('open-project')) {
                this.openProject(projectId);
            } else if (e.target.classList.contains('edit-project')) {
                this.editProject(projectId);
            }
        });
    }

    async openProject(projectId) {
        try {
            const project = await apiService.request(`/projects/${projectId}`);
            this.currentProject = project;
            this.showProjectView(project);
        } catch (error) {
            console.error('Erreur ouverture projet:', error);
        }
    }

    showProjectView(project) {
        // Changer la vue pour afficher le projet
        document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
        document.getElementById('project-view').classList.remove('hidden');

        // Mettre à jour le header
        document.getElementById('project-title').textContent = project.name;
        document.getElementById('project-description').textContent = project.description;

        // Initialiser le Kanban
        const kanbanContainer = document.getElementById('kanban-container');
        this.kanbanBoard = new KanbanBoard(project.id, kanbanContainer);
    }

    showCreateProjectModal() {
        // Implémentation du modal de création de projet
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    showCreateTaskModal() {
        // Implémentation du modal de création de tâche
        const modal = document.getElementById('task-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    updateAuthUI() {
        const authSection = document.getElementById('auth-section');
        const userSection = document.getElementById('user-section');

        if (this.currentUser) {
            if (authSection) authSection.classList.add('hidden');
            if (userSection) {
                userSection.classList.remove('hidden');
                document.getElementById('user-name').textContent = this.currentUser.name;
                document.getElementById('user-avatar').src = this.currentUser.avatar || 'default-avatar.png';
            }
        } else {
            if (authSection) authSection.classList.remove('hidden');
            if (userSection) userSection.classList.add('hidden');
        }
    }

    navigateTo(section) {
        // Gestion de la navigation
        document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
        document.getElementById(`${section}-view`)?.classList.remove('hidden');

        // Mettre à jour la navigation active
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[href="#${section}"]`)?.classList.add('active');
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    new ProjectManagementApp();
});

// Export pour les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProjectManagementApp };
}
```

## Instructions de Test

### Validation Programmation Asynchrone (40%)
- [ ] Promesses et async/await utilisés correctement dans les appels API
- [ ] Gestion d'erreurs avec try/catch dans toutes les fonctions async
- [ ] Simulation de délais réseau dans les services API
- [ ] Stockage local avec localStorage fonctionne correctement

### Validation APIs du Navigateur (30%)
- [ ] Drag & drop implémenté pour le Kanban
- [ ] Événements DOM gérés correctement (délégation d'événements)
- [ ] localStorage utilisé pour la persistance des données
- [ ] Interface responsive avec media queries

### Validation Architecture (20%)
- [ ] Classes et objets bien structurés avec encapsulation
- [ ] Services séparés pour API, stockage, authentification
- [ ] Composants d'interface modulaires et réutilisables
- [ ] Gestion d'état centralisée

### Validation Utilisateur (10%)
- [ ] Interface intuitive avec feedback visuel
- [ ] Gestion des erreurs avec messages informatifs
- [ ] Performance acceptable même avec beaucoup de données
- [ ] Accessibilité respectée (navigation au clavier)

## Défis Supplémentaires

### Niveau 1 : Fonctionnalités Collaboratives
- Ajouter un système de commentaires en temps réel
- Implémenter des notifications push pour les changements
- Créer un système de mentions @utilisateur
- Ajouter un historique des modifications

### Niveau 2 : Fonctionnalités Avancées
- Implémenter WebSockets pour le temps réel
- Ajouter une fonctionnalité de recherche globale
- Créer des tableaux de bord personnalisables
- Intégrer un système de fichiers joints

### Niveau 3 : Optimisations et Performance
- Implémenter la virtualisation pour les grandes listes
- Ajouter un cache intelligent des données
- Optimiser les re-rendus avec un système de diffing
- Créer un service worker pour le mode hors ligne

## Critères d'Évaluation

### Programmation Asynchrone (35%)
- Utilisation correcte des promesses et async/await
- Gestion appropriée des erreurs asynchrones
- Simulation réaliste des appels API
- Performance acceptable des opérations async

### APIs du Navigateur (30%)
- Utilisation appropriée de localStorage/sessionStorage
- Implémentation correcte de drag & drop
- Gestion d'événements optimisée
- Interface responsive et accessible

### Architecture et Modularité (20%)
- Séparation claire des responsabilités
- Classes et services bien conçus
- Composants d'interface modulaires
- Code maintenable et extensible

### Qualité Utilisateur (15%)
- Interface intuitive et moderne
- Feedback approprié pour les actions utilisateur
- Gestion d'erreurs user-friendly
- Performance et responsiveness

## Prochaines Étapes
Félicitations pour votre application de gestion de projets ! Vous maîtrisez maintenant les APIs du navigateur et la programmation asynchrone. Au prochain module, nous construirons des applications full-stack complètes avec backend.