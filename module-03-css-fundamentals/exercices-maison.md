# Exercices Maison - Module 3 : Notions Fondamentales du CSS

## Aperçu
Ces exercices vous permettent de maîtriser les bases du CSS : sélecteurs, propriétés, couleurs, polices, et espacement. Vous apprendrez à créer des designs visuellement attrayants et cohérents.

## Niveau Débutant

### Exercice 3.1 : Premiers Pas en CSS
**Objectif** : Lier une feuille de style CSS à une page HTML et appliquer des styles basiques.

**Instructions** :
1. Créez une page HTML simple avec du contenu (titres, paragraphes, liste)
2. Créez un fichier `style.css` séparé
3. Liez le fichier CSS à votre page HTML avec `<link rel="stylesheet" href="style.css">`
4. Appliquez les styles suivants :
   - Couleur de fond pour la page (`body`)
   - Couleur et taille de police pour les titres
   - Espacement entre les paragraphes
   - Style pour la liste (puces colorées)

**Critères de validation** :
- [ ] Fichier CSS externe correctement lié
- [ ] Au moins 5 propriétés CSS différentes utilisées
- [ ] Styles visibles dans le navigateur
- [ ] Code organisé et commenté

**Indices** :
- Utilisez `background-color` pour la couleur de fond
- `font-size` et `color` pour les textes
- `margin` ou `padding` pour l'espacement

### Exercice 3.2 : Sélecteurs CSS
**Objectif** : Maîtriser les différents types de sélecteurs CSS.

**Instructions** :
1. Créez une page HTML avec différents éléments :
   - Plusieurs paragraphes avec des classes différentes
   - Des éléments avec des IDs spécifiques
   - Une liste imbriquée
   - Des liens dans différents contextes
2. Créez des règles CSS utilisant :
   - Sélecteurs de balise (`p`, `h1`)
   - Sélecteurs de classe (`.important`, `.secondaire`)
   - Sélecteurs d'ID (`#principal`, `#footer`)
   - Sélecteurs descendants (`nav a`)
   - Sélecteurs de pseudo-classes (`:hover`, `:first-child`)

**Critères de validation** :
- [ ] Tous les types de sélecteurs utilisés au moins une fois
- [ ] Styles spécifiques appliqués selon les sélecteurs
- [ ] Effet `:hover` visible sur les liens
- [ ] Hiérarchie de spécificité respectée

**Indices** :
- Les IDs ont la plus haute spécificité (`#id > .class > element`)
- `:hover` fonctionne sur tous les éléments, pas seulement les liens
- Testez la cascade en ajoutant plusieurs règles pour le même élément

## Niveau Intermédiaire

### Exercice 3.3 : Design de Carte de Visite
**Objectif** : Créer une carte de visite élégante avec CSS.

**Instructions** :
1. Créez une page `carte-visite.html` avec une seule carte de visite
2. Incluez les informations classiques :
   - Nom et prénom
   - Poste/Profession
   - Coordonnées (téléphone, email)
   - Adresse
   - Logo ou photo (optionnel)
3. Appliquez un design professionnel :
   - Fond en dégradé ou couleur unie
   - Ombres portées (`box-shadow`)
   - Bordures arrondies
   - Typographie hiérarchisée
   - Espacement harmonieux
4. Rendez-la responsive (centrée et adaptée)

**Critères de validation** :
- [ ] Design professionnel et lisible
- [ ] Utilisation d'au moins 8 propriétés CSS différentes
- [ ] Ombres et effets visuels appropriés
- [ ] Typographie claire et hiérarchisée
- [ ] Centrage responsive sur la page

**Indices** :
- Utilisez `border-radius` pour les coins arrondis
- `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` pour une ombre douce
- `max-width` et `margin: 0 auto` pour le centrage

### Exercice 3.4 : Palette de Couleurs Cohérente
**Objectif** : Créer et appliquer une palette de couleurs cohérente sur une page.

**Instructions** :
1. Choisissez ou créez une palette de 5 couleurs harmonieuses
2. Créez une page `palette.html` démontrant l'utilisation de la palette
3. Définissez des variables CSS pour votre palette :
   ```css
   :root {
     --couleur-principale: #007bff;
     --couleur-secondaire: #6c757d;
     --couleur-accent: #28a745;
     --couleur-fond: #f8f9fa;
     --couleur-texte: #212529;
   }
   ```
