# Exercices Maison - Module 5 : Notions de Base JavaScript

## Aperçu
Ces exercices vous permettent de maîtriser les fondamentaux de JavaScript : variables, types de données, conditions, boucles, fonctions, et manipulation du DOM. Vous apprendrez à rendre les pages web interactives.

## Niveau Débutant

### Exercice 5.1 : Premiers Pas en JavaScript
**Objectif** : Configurer JavaScript et exécuter vos premiers scripts.

**Instructions** :
1. Créez une page HTML simple avec du contenu
2. Créez un fichier `script.js` séparé
3. Liez le fichier JavaScript : `<script src="script.js"></script>`
4. Dans `script.js`, ajoutez :
   - `console.log("Bonjour JavaScript !")`
   - Un commentaire expliquant ce que fait le code
   - Une alerte simple : `alert("Bienvenue !")`
5. Ouvrez la console du navigateur (F12) pour voir les messages

**Critères de validation** :
- [ ] Fichier JavaScript lié correctement
- [ ] Messages visibles dans la console
- [ ] Code commenté et organisé
- [ ] Aucune erreur dans la console

**Indices** :
- Le script doit être placé avant `</body>` ou avec `defer`
- `console.log()` affiche dans l'onglet Console
- Les commentaires utilisent `//` ou `/* */`

### Exercice 5.2 : Variables et Types de Données
**Objectif** : Déclarer et utiliser différents types de variables JavaScript.

**Instructions** :
1. Créez un fichier `variables.js`
2. Déclarez des variables de tous types :
   - String : `let nom = "Alice"`
   - Number : `let age = 25`
   - Boolean : `let estEtudiant = true`
   - Array : `let couleurs = ["rouge", "vert", "bleu"]`
   - Object : `let personne = {nom: "Alice", age: 25}`
3. Affichez les variables dans la console
4. Modifiez les valeurs et réaffichez-les
5. Testez les types avec `typeof`

**Critères de validation** :
- [ ] Tous les types de données utilisés
- [ ] Variables déclarées avec `let` ou `const`
- [ ] Affichage correct dans la console
- [ ] Utilisation de `typeof` pour vérifier les types

**Indices** :
- `const` pour les valeurs qui ne changent pas
- `let` pour les variables modifiables
- Les objets utilisent `{}` et les tableaux `[]`

### Exercice 5.3 : Opérateurs et Expressions
**Objectif** : Utiliser les opérateurs mathématiques, de comparaison, et logiques.

**Instructions** :
1. Créez un fichier `operateurs.js`
2. Testez les opérateurs mathématiques :
   - Addition, soustraction, multiplication, division
   - Modulo (`%`) et puissance (`**`)
3. Utilisez les opérateurs de comparaison :
   - `===`, `!==`, `>`, `<`, `>=`, `<=`
4. Expérimentez avec les opérateurs logiques :
   - `&&` (ET), `||` (OU), `!` (NON)
5. Créez des expressions complexes combinant tout

**Critères de validation** :
- [ ] Tous les opérateurs mathématiques testés
- [ ] Comparaisons strictes (`===`) utilisées
- [ ] Expressions logiques complexes créées
- [ ] Résultats affichés et expliqués

**Indices** :
- `5 + 3 * 2` donne 11 (priorité des opérateurs)
- `true && false` donne `false`
- `!true` donne `false`

## Niveau Intermédiaire

### Exercice 5.4 : Conditions et Branches
**Objectif** : Maîtriser les structures conditionnelles if/else et switch.

**Instructions** :
1. Créez un fichier `conditions.js`
2. Utilisez `if/else if/else` pour :
   - Vérifier l'âge pour des catégories (enfant, adolescent, adulte)
   - Déterminer la saison selon le mois
   - Calculer une note (A, B, C, D, F)
3. Implémentez des conditions avec `switch` :
   - Jour de la semaine → activité
   - Code de couleur → nom de la couleur
   - Type d'utilisateur → permissions
4. Utilisez l'opérateur ternaire : `condition ? valeur1 : valeur2`

**Critères de validation** :
- [ ] Structures if/else complexes
- [ ] Switch statements appropriés
- [ ] Opérateur ternaire utilisé
- [ ] Logique correcte et cas edge gérés

**Indices** :
- `if (age < 13) { categorie = "enfant"; }`
- Switch sans `break` continue à exécuter
- Ternaire pour des conditions simples

### Exercice 5.5 : Fonctions de Base
**Objectif** : Créer et utiliser des fonctions JavaScript simples.

