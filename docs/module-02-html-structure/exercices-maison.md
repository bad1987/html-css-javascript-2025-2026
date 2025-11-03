# Exercices Maison - Module 2 : Structure et Sémantique HTML

## Aperçu
Ces exercices vous permettent de maîtriser les éléments HTML sémantiques et de créer des pages web accessibles et bien structurées. Concentrez-vous sur la signification du contenu plutôt que sur son apparence.

## Niveau Débutant

### Exercice 2.1 : Structure Sémantique de Base
**Objectif** : Transformer une page HTML basique en structure sémantique.

**Instructions** :
1. Reprenez votre page de l'exercice 1.4 (portfolio)
2. Remplacez toutes les `<div>` génériques par des éléments sémantiques appropriés :
   - `<header>` pour l'en-tête du portfolio
   - `<nav>` pour la navigation
   - `<main>` pour le contenu principal
   - `<section>` pour chaque section (à propos, compétences, etc.)
   - `<footer>` pour le pied de page
3. Ajoutez des attributs ARIA si nécessaire
4. Testez avec un lecteur d'écran (ou simulez en navigant avec Tab)

**Critères de validation** :
- [ ] Éléments sémantiques utilisés correctement
- [ ] Structure logique et hiérarchisée
- [ ] Navigation clavier fonctionnelle
- [ ] Aucun `<div>` superflu

**Indices** :
- `<header>` contient généralement le titre principal et la navigation
- `<main>` ne doit apparaître qu'une fois par page
- `<section>` regroupe du contenu thématique

### Exercice 2.2 : Navigation et Liens Structurés
**Objectif** : Créer un système de navigation complet avec des liens bien organisés.

**Instructions** :
1. Créez une page `navigation.html`
2. Créez un menu de navigation avec :
   - Liens vers les sections de la page (ancres)
   - Liens vers d'autres pages de votre site
   - Liens externes vers des ressources utiles
