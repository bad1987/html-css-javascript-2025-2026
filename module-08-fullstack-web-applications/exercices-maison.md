# Exercices Maison - Module 8 : Applications Web Full-Stack

## Aperçu
Ces exercices vous permettent de construire des applications web complètes en intégrant frontend et backend. Vous apprendrez à gérer des données, implémenter l'authentification, créer des APIs REST, et déployer des applications full-stack.

## Niveau Débutant

### Exercice 8.1 : Serveur Express.js de Base
**Objectif** : Créer et configurer un serveur Express.js simple.

**Instructions** :
1. Créez un nouveau dossier `mon-serveur`
2. Initialisez un projet Node.js : `npm init -y`
3. Installez Express : `npm install express`
4. Créez `server.js` avec :
   - Import d'Express
   - Configuration du serveur (port 3000)
   - Route GET `/` qui retourne "Hello World"
   - Route GET `/api/test` qui retourne du JSON
   - Démarrage du serveur avec `app.listen()`
5. Testez avec `node server.js` et visitez `http://localhost:3000`

**Critères de validation** :
- [ ] Serveur Express fonctionnel
- [ ] Routes GET créées et testées
- [ ] Réponses appropriées (texte et JSON)
- [ ] Serveur démarre sans erreurs

**Indices** :
- `const express = require('express');`
- `app.get('/', (req, res) => { res.send('Hello'); });`
- `npm start` dans package.json pour `node server.js`

### Exercice 8.2 : API REST Simple
**Objectif** : Créer une API REST basique avec opérations CRUD.

**Instructions** :
1. Dans votre serveur Express, créez des routes pour gérer des "tâches" :
   - GET `/api/tasks` : Liste toutes les tâches
   - GET `/api/tasks/:id` : Récupère une tâche spécifique
   - POST `/api/tasks` : Crée une nouvelle tâche
   - PUT `/api/tasks/:id` : Met à jour une tâche
   - DELETE `/api/tasks/:id` : Supprime une tâche
2. Stockez les données en mémoire (array)
3. Gérez les paramètres d'URL et le body des requêtes
4. Retournez des codes HTTP appropriés (200, 201, 404, 400)

**Critères de validation** :
- [ ] Toutes les routes CRUD implémentées
- [ ] Gestion correcte des paramètres
- [ ] Codes HTTP appropriés
- [ ] Données persistées en mémoire

**Indices** :
- `req.params.id` pour les paramètres d'URL
- `req.body` pour le corps de la requête (nécessite body-parser)
- `res.status(404).json({ error: 'Not found' })`

### Exercice 8.3 : Frontend Connecté à l'API
**Objectif** : Créer un frontend qui communique avec votre API backend.

**Instructions** :
1. Créez un dossier `public` dans votre projet
2. Créez `public/index.html` avec une interface simple :
   - Liste des tâches
   - Formulaire pour ajouter une tâche
   - Boutons pour modifier/supprimer
3. Dans `public/script.js`, implémentez :
   - Fonction `loadTasks()` qui fetch GET `/api/tasks`
   - Fonction `createTask()` qui POST une nouvelle tâche
   - Gestion des événements pour les boutons
4. Configurez Express pour servir les fichiers statiques

**Critères de validation** :
- [ ] Interface utilisateur fonctionnelle
- [ ] Communication frontend/backend réussie
- [ ] CRUD complet depuis le frontend
- [ ] Gestion d'erreurs de base

**Indices** :
- `app.use(express.static('public'));` pour servir les fichiers
- `fetch('/api/tasks')` depuis le frontend
- Mettez à jour l'UI après chaque opération

## Niveau Intermédiaire

### Exercice 8.4 : Authentification JWT
**Objectif** : Implémenter un système d'authentification avec JWT.

**Instructions** :
1. Installez les dépendances : `npm install jsonwebtoken bcryptjs`
2. Créez des routes d'authentification :
   - POST `/api/auth/register` : Inscription utilisateur
   - POST `/api/auth/login` : Connexion utilisateur
3. Stockez les utilisateurs en mémoire avec mot de passe hashé
4. Implémentez un middleware d'authentification :
   - Vérifie le token JWT dans l'header Authorization
   - Protège les routes nécessitant une authentification
5. Modifiez les routes de tâches pour nécessiter l'authentification

**Critères de validation** :
- [ ] Inscription et connexion fonctionnelles
- [ ] Mots de passe hashés sécurisés
- [ ] Middleware d'authentification opérationnel
- [ ] Routes protégées accessibles seulement avec token

**Indices** :
- `jwt.sign(payload, secret)` pour créer le token
- `jwt.verify(token, secret)` pour vérifier
- Header : `Authorization: Bearer <token>`

