// Task Manager - Complete JavaScript

// DOM Elements
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Task counter for unique IDs
let taskId = 0;

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    // Validation
    if (taskText === '') {
        showNotification('Please enter a task description!', 'error');
        return;
    }

    // Check for duplicate tasks
    const existingTasks = Array.from(taskList.children);
    const duplicate = existingTasks.some(li => {
        const text = li.querySelector('.task-text').textContent.toLowerCase();
        return text === taskText.toLowerCase();
    });

    if (duplicate) {
        showNotification('This task already exists!', 'warning');
        return;
    }

    // Create task element
    const li = createTaskElement(taskText, taskId++);

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    taskInput.focus();

    // Show success message
    showNotification('Task added successfully!', 'success');

    // Update task count
    updateTaskCount();
}

// Create task list item
function createTaskElement(text, id) {
    const li = document.createElement('li');
    li.dataset.id = id;

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = text;
    li.appendChild(taskSpan);

    // Action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => toggleComplete(li));
    actionsDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(li));
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(actionsDiv);

    return li;
}

// Toggle task completion
function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');

    const isCompleted = taskElement.classList.contains('completed');
    const message = isCompleted ? 'Task marked as complete!' : 'Task marked as incomplete!';
    showNotification(message, 'info');

    updateTaskCount();
}

// Delete task
function deleteTask(taskElement) {
    // Add fade out animation
    taskElement.style.animation = 'slideOut 0.3s ease-out forwards';

    setTimeout(() => {
        taskElement.remove();
        showNotification('Task deleted!', 'success');
        updateTaskCount();
    }, 300);
}

// Update task count display
function updateTaskCount() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('.completed').length;

    // Update header subtitle
    const headerP = document.querySelector('header p');
    if (totalTasks === 0) {
        headerP.textContent = 'Organize your tasks efficiently';
    } else {
        headerP.textContent = `${totalTasks} tasks total, ${completedTasks} completed`;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        animation: 'slideInFromRight 0.3s ease-out',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    });

    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to body
    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutToRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes slideOut {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(0.8); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Keyboard support
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}

// Initialize
function init() {
    // Event listeners
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', handleKeyPress);

    // Initial task count update
    updateTaskCount();

    // Focus input on load
    taskInput.focus();
}

// Start app
document.addEventListener('DOMContentLoaded', init);