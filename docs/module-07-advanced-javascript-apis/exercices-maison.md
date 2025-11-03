# Exercices Maison - Module 7 : JavaScript Avancé et APIs

## Aperçu
Ces exercices vous permettent de maîtriser la programmation asynchrone, les APIs REST, le stockage local, et la communication avec des services externes. Vous apprendrez à créer des applications web modernes qui interagissent avec des données externes.

## Niveau Débutant

### Exercice 7.1 : Introduction aux Promesses
**Objectif** : Comprendre et utiliser les promesses JavaScript pour les opérations asynchrones.

**Instructions** :
1. Créez un fichier `promesses.js`
2. Créez des promesses simples :
   - Une promesse qui se résout après un délai
   - Une promesse qui peut échouer aléatoirement
   - Une promesse qui traite des données
3. Utilisez `.then()`, `.catch()`, et `.finally()`
4. Chaînez plusieurs promesses
5. Gérez les erreurs appropriées

**Critères de validation** :
- [ ] Promesses créées et utilisées correctement
- [ ] Gestion d'erreurs avec `.catch()`
- [ ] Chaînage de promesses fonctionnel
- [ ] Code asynchrone bien structuré

**Indices** :
- `new Promise((resolve, reject) => { ... })`
- `resolve(value)` pour succès, `reject(error)` pour échec
- `.then()` traite le succès, `.catch()` traite les erreurs

### Exercice 7.2 : Async/Await Moderne
**Objectif** : Maîtriser la syntaxe async/await pour simplifier le code asynchrone.

**Instructions** :
1. Créez un fichier `async-await.js`
2. Convertissez des fonctions utilisant des promesses en async/await
3. Créez des fonctions `async` qui :
   - Attendent un délai simulé
   - Fetchent des données fictives
   - Traite des erreurs avec try/catch
4. Combinez plusieurs opérations asynchrones
5. Comparez avec la syntaxe `.then()/.catch()`

**Critères de validation** :
- [ ] Fonctions `async` créées
- [ ] `await` utilisé correctement
- [ ] Gestion d'erreurs avec `try/catch`
- [ ] Code plus lisible que les promesses chaînées

**Indices** :
- `async function maFonction() { ... }`
- `const result = await promise;`
- `try { ... } catch(error) { ... }`

### Exercice 7.3 : API Fetch de Base
**Objectif** : Utiliser l'API Fetch pour faire des requêtes HTTP simples.

**Instructions** :
1. Créez un fichier `fetch-basics.js`
2. Utilisez l'API JSONPlaceholder (gratuite) :
   - GET : Récupérer la liste des utilisateurs
   - GET : Récupérer un utilisateur spécifique
   - POST : Créer un nouvel utilisateur
3. Gérez les réponses JSON
4. Traitez les erreurs réseau
5. Affichez les données dans la console

**Critères de validation** :
- [ ] Requêtes GET et POST réussies
- [ ] Données JSON parsées correctement
- [ ] Gestion d'erreurs implémentée
- [ ] Code asynchrone fonctionnel

**Indices** :
- `fetch('https://jsonplaceholder.typicode.com/users')`
- `.then(response => response.json())`
- Vérifiez `response.ok` pour les erreurs HTTP

## Niveau Intermédiaire

### Exercice 7.4 : Stockage Local (localStorage)
**Objectif** : Utiliser localStorage pour persister des données côté client.

**Instructions** :
1. Créez un fichier `localstorage.js`
2. Implémentez des fonctions pour :
   - Sauvegarder des objets complexes (JSON.stringify)
   - Récupérer et parser des données
   - Supprimer des éléments
   - Lister toutes les clés sauvegardées
3. Créez une mini-application de notes :
   - Ajouter une note
   - Lister les notes existantes
   - Supprimer une note
   - Persister automatiquement

**Critères de validation** :
- [ ] Données sauvegardées et récupérées
- [ ] Objets complexes gérés (JSON)
- [ ] Interface utilisateur fonctionnelle
- [ ] Persistance des données vérifiée

**Indices** :
- `localStorage.setItem('key', JSON.stringify(data))`
- `JSON.parse(localStorage.getItem('key'))`
- Testez en rechargeant la page

### Exercice 7.5 : Géolocalisation
**Objectif** : Utiliser l'API de géolocalisation du navigateur.