### Exercice 8.5 : Persistance des Données
**Objectif** : Remplacer le stockage en mémoire par des fichiers JSON.

**Instructions** :
1. Créez des fonctions utilitaires pour lire/écrire des fichiers JSON
2. Stockez les utilisateurs dans `data/users.json`
3. Stockez les tâches dans `data/tasks.json`
4. Implémentez :
   - Chargement des données au démarrage du serveur
   - Sauvegarde automatique à chaque modification
   - Gestion des erreurs de fichier
5. Gérez la concurrence basique (un utilisateur à la fois)

**Critères de validation** :
- [ ] Données persistées dans des fichiers JSON
- [ ] Chargement automatique au démarrage
- [ ] Sauvegarde à chaque modification
- [ ] Gestion d'erreurs de fichiers
- [ ] Données préservées entre redémarrages

**Indices** :
- `const fs = require('fs').promises;`
- `fs.readFile('data/users.json', 'utf8')`
- `fs.writeFile('data/users.json', JSON.stringify(data, null, 2))`

### Exercice 8.6 : Interface Utilisateur Moderne
**Objectif** : Créer une interface utilisateur moderne et responsive.

**Instructions** :
1. Créez une interface complète avec :
   - Page de connexion/inscription
   - Dashboard des tâches après connexion
   - Formulaire d'ajout/modification de tâches
   - Navigation responsive (mobile/desktop)
2. Implémentez :
   - Gestion des tokens JWT côté frontend
   - États de chargement (loading spinners)
   - Messages d'erreur utilisateur-friendly
   - Transitions et animations fluides
3. Rendez tout responsive avec CSS Grid et Flexbox

**Critères de validation** :
- [ ] Interface utilisateur complète et moderne
- [ ] Authentification frontend/backend intégrée
- [ ] Design responsive fonctionnel
- [ ] États de chargement et erreurs gérés
- [ ] UX fluide et intuitive

**Indices** :
- Stockez le token dans localStorage
- Ajoutez `Authorization: Bearer ${token}` aux headers
- Utilisez CSS pour les états : `.loading`, `.error`

## Niveau Avancé

### Exercice 8.7 : Application de Blog Full-Stack
**Objectif** : Construire une application de blog complète avec authentification.

**Instructions** :
1. Créez une application de blog avec :
   - Modèle Article (titre, contenu, auteur, date, tags)
   - Modèle Commentaire lié aux articles
   - Système d'utilisateurs avec rôles (admin, auteur, lecteur)
   - Interface d'administration pour les auteurs
2. Implémentez les fonctionnalités :
   - CRUD complet des articles (admin/auteurs seulement)
   - Système de commentaires (utilisateurs connectés)
   - Recherche et filtrage par tags/auteur
   - Pagination des articles
3. Sécurisez l'application :
   - Validation des données côté serveur
   - Sanitisation du contenu
   - Protection contre les attaques XSS de base

**Critères de validation** :
- [ ] Application complète et fonctionnelle
- [ ] Authentification et autorisation implémentées
- [ ] Interface d'administration séparée
- [ ] Sécurité de base assurée
- [ ] Architecture MVC respectée

**Indices** :
- Utilisez des middlewares pour l'autorisation
- Validez les données avec des fonctions utilitaires
- Implémentez la pagination côté serveur

### Exercice 8.8 : API REST Complète avec Validation
**Objectif** : Créer une API REST robuste avec validation et gestion d'erreurs.

**Instructions** :
1. Créez une API pour gérer des "projets" avec validation complète :
   - Modèle Projet (nom, description, statut, membres, échéance)
   - Validation des données d'entrée
   - Gestion des erreurs détaillées
   - Pagination et filtrage
2. Implémentez :
   - Middleware de validation des données
   - Gestion d'erreurs centralisée
   - Logging des requêtes
   - Rate limiting basique
3. Documentez l'API avec des exemples d'usage

**Critères de validation** :
- [ ] Validation des données côté serveur
- [ ] Gestion d'erreurs complète et informative
- [ ] API documentée et testée
- [ ] Sécurité et performance de base
- [ ] Code maintenable et organisé

**Indices** :
- Créez des fonctions de validation réutilisables
- Utilisez des codes d'erreur HTTP appropriés
- Implémentez un middleware d'erreurs global

## Défi Bonus

### Exercice 8.9 : Application de Commerce Électronique
**Objectif** : Construire une boutique en ligne complète avec panier et paiement simulé.

**Instructions** :
1. Créez une application e-commerce avec :
   - Modèle Produit (nom, prix, description, stock, catégorie)
   - Panier utilisateur (session ou base de données)
   - Système de commandes
   - Interface d'administration des produits
