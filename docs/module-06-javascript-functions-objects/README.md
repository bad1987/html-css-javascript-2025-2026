# Module 6 : Fonctions et Objets JavaScript

## Aperçu
Maintenant que vous maîtrisez les bases de JavaScript, apprenons à organiser votre code avec des fonctions et des objets. Ces concepts vous permettront d'écrire du code plus modulaire, réutilisable et maintenable.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Créer et utiliser des fonctions avancées
- Travailler avec des objets et leurs propriétés
- Comprendre les tableaux et leurs méthodes
- Utiliser des boucles pour automatiser les tâches
- Gérer les erreurs avec try/catch
- Organiser le code en modules logiques

## Prérequis
- Module 5 : Notions de base JavaScript
- Compréhension des variables et conditions

## Matériaux Nécessaires
- Éditeur VS Code avec console JavaScript
- Navigateur avec outils de développement

## Structure de Session
- Session 1 : Fonctions Avancées (30 min)
- Session 2 : Objets et Tableaux (30 min)
- Activité Pratique : Application de Gestion de Tâches (1 heure)

## Théorie : Fonctions en Profondeur

### Portée des Variables (Scope)
```javascript
let globale = "Je suis globale"; // Accessible partout

function testScope() {
    let locale = "Je suis locale"; // Seulement dans la fonction
    console.log(globale); // ✓ Accessible
    console.log(locale);  // ✓ Accessible
}

console.log(globale); // ✓ Accessible
console.log(locale);  // ✗ Erreur : non définie
```

### Fonctions comme Paramètres
```javascript
function appliquerOperation(a, b, operation) {
    return operation(a, b);
}

function addition(a, b) { return a + b; }
function multiplication(a, b) { return a * b; }

console.log(appliquerOperation(5, 3, addition));        // 8
console.log(appliquerOperation(5, 3, multiplication)); // 15
```

### Fermetures (Closures)
```javascript
function creerCompteur() {
    let compteur = 0;
    
    return function() {
        compteur++;
        return compteur;
    };
}

const compteur1 = creerCompteur();
console.log(compteur1()); // 1
console.log(compteur1()); // 2

const compteur2 = creerCompteur();
console.log(compteur2()); // 1 (nouveau compteur)
```

## Activité Pratique : Tableaux et Méthodes

### Méthodes de Tableaux Essentielles
```javascript
const fruits = ['pomme', 'banane', 'orange'];

// Ajouter/Supprimer
fruits.push('kiwi');        // ['pomme', 'banane', 'orange', 'kiwi']
fruits.pop();               // ['pomme', 'banane', 'orange']
fruits.unshift('fraise');   // ['fraise', 'pomme', 'banane', 'orange']
fruits.shift();             // ['pomme', 'banane', 'orange']

// Rechercher
console.log(fruits.indexOf('banane')); // 1
console.log(fruits.includes('pomme')); // true

// Transformer
const majuscules = fruits.map(fruit => fruit.toUpperCase());
console.log(majuscules); // ['POMME', 'BANANE', 'ORANGE']

const longs = fruits.filter(fruit => fruit.length > 5);
console.log(longs); // ['banane', 'orange']

const tousLongs = fruits.every(fruit => fruit.length > 3);
console.log(tousLongs); // false

const unLong = fruits.some(fruit => fruit.length > 5);
console.log(unLong); // true
```

## Théorie : Objets JavaScript

### Création et Manipulation d'Objets
```javascript
// Objet littéral
const personne = {
    nom: 'Alice',
    age: 25,
    ville: 'Paris',
    hobbies: ['lecture', 'sport'],
    
    // Méthode
    sePresenter: function() {
        return `Je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
    }
};

// Accès aux propriétés
console.log(personne.nom);        // Alice
console.log(personne['age']);     // 25

// Modification
personne.age = 26;
personne.profession = 'Développeuse';

// Méthode
console.log(personne.sePresenter());
```

### Constructeurs et Classes
```javascript
// Fonction constructeur
function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    
    this.demarrer = function() {
        return `${this.marque} ${this.modele} démarre !`;
    };
}

const maVoiture = new Voiture('Toyota', 'Corolla', 2020);
console.log(maVoiture.demarrer());

// Classe moderne (ES6+)
class Animal {
    constructor(nom, espece) {
        this.nom = nom;
        this.espece = espece;
    }
    
    crier() {
        return `${this.nom} fait un bruit !`;
    }
}

class Chien extends Animal {
    crier() {
        return `${this.nom} aboie !`;
    }
}

