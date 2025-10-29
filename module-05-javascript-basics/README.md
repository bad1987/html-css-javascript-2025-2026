# Module 5 : Notions de Base JavaScript

## Aperçu
Bienvenue dans le monde de la programmation ! Ce module vous introduit à JavaScript, le langage qui rend les pages web interactives. Vous apprendrez les concepts fondamentaux de la programmation tout en les appliquant au web.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Comprendre ce qu'est JavaScript et pourquoi il est important
- Écrire et exécuter du code JavaScript de base
- Utiliser des variables, types de données et opérateurs
- Créer des fonctions simples
- Manipuler le DOM pour changer le contenu des pages
- Ajouter de l'interactivité de base aux pages web

## Prérequis
- Modules 1-4 : HTML et CSS solides
- Aucun expérience en programmation requise

## Matériaux Nécessaires
- Éditeur VS Code avec extension Live Server
- Navigateur avec console de développement (F12)
- Fichiers HTML/CSS des modules précédents

## Structure de Session
- Session 1 : Introduction à JavaScript (30 min)
- Session 2 : Variables et Types de Données (30 min)
- Activité Pratique : Premier Script Interactif (1 heure)

## Théorie : Qu'est-ce que JavaScript ?

JavaScript est un langage de programmation qui :
- **Rend les pages interactives** : Boutons, formulaires, animations
- **Traite les données** : Calculs, validation, logique
- **Communique avec les serveurs** : Charge du contenu dynamique
- **S'exécute dans le navigateur** : Pas besoin d'installation spéciale

### Comment Ajouter JavaScript
Trois méthodes principales :

1. **Inline** (dans les balises HTML) :
```html
<button onclick="alert('Bonjour !')">Cliquez-moi</button>
```

2. **Interne** (dans `<script>` tags) :
```html
<script>
    console.log("Bonjour depuis JavaScript !");
</script>
```

3. **Externe** (fichier séparé - recommandé) :
```html
<script src="script.js"></script>
```

## Activité Pratique : Votre Premier Script

### Étape 1 : Configurer JavaScript
1. Créez un fichier `script.js` dans votre dossier de projet
2. Liez-le dans votre HTML : `<script src="script.js"></script>`
3. Ouvrez la console du navigateur (F12) pour voir les messages

### Étape 2 : Variables et Types de Données

```javascript
// Variables : stockent des informations
let nom = "Alice";           // String (texte)
let age = 25;               // Number
let estEtudiant = true;     // Boolean (vrai/faux)
let notes = [85, 92, 78];   // Array (liste)
let personne = {            // Object
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

// Constantes (ne changent pas)
const PI = 3.14159;
const JOURS_SEMAINE = 7;
```

### Étape 3 : Opérateurs et Expressions

```javascript
// Mathématiques
let somme = 10 + 5;      // 15
let difference = 10 - 3; // 7
let produit = 4 * 3;     // 12
let quotient = 15 / 3;   // 5
let reste = 17 % 3;      // 2 (modulo)

// Comparaisons
let estEgal = (5 === 5);     // true
let estPlusGrand = (10 > 5); // true
let estDifferent = (5 !== 3); // true

// Logiques
let et = true && false;    // false (ET)
let ou = true || false;    // true (OU)
let non = !true;           // false (NON)
```

### Étape 4 : Conditions (if/else)

```javascript
let heure = 14;

if (heure < 12) {
    console.log("Bonjour !");
} else if (heure < 18) {
    console.log("Bon après-midi !");
} else {
    console.log("Bonsoir !");
}

// Condition ternaire (court)
let message = (heure >= 12) ? "Après-midi" : "Matin";
```

### Étape 5 : Fonctions

```javascript
// Déclaration de fonction
function saluer(nom) {
    return "Bonjour, " + nom + " !";
}

// Appel de fonction
let message = saluer("Alice");
console.log(message); // "Bonjour, Alice !"

// Fonction fléchée (moderne)
const multiplier = (a, b) => a * b;
console.log(multiplier(4, 3)); // 12
```

## Projet : Calculateur Simple

