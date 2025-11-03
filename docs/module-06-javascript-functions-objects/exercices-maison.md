# Exercices Maison - Module 6 : Fonctions et Objets JavaScript

## Aperçu
Ces exercices vous permettent de maîtriser les concepts avancés de JavaScript : fonctions organisées, objets, tableaux avec méthodes, boucles, et gestion d'erreurs. Vous apprendrez à structurer du code maintenable et réutilisable.

## Niveau Débutant

### Exercice 6.1 : Portée des Variables (Scope)
**Objectif** : Comprendre la différence entre variables locales et globales.

**Instructions** :
1. Créez un fichier `scope.js`
2. Déclarez une variable globale
3. Créez une fonction qui déclare une variable locale avec le même nom
4. Affichez les valeurs à l'intérieur et à l'extérieur de la fonction
5. Testez avec `var`, `let`, et `const`
6. Expliquez les différences dans des commentaires

**Critères de validation** :
- [ ] Variables globale et locale testées
- [ ] Différences entre `var`, `let`, `const` démontrées
- [ ] Commentaires explicatifs présents
- [ ] Aucun conflit de noms non résolu

**Indices** :
- `var` crée des variables fonctionnelles
- `let` et `const` créent des variables bloc
- Les variables locales masquent les globales

### Exercice 6.2 : Fonctions comme Paramètres
**Objectif** : Passer des fonctions en paramètres d'autres fonctions.

**Instructions** :
1. Créez un fichier `fonctions-parametres.js`
2. Définissez une fonction `appliquerOperation` qui prend une fonction en paramètre
3. Créez des fonctions d'opération simples (addition, multiplication, puissance)
4. Testez `appliquerOperation` avec différentes fonctions
5. Utilisez des fonctions fléchées comme paramètres

**Critères de validation** :
- [ ] Fonction d'ordre supérieur créée
- [ ] Plusieurs fonctions callback testées
- [ ] Syntaxes fléchées et traditionnelles utilisées
- [ ] Résultats corrects affichés

**Indices** :
- `function appliquerOperation(a, b, operation) { return operation(a, b); }`
- Callback : `function addition(a, b) { return a + b; }`
- Appel : `appliquerOperation(5, 3, addition)`

### Exercice 6.3 : Fermetures (Closures)
**Objectif** : Comprendre et utiliser les fermetures pour créer des fonctions avec état.

**Instructions** :
1. Créez un fichier `closures.js`
2. Implémentez une fonction `creerCompteur` qui retourne une fonction
3. La fonction interne doit pouvoir accéder à une variable de la fonction externe
4. Testez plusieurs compteurs indépendants
5. Créez une fermeture pour générer des IDs uniques