4. Appliquez la palette sur différents éléments :
   - Fond de page et sections
   - Couleurs de texte et liens
   - Bordures et accents
   - Boutons et éléments interactifs

**Critères de validation** :
- [ ] Variables CSS définies et utilisées
- [ ] Palette cohérente et harmonieuse
- [ ] Application sur au moins 10 éléments différents
- [ ] Contrastes suffisants pour la lisibilité

**Indices** :
- Les variables CSS utilisent `--nom-variable` et `var(--nom-variable)`
- Testez les contrastes avec des outils en ligne
- Pensez à des variations claires/foncées de vos couleurs

## Niveau Avancé

### Exercice 3.5 : Portfolio Stylé
**Objectif** : Transformer votre portfolio HTML en design moderne avec CSS avancé.

**Instructions** :
1. Reprenez votre portfolio du Module 2
2. Appliquez un design complet avec :
   - Header avec navigation fixe
   - Sections bien espacées avec arrière-plans
   - Cartes pour présenter les projets/compétences
   - Boutons stylés avec effets hover
   - Typographie moderne (Google Fonts recommandé)
   - Icônes ou images décoratives
3. Utilisez des techniques CSS avancées :
   - Flexbox pour les layouts
   - Grid pour les galeries
   - Transitions et animations
   - Pseudo-éléments pour les décorations

**Critères de validation** :
- [ ] Design moderne et professionnel
- [ ] Utilisation de Flexbox ou Grid
- [ ] Animations et transitions fluides
- [ ] Typographie soignée
- [ ] Responsive design de base

**Indices** :
- Importez des polices Google : `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`
- Utilisez `transition: all 0.3s ease` pour les effets
- `display: flex` pour aligner les éléments horizontalement

### Exercice 3.6 : Système de Design
**Objectif** : Créer un système de design réutilisable avec CSS.

**Instructions** :
1. Créez un fichier `design-system.css` avec :
   - Variables pour couleurs, espacement, typographie
   - Classes utilitaires (`text-center`, `mb-3`, `btn-primary`)
   - Composants de base (boutons, cartes, formulaires)
   - Layout helpers (conteneurs, grilles)
2. Créez une page de démonstration `demo-systeme.html`
3. Montrez tous les composants et utilitaires :
   - Différentes tailles de boutons
   - Couleurs de texte et arrière-plans
   - Espacement cohérent
   - Composants composés (cartes avec boutons)

**Critères de validation** :
- [ ] Variables CSS complètes et organisées
- [ ] Classes utilitaires réutilisables
- [ ] Composants cohérents
- [ ] Documentation des classes utilisées
- [ ] Démonstration complète des possibilités

**Indices** :
- Préfixez les utilitaires (`u-`, `text-`, `bg-`, `p-`, `m-`)
- Utilisez une échelle d'espacement (4px, 8px, 16px, 24px, 32px...)
- Documentez avec des commentaires CSS

## Défi Bonus

### Exercice 3.7 : Thème Sombre/Clair
**Objectif** : Implémenter un système de thème sombre/clair.

**Instructions** :
1. Créez une page avec basculement de thème
2. Définissez deux jeux de variables CSS :
   ```css
   /* Thème clair */
   :root {
     --bg-color: #ffffff;
     --text-color: #333333;
     --accent-color: #007bff;
   }
   
   /* Thème sombre */
   [data-theme="dark"] {
     --bg-color: #1a1a1a;
     --text-color: #ffffff;
     --accent-color: #4dabf7;
   }
   ```
3. Ajoutez un bouton pour basculer entre les thèmes
4. Utilisez JavaScript pour changer l'attribut `data-theme`
5. Sauvegardez la préférence utilisateur (localStorage)

**Critères de validation** :
- [ ] Basculement fonctionnel entre thèmes
- [ ] Variables CSS utilisées partout
- [ ] Préférence sauvegardée
- [ ] Transitions fluides entre thèmes
- [ ] Accessibilité (préférence système respectée)

**Indices** :
- `document.documentElement.setAttribute('data-theme', 'dark')`
- `localStorage.setItem('theme', 'dark')`
- `@media (prefers-color-scheme: dark)` pour la préférence système

### Exercice 3.8 : Animation et Micro-interactions
**Objectif** : Ajouter des animations et micro-interactions à une interface.

