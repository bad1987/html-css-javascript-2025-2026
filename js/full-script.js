// Complete User Authentication System - Full Implementation
// This file contains the complete JavaScript solution for testing

// DOM Elements
const navButtons = {
    register: document.getElementById('nav-register'),
    login: document.getElementById('nav-login'),
    profile: document.getElementById('nav-profile')
};

const sections = {
    register: document.getElementById('register-section'),
    login: document.getElementById('login-section'),
    reset: document.getElementById('reset-section'),
    profile: document.getElementById('profile-section'),
    dashboard: document.getElementById('dashboard-section')
};

const forms = {
    register: document.getElementById('register-form'),
    login: document.getElementById('login-form'),
    reset: document.getElementById('reset-form'),
    profile: document.getElementById('profile-form')
};

const statusMessage = document.getElementById('status-message');

// Utility Functions
function showSection(sectionName) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    sections[sectionName].classList.add('active');

    // Update navigation
    Object.values(navButtons).forEach(btn => {
        btn.classList.remove('active');
    });
    if (navButtons[sectionName]) {
        navButtons[sectionName].classList.add('active');
    }
}

function showMessage(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

function hideMessage() {
    statusMessage.classList.add('hidden');
}

// Spinner utilities
function showSpinner(button) {
    button.classList.add('loading');
    const spinner = button.querySelector('.spinner');
    if (spinner) {
        spinner.classList.remove('hidden');
    }
    button.disabled = true;
}

function hideSpinner(button) {
    button.classList.remove('loading');
    const spinner = button.querySelector('.spinner');
    if (spinner) {
        spinner.classList.add('hidden');
    }
    button.disabled = false;
}

// Data Management (localStorage)
class AuthManager {
    constructor() {
        this.usersKey = 'auth_users';
        this.currentUserKey = 'auth_current_user';
    }

    // Save users array to localStorage
    saveUsers(users) {
        try {
            localStorage.setItem(this.usersKey, JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Error saving users:', error);
            return false;
        }
    }

    // Load users array from localStorage
    loadUsers() {
        try {
            const users = localStorage.getItem(this.usersKey);
            return users ? JSON.parse(users) : [];
        } catch (error) {
            console.error('Error loading users:', error);
            return [];
        }
    }

    // Save current user
    saveCurrentUser(user) {
        try {
            localStorage.setItem(this.currentUserKey, JSON.stringify(user));
            return true;
        } catch (error) {
            console.error('Error saving current user:', error);
            return false;
        }
    }

    // Load current user
    loadCurrentUser() {
        try {
            const user = localStorage.getItem(this.currentUserKey);
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error loading current user:', error);
            return null;
        }
    }

    // Clear current user (logout)
    logout() {
        try {
            localStorage.removeItem(this.currentUserKey);
            return true;
        } catch (error) {
            console.error('Error during logout:', error);
            return false;
        }
    }

    // Register new user
    registerUser(username, email, password) {
        const users = this.loadUsers();

        // Check if user already exists
        if (users.find(user => user.username === username || user.email === email)) {
            return { success: false, message: 'Username or email already exists' };
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password: password, // In real app, this would be hashed
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        this.saveUsers(users);

        return { success: true, user: newUser };
    }

    // Authenticate user
    loginUser(usernameOrEmail, password) {
        const users = this.loadUsers();
        const user = users.find(user =>
            (user.username === usernameOrEmail.trim() || user.email === usernameOrEmail.trim().toLowerCase()) &&
            user.password === password
        );

        if (user) {
            this.saveCurrentUser(user);
            return { success: true, user };
        }

        return { success: false, message: 'Invalid username/email or password' };
    }

    // Reset password
    resetPassword(email, newPassword) {
        const users = this.loadUsers();
        const userIndex = users.findIndex(user => user.email === email.trim().toLowerCase());

        if (userIndex === -1) {
            return { success: false, message: 'Email not found' };
        }

        users[userIndex].password = newPassword;
        this.saveUsers(users);

        return { success: true };
    }

    // Update user profile
    updateProfile(userId, updates) {
        const users = this.loadUsers();
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return { success: false, message: 'User not found' };
        }

        // Update user data
        Object.keys(updates).forEach(key => {
            if (key !== 'id' && key !== 'createdAt') {
                users[userIndex][key] = updates[key];
            }
        });

        this.saveUsers(users);
        this.saveCurrentUser(users[userIndex]);

        return { success: true, user: users[userIndex] };
    }
}

// Form Validation
class FormValidator {
    // Validate registration form
    validateRegistration(formData) {
        const errors = [];

        // Username validation
        if (!formData.username || formData.username.trim().length < 3) {
            errors.push('Username must be at least 3 characters long');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email.trim())) {
            errors.push('Please enter a valid email address');
        }

        // Password validation
        if (!formData.password || formData.password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }

        // Confirm password
        if (formData.password !== formData.confirmPassword) {
            errors.push('Passwords do not match');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // Validate login form
    validateLogin(formData) {
        const errors = [];

        if (!formData.usernameOrEmail || formData.usernameOrEmail.trim().length === 0) {
            errors.push('Please enter username or email');
        }

        if (!formData.password || formData.password.length === 0) {
            errors.push('Please enter password');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // Validate password reset form
    validatePasswordReset(formData) {
        const errors = [];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email.trim())) {
            errors.push('Please enter a valid email address');
        }

        if (!formData.newPassword || formData.newPassword.length < 6) {
            errors.push('New password must be at least 6 characters long');
        }

        if (formData.newPassword !== formData.confirmPassword) {
            errors.push('New passwords do not match');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // Validate profile update form
    validateProfileUpdate(formData, currentUser) {
        const errors = [];

        // Username validation
        if (!formData.username || formData.username.trim().length < 3) {
            errors.push('Username must be at least 3 characters long');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email.trim())) {
            errors.push('Please enter a valid email address');
        }

        // Current password validation (required for security)
        if (!formData.currentPassword) {
            errors.push('Current password is required to make changes');
        } else if (formData.currentPassword !== currentUser.password) {
            errors.push('Current password is incorrect');
        }

        // New password validation (optional)
        if (formData.newPassword) {
            if (formData.newPassword.length < 6) {
                errors.push('New password must be at least 6 characters long');
            }
            if (formData.newPassword !== formData.confirmPassword) {
                errors.push('New passwords do not match');
            }
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

// Event Handlers
function handleNavigation(e) {
    const sectionName = e.target.id.replace('nav-', '');
    showSection(sectionName);
}

function handleFormSwitch(e) {
    e.preventDefault();
    const targetSection = e.target.id.replace('switch-to-', '').replace('-from-reset', '');
    showSection(targetSection);
}

function handleRegistration(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const formData = new FormData(e.target);

    showSpinner(button);

    // Simulate network delay
    setTimeout(() => {
        const validation = validator.validateRegistration({
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        });

        if (!validation.isValid) {
            hideSpinner(button);
            showMessage(validation.errors.join('<br>'), 'error');
            return;
        }

        const result = authManager.registerUser(
            formData.get('username'),
            formData.get('email'),
            formData.get('password')
        );

        hideSpinner(button);

        if (result.success) {
            showMessage('Account created successfully! Please login.', 'success');
            e.target.reset();
            showSection('login');
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
}

function handleLogin(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const formData = new FormData(e.target);

    showSpinner(button);

    // Simulate network delay
    setTimeout(() => {
        const validation = validator.validateLogin({
            usernameOrEmail: formData.get('usernameOrEmail'),
            password: formData.get('password')
        });

        if (!validation.isValid) {
            hideSpinner(button);
            showMessage(validation.errors.join('<br>'), 'error');
            return;
        }

        const result = authManager.loginUser(
            formData.get('usernameOrEmail'),
            formData.get('password')
        );

        hideSpinner(button);

        if (result.success) {
            showMessage(`Welcome back, ${result.user.username}!`, 'success');
            document.getElementById('user-display-name').textContent = result.user.username;
            navButtons.profile.classList.remove('hidden');
            showSection('dashboard');
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
}

function handlePasswordReset(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const formData = new FormData(e.target);

    showSpinner(button);

    // Simulate network delay
    setTimeout(() => {
        const validation = validator.validatePasswordReset({
            email: formData.get('email'),
            newPassword: formData.get('newPassword'),
            confirmPassword: formData.get('confirmPassword')
        });

        if (!validation.isValid) {
            hideSpinner(button);
            showMessage(validation.errors.join('<br>'), 'error');
            return;
        }

        const result = authManager.resetPassword(
            formData.get('email'),
            formData.get('newPassword')
        );

        hideSpinner(button);

        if (result.success) {
            showMessage('Password reset successfully! Please login with your new password.', 'success');
            e.target.reset();
            showSection('login');
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
}

function handleProfileUpdate(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const formData = new FormData(e.target);
    const currentUser = authManager.loadCurrentUser();

    if (!currentUser) {
        showMessage('Please login first', 'error');
        return;
    }

    showSpinner(button);

    // Simulate network delay
    setTimeout(() => {
        const validation = validator.validateProfileUpdate({
            username: formData.get('username'),
            email: formData.get('email'),
            currentPassword: formData.get('currentPassword'),
            newPassword: formData.get('newPassword'),
            confirmPassword: formData.get('confirmPassword')
        }, currentUser);

        if (!validation.isValid) {
            hideSpinner(button);
            showMessage(validation.errors.join('<br>'), 'error');
            return;
        }

        const updates = {
            username: formData.get('username').trim(),
            email: formData.get('email').trim().toLowerCase()
        };

        if (formData.get('newPassword')) {
            updates.password = formData.get('newPassword');
        }

        const result = authManager.updateProfile(currentUser.id, updates);

        hideSpinner(button);

        if (result.success) {
            showMessage('Profile updated successfully!', 'success');
            document.getElementById('user-display-name').textContent = result.user.username;
            showSection('dashboard');
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
}

function handleLogout() {
    authManager.logout();
    showMessage('Logged out successfully', 'success');
    navButtons.profile.classList.add('hidden');
    showSection('login');
}

// Global instances
const authManager = new AuthManager();
const validator = new FormValidator();

// Initialization
function init() {
    // Navigation event listeners
    Object.values(navButtons).forEach(btn => {
        if (btn) btn.addEventListener('click', handleNavigation);
    });

    // Form switch event listeners
    document.querySelectorAll('.link-btn').forEach(btn => {
        btn.addEventListener('click', handleFormSwitch);
    });

    // Form submission event listeners
    forms.register.addEventListener('submit', handleRegistration);
    forms.login.addEventListener('submit', handleLogin);
    forms.reset.addEventListener('submit', handlePasswordReset);
    forms.profile.addEventListener('submit', handleProfileUpdate);

    // Other button event listeners
    document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
        const currentUser = authManager.loadCurrentUser();
        if (currentUser) {
            // Pre-fill profile form
            document.getElementById('profile-username').value = currentUser.username;
            document.getElementById('profile-email').value = currentUser.email;
        }
        showSection('profile');
    });
    document.getElementById('cancel-profile-edit')?.addEventListener('click', () => showSection('dashboard'));
    document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

    // Check if user is already logged in
    const currentUser = authManager.loadCurrentUser();
    if (currentUser) {
        showSection('dashboard');
        document.getElementById('user-display-name').textContent = currentUser.username;
        navButtons.profile.classList.remove('hidden');
    } else {
        showSection('login');
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);