**Critères de validation** :
- [ ] Fermeture créée et fonctionnelle
- [ ] État préservé entre appels
- [ ] Compteurs indépendants testés
- [ ] Application pratique (générateur d'ID)

**Indices** :
- La fonction interne "se souvient" des variables externes
- Chaque appel à `creerCompteur()` crée un état séparé
- Utile pour encapsuler des données privées

## Niveau Intermédiaire

### Exercice 6.4 : Méthodes de Tableaux Avancées
**Objectif** : Maîtriser les méthodes de manipulation des tableaux JavaScript.

**Instructions** :
1. Créez un fichier `tableaux-avances.js`
2. Utilisez toutes les méthodes principales :
   - `forEach` pour itérer
   - `map` pour transformer
   - `filter` pour filtrer
   - `find` et `findIndex` pour rechercher
   - `some` et `every` pour tester des conditions
   - `reduce` pour accumuler
3. Créez des exemples pratiques avec un tableau d'objets
4. Combinez plusieurs méthodes dans des chaînes

**Critères de validation** :
- [ ] Toutes les méthodes principales utilisées
- [ ] Exemples pratiques avec objets
- [ ] Chaînage de méthodes démontré
- [ ] Résultats corrects et expliqués

**Indices** :
- `map` transforme chaque élément
- `filter` garde seulement les éléments qui correspondent
- `reduce` accumule une valeur unique

### Exercice 6.5 : Objets et Méthodes
**Objectif** : Créer et manipuler des objets JavaScript avec méthodes.

**Instructions** :
1. Créez un fichier `objets-methodes.js`
2. Définissez un objet `Voiture` avec propriétés et méthodes
3. Ajoutez des méthodes pour :
   - Démarrer le moteur
   - Accélérer
   - Freiner
   - Afficher les informations
4. Créez plusieurs instances de voitures
5. Testez les méthodes avec différentes valeurs

**Critères de validation** :
- [ ] Objet avec propriétés et méthodes créé
- [ ] Méthodes fonctionnelles et cohérentes
- [ ] Plusieurs instances testées
- [ ] État de l'objet modifié correctement

**Indices** :
- `this` fait référence à l'instance courante
- Les méthodes sont des fonctions dans l'objet
- Utilisez des propriétés pour stocker l'état

### Exercice 6.6 : Constructeurs et Classes
**Objectif** : Utiliser les constructeurs et la syntaxe de classe moderne.

**Instructions** :
1. Créez un fichier `constructeurs-classes.js`
2. Implémentez une fonction constructeur `Personne`
3. Convertissez-la en classe ES6
4. Ajoutez des méthodes et propriétés
5. Créez une sous-classe `Etudiant` qui hérite de `Personne`
6. Testez l'héritage et le polymorphisme

**Critères de validation** :
- [ ] Fonction constructeur créée
- [ ] Classe ES6 équivalente implémentée
- [ ] Héritage fonctionnel
- [ ] Polymorphisme démontré

**Indices** :
- Constructeur : `function Personne(nom, age) { this.nom = nom; ... }`
- Classe : `class Personne { constructor(nom, age) { ... } }`
- Héritage : `class Etudiant extends Personne { ... }`

## Niveau Avancé

### Exercice 6.7 : Gestionnaire de Bibliothèque
**Objectif** : Créer un système de gestion de bibliothèque avec objets et tableaux.

**Instructions** :
1. Créez des classes pour :
   - `Livre` (titre, auteur, ISBN, disponible)
   - `Utilisateur` (nom, id, livres empruntés)
   - `Bibliotheque` (collection de livres, utilisateurs)
2. Implémentez des méthodes pour :
   - Ajouter/retirer des livres
   - Inscrire des utilisateurs
   - Emprunter/retourner des livres
   - Rechercher des livres par titre/auteur
   - Lister les livres disponibles/empruntés
3. Utilisez des tableaux pour stocker les données
4. Gérez les erreurs (livre non disponible, utilisateur non trouvé)

**Critères de validation** :
- [ ] Classes bien structurées créées
- [ ] Méthodes CRUD complètes implémentées
- [ ] Gestion d'erreurs appropriée
- [ ] Recherche et filtrage fonctionnels

**Indices** :
- Utilisez des arrays pour `livres` et `utilisateurs`
- `find()` pour rechercher des éléments
- `filter()` pour lister les disponibles

### Exercice 6.8 : Jeu de Cartes
**Objectif** : Créer un jeu de cartes à jouer avec objets et méthodes.

**Instructions** :
1. Créez des classes pour :
   - `Carte` (valeur, couleur, symbole)
   - `Paquet` (collection de cartes, méthodes de manipulation)
   - `Joueur` (main, score)
   - `Jeu` (paquet, joueurs, logique du jeu)
2. Implémentez :
   - Création et mélange du paquet
   - Distribution des cartes
   - Comptage des points
   - Logique simple de jeu (Blackjack simplifié)
3. Utilisez des tableaux pour gérer les collections
4. Gérez l'état du jeu

**Critères de validation** :
- [ ] Classes de jeu bien conçues
- [ ] Logique de jeu fonctionnelle
- [ ] Mélange et distribution corrects
- [ ] Gestion des tours et scores

**Indices** :
- Cartes : As=11, figures=10, autres=valeur numérique
- Mélange : algorithme de Fisher-Yates ou `sort` avec random
- Vérifiez les conditions de victoire

## Défi Bonus

### Exercice 6.9 : Application de Gestion de Tâches Avancée
**Objectif** : Refactoriser complètement l'application de tâches avec patterns avancés.

**Instructions** :
1. Créez des classes pour structurer l'application :
   - `Task` (id, titre, description, priorité, échéance, statut)
   - `TaskManager` (gestion des tâches, filtres, recherche)
   - `TaskUI` (interface utilisateur, événements)
   - `Storage` (persistance des données)
2. Implémentez des fonctionnalités avancées :
   - Tri par priorité/échéance/statut
   - Recherche textuelle dans les tâches
   - Catégorisation par projets
   - Statistiques (tâches terminées, en retard)
   - Export/import des données
3. Utilisez des patterns de conception :
   - Observer pour les mises à jour UI
   - Factory pour créer différents types de tâches
   - Singleton pour le gestionnaire

**Critères de validation** :
- [ ] Architecture MVC-like implémentée
- [ ] Patterns de conception utilisés
- [ ] Fonctionnalités avancées présentes
- [ ] Code modulaire et maintenable
- [ ] Interface utilisateur améliorée

**Indices** :
- Séparez les responsabilités (modèle/vue/contrôleur)
- Utilisez des modules pour organiser le code
- Implémentez une recherche avec `filter` et `includes`

### Exercice 6.10 : Système de Réservation
**Objectif** : Créer un système de réservation de ressources avec gestion d'erreurs.

**Instructions** :
1. Créez des classes pour :
   - `Ressource` (nom, type, disponibilité)
   - `Reservation` (ressource, utilisateur, dateDebut, dateFin)
   - `Utilisateur` (nom, email, réservations)
   - `ReservationManager` (logique métier)
2. Implémentez :
   - Vérification de disponibilité
   - Création/modification/annulation de réservations
   - Gestion des conflits
   - Notifications d'échéance
3. Gérez les erreurs :
   - Ressource non disponible
   - Dates invalides
   - Conflits de réservation
   - Utilisateur non autorisé
4. Utilisez `try/catch` pour la gestion d'erreurs

**Critères de validation** :
- [ ] Classes métier bien conçues
- [ ] Gestion d'erreurs complète
- [ ] Logique de réservation robuste
- [ ] Validation des données d'entrée
- [ ] Interface de gestion fonctionnelle

**Indices** :
- Utilisez `Date` pour les comparaisons temporelles
- `throw new Error("Message")` pour les erreurs
- `try { ... } catch(error) { ... }` pour la gestion

## Intégration Inter-modules

### Exercice 6.11 : Préparation Module 7
**Objectif** : Préparer l'intégration d'APIs en structurant le code pour les requêtes asynchrones.

**Instructions** :
1. Refactorisez votre application de tâches
2. Créez des fonctions pour simuler des appels API :
   - `fetchTasks()` - retourne une promesse
   - `saveTask(task)` - sauvegarde avec délai simulé
   - `updateTask(id, updates)` - mise à jour asynchrone
   - `deleteTask(id)` - suppression avec confirmation
3. Utilisez des promesses pour :
   - Délais simulés (`setTimeout`)
   - Gestion d'erreurs réseau
   - Chaînage d'opérations
4. Préparez pour les vraies APIs (structure similaire)

**Critères de validation** :
- [ ] Fonctions asynchrones créées
- [ ] Promesses utilisées correctement
- [ ] Gestion d'erreurs implémentée
- [ ] Code préparé pour les vraies APIs
- [ ] Interface utilisateur préservée

**Indices** :
- `return new Promise((resolve, reject) => { ... })`
- Simulez le réseau avec `setTimeout`
- Utilisez `async/await` dans les fonctions appelantes

### Exercice 6.12 : Application de Blog avec Commentaires
**Objectif** : Créer une application de blog complète avec système de commentaires.

**Instructions** :
1. Créez des classes pour :
   - `Article` (titre, contenu, auteur, date, tags)
   - `Commentaire` (auteur, contenu, date, articleId)
   - `Utilisateur` (profil, articles, commentaires)
   - `BlogManager` (gestion globale)
2. Implémentez :
   - CRUD complet pour articles et commentaires
   - Système d'authentification simulé
   - Recherche et filtrage par tags/auteur
   - Tri chronologique et par popularité
   - Statistiques de blog (articles, commentaires, utilisateurs)
3. Utilisez des tableaux et objets avancés
4. Gérez les relations entre entités

**Critères de validation** :
- [ ] Application complète et fonctionnelle
- [ ] Relations entre entités gérées
- [ ] Interface utilisateur moderne
- [ ] Fonctionnalités de recherche avancées
- [ ] Code organisé en modules

**Indices** :
- Utilisez des IDs pour lier les entités
- `filter` et `find` pour les relations
- Organisez le code en fichiers séparés
- Pensez à la scalabilité

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Modularité** : Code organisé en fonctions et objets logiques
- **Réutilisabilité** : Fonctions et classes génériques
- **Robustesse** : Gestion d'erreurs et validation des données
- **Maintenabilité** : Code commenté et bien structuré
- **Performance** : Algorithmes efficaces pour les tableaux
- **Lisibilité** : Noms descriptifs et structure claire

## Ressources d'Aide

- [MDN JavaScript Guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [JavaScript Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 7 où vous apprendrez la programmation asynchrone et les APIs. Vous aurez maintenant une base solide pour créer des applications JavaScript complexes et maintenables !