**Instructions** :
1. Créez une page interactive avec plusieurs éléments
2. Implémentez différents types d'animations :
   - Transitions au survol (`:hover`)
   - Animations d'entrée pour les éléments
   - Transformations (rotation, échelle, translation)
   - Animations de chargement
3. Utilisez les propriétés CSS appropriées :
   - `transition`
   - `transform`
   - `animation` avec `@keyframes`
   - `opacity` et `visibility`
4. Optimisez les performances (utilisez `transform` et `opacity`)

**Critères de validation** :
- [ ] Animations fluides et non saccadées
- [ ] Utilisation appropriée des transformations
- [ ] Performances optimisées (pas de `layout` triggers)
- [ ] Interactions intuitives et agréables

**Indices** :
- Évitez d'animer `width`, `height`, `margin`, `padding`
- Préférez `transform: translate()`, `scale()`, `rotate()`
- Utilisez `will-change` pour les animations complexes

## Intégration Inter-modules

### Exercice 3.9 : Préparation Module 4
**Objectif** : Préparer la mise en page CSS en structurant le HTML pour Flexbox/Grid.

**Instructions** :
1. Reprenez votre portfolio du Module 3
2. Refactorisez le HTML pour faciliter les layouts :
   - Ajoutez des conteneurs (`<div class="container">`)
   - Créez des sections de grille (`<div class="grid">`)
   - Préparez des zones Flexbox (`<div class="flex-row">`)
   - Ajoutez des classes utilitaires de layout
3. Préparez des breakpoints pour le responsive :
   - Classes pour mobile (`mobile-only`, `desktop-hidden`)
   - Conteneurs responsives (`container-sm`, `container-lg`)
   - Utilitaires de visibilité (`hidden-sm`, `visible-lg`)
4. Documentez la structure prévue dans des commentaires

**Critères de validation** :
- [ ] Structure HTML prête pour Flexbox/Grid
- [ ] Classes utilitaires de layout définies
- [ ] Breakpoints préparés
- [ ] Commentaires explicatifs dans le code
- [ ] Compatibilité avec le Module 4 anticipée

**Indices** :
- Pensez aux noms de classes qui seront utilisés en CSS
- Préparez des sections pour `display: grid` et `display: flex`
- Anticipez les media queries du responsive

### Exercice 3.10 : Audit de Performance CSS
**Objectif** : Optimiser un fichier CSS existant pour de meilleures performances.

**Instructions** :
1. Prenez un fichier CSS existant (ou créez-en un volumineux)
2. Effectuez un audit de performance :
   - Identifiez les redondances
   - Vérifiez la spécificité excessive
   - Optimisez les sélecteurs
   - Réduisez les répétitions avec des variables
3. Appliquez les optimisations :
   - Regroupez les règles similaires
   - Utilisez l'héritage au maximum
   - Minimisez la spécificité
   - Supprimez les règles inutiles
4. Comparez les performances avant/après

**Critères de validation** :
- [ ] Fichier CSS optimisé (taille réduite)
- [ ] Spécificité réduite où possible
- [ ] Variables CSS utilisées pour éviter répétitions
- [ ] Sélecteurs optimisés (évitez les sélecteurs universels)
- [ ] Rapport de performance fourni

**Indices** :
- Utilisez l'outil "Coverage" de Chrome DevTools
- Évitez `* { margin: 0; padding: 0; }`
- Préférez les classes aux sélecteurs complexes
- Documentez vos optimisations

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Cohérence** : Palette de couleurs et typographie cohérentes
- **Performance** : CSS optimisé et efficace
- **Maintenabilité** : Code organisé avec variables et commentaires
- **Accessibilité** : Contrastes suffisants et focus visible
- **Responsive** : Design adaptable aux différentes tailles d'écran
- **Modernité** : Utilisation des dernières fonctionnalités CSS

## Ressources d'Aide

- [CSS Tricks - Complete Guide](https://css-tricks.com/guides/)
- [MDN CSS Reference](https://developer.mozilla.org/fr/docs/Web/CSS)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Coolors - Color Palette Generator](https://coolors.co/)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 4 où vous apprendrez la mise en page avec Flexbox et CSS Grid. Vous aurez maintenant des bases solides pour créer des interfaces complexes et modernes !