3. Organisez la navigation en catégories logiques
4. Ajoutez des breadcrumbs (fil d'Ariane) pour la navigation hiérarchique
5. Incluez un plan du site en pied de page

**Critères de validation** :
- [ ] Navigation principale accessible
- [ ] Liens d'ancrage fonctionnels (`#section`)
- [ ] Liens relatifs et absolus corrects
- [ ] Structure de navigation logique

**Indices** :
- Utilisez `<nav>` pour la navigation principale
- Les breadcrumbs utilisent souvent `<ol>` avec des liens
- Pensez à l'attribut `aria-current` pour la page active

## Niveau Intermédiaire

### Exercice 2.3 : Page de Recette Structurée
**Objectif** : Créer une page de recette utilisant tous les éléments sémantiques appris.

**Instructions** :
1. Créez une page `recette.html` pour votre recette préférée
2. Utilisez la structure sémantique complète :
   - `<header>` avec titre et informations générales
   - `<nav>` pour naviguer entre sections de la recette
   - `<main>` contenant `<article>` pour la recette
   - `<section>` pour ingrédients, instructions, conseils
   - `<aside>` pour informations nutritionnelles ou variantes
   - `<footer>` avec crédits et liens liés
3. Incluez des métadonnées pertinentes dans le `<head>`
4. Ajoutez des liens vers d'autres recettes similaires

**Critères de validation** :
- [ ] Structure sémantique complète et appropriée
- [ ] Contenu organisé en sections logiques
- [ ] Métadonnées dans le `<head>` (auteur, description, mots-clés)
- [ ] Liens de navigation internes fonctionnels

**Indices** :
- Utilisez `<time>` pour les durées de préparation/cuisson
- `<figure>` et `<figcaption>` pour les images de plats
- Pensez au SEO avec les métadonnées

### Exercice 2.4 : Formulaire Accessible
**Objectif** : Créer un formulaire de contact entièrement accessible.

**Instructions** :
1. Créez une page `contact.html` avec un formulaire complet
2. Incluez tous les éléments d'accessibilité :
   - Labels explicites pour chaque champ (`<label>`)
   - Groupement logique avec `<fieldset>` et `<legend>`
   - Messages d'erreur associés aux champs
   - Navigation clavier intuitive
   - Attributs ARIA appropriés
3. Types de champs variés : texte, email, tel, select, textarea, radio, checkbox
4. Validation HTML5 de base
5. Structure sémantique autour du formulaire

**Critères de validation** :
- [ ] Tous les champs ont des labels associés
- [ ] Groupes logiques avec `<fieldset>`
- [ ] Navigation clavier complète (Tab order)
- [ ] Attributs `aria-describedby` pour les erreurs
- [ ] Types de champs appropriés (`type="email"`, etc.)

**Indices** :
- `<label for="id">` lie le label au champ
- `aria-required="true"` indique les champs obligatoires
- Testez avec un lecteur d'écran

## Niveau Avancé

### Exercice 2.5 : Site de Blog Complet
**Objectif** : Créer un site de blog multi-pages avec structure sémantique avancée.

**Instructions** :
1. Créez un site de blog avec 4 pages :
   - `index.html` : Page d'accueil avec liste d'articles
   - `article.html` : Page détaillée d'un article
   - `about.html` : Page à propos de l'auteur
   - `contact.html` : Formulaire de contact
2. Utilisez des éléments sémantiques avancés :
   - `<time>` pour les dates
   - `<figure>` et `<figcaption>` pour les images
   - `<blockquote>` pour les citations
   - `<address>` pour les informations de contact
   - `<mark>` pour mettre en évidence du texte
3. Implémentez un système d'ancres complet
4. Ajoutez des métadonnées structurées avec microdata ou JSON-LD
5. Rendez le site accessible aux technologies d'assistance

**Critères de validation** :
- [ ] Structure sémantique riche et appropriée
- [ ] Navigation fluide entre pages
- [ ] Métadonnées structurées présentes
- [ ] Accessibilité complète (WCAG 2.1 niveau A)
- [ ] Contenu de qualité et organisé

**Indices** :
- Utilisez `itemscope` et `itemtype` pour les données structurées
- `<time datetime="2024-01-01">1er janvier 2024</time>`
- Testez l'accessibilité avec des outils comme WAVE

### Exercice 2.6 : Application Web Accessible
**Objectif** : Créer une petite application web avec focus sur l'accessibilité.

**Instructions** :
1. Créez une application de "Liste de tâches" (`todo.html`)
2. Fonctionnalités de base :
   - Ajouter une tâche (formulaire)
   - Marquer comme terminée (checkbox accessible)
   - Supprimer une tâche (bouton avec confirmation)
   - Filtrer les tâches (terminées/en cours/toutes)
3. Accessibilité complète :
   - Labels et descriptions appropriées
   - États ARIA dynamiques (`aria-checked`, `aria-expanded`)
   - Messages de statut pour les actions (`aria-live`)
   - Raccourcis clavier (Enter, Espace, Suppr)
   - Focus management correct
4. Structure sémantique appropriée
5. États sauvegardés (localStorage simulé)

**Critères de validation** :
- [ ] Toutes les interactions accessibles au clavier
- [ ] États communiqués correctement (`aria-live`)
- [ ] Labels et descriptions complètes
- [ ] Structure sémantique logique
- [ ] Gestion du focus appropriée

**Indices** :
- `role="listbox"` pour les listes sélectionnables
- `aria-label` pour les boutons iconiques
- `tabindex` pour gérer l'ordre de focus

## Défi Bonus

### Exercice 2.7 : Documentation Technique
**Objectif** : Créer une page de documentation technique entièrement sémantique.

**Instructions** :
1. Créez une page `documentation.html` pour une bibliothèque JavaScript fictive
2. Incluez tous les éléments de documentation technique :
   - En-tête avec titre et version
   - Table des matières avec ancres
   - Sections pour installation, utilisation, API
   - Exemples de code avec `<code>` et `<pre>`
   - Tableaux pour les paramètres et méthodes
   - Notes et avertissements avec `<aside>`
   - Pied de page avec navigation et liens
3. Utilisez des éléments sémantiques avancés :
   - `<details>` et `<summary>` pour les sections repliables
   - `<dfn>` pour définir des termes techniques
   - `<abbr>` pour les abréviations
   - `<kbd>` pour les raccourcis clavier
4. Ajoutez une recherche interne simulée
5. Rendez-la imprimable avec des sauts de page appropriés

**Critères de validation** :
- [ ] Structure de documentation professionnelle
- [ ] Navigation et table des matières complètes
- [ ] Code bien présenté avec coloration syntaxique simulée
- [ ] Accessibilité technique maintenue
- [ ] Contenu informatif et bien organisé

**Indices** :
- `<dfn>` définit un terme, utilisable dans `<abbr title="...">`
- `<kbd>Ctrl</kbd>+<kbd>C</kbd>` pour les raccourcis
- `@media print` pour le CSS d'impression (anticipation Module 3)

## Intégration Inter-modules

### Exercice 2.8 : Préparation Module 3
**Objectif** : Préparer l'intégration CSS en créant des classes sémantiques.

**Instructions** :
1. Reprenez votre site de blog de l'exercice 2.5
2. Ajoutez des classes CSS sémantiques aux éléments :
   - Classes fonctionnelles (`btn-primary`, `card`, `hero`)
   - Classes de mise en page (`container`, `grid`, `flex`)
   - Classes d'état (`is-active`, `is-hidden`, `has-error`)
   - Classes utilitaires (`text-center`, `mb-3`, `bg-light`)
3. Structurez le HTML pour faciliter le CSS futur :
   - Conteneurs appropriés pour les layouts
   - Éléments génériques pour les composants réutilisables
   - Attributs data- pour les interactions JavaScript
4. Préparez des sections pour les styles CSS (commentaires HTML)
5. Documentez les classes utilisées dans un commentaire

**Critères de validation** :
- [ ] Classes sémantiques et réutilisables
- [ ] Structure préparée pour CSS Grid et Flexbox
- [ ] Attributs data- pour les interactions futures
- [ ] Documentation des classes dans le code
- [ ] Préparation pour responsive design

**Indices** :
- Préfixez les classes utilitaires (`u-`, `text-`, `bg-`)
- Utilisez des noms descriptifs (`btn-cta`, `nav-main`)
- Préparez des containers pour les breakpoints

### Exercice 2.9 : Audit d'Accessibilité
**Objectif** : Auditer et améliorer l'accessibilité d'une page web existante.

**Instructions** :
1. Choisissez une page web existante (ou utilisez une de vos créations)
2. Effectuez un audit d'accessibilité complet :
   - Navigation clavier (Tab order)
   - Lecteurs d'écran (textes alternatifs, labels)
   - Contraste des couleurs (simulé)
   - Structure sémantique
   - Attributs ARIA manquants
3. Corrigez tous les problèmes identifiés :
   - Ajoutez des labels manquants
   - Améliorez les textes alternatifs
   - Corrigez la structure sémantique
   - Ajoutez des attributs ARIA nécessaires
4. Créez un rapport d'audit avec avant/après
5. Testez avec des outils d'accessibilité

**Critères de validation** :
- [ ] Rapport d'audit détaillé fourni
- [ ] Améliorations mesurables apportées
- [ ] Conformité WCAG 2.1 niveau AA visée
- [ ] Tests avec outils automatisés
- [ ] Amélioration de l'expérience utilisateur

**Indices** :
- Utilisez l'extension WAVE ou Lighthouse pour l'audit
- Axe DevTools pour l'analyse détaillée
- NVDA ou JAWS pour tester les lecteurs d'écran
- Documentez chaque correction apportée

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Validité** : Code HTML valide selon le W3C Validator
- **Accessibilité** : Conformité WCAG 2.1 niveau A minimum
- **Sémantique** : Utilisation appropriée de tous les éléments sémantiques
- **Structure** : Hiérarchie logique et navigable
- **SEO** : Métadonnées et structure optimisées pour les moteurs de recherche
- **Performance** : Structure permettant un rendu rapide

## Ressources d'Aide

- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [Semantic HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_semantic_HTML)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 3 où vous ajouterez des styles visuels avec CSS. Vous aurez désormais une base solide pour créer des interfaces utilisateur attrayantes et accessibles !