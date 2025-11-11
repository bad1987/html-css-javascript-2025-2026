# Practical Project: Collaborative Project Management Application

## Project Context
You now master advanced JavaScript and want to create a modern application using browser APIs and asynchronous programming. This project will allow you to practice complex state management, API calls, data persistence, and advanced interactivity.

## Goal
Create a complete collaborative project management application with authentication, team management, Kanban boards, and simulated real-time integration.

## Project Structure
```
project-management/
├── index.html              # Home page and dashboard
├── login.html              # Login page
├── project.html            # Project detail page
├── css/
│   ├── style.css           # Main styles
│   ├── kanban.css          # Kanban styles
│   └── responsive.css      # Responsive styles
├── js/
│   ├── models/
│   │   ├── User.js         # User class
│   │   ├── Project.js      # Project class
│   │   ├── Task.js         # Task class
│   │   └── Team.js         # Team class
│   ├── services/
│   │   ├── api.js          # API service
│   │   ├── auth.js         # Authentication service
│   │   ├── storage.js      # Storage service
│   │   └── realtime.js     # Simulated real-time service
│   ├── components/
│   │   ├── KanbanBoard.js  # Kanban component
│   │   ├── TaskCard.js     # Task Card component
│   │   ├── UserList.js     # User List component
│   │   └── Notification.js # Notification component
│   ├── utils/
│   │   ├── validation.js   # Validation utilities
│   │   ├── format.js       # Formatting utilities
│   │   └── helpers.js      # Helper functions
│   └── app.js              # Main application
└── README.md
```

## Implementation Steps

### Step 1: Project Setup
1. Create the `project-management` folder
2. Organize files according to the structure above
3. Configure a local server or use Live Server

