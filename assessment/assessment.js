// Task Manager - JavaScript

// DOM Elements
const addBtn = document.getElementById('add-btn');
/*
    TODO: get the task input element from the DOM with the id of task-input
    name the variable taskInput
*/
// write your code here

/*
    TODO: get the task list element from the DOM with the id of task-list
    name the variable taskList
*/
// write your code here

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
    /*
        TODO: clear the task input element(the variable taskInput) using the value
        and set it to an empty string
    */
    // write your code here
    
    // Focus input
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
    /*
        TODO: set the class name of the task span(variable taskSpan) to 'task-text' using the className property
    */
    // write your code here

    // Set task text
    taskSpan.textContent = text;
    li.appendChild(taskSpan);

    // Action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    /*
        TODO: set the text content of the complete button(variable completeBtn) to 'Complete' using the textContent property
        instead of the innerHTML property
    */
    // write your code here
    
    // Add click event listener
    /*
        TODO: add a click event listener to the complete button(variable completeBtn) using the addEventListener method
        and pass () => toggleComplete(li) as the callback function (second value of the addEventListener method)
    */
    // write your code here

    // Add to actions
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
    /*
        TODO: set the text content of the notification to the message using the textContent property
        instead of the innerHTML property
    */
    // write your code here

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