**Instructions** :
1. Créez une page `geolocalisation.html` avec JavaScript
2. Implémentez :
   - Bouton pour obtenir la position actuelle
   - Affichage des coordonnées (latitude, longitude)
   - Calcul de la précision
   - Gestion des erreurs (permission refusée, indisponible)
3. Bonus : Affichez la position sur une carte simple (texte)
4. Gérez les différents états (chargement, succès, erreur)

**Critères de validation** :
- [ ] Géolocalisation fonctionnelle
- [ ] Gestion des permissions utilisateur
- [ ] Erreurs gérées appropriées
- [ ] Interface utilisateur informative

**Indices** :
- `navigator.geolocation.getCurrentPosition(success, error)`
- Vérifiez d'abord `navigator.geolocation` disponible
- Gérez les erreurs : PERMISSION_DENIED, POSITION_UNAVAILABLE

### Exercice 7.6 : API de Météo Complète
**Objectif** : Créer une application météo utilisant une vraie API.

**Instructions** :
1. Inscrivez-vous sur OpenWeatherMap (gratuit)
2. Créez une application météo avec :
   - Champ de recherche de ville
   - Affichage température, description, humidité
   - Icône météo
   - Bouton géolocalisation
   - Gestion d'erreurs (ville non trouvée)
3. Utilisez async/await pour les requêtes
4. Sauvegardez les villes favorites (localStorage)

**Critères de validation** :
- [ ] API configurée et fonctionnelle
- [ ] Interface utilisateur moderne
- [ ] Gestion d'erreurs complète
- [ ] Géolocalisation intégrée
- [ ] Données persistées

**Indices** :
- URL : `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric&lang=fr`
- Icônes : `https://openweathermap.org/img/wn/${icon}@2x.png`
- Testez avec différentes villes

## Niveau Avancé

### Exercice 7.7 : Client API REST Complet
**Objectif** : Créer un client API générique réutilisable.

**Instructions** :
1. Créez une classe `ApiClient` avec :
   - Configuration de base (URL, headers)
   - Méthodes GET, POST, PUT, DELETE
   - Gestion automatique des tokens d'authentification
   - Gestion d'erreurs centralisée
   - Cache des réponses (optionnel)
2. Utilisez-la pour créer une application de gestion de tâches :
   - Lister les tâches (GET)
   - Créer une tâche (POST)
   - Modifier une tâche (PUT)
   - Supprimer une tâche (DELETE)
3. Implémentez l'authentification simulée

**Critères de validation** :
- [ ] Classe ApiClient réutilisable créée
- [ ] Toutes les méthodes HTTP implémentées
- [ ] Gestion d'authentification fonctionnelle
- [ ] Interface de tâches complète
- [ ] Gestion d'erreurs robuste

**Indices** :
- Utilisez fetch dans une classe
- Stockez le token dans localStorage
- Gérez les erreurs 401 (non autorisé)

### Exercice 7.8 : Application de Chat en Temps Réel
**Objectif** : Créer une application de chat avec API simulée.

**Instructions** :
1. Créez un système de chat avec :
   - Liste des messages
   - Formulaire d'envoi de message
   - Utilisateurs multiples (simulés)
   - Horodatage des messages
   - Scroll automatique vers le bas
2. Simulez une API avec des promesses :
   - Récupération des messages existants
   - Envoi de nouveaux messages (avec délai)
   - Mise à jour périodique des messages
3. Ajoutez des fonctionnalités avancées :
   - Indicateur de frappe
   - Statut en ligne/hors ligne
   - Messages non lus

**Critères de validation** :
- [ ] Interface de chat fonctionnelle
- [ ] API simulée avec délais réalistes
- [ ] Mise à jour en temps réel simulée
- [ ] Gestion d'état des utilisateurs
- [ ] UX fluide et intuitive

**Indices** :
- Utilisez `setInterval` pour simuler les mises à jour
- Stockez les messages dans un array
- `scrollIntoView()` pour le scroll automatique

## Défi Bonus

### Exercice 7.9 : Application de Gestion de Projet avec API
**Objectif** : Créer une application complète utilisant plusieurs APIs.

**Instructions** :
1. Créez une application de gestion de projet avec :
   - Gestion des tâches (CRUD complet)
   - Assignation aux membres d'équipe
   - Échéances et priorités
   - Commentaires sur les tâches
   - Tableau de bord avec statistiques
2. Intégrez plusieurs APIs :
   - API météo pour le "moral de l'équipe"
   - API de citations motivantes
   - API de génération d'avatars (ou simulée)
   - Stockage local pour la persistance