2. Implémentez :
   - Catalogue de produits avec recherche/filtrage
   - Gestion du panier (ajouter, modifier, supprimer)
   - Processus de commande simulé
   - Interface admin pour gérer les produits
3. Ajoutez des fonctionnalités avancées :
   - Avis/commentaires sur les produits
   - Système de notation
   - Recommandations simples

**Critères de validation** :
- [ ] Application e-commerce complète
- [ ] Gestion du panier fonctionnelle
- [ ] Interface utilisateur intuitive
- [ ] Administration des produits
- [ ] Architecture scalable préparée

**Indices** :
- Utilisez des sessions ou localStorage pour le panier
- Validez les stocks avant l'ajout au panier
- Implémentez la pagination pour le catalogue

### Exercice 8.10 : Tests et Déploiement
**Objectif** : Tester et déployer votre application full-stack.

**Instructions** :
1. Ajoutez des tests à votre application :
   - Tests unitaires pour les fonctions utilitaires
   - Tests d'intégration pour les routes API
   - Tests end-to-end pour les fonctionnalités critiques
2. Préparez le déploiement :
   - Variables d'environnement (PORT, JWT_SECRET)
   - Scripts de build et de démarrage
   - Configuration pour différents environnements
3. Déployez sur une plateforme gratuite :
   - Backend sur Railway ou Render
   - Frontend sur Vercel ou Netlify
4. Configurez un domaine et HTTPS

**Critères de validation** :
- [ ] Tests automatisés implémentés
- [ ] Application déployée en ligne
- [ ] Variables d'environnement configurées
- [ ] HTTPS activé
- [ ] Application accessible publiquement

**Indices** :
- Utilisez Jest pour les tests : `npm install --save-dev jest`
- Créez un fichier `.env` pour les variables sensibles
- Configurez les CORS pour le déploiement

## Intégration Inter-modules

### Exercice 8.11 : Préparation Module 9
**Objectif** : Refactoriser votre code avec les bonnes pratiques apprises.

**Instructions** :
1. Refactorisez votre application avec les patterns avancés :
   - Module pattern pour l'organisation du code
   - Observer pattern pour les événements
   - Factory pattern pour créer des objets similaires
   - Optimisations de performance (memoization, lazy loading)
2. Implémentez des tests automatisés :
   - Tests unitaires pour les fonctions pures
   - Tests d'intégration pour les APIs
   - Configuration CI/CD de base
3. Optimisez les performances :
   - Cache des réponses API
   - Compression des réponses
   - Optimisation des requêtes base de données

**Critères de validation** :
- [ ] Code refactorisé avec patterns de conception
- [ ] Tests automatisés implémentés
- [ ] Performance optimisée mesurable
- [ ] Code maintenable et documenté
- [ ] Bonnes pratiques appliquées

**Indices** :
- Utilisez des classes pour l'organisation
- Implémentez un système de cache simple
- Configurez ESLint et Prettier

### Exercice 8.12 : Portfolio Développeur Full-Stack
**Objectif** : Créer un portfolio professionnel montrant vos compétences full-stack.

**Instructions** :
1. Construisez un portfolio complet avec :
   - Section présentation avec photo et description
   - Galerie de projets avec captures d'écran
   - Blog technique intégré
   - Formulaire de contact fonctionnel
   - Section compétences avec visualisation
2. Intégrez des technologies modernes :
   - API pour les données dynamiques
   - Animations et transitions fluides
   - Design responsive parfait
   - Optimisations SEO
3. Déployez et monitorez :
   - Déploiement automatisé
   - Analytics de base
   - Tests de performance

**Critères de validation** :
- [ ] Portfolio professionnel complet
- [ ] Technologies modernes intégrées
- [ ] Performance et SEO optimisés
- [ ] Déploiement réussi
- [ ] Code source organisé

**Indices** :
- Utilisez une API pour les projets/blog
- Implémentez des métadonnées Open Graph
- Testez avec Lighthouse pour les performances

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Architecture** : Séparation claire frontend/backend
- **Sécurité** : Authentification et validation des données
- **Performance** : Optimisations appropriées implémentées
- **Maintenabilité** : Code organisé et documenté
- **Déploiement** : Application déployée et accessible
- **Tests** : Fonctionnalités critiques testées

## Ressources d'Aide

- [Express.js Documentation](https://expressjs.com/fr/)
- [JWT Authentication](https://jwt.io/)
- [REST API Design](https://restfulapi.net/)
- [Node.js File System](https://nodejs.org/api/fs.html)
- [Deployment Guides](https://render.com/docs/deploy-node-express-app)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 9 où vous appliquerez les bonnes pratiques avancées et optimiserez vos applications. Vous serez maintenant capable de construire et déployer des applications web full-stack professionnelles !