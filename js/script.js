// User Authentication System - JavaScript
// This file will contain all the interactive functionality

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

    // TODO: LESSON 1 - Saving Users to localStorage
    /*
    BEGINNER GUIDE: Saving Data to Browser Storage

    localStorage is like a small database in the user's browser.
    It saves data even after closing the browser.

    Step-by-step to implement saveUsers(users):

    1. localStorage can only store STRINGS, not objects or arrays
    2. Use JSON.stringify() to convert your users array to a string
    3. Use localStorage.setItem(key, value) to save
    4. Always wrap in try/catch because localStorage can fail

    Example:
    try {
        const usersString = JSON.stringify(users);
        localStorage.setItem(this.usersKey, usersString);
        return true; // Success
    } catch (error) {
        console.error('Error saving users:', error);
        return false; // Failed
    }
    */
    saveUsers(users) {
        // TODO: Write your code here following the guide above
    }

    // TODO: LESSON 2 - Loading Users from localStorage
    /*
    BEGINNER GUIDE: Loading Data from Browser Storage

    Step-by-step to implement loadUsers():

    1. Use localStorage.getItem(key) to get the stored string
    2. If data exists, convert back to array with JSON.parse()
    3. If no data exists, return empty array []
    4. Wrap in try/catch for safety

    Example:
    try {
        const usersString = localStorage.getItem(this.usersKey);
        if (usersString) {
            return JSON.parse(usersString); // Convert string back to array
        } else {
            return []; // No users saved yet
        }
    } catch (error) {
        console.error('Error loading users:', error);
        return []; // Return empty array on error
    }
    */
    loadUsers() {
        // TODO: Write your code here following the guide above
    }

    // TODO: LESSON 3 - Saving Current User Session
    /*
    BEGINNER GUIDE: Saving Single User Object

    Similar to saveUsers, but for one user object instead of array.

    Step-by-step:
    1. Convert user object to string with JSON.stringify()
    2. Save with localStorage.setItem(this.currentUserKey, userString)
    3. Return true/false based on success

    This keeps track of who is logged in between page refreshes.
    */
    saveCurrentUser(user) {
        // TODO: Write your code here
    }

    // TODO: LESSON 4 - Loading Current User Session
    /*
    BEGINNER GUIDE: Loading Single User Object

    Step-by-step:
    1. Get string from localStorage.getItem(this.currentUserKey)
    2. If exists, parse with JSON.parse()
    3. If not exists, return null
    4. Wrap in try/catch

    This checks if someone is already logged in when page loads.
    */
    loadCurrentUser() {
        // TODO: Write your code here
    }

    // TODO: LESSON 5 - Logging Out User
    /*
    BEGINNER GUIDE: Clearing User Session

    Step-by-step:
    1. Remove current user from localStorage
    2. Use localStorage.removeItem(this.currentUserKey)
    3. Return true/false

    This "logs out" the user by forgetting who they are.
    */
    logout() {
        // TODO: Write your code here
    }

    // TODO: LESSON 6 - User Registration Logic
    /*
    BEGINNER GUIDE: Creating New User Accounts

    Step-by-step to implement registerUser(username, email, password):

    1. Load existing users with this.loadUsers()
    2. Check if username or email already exists:
       - Use array.find() to search users
       - Check: user.username === username OR user.email === email
    3. If user exists, return { success: false, message: 'Username or email already exists' }
    4. If user doesn't exist, create new user object:
       {
           id: Date.now().toString(), // Unique ID
           username: username.trim(),
           email: email.trim().toLowerCase(),
           password: password, // NOTE: In real app, hash this!
           createdAt: new Date().toISOString()
       }
    5. Add new user to users array: users.push(newUser)
    6. Save users array with this.saveUsers(users)
    7. Return { success: true, user: newUser }

    Example check for duplicates:
    const existingUser = users.find(user =>
        user.username === username.trim() ||
        user.email === email.trim().toLowerCase()
    );
    */
    registerUser(username, email, password) {
        // TODO: Write your code here following the guide above
    }

    // TODO: LESSON 7 - User Login Logic
    /*
    BEGINNER GUIDE: Authenticating User Login

    Step-by-step to implement loginUser(usernameOrEmail, password):

    1. Load users array with this.loadUsers()
    2. Find user that matches credentials:
       - Use array.find() method
       - Check if user.username OR user.email matches usernameOrEmail
       - AND user.password matches password
    3. If user found:
       - Save as current user: this.saveCurrentUser(user)
       - Return { success: true, user }
    4. If user not found:
       - Return { success: false, message: 'Invalid username/email or password' }

    Example find:
    const user = users.find(user =>
        (user.username === usernameOrEmail.trim() ||
         user.email === usernameOrEmail.trim().toLowerCase()) &&
        user.password === password
    );
    */
    loginUser(usernameOrEmail, password) {
        // TODO: Write your code here following the guide above
    }

    // TODO: LESSON 8 - Password Reset Logic
    /*
    BEGINNER GUIDE: Resetting User Passwords

    Step-by-step to implement resetPassword(email, newPassword):

    1. Load users array with this.loadUsers()
    2. Find user by email using array.findIndex():
       - Returns the INDEX of the user, not the user object
       - Check: user.email === email.trim().toLowerCase()
    3. If user not found (index === -1):
       - Return { success: false, message: 'Email not found' }
    4. If user found:
       - Update password: users[userIndex].password = newPassword
       - Save users: this.saveUsers(users)
       - Return { success: true }

    Note: findIndex() gives position in array, find() gives the object.
    */
    resetPassword(email, newPassword) {
        // TODO: Write your code here following the guide above
    }

    // TODO: LESSON 9 - Profile Update Logic
    /*
    BEGINNER GUIDE: Updating User Profile Information

    Step-by-step to implement updateProfile(userId, updates):

    1. Load users array with this.loadUsers()
    2. Find user by ID using array.findIndex():
       - Check: user.id === userId
    3. If user not found:
       - Return { success: false, message: 'User not found' }
    4. If user found:
       - Update each property in updates object
       - Skip 'id' and 'createdAt' (don't change these)
       - Example: users[userIndex][key] = updates[key]
    5. Save users array: this.saveUsers(users)
    6. Update current user session: this.saveCurrentUser(users[userIndex])
    7. Return { success: true, user: users[userIndex] }

    The updates object contains only the fields to change.
    */
    updateProfile(userId, updates) {
        // TODO: Write your code here following the guide above
    }
}