### Step 2: Data Models
Create the data classes:

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
            { id: 'todo', name: 'To Do', order: 0 },
            { id: 'in-progress', name: 'In Progress', order: 1 },
            { id: 'review', name: 'In Review', order: 2 },
            { id: 'done', name: 'Done', order: 3 }
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
        // This method will be implemented with tasks
        return 0;
    }

    getCompletionPercentage() {
        // Calculate completion percentage
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
            estimated: 0, // in hours
            spent: 0      // in hours
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

### Step 3: API and Storage Services
Implement the data services:

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

        // Network delay simulation
        await this.delay(300 + Math.random() * 700);

        try {
            // API simulation - in production, this would be a real fetch call
            const response = await this.mockFetch(url, config);
            return response;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async mockFetch(url, config) {
        // REST API simulation
        const method = config.method || 'GET';
        const path = url.replace(this.baseURL, '');
        const segments = path.split('/').filter(s => s);

        // Response simulation based on endpoint
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
        // Other endpoints...
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
        // Other endpoints...
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

    // Specific methods
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

// Global instance
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

    // Projects
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

    // Tasks
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

    // Users
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

    // Teams
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

    // Utilities
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

// Global instance
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
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString('en-US') : '';

        return `
            <div class="task-card ${priorityClass} ${overdueClass}"
                 data-task-id="${task.id}"
                 draggable="true">
                <div class="task-header">
                    <h4 class="task-title">${task.title}</h4>
                    <div class="task-priority">${this.getPriorityLabel(task.priority)}</div>
                </div>
                <div class="task-meta">
                    ${task.assigneeId ? `<div class="task-assignee">👤 Assigned</div>` : ''}
                    ${dueDate ? `<div class="task-due-date">📅 ${dueDate}</div>` : ''}
                </div>
                <div class="task-description">${task.description || 'No description'}</div>
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
            low: '🟢 Low',
            medium: '🟡 Medium',
            high: '🟠 High',
            urgent: '🔴 Urgent'
        };
        return labels[priority] || labels.medium;
    }

    setupEventListeners() {
        // Drag and drop
        this.setupDragAndDrop();

        // Task actions
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
            this.showNotification('Task moved successfully', 'success');
        } catch (error) {
            console.error('Task move error:', error);
            this.showNotification('Error moving task', 'error');
        }
    }

    async editTask(taskId) {
        // Task editing implementation
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            // Open an editing modal
            this.showTaskModal(task);
        }
    }

    async deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            try {
                await apiService.deleteTask(taskId);
                await this.loadData();
                this.render();
                this.showNotification('Task deleted', 'success');
            } catch (error) {
                console.error('Task deletion error:', error);
                this.showNotification('Error during deletion', 'error');
            }
        }
    }

    showTaskModal(task) {
        // Task modal implementation
        // ...
    }

    showNotification(message, type = 'info') {
        // Display notification
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}
```

### Step 5: Main Application
Create the main application:

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
        // Authentication simulation
        const token = localStorage.getItem('auth-token');
        if (token) {
            // In production, validate the token with the API
            this.currentUser = {
                id: 'user1',
                name: 'John Doe',
                email: 'john@example.com',
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

        // Project creation
        const createProjectBtn = document.getElementById('create-project-btn');
        if (createProjectBtn) {
            createProjectBtn.addEventListener('click', () => {
                this.showCreateProjectModal();
            });
        }

        // Task creation
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
            console.error('Dashboard loading error:', error);
        }
    }

    renderProjectsList(projects) {
        const container = document.getElementById('projects-list');
        if (!container) return;

        if (projects.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No projects</h3>
                    <p>Create your first project to get started!</p>
                    <button id="create-first-project" class="btn btn-primary">Create a Project</button>
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
                    <span class="project-members">👥 ${project.members.length} members</span>
                    <span class="project-tasks">📋 ${project.taskCount || 0} tasks</span>
                    <span class="project-progress">${project.completionPercentage || 0}% completed</span>
                </div>
                <div class="project-actions">
                    <button class="btn btn-secondary open-project" data-project-id="${project.id}">
                        Open
                    </button>
                    <button class="btn btn-outline edit-project" data-project-id="${project.id}">
                        Edit
                    </button>
                </div>
            </div>
        `).join('');

        // Event handlers
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
            console.error('Project opening error:', error);
        }
    }

    showProjectView(project) {
        // Change view to display the project
        document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
        document.getElementById('project-view').classList.remove('hidden');

        // Update header
        document.getElementById('project-title').textContent = project.name;
        document.getElementById('project-description').textContent = project.description;

        // Initialize Kanban
        const kanbanContainer = document.getElementById('kanban-container');
        this.kanbanBoard = new KanbanBoard(project.id, kanbanContainer);
    }

    showCreateProjectModal() {
        // Project creation modal implementation
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    showCreateTaskModal() {
        // Task creation modal implementation
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
        // Navigation management
        document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
        document.getElementById(`${section}-view`)?.classList.remove('hidden');

        // Update active navigation
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

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProjectManagementApp };
}
```

## Testing Instructions

### Asynchronous Programming Validation (40%)
- [ ] Promises and async/await used correctly in API calls
- [ ] Error handling with try/catch in all async functions
- [ ] Network delay simulation in API services
- [ ] Local storage with localStorage works correctly

### Browser APIs Validation (30%)
- [ ] Drag & drop implemented for Kanban
- [ ] DOM events handled correctly (event delegation)
- [ ] localStorage used for data persistence
- [ ] Responsive interface with media queries

### Architecture Validation (20%)
- [ ] Well-structured classes and objects with encapsulation
- [ ] Separate services for API, storage, authentication
- [ ] Modular and reusable interface components
- [ ] Centralized state management

### User Validation (10%)
- [ ] Intuitive interface with visual feedback
- [ ] Error handling with informative messages
- [ ] Acceptable performance even with large amounts of data
- [ ] Accessibility followed (keyboard navigation)

## Additional Challenges

### Level 1: Collaborative Features
- Add a real-time comment system
- Implement push notifications for changes
- Create a @user mention system
- Add a modification history

### Level 2: Advanced Features
- Implement WebSockets for real-time
- Add a global search functionality
- Create customizable dashboards
- Integrate a file attachment system

### Level 3: Optimizations and Performance
- Implement virtualization for large lists
- Add intelligent data caching
- Optimize re-renders with a diffing system
- Create a service worker for offline mode

## Evaluation Criteria

### Asynchronous Programming (35%)
- Correct use of promises and async/await
- Appropriate handling of asynchronous errors
- Realistic simulation of API calls
- Acceptable performance of async operations

### Browser APIs (30%)
- Appropriate use of localStorage/sessionStorage
- Correct implementation of drag & drop
- Optimized event management
- Responsive and accessible interface

### Architecture and Modularity (20%)
- Clear separation of responsibilities
- Well-designed classes and services
- Modular interface components
- Maintainable and extensible code

### User Quality (15%)
- Intuitive and modern interface
- Appropriate feedback for user actions
- User-friendly error handling
- Performance and responsiveness

## Next Steps
Congratulations on your project management application! You now master browser APIs and asynchronous programming. In the next module, we will build complete full-stack applications with backend.