**Instructions** :
1. Créez un fichier `fonctions.js`
2. Définissez des fonctions pour :
   - Saluer quelqu'un : `function saluer(nom)`
   - Calculer l'aire d'un rectangle
   - Convertir Celsius en Fahrenheit
   - Vérifier si un nombre est pair
3. Utilisez des fonctions fléchées (arrow functions)
4. Testez les fonctions avec différents paramètres
5. Gérez les valeurs de retour

**Critères de validation** :
- [ ] Fonctions avec paramètres et retour
- [ ] Arrow functions utilisées
- [ ] Fonctions testées avec différents inputs
- [ ] Valeurs de retour appropriées

**Indices** :
- `function addition(a, b) { return a + b; }`
- Arrow : `const addition = (a, b) => a + b;`
- `return` renvoie une valeur, `console.log` affiche seulement

### Exercice 5.6 : Manipulation du DOM
**Objectif** : Interagir avec les éléments HTML via JavaScript.

**Instructions** :
1. Créez une page HTML avec des éléments (boutons, paragraphes, inputs)
2. Dans `script.js`, utilisez :
   - `document.getElementById()` pour sélectionner
   - `document.querySelector()` pour des sélecteurs CSS
   - `.textContent` pour changer le texte
   - `.style` pour modifier les styles
3. Ajoutez des event listeners :
   - Bouton qui change la couleur de fond
   - Input qui met à jour un paragraphe en temps réel
   - Bouton qui cache/affiche des éléments

**Critères de validation** :
- [ ] Éléments sélectionnés correctement
- [ ] Propriétés modifiées (texte, style)
- [ ] Event listeners fonctionnels
- [ ] Interactions utilisateur fluides

**Indices** :
- `const bouton = document.getElementById('monBouton');`
- `bouton.addEventListener('click', fonction);`
- `element.style.color = 'red';` change la couleur

## Niveau Avancé

### Exercice 5.7 : Calculateur Interactif
**Objectif** : Créer une calculatrice complète avec interface utilisateur.

**Instructions** :
1. Créez une page `calculatrice.html` avec :
   - Deux champs numériques
   - Un select pour l'opération (+, -, *, /)
   - Un bouton "Calculer"
   - Une zone d'affichage du résultat
   - Un historique des calculs
2. En JavaScript :
   - Validez les inputs (nombres uniquement)
   - Implémentez toutes les opérations
   - Gérez la division par zéro
   - Sauvegardez l'historique (array)
   - Affichez l'historique sous forme de liste

**Critères de validation** :
- [ ] Interface utilisateur complète
- [ ] Validation des entrées
- [ ] Toutes les opérations fonctionnelles
- [ ] Historique des calculs maintenu
- [ ] Gestion des erreurs appropriée

**Indices** :
- `parseFloat(input.value)` pour convertir en nombre
- `isNaN()` pour vérifier si c'est un nombre
- Stockez l'historique dans un array

### Exercice 5.8 : Jeu du Nombre Mystère
**Objectif** : Créer un jeu interactif où l'utilisateur devine un nombre.

**Instructions** :
1. Créez une page `jeu-nombre.html` avec :
   - Instructions du jeu
   - Champ pour saisir un nombre
   - Bouton "Deviner"
   - Zone d'affichage des indices
   - Compteur d'essais
   - Bouton "Rejouer"
2. Logique JavaScript :
   - Générer un nombre aléatoire (1-100)
   - Comparer la proposition avec le nombre mystère
   - Donner des indices ("Trop haut", "Trop bas")
   - Compter les tentatives
   - Permettre de rejouer

**Critères de validation** :
- [ ] Jeu entièrement fonctionnel
- [ ] Interface intuitive et responsive
- [ ] Indices utiles pour le joueur
- [ ] Gestion du nombre d'essais
- [ ] Possibilité de rejouer

**Indices** :
- `Math.floor(Math.random() * 100) + 1` pour nombre aléatoire
- Stockez le nombre mystère dans une variable
- Utilisez des messages encourageants

## Défi Bonus

### Exercice 5.9 : Liste de Tâches (Todo List)
**Objectif** : Créer une application de gestion des tâches avec stockage local.

**Instructions** :
1. Créez une application complète avec :
   - Formulaire pour ajouter des tâches
   - Liste des tâches avec checkboxes
   - Boutons pour modifier/supprimer
   - Filtrage (toutes, actives, terminées)
   - Compteur de tâches restantes
   - Sauvegarde automatique (localStorage)