// Form Validation
class FormValidator {
    // TODO: LESSON 10 - Registration Form Validation
    /*
    BEGINNER GUIDE: Validating Registration Forms

    Step-by-step to implement validateRegistration(formData):

    1. Create empty errors array: const errors = []
    2. Check username:
       - Must exist and be at least 3 characters: formData.username && formData.username.trim().length >= 3
       - If invalid, add to errors: errors.push('Username must be at least 3 characters long')
    3. Check email:
       - Must exist and match email pattern
       - Use regex: const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       - If invalid, add: 'Please enter a valid email address'
    4. Check password:
       - Must be at least 6 characters: formData.password && formData.password.length >= 6
       - If invalid, add: 'Password must be at least 6 characters long'
    5. Check confirm password:
       - Must match password: formData.password === formData.confirmPassword
       - If invalid, add: 'Passwords do not match'
    6. Return object: { isValid: errors.length === 0, errors }

    Example:
    if (!formData.username || formData.username.trim().length < 3) {
        errors.push('Username must be at least 3 characters long');
    }
    */
    validateRegistration(formData) {
        // TODO: Write your code here following the guide above
        return { isValid: true, errors: [] };
    }

    // TODO: LESSON 11 - Login Form Validation
    /*
    BEGINNER GUIDE: Validating Login Forms

    Step-by-step (simpler than registration):

    1. Create errors array
    2. Check usernameOrEmail exists and not empty
    3. Check password exists and not empty
    4. Return validation object

    This is basic validation - actual authentication happens in AuthManager.
    */
    validateLogin(formData) {
        // TODO: Write your code here following the guide above
        return { isValid: true, errors: [] };
    }

    // TODO: LESSON 12 - Password Reset Validation
    /*
    BEGINNER GUIDE: Validating Password Reset Forms

    Similar to registration but simpler:
    1. Validate email format
    2. Validate new password (min 6 chars)
    3. Check passwords match
    */
    validatePasswordReset(formData) {
        // TODO: Write your code here following the guide above
        return { isValid: true, errors: [] };
    }

    // TODO: LESSON 13 - Profile Update Validation
    /*
    BEGINNER GUIDE: Validating Profile Updates

    More complex - requires current user for password check:

    1. Validate username (min 3 chars)
    2. Validate email format
    3. Check current password matches user's password
    4. If new password provided, validate it (min 6) and confirm match
    5. Return validation object

    The currentUser parameter contains the logged-in user's data.
    */
    validateProfileUpdate(formData, currentUser) {
        // TODO: Write your code here following the guide above
        return { isValid: true, errors: [] };
    }
}