3. Implémentez la synchronisation :
   - Sauvegarde automatique
   - Export/import JSON
   - Synchronisation entre onglets (BroadcastChannel API)

**Critères de validation** :
- [ ] Application complète et fonctionnelle
- [ ] Intégration de plusieurs APIs
- [ ] Interface utilisateur moderne
- [ ] Synchronisation des données
- [ ] Gestion d'erreurs complète

**Indices** :
- Utilisez des classes pour organiser le code
- `BroadcastChannel` pour la synchro entre onglets
- Gérez les erreurs réseau gracieusement

### Exercice 7.10 : Progressive Web App (PWA)
**Objectif** : Transformer une application web en PWA installable.

**Instructions** :
1. Prenez votre application météo ou de tâches
2. Ajoutez les fonctionnalités PWA :
   - Manifest.json pour l'installation
   - Service Worker pour le cache offline
   - Stratégie de cache appropriée
   - Notifications push (simulées)
3. Implémentez :
   - Cache des ressources statiques
   - Cache des données API (avec expiration)
   - Mode offline fonctionnel
   - Mise à jour automatique du cache
4. Testez l'installation et le fonctionnement hors ligne

**Critères de validation** :
- [ ] Manifest.json valide
- [ ] Service Worker enregistré
- [ ] Application installable
- [ ] Fonctionnement offline
- [ ] Cache intelligent implémenté

**Indices** :
- Manifest : icône, nom, couleurs, scope
- Service Worker : `self.addEventListener('install')`
- Cache API : `caches.open()`, `cache.put()`

## Intégration Inter-modules

### Exercice 7.11 : Préparation Module 8
**Objectif** : Préparer l'architecture full-stack en séparant frontend et backend.

**Instructions** :
1. Refactorisez votre application en architecture séparée :
   - Créez un dossier `frontend/` et `backend/`
   - Déplacez le HTML/CSS/JS côté client
   - Créez un serveur Express.js basique
   - Simulez des routes API dans le backend
2. Implémentez :
   - Séparation claire des responsabilités
   - Communication HTTP entre frontend/backend
   - Gestion d'erreurs côté serveur
   - Structure de projet professionnelle
3. Préparez pour une vraie séparation :
   - CORS configuré
   - Variables d'environnement
   - Logs de serveur

**Critères de validation** :
- [ ] Architecture frontend/backend séparée
- [ ] Communication HTTP fonctionnelle
- [ ] Gestion d'erreurs côté serveur
- [ ] Structure de projet maintenable
- [ ] Préparation pour le déploiement

**Indices** :
- `npm init -y` dans le dossier backend
- `npm install express cors`
- Utilisez des ports différents (3000 pour backend, 8080 pour frontend)

### Exercice 7.12 : Dashboard Analytics
**Objectif** : Créer un tableau de bord avec visualisation de données.

**Instructions** :
1. Créez un dashboard qui affiche :
   - Statistiques utilisateur (API simulée)
   - Graphiques de données (canvas ou SVG simple)
   - Métriques en temps réel
   - Filtres de date/période
2. Intégrez des APIs externes :
   - API de citations pour motivation
   - API de devises pour conversions
   - API de news tech (si disponible)
3. Implémentez :
   - Mise à jour automatique des données
   - Cache intelligent des APIs
   - Gestion des quotas d'API
   - Interface responsive complète

**Critères de validation** :
- [ ] Dashboard informatif et visuel
- [ ] Intégration d'APIs externes
- [ ] Mise à jour en temps réel
- [ ] Interface responsive
- [ ] Gestion d'erreurs robuste

**Indices** :
- Utilisez des APIs gratuites comme JSONPlaceholder
- `setInterval` pour les mises à jour périodiques
- Stockez les données en cache avec expiration
- Gérez les erreurs API gracieusement

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Asynchrone** : Utilisation appropriée de promesses et async/await
- **Erreurs** : Gestion complète des erreurs réseau et API
- **Performance** : Cache et optimisation des requêtes
- **Sécurité** : Validation des données et gestion des tokens
- **UX** : États de chargement et feedback utilisateur
- **Compatibilité** : Support des navigateurs modernes

## Ressources d'Aide

- [MDN Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 8 où vous construirez des applications full-stack complètes. Vous maîtriserez maintenant les interactions client-serveur et les APIs modernes !