const monChien = new Chien('Rex', 'Chien');
console.log(monChien.crier()); // Rex aboie !
```

## Projet : Application de Gestion de Tâches

Créons une application complète de gestion de tâches :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📝 Gestionnaire de Tâches</h1>
        
        <form id="task-form" class="task-form">
            <input type="text" id="task-input" placeholder="Nouvelle tâche..." required>
            <select id="priority-select">
                <option value="basse">Basse</option>
                <option value="moyenne" selected>Moyenne</option>
                <option value="haute">Haute</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">Toutes</button>
            <button class="filter-btn" data-filter="pending">En attente</button>
            <button class="filter-btn" data-filter="completed">Terminées</button>
        </div>
        
        <ul id="task-list" class="task-list">
            <!-- Les tâches seront ajoutées ici -->
        </ul>
        
        <div class="stats">
            <p>Total : <span id="total-tasks">0</span></p>
            <p>Terminées : <span id="completed-tasks">0</span></p>
            <p>Taux : <span id="completion-rate">0%</span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js

// Classe Tâche
class Task {
    constructor(id, text, priority = 'moyenne') {
        this.id = id;
        this.text = text;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date();
    }
    
    toggleComplete() {
        this.completed = !this.completed;
    }
    
    toString() {
        return `${this.text} (${this.priority}) - ${this.completed ? '✓' : '○'}`;
    }
}

// Gestionnaire de tâches
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    
    addTask(text, priority) {
        const task = new Task(this.nextId++, text, priority);
        this.tasks.push(task);
        return task;
    }
    
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleComplete();
        }
    }
    
    getTasks(filter = 'all') {
        switch(filter) {
            case 'pending':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return { total, completed, rate };
    }
}

// Interface utilisateur
class TaskUI {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.prioritySelect = document.getElementById('priority-select');
        this.taskList = document.getElementById('task-list');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';
        
        this.setupEventListeners();
        this.render();
    }
    
    setupEventListeners() {
        // Ajouter une tâche
        this.taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = this.taskInput.value.trim();
            const priority = this.prioritySelect.value;
            
            if (text) {
                this.taskManager.addTask(text, priority);
                this.taskInput.value = '';
                this.render();
            }
        });
        
        // Filtres
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.currentFilter = button.dataset.filter;
                this.updateFilterButtons();
                this.render();
            });
        });
        
        // Délégation d'événements pour les tâches
        this.taskList.addEventListener('click', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (!taskItem) return;
            
            const taskId = parseInt(taskItem.dataset.id);
            
            if (e.target.classList.contains('delete-btn')) {
                this.taskManager.removeTask(taskId);
                this.render();
            } else if (e.target.classList.contains('toggle-btn')) {
                this.taskManager.toggleTask(taskId);
                this.render();
            }
        });
    }
    
    updateFilterButtons() {
        this.filterButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.filter === this.currentFilter);
        });
    }
    
    render() {
        const tasks = this.taskManager.getTasks(this.currentFilter);
        this.taskList.innerHTML = '';
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
            li.dataset.id = task.id;
            
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <span class="task-priority">${task.priority}</span>
                <button class="toggle-btn">${task.completed ? '↶' : '✓'}</button>
                <button class="delete-btn">🗑️</button>
            `;
            
            this.taskList.appendChild(li);
        });
        
        this.updateStats();
    }
    
    updateStats() {
        const stats = this.taskManager.getStats();
        document.getElementById('total-tasks').textContent = stats.total;
        document.getElementById('completed-tasks').textContent = stats.completed;
        document.getElementById('completion-rate').textContent = `${stats.rate}%`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    new TaskUI(taskManager);
});
```

```css
/* style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.2em;
}

.task-form {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

input, select, button {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
}

#task-input {
    flex: 1;
    min-width: 200px;
    border: 2px solid #e1e5e9;
}

select {
    border: 2px solid #e1e5e9;
}

button[type="submit"] {
    background: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
}

button[type="submit"]:hover {
    background: #45a049;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-btn {
    padding: 8px 16px;
    background: #f1f3f4;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn.active {
    background: #2196F3;
    color: white;
}

.task-list {
    list-style: none;
    margin-bottom: 30px;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.3s;
    border-left: 4px solid #ddd;
}

.task-item.completed {
    background: #e8f5e8;
    text-decoration: line-through;
    opacity: 0.7;
}

.priority-haute { border-left-color: #f44336; }
.priority-moyenne { border-left-color: #ff9800; }
.priority-basse { border-left-color: #4caf50; }

.task-text {
    flex: 1;
    font-weight: 500;
}

.task-priority {
    font-size: 0.8em;
    padding: 2px 8px;
    background: #e1e5e9;
    border-radius: 12px;
    text-transform: uppercase;
}

.toggle-btn, .delete-btn {
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.toggle-btn {
    background: #2196F3;
    color: white;
}

.toggle-btn:hover {
    background: #1976D2;
}

.delete-btn {
    background: #f44336;
    color: white;
}

.delete-btn:hover {
    background: #d32f2f;
}

.stats {
    display: flex;
    justify-content: space-around;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.stats p {
    font-weight: bold;
    color: #555;
}

.stats span {
    color: #2196F3;
    font-size: 1.2em;
}
```

## Évaluation
1. Créez une classe `Livre` avec propriétés titre, auteur, année
2. Implémentez des méthodes pour emprunter et retourner des livres
3. Utilisez des tableaux pour gérer une collection de livres
4. Ajoutez une fonction de recherche par titre ou auteur

## Défi Supplémentaire
Implémentez la persistance des données avec localStorage :

```javascript
// Sauvegarder
localStorage.setItem('tasks', JSON.stringify(this.tasks));

// Charger
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    this.tasks = JSON.parse(savedTasks);
}
```

## Prochaines Étapes
Excellent travail avec les fonctions et objets ! Au prochain module, nous explorerons JavaScript avancé avec les API du navigateur et les requêtes asynchrones.

## Ressources
- [MDN : Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)
- [JavaScript : Objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets)
- [Eloquent JavaScript : Chapitre 3-6](https://eloquentjavascript.net/)