2. Fonctionnalités avancées :
   - Marquer comme terminée
   - Édition en ligne des tâches
   - Suppression avec confirmation
   - Vidage des tâches terminées

**Critères de validation** :
- [ ] Toutes les fonctionnalités CRUD présentes
- [ ] Interface utilisateur moderne
- [ ] Données persistées (localStorage)
- [ ] Filtrage et recherche fonctionnels
- [ ] Code organisé et commenté

**Indices** :
- Structurez les données : `[{id: 1, text: "...", completed: false}]`
- `localStorage.setItem('todos', JSON.stringify(todos))`
- Utilisez des event listeners pour les interactions

### Exercice 5.10 : Validation de Formulaire Avancée
**Objectif** : Créer un système de validation de formulaire complet.

**Instructions** :
1. Créez un formulaire d'inscription avec :
   - Nom, prénom, email, mot de passe
   - Confirmation du mot de passe
   - Date de naissance, pays
   - Conditions d'utilisation (checkbox)
2. Validation JavaScript :
   - Champs requis non vides
   - Email au bon format
   - Mot de passe assez fort (longueur, caractères spéciaux)
   - Confirmation du mot de passe
   - Âge minimum (13 ans)
3. Interface utilisateur :
   - Messages d'erreur spécifiques
   - Champs valides mis en évidence
   - Soumission seulement si tout est valide

**Critères de validation** :
- [ ] Toutes les validations implémentées
- [ ] Messages d'erreur utiles
- [ ] Interface utilisateur intuitive
- [ ] Prévention de soumission invalide
- [ ] Feedback visuel en temps réel

**Indices** :
- Regex pour email : `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- `input.addEventListener('input', validateFunction)`
- Utilisez des classes CSS pour les états (valid, invalid)

## Intégration Inter-modules

### Exercice 5.11 : Préparation Module 6
**Objectif** : Refactoriser le code JavaScript avec des fonctions organisées.

**Instructions** :
1. Reprenez votre application de liste de tâches
2. Refactorisez le code :
   - Créez des fonctions séparées pour chaque fonctionnalité
   - Utilisez des objets pour stocker les données
   - Organisez le code en sections logiques
   - Ajoutez des commentaires détaillés
3. Préparez pour les concepts avancés :
   - Fonctions dans des objets (méthodes)
   - Arrays avec méthodes avancées
   - Gestion d'erreurs basique
4. Documentez les améliorations apportées

**Critères de validation** :
- [ ] Code refactorisé et organisé
- [ ] Fonctions modulaires créées
- [ ] Commentaires explicatifs ajoutés
- [ ] Préparation pour les objets visible
- [ ] Fonctionnalités préservées

**Indices** :
- Regroupez les fonctions similaires ensemble
- Utilisez des noms descriptifs pour les fonctions
- Préparez des objets pour stocker l'état de l'application

### Exercice 5.12 : Application Interactive Complète
**Objectif** : Créer une application web complète combinant HTML, CSS, et JavaScript.

**Instructions** :
1. Créez une application de "Gestionnaire de Recettes"
2. Fonctionnalités :
   - Ajouter/modifier/supprimer des recettes
   - Catégoriser les recettes (entrée, plat, dessert)
   - Recherche par nom ou ingrédients
   - Affichage en grille/liste
   - Notation des recettes
3. Interface moderne :
   - Design responsive (CSS Grid/Flexbox)
   - Animations et transitions
   - Thème cohérent avec variables CSS
4. Stockage des données (localStorage)

**Critères de validation** :
- [ ] Application entièrement fonctionnelle
- [ ] Interface utilisateur moderne et intuitive
- [ ] Données persistées correctement
- [ ] Recherche et filtrage opérationnels
- [ ] Code JavaScript organisé

**Indices** :
- Structurez les données : `{id, nom, ingredients: [], instructions, categorie, note}`
- Utilisez des templates HTML pour générer le contenu
- Séparez la logique (JavaScript) de la présentation (HTML/CSS)

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Fonctionnalité** : Code JavaScript s'exécute sans erreurs
- **Interactivité** : Événements utilisateur gérés correctement
- **Validation** : Entrées utilisateur validées et sécurisées
- **Performance** : Code efficace sans blocages
- **Maintenabilité** : Code commenté et organisé
- **Compatibilité** : Fonctionne dans les navigateurs modernes

## Ressources d'Aide

- [JavaScript MDN Guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [JavaScript.info Tutorial](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [JavaScript Console Methods](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 6 où vous apprendrez les fonctions avancées et les objets JavaScript. Vous aurez maintenant une base solide pour créer des applications web interactives !