// Gestionnaire de Tâches - JavaScript

// Éléments DOM
const addBtn = document.getElementById('add-btn');
/*
    À FAIRE : obtenez l'élément d'entrée de tâche du DOM avec l'id 'task-input'
    nommez la variable taskInput
*/
// écrivez votre code ici

/*
    À FAIRE : obtenez l'élément de liste de tâches du DOM avec l'id 'task-list'
    nommez la variable taskList
*/
// écrivez votre code ici

// Compteur de tâches pour IDs uniques
let taskId = 0;

// Fonction d'ajout de tâche
function addTask() {
    const taskText = taskInput.value.trim();

    // Validation
    if (taskText === '') {
        showNotification('Veuillez saisir une description de tâche !', 'error');
        return;
    }

    // Vérifier les tâches en double
    const existingTasks = Array.from(taskList.children);
    const duplicate = existingTasks.some(li => {
        const text = li.querySelector('.task-text').textContent.toLowerCase();
        return text === taskText.toLowerCase();
    });

    if (duplicate) {
        showNotification('Cette tâche existe déjà !', 'warning');
        return;
    }

    // Créer l'élément de tâche
    const li = createTaskElement(taskText, taskId++);

    // Ajouter à la liste
    taskList.appendChild(li);

    // Effacer l'entrée
    /*
        À FAIRE : effacez l'élément d'entrée de tâche (la variable taskInput) en utilisant value
        et définissez-le à une chaîne vide
    */
    // écrivez votre code ici

    // Focus sur l'entrée
    taskInput.focus();

    // Afficher le message de succès
    showNotification('Tâche ajoutée avec succès !', 'success');

    // Mettre à jour le compteur de tâches
    updateTaskCount();
}

// Créer l'élément de liste de tâches
function createTaskElement(text, id) {
    const li = document.createElement('li');
    li.dataset.id = id;

    // Texte de la tâche
    const taskSpan = document.createElement('span');
    /*
        À FAIRE : définissez le nom de classe de l'étendue de tâche (variable taskSpan) à 'task-text' en utilisant la propriété className
    */
    // écrivez votre code ici

    // Définir le texte de la tâche
    taskSpan.textContent = text;
    li.appendChild(taskSpan);

    // Boutons d'action
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    /*
        À FAIRE : définissez le contenu texte du bouton de terminaison (variable completeBtn) à 'Terminer' en utilisant la propriété textContent
        au lieu de la propriété innerHTML
    */
    // écrivez votre code ici

    // Ajouter l'écouteur d'événement de clic
    /*
        À FAIRE : ajoutez un écouteur d'événement de clic au bouton de terminaison (variable completeBtn) en utilisant la méthode addEventListener
        et passez () => toggleComplete(li) comme fonction de rappel (deuxième valeur de la méthode addEventListener)
    */
    // écrivez votre code ici

    // Ajouter aux actions
    actionsDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => deleteTask(li));
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(actionsDiv);

    return li;
}

// Basculer l'achèvement de la tâche
function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');

    const isCompleted = taskElement.classList.contains('completed');
    const message = isCompleted ? 'Tâche marquée comme terminée !' : 'Tâche marquée comme incomplète !';
    showNotification(message, 'info');

    updateTaskCount();
}

// Supprimer la tâche
function deleteTask(taskElement) {
    // Ajouter l'animation de fondu
    taskElement.style.animation = 'slideOut 0.3s ease-out forwards';

    setTimeout(() => {
        taskElement.remove();
        showNotification('Tâche supprimée !', 'success');
        updateTaskCount();
    }, 300);
}

// Mettre à jour l'affichage du compteur de tâches
function updateTaskCount() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('.completed').length;

    // Mettre à jour le sous-titre de l'en-tête
    const headerP = document.querySelector('header p');
    if (totalTasks === 0) {
        headerP.textContent = 'Organisez vos tâches efficacement';
    } else {
        headerP.textContent = `${totalTasks} tâches au total, ${completedTasks} terminées`;
    }
}

// Afficher la notification
function showNotification(message, type = 'info') {
    // Supprimer la notification existante
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    /*
        À FAIRE : définissez le contenu texte de la notification au message en utilisant la propriété textContent
        au lieu de la propriété innerHTML
    */
    // écrivez votre code ici

    // Styler la notification
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

    // Définir la couleur d'arrière-plan basée sur le type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    // Ajouter au corps
    document.body.appendChild(notification);

    // Supprimer automatiquement après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajouter les animations CSS pour les notifications
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

// Support du clavier
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}

// Initialiser
function init() {
    // Écouteurs d'événements
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', handleKeyPress);

    // Mise à jour initiale du compteur de tâches
    updateTaskCount();

    // Focus sur l'entrée au chargement
    taskInput.focus();
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', init);