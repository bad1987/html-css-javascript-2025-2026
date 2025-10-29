# Exercices Maison - Module 1 : Introduction au Développement Web

## Aperçu
Ces exercices pratiques vous permettent de mettre en application les concepts fondamentaux du développement web apprises dans ce module. Tous les exercices sont à réaliser en français.

## Niveau Débutant

### Exercice 1.1 : Votre Première Page Web
**Objectif** : Créer une page HTML simple avec structure de base.

**Instructions** :
1. Créez un fichier `ma-premiere-page.html`
2. Utilisez la structure HTML de base (DOCTYPE, html, head, body)
3. Ajoutez un titre principal avec votre nom
4. Incluez au moins 3 paragraphes décrivant vos intérêts
5. Utilisez au moins 2 niveaux de titres différents (h1, h2)

**Critères de validation** :
- [ ] Page s'ouvre correctement dans un navigateur
- [ ] Structure HTML valide
- [ ] Au moins 3 paragraphes
- [ ] Titres hiérarchisés correctement

**Indices** :
- Commencez toujours par `<!DOCTYPE html>`
- Utilisez `<h1>` pour le titre principal
- Les paragraphes utilisent la balise `<p>`

### Exercice 1.2 : Mise en Forme Basique
**Objectif** : Ajouter du formatage simple au texte.

**Instructions** :
1. Sur la page créée à l'exercice 1.1
2. Mettez en gras un mot important dans chaque paragraphe
3. Soulignez votre nom dans le titre
4. Créez une liste de vos 3 choses préférées

**Critères de validation** :
- [ ] Texte en gras visible (`<strong>` ou `<b>`)
- [ ] Texte souligné visible (`<em>` ou `<i>`)
- [ ] Liste avec au moins 3 éléments (`<ul>` et `<li>`)

**Indices** :
- Utilisez `<strong>` pour le texte en gras
- Utilisez `<em>` pour le texte souligné
- Les listes utilisent `<ul>` (non ordonnée) ou `<ol>` (ordonnée)

### Exercice 1.3 : Liens et Images
**Objectif** : Ajouter des liens hypertextes et une image à votre page.