// Global instances
const authManager = new AuthManager();
const validator = new FormValidator();

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

// TODO: LESSON 14 - Handling Registration Form Submission
/*
BEGINNER GUIDE: Processing Registration Forms

Step-by-step to implement handleRegistration(e):

1. Prevent default form submission: e.preventDefault()
2. Get submit button and show spinner: showSpinner(button)
3. Get form data: const formData = new FormData(e.target)
4. Extract values:
   - const username = formData.get('username')
   - const email = formData.get('email')
   - const password = formData.get('password')
   - const confirmPassword = formData.get('confirmPassword')
5. Validate form: const validation = validator.validateRegistration({...})
6. If invalid: hideSpinner, showMessage(validation.errors.join('<br>'), 'error'), return
7. If valid: register user with authManager.registerUser(...)
8. Handle result:
   - If success: showMessage, reset form, switch to login
   - If error: showMessage error
9. Always hide spinner at end

Use setTimeout to simulate network delay for realistic UX.
*/
function handleRegistration(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Write your code here following the guide above
    // Simulate async operation
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Registration functionality coming soon!', 'info');
    }, 2000);
}

// TODO: LESSON 15 - Handling Login Form Submission
/*
BEGINNER GUIDE: Processing Login Forms

Similar to registration but simpler:

1. Prevent default, show spinner
2. Get form data: usernameOrEmail and password
3. Validate: validator.validateLogin({...})
4. If invalid: show errors, hide spinner, return
5. If valid: authManager.loginUser(usernameOrEmail, password)
6. Handle result:
   - Success: showMessage, update UI (user name, show profile nav), switch to dashboard
   - Error: showMessage error
7. Hide spinner

For UI updates on success:
- document.getElementById('user-display-name').textContent = result.user.username
- navButtons.profile.classList.remove('hidden')
- showSection('dashboard')
*/
function handleLogin(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Write your code here following the guide above
    // Simulate async operation
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Login functionality coming soon!', 'info');
    }, 2000);
}

// TODO: LESSON 16 - Handling Password Reset
/*
BEGINNER GUIDE: Processing Password Reset Forms

Step-by-step:

1. Prevent default, show spinner
2. Get form data: email, newPassword, confirmPassword
3. Validate: validator.validatePasswordReset({...})
4. If invalid: show errors, hide spinner, return
5. If valid: authManager.resetPassword(email, newPassword)
6. Handle result:
   - Success: showMessage, reset form, switch to login
   - Error: showMessage error
7. Hide spinner

Note: In real app, this would send email. Here we directly reset.
*/
function handlePasswordReset(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Write your code here following the guide above
    // Simulate async operation
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Password reset functionality coming soon!', 'info');
    }, 2000);
}

// TODO: LESSON 17 - Handling Profile Updates
/*
BEGINNER GUIDE: Processing Profile Update Forms

Step-by-step:

1. Prevent default, show spinner
2. Get current user: const currentUser = authManager.loadCurrentUser()
3. Check if logged in: if (!currentUser) show error, return
4. Get form data: username, email, currentPassword, newPassword, confirmPassword
5. Validate: validator.validateProfileUpdate(formData, currentUser)
6. If invalid: show errors, hide spinner, return
7. Prepare updates object: { username, email } + newPassword if provided
8. Update profile: authManager.updateProfile(currentUser.id, updates)
9. Handle result:
   - Success: showMessage, update UI (user name), switch to dashboard
   - Error: showMessage error
10. Hide spinner

For UI update: document.getElementById('user-display-name').textContent = result.user.username
*/
function handleProfileUpdate(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Write your code here following the guide above
    // Simulate async operation
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Profile update functionality coming soon!', 'info');
    }, 2000);
}

// TODO: LESSON 18 - Handling User Logout
/*
BEGINNER GUIDE: Processing User Logout

Step-by-step:

1. Call authManager.logout() to clear session
2. Show success message
3. Update UI:
   - Hide profile navigation: navButtons.profile.classList.add('hidden')
   - Switch to login section: showSection('login')
4. No spinner needed for logout

This clears the current user and returns to login screen.
*/
function handleLogout() {
    // TODO: Write your code here following the guide above
    showMessage('Logout functionality coming soon!', 'info');
}

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
        showSection('login'); // Start with login for better UX
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);