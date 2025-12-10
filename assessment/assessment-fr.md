# Évaluation en Classe HTML/CSS/JavaScript : Gestionnaire de Tâches

## Informations sur le Cours
- **Cours** : HTML/CSS/JavaScript 2025-2026
- **Module** : Bases (HTML, CSS, JavaScript)
- **Type d'Évaluation** : Pratique Supervisée en Classe
- **Durée** : 4 heures (session continue)

## Aperçu de l'Évaluation
Il s'agit d'une évaluation supervisée en classe où les étudiants construiront une application web simple de Gestionnaire de Tâches à partir de zéro. L'évaluation met l'accent sur la structure HTML sémantique, le style CSS et la fonctionnalité JavaScript. Les étudiants travaillent individuellement sous la supervision de l'instructeur.

## Structure de la Session (4 heures)

### Phase 1 : Planification & HTML (60 minutes)
- Examiner les exigences et planifier l'approche
- Créer la structure HTML sémantique
- Configurer la mise en page de base de la page

### Phase 2 : Style CSS (60 minutes)
- Implémenter le design CSS
- Styler les formulaires, boutons et liste de tâches
- Assurer une apparence professionnelle

### Phase 3 : Fonctionnalité JavaScript (90 minutes)
- Implémenter l'ajout de tâches
- Ajouter les fonctionnalités de terminaison et suppression
- Tester et déboguer la fonctionnalité

### Phase 4 : Révision & Soumission (30 minutes)
- Tests finaux et raffinements
- Révision du code et documentation
- Soumettre les fichiers terminés

## Exigences du Projet

### HTML (Structure Sémantique - 25%)
- Utiliser des éléments HTML sémantiques : `<header>`, `<main>`, `<section>`, `<footer>`
- Hiérarchie d'en-têtes appropriée
- Champ d'entrée avec étiquette et bouton
- Structure de liste de tâches utilisant `<ul>` et `<li>`

### CSS (Style - 25%)
- Design propre et professionnel
- Schéma de couleurs et typographie cohérents
- Retour visuel pour les éléments interactifs
- Compléter tous les commentaires TODO dans assessment.css pour un style approprié

### JavaScript (Fonctionnalité - 50%)
- Ajouter des tâches à la liste depuis le champ d'entrée
- Marquer les tâches comme terminées (changement visuel)
- Supprimer les tâches de la liste
- Validation d'entrée (empêcher les soumissions vides)
- Gestion d'événements pour toutes les interactions
- Compléter tous les commentaires TODO dans assessment.js pour une fonctionnalité complète

## Tâches d'Implémentation

### Tâches HTML (assessment.html)
- Ajouter l'élément header avec h1 "Task Manager" et p "Organize your tasks efficiently"
- Ajouter l'élément main enveloppant tout le contenu
- Ajouter task-input-section avec h2 "Add New Task", div de formulaire avec étiquette, entrée et bouton
- Ajouter task-list-section avec h2 "Your Tasks" et ul vide
- Ajouter footer avec texte de copyright
- Lier à assessment.js à la fin

### Tâches CSS (assessment.css)
- Ajouter des styles à header : text-align center, margin-bottom 30px, padding 30px, background rgba(255, 255, 255, 0.95)
- Ajouter des styles à h1 dans header : color #4a5568, font-size 2.5rem, margin-bottom 10px, font-weight 700
- Ajouter des styles à main : max-width 800px, margin auto, display grid, gap 30px
- Styler tous les éléments section : background rgba(255, 255, 255, 0.95), padding 30px, border-radius 15px, box-shadow 0 8px 32px rgba(0, 0, 0, 0.1), backdrop-filter blur(10px)
- Styler h2 dans les sections : color #4a5568, margin-bottom 20px, font-size 1.8rem, font-weight 600
- Styler #task-form avec flexbox column et gap 15px
- Supprimer la bordure de #task-form button et ajouter padding 15px 30px
- Styler #task-list li avec flexbox row, space-between, align-items center, border-color #e2e8f0
- Styler .task-actions avec flexbox row et gap 10px

### Tâches JavaScript (assessment.js)
- Obtenir l'élément d'entrée de tâche avec id 'task-input', nommer la variable taskInput
- Obtenir l'élément de liste de tâches avec id 'task-list', nommer la variable taskList
- Effacer la valeur d'entrée de tâche à une chaîne vide après ajout de tâche
- Définir className de taskSpan à 'task-text'
- Définir textContent de completeBtn à 'Complete'
- Ajouter un écouteur d'événement de clic à completeBtn avec () => toggleComplete(li)
- Définir textContent de notification au message

## Matériaux Fournis
- Instructions d'évaluation (ce document)
- Environnement de développement (VS Code)
- Navigateur pour les tests (Chrome/Firefox/Edge)

## Spécifications Techniques
- Éléments HTML5 sémantiques requis
- Fonctionnalités CSS3 autorisées (pas de préprocesseurs)
- JavaScript vanille uniquement (pas de frameworks/bibliothèques)
- Doit fonctionner dans les navigateurs modernes
- Pas de dépendances externes

## Règles d'Évaluation
- Travail individuel uniquement
- Pas de collaboration ou partage de code
- Instructeur disponible pour les questions de clarification
- Contrôles réguliers par l'instructeur
- Tout le travail doit être terminé en 4 heures

## Exigences de Soumission
- Trois fichiers : `assessment.html`, `assessment.css`, `assessment.js`
- Les fichiers doivent être fonctionnels lorsqu'ouverts ensemble
- Soumettre à l'instructeur à la fin de la session

## Support Pendant l'Évaluation
- L'instructeur circulera pour fournir des conseils
- Questions de clarification autorisées (conceptuelles uniquement)
- Les problèmes techniques seront adressés
- Aucune aide de codage directe fournie

## Notes de Préparation
- Examiner les éléments HTML sémantiques
- Pratiquer les mises en page et styles CSS
- Comprendre la manipulation DOM et la gestion d'événements
- Se familiariser avec les techniques de validation de formulaire

---