Créons une calculatrice interactive :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculateur Simple</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Calculateur Simple</h1>
        
        <div class="calculator">
            <input type="number" id="nombre1" placeholder="Premier nombre">
            <select id="operation">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">×</option>
                <option value="/">÷</option>
            </select>
            <input type="number" id="nombre2" placeholder="Deuxième nombre">
            <button id="calculer">Calculer</button>
            
            <div id="resultat" class="resultat">
                Résultat : <span id="valeur-resultat">-</span>
            </div>
        </div>
        
        <div class="historique">
            <h2>Historique</h2>
            <ul id="liste-historique"></ul>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
// Éléments DOM
const nombre1Input = document.getElementById('nombre1');
const nombre2Input = document.getElementById('nombre2');
const operationSelect = document.getElementById('operation');
const calculerBtn = document.getElementById('calculer');
const resultatSpan = document.getElementById('valeur-resultat');
const historiqueList = document.getElementById('liste-historique');

// Historique des calculs
let historique = [];

// Fonction de calcul
function calculer(a, b, operation) {
    let resultat;
    
    switch(operation) {
        case '+':
            resultat = a + b;
            break;
        case '-':
            resultat = a - b;
            break;
        case '*':
            resultat = a * b;
            break;
        case '/':
            if (b === 0) {
                return "Erreur : Division par zéro !";
            }
            resultat = a / b;
            break;
        default:
            return "Opération inconnue";
    }
    
    return resultat;
}

// Fonction d'affichage du résultat
function afficherResultat(resultat) {
    resultatSpan.textContent = resultat;
}

// Fonction d'ajout à l'historique
function ajouterHistorique(calc) {
    historique.unshift(calc);
    if (historique.length > 5) {
        historique.pop(); // Garde seulement les 5 derniers
    }
    mettreAJourHistorique();
}

// Fonction de mise à jour de l'affichage historique
function mettreAJourHistorique() {
    historiqueList.innerHTML = '';
    historique.forEach(calc => {
        const li = document.createElement('li');
        li.textContent = calc;
        historiqueList.appendChild(li);
    });
}

// Gestionnaire d'événement pour le bouton
calculerBtn.addEventListener('click', function() {
    const nombre1 = parseFloat(nombre1Input.value);
    const nombre2 = parseFloat(nombre2Input.value);
    const operation = operationSelect.value;
    
    // Validation
    if (isNaN(nombre1) || isNaN(nombre2)) {
        afficherResultat("Veuillez entrer des nombres valides");
        return;
    }
    
    // Calcul
    const resultat = calculer(nombre1, nombre2, operation);
    
    // Affichage
    afficherResultat(resultat);
    
    // Historique
    const calcText = `${nombre1} ${operation} ${nombre2} = ${resultat}`;
    ajouterHistorique(calcText);
});

// Effacer les champs après calcul
calculerBtn.addEventListener('click', function() {
    nombre1Input.value = '';
    nombre2Input.value = '';
    nombre1Input.focus();
});
```

```css
/* style.css */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.calculator {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

input, select {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.resultat {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 5px;
    margin-top: 10px;
}

.historique {
    margin-top: 30px;
}

.historique h2 {
    color: #666;
    margin-bottom: 15px;
}

#liste-historique {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    list-style-type: none;
}

#liste-historique li {
    padding: 5px 0;
    border-bottom: 1px solid #eee;
}

#liste-historique li:last-child {
    border-bottom: none;
}
```

## Évaluation
1. Créez un script qui demande le nom de l'utilisateur et affiche un message personnalisé avec gestion d'erreurs
2. Construisez un convertisseur de température (Celsius ↔ Fahrenheit) avec validation des entrées
3. Ajoutez validation complète aux champs de saisie avec messages d'erreur
4. Implémentez au moins 3 fonctions personnalisées avec commentaires
5. Gérez les événements utilisateur de manière appropriée

## Défi Supplémentaire
Ajoutez un chronomètre simple avec boutons Start/Stop/Reset :

```javascript
let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById('timer').textContent = '0';
}
```

## Prochaines Étapes
Félicitations pour vos premiers pas en JavaScript ! Au prochain module, nous approfondirons les fonctions et les objets pour écrire du code plus organisé et puissant.

## Ressources
- [MDN JavaScript Guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [JavaScript.info Tutoriel](https://javascript.info/)
- [FreeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)