**Instructions** :
1. Ajoutez un lien vers votre site web préféré
2. Ajoutez un lien vers une autre page HTML (même si elle n'existe pas encore)
3. Insérez une image depuis le web avec un texte alternatif descriptif
4. Créez une section "Liens utiles" avec 3 liens externes

**Critères de validation** :
- [ ] Au moins 2 liens fonctionnels (`<a href="...">`)
- [ ] Une image avec attribut `alt` (`<img src="..." alt="...">`)
- [ ] Liens s'ouvrent dans le navigateur

**Indices** :
- Les liens utilisent `<a href="url">texte</a>`
- Les images utilisent `<img src="url" alt="description">`
- Pensez toujours à l'accessibilité avec l'attribut `alt`

## Niveau Intermédiaire

### Exercice 1.4 : Portfolio Personnalisé
**Objectif** : Créer une page de portfolio complète.

**Instructions** :
1. Créez une page `portfolio.html`
2. Incluez une photo de profil ou un avatar
3. Ajoutez une section "À propos" avec titre et paragraphes
4. Créez une section "Compétences" sous forme de liste
5. Ajoutez une section "Contact" avec email et liens vers réseaux sociaux
6. Utilisez tous les éléments HTML appris

**Critères de validation** :
- [ ] Structure sémantique appropriée
- [ ] Au moins 5 paragraphes de contenu
- [ ] Images avec textes alternatifs
- [ ] Navigation entre sections avec des ancres
- [ ] Liens externes fonctionnels

**Indices** :
- Utilisez des ancres pour naviguer sur la page (`<a href="#section">`)
- Organisez le contenu en sections logiques
- Pensez à l'expérience utilisateur

### Exercice 1.5 : Comparaison de Technologies
**Objectif** : Créer une page explicative des trois piliers du web.

**Instructions** :
1. Créez une page `technologies-web.html`
2. Créez une section pour chaque technologie (HTML, CSS, JavaScript)
3. Pour chaque technologie, incluez :
   - Un titre descriptif
   - 2-3 paragraphes d'explication
   - Une liste des principales fonctionnalités
   - Une liste des avantages
4. Ajoutez des liens vers des ressources d'apprentissage
5. Créez un tableau comparatif des trois technologies

**Critères de validation** :
- [ ] Trois sections distinctes et bien organisées
- [ ] Contenu informatif et précis
- [ ] Tableau comparatif avec en-têtes appropriées
- [ ] Liens vers ressources externes

**Indices** :
- Utilisez `<table>`, `<thead>`, `<tbody>` pour le tableau
- Organisez le contenu avec des sections claires
- Rendez le contenu engageant et accessible

## Niveau Avancé

### Exercice 1.6 : Site Multi-pages
**Objectif** : Créer un petit site web avec plusieurs pages liées.

**Instructions** :
1. Créez 3 pages HTML : `index.html`, `about.html`, `contact.html`
2. Chaque page doit avoir :
   - Un header avec navigation vers les autres pages
   - Un contenu principal unique
   - Un footer avec informations de copyright
3. La page index doit présenter votre site
4. La page about doit raconter votre parcours
5. La page contact doit inclure un formulaire (même non fonctionnel)
6. Utilisez une navigation cohérente sur toutes les pages

**Critères de validation** :
- [ ] Navigation fonctionnelle entre toutes les pages
- [ ] Contenu unique et pertinent pour chaque page
- [ ] Structure cohérente sur toutes les pages
- [ ] Liens relatifs corrects (`href="about.html"`)

**Indices** :
- Utilisez des chemins relatifs pour les liens
- Maintenez une structure similaire sur chaque page
- Pensez à l'expérience de navigation

### Exercice 1.7 : Formulaire d'Inscription
**Objectif** : Créer un formulaire complet d'inscription utilisateur.

**Instructions** :
1. Créez une page `inscription.html`
2. Incluez les champs suivants :
   - Nom complet (texte)
   - Email (email)
   - Mot de passe (password)
   - Confirmation du mot de passe (password)
   - Date de naissance (date)
   - Pays (select avec options)
   - Centres d'intérêt (checkboxes multiples)
   - Newsletter (checkbox)
   - Commentaire (textarea)
3. Ajoutez des labels appropriés pour chaque champ
4. Incluez des boutons "Soumettre" et "Réinitialiser"
5. Organisez le formulaire en sections logiques

**Critères de validation** :
- [ ] Tous les types de champs appropriés utilisés
- [ ] Labels associés aux champs (`<label for="...">`)
- [ ] Boutons de soumission et réinitialisation
- [ ] Structure organisée avec `<fieldset>` si approprié

**Indices** :
- Utilisez les attributs `name`, `id`, et `type` appropriés
- Les `<label>` améliorent l'accessibilité
- Testez le formulaire dans un navigateur

## Défi Bonus

### Exercice 1.8 : CV Web Interactif
**Objectif** : Créer un CV en ligne moderne et interactif.

**Instructions** :
1. Créez une page `cv.html` complète
2. Incluez toutes les sections classiques d'un CV :
   - En-tête avec informations personnelles
   - Expérience professionnelle
   - Formation
   - Compétences techniques
   - Projets personnels
   - Centres d'intérêt
   - Contact
3. Utilisez des ancres pour naviguer rapidement entre sections
4. Ajoutez des liens vers vos profils professionnels
5. Incluez des images ou icônes appropriées
6. Rendez-le responsive en pensée (même sans CSS pour l'instant)

**Critères de validation** :
- [ ] Structure sémantique complète et logique
- [ ] Navigation interne fluide
- [ ] Contenu professionnel et bien présenté
- [ ] Liens externes pertinents
- [ ] Images avec textes alternatifs

**Indices** :
- Pensez à la hiérarchie des informations
- Utilisez des listes pour les compétences et expériences
- Les ancres permettent une navigation rapide

## Intégration Inter-modules

### Exercice 1.9 : Préparation Module 2
**Objectif** : Anticiper les concepts du Module 2 en appliquant la sémantique HTML.

**Instructions** :
1. Reprenez votre portfolio de l'exercice 1.4
2. Remplacez les `<div>` génériques par des éléments sémantiques appropriés :
   - `<header>` pour l'en-tête
   - `<nav>` pour la navigation
   - `<main>` pour le contenu principal
   - `<section>` pour chaque section majeure
   - `<footer>` pour le pied de page
3. Ajoutez des métadonnées pertinentes dans le `<head>`
4. Créez une structure de navigation avec des liens d'ancrage
5. Testez l'accessibilité de base (navigation au clavier)

**Critères de validation** :
- [ ] Éléments sémantiques utilisés correctement
- [ ] Métadonnées dans le `<head>` (charset, viewport, description)
- [ ] Navigation par ancres fonctionnelle
- [ ] Structure logique et accessible

**Indices** :
- Les éléments sémantiques améliorent le SEO et l'accessibilité
- Utilisez `<meta charset="UTF-8">` pour le jeu de caractères
- Testez avec la touche Tab pour la navigation clavier

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Validité** : Le code HTML passe la validation W3C
- **Accessibilité** : Utilisation d'attributs `alt` et labels appropriés
- **Sémantique** : Utilisation correcte des balises selon leur but
- **Navigation** : Liens fonctionnels et intuitifs
- **Contenu** : Texte original et pertinent
- **Structure** : Organisation logique et hiérarchisée

## Ressources d'Aide

- [MDN Web Docs - HTML Basics](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Validator](https://validator.w3.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Prochaines Étapes

Une fois ces exercices terminés, vous serez prêt à aborder le Module 2 avec une solide compréhension des bases HTML. N'hésitez pas à expérimenter et à personnaliser vos créations !