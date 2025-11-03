# Exercices Maison - Module 4 : Mise en Page et Design Responsive avec CSS

## Aperçu
Ces exercices vous permettent de maîtriser Flexbox, CSS Grid, et le design responsive. Vous apprendrez à créer des layouts modernes qui s'adaptent à tous les appareils et tailles d'écran.

## Niveau Débutant

### Exercice 4.1 : Introduction à Flexbox
**Objectif** : Comprendre et utiliser les bases de Flexbox pour aligner des éléments.

**Instructions** :
1. Créez une page `flexbox-basics.html` avec plusieurs conteneurs
2. Expérimentez avec les propriétés Flexbox :
   - `display: flex` pour activer Flexbox
   - `justify-content` pour l'alignement horizontal
   - `align-items` pour l'alignement vertical
   - `flex-direction` pour changer la direction
3. Créez différents exemples :
   - Navigation centrée horizontalement
   - Carte avec image et texte alignés
   - Boutons alignés à droite
   - Contenu centré verticalement et horizontalement

**Critères de validation** :
- [ ] Au moins 5 exemples Flexbox différents
- [ ] Utilisation de toutes les propriétés de base
- [ ] Alignements corrects visibles
- [ ] Code commenté expliquant chaque exemple

**Indices** :
- `justify-content: center` centre horizontalement
- `align-items: center` centre verticalement
- `flex-direction: column` change en disposition verticale

### Exercice 4.2 : Modèle de Boîte CSS
**Objectif** : Maîtriser le modèle de boîte avec margin, border, padding, et content.

**Instructions** :
1. Créez une page `box-model.html` démontrant le modèle de boîte
2. Créez plusieurs boîtes avec différentes propriétés :
   - Marges extérieures (`margin`)
   - Bordures (`border`)
   - Espacement intérieur (`padding`)
   - Dimensions du contenu (`width`, `height`)
3. Utilisez les outils de développement pour inspecter les boîtes
4. Démontrez la différence entre `box-sizing: content-box` et `border-box`

**Critères de validation** :
- [ ] Différentes configurations de boîte visibles
- [ ] Utilisation de toutes les propriétés du modèle de boîte
- [ ] Explication des différences de `box-sizing`
- [ ] Outils de développement utilisés pour l'inspection

**Indices** :
- `box-sizing: border-box` inclut padding et border dans la largeur
- `margin: 0 auto` centre horizontalement les blocs
- Inspectez avec F12 > Elements dans Chrome

## Niveau Intermédiaire

### Exercice 4.3 : Layout de Portfolio Responsive
**Objectif** : Créer un portfolio complet avec navigation, sections, et design responsive.

**Instructions** :
1. Créez un portfolio multi-sections (`portfolio-responsive.html`)
2. Incluez :
   - Header avec navigation (Flexbox)
   - Section hero avec titre et description
   - Section projets sous forme de grille
   - Section à propos avec layout flexible
   - Footer avec informations de contact
3. Rendez-le responsive :
   - Navigation hamburger pour mobile
   - Grille adaptative (3 colonnes → 2 → 1)
   - Tailles de police adaptatives
   - Espacement ajusté selon l'écran

**Critères de validation** :
- [ ] Layout utilisant Flexbox et Grid
- [ ] Design responsive sur mobile/tablette/desktop
- [ ] Navigation fonctionnelle sur tous les appareils
- [ ] Images et contenu adaptés aux écrans

**Indices** :
- `@media (max-width: 768px)` pour les breakpoints
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Utilisez des unités relatives (`rem`, `em`, `%`)

### Exercice 4.4 : Introduction à CSS Grid
**Objectif** : Apprendre les bases de CSS Grid pour créer des layouts complexes.

**Instructions** :
1. Créez une page `grid-basics.html` avec différents layouts Grid
2. Expérimentez avec :
   - `grid-template-columns` et `grid-template-rows`
   - `grid-column` et `grid-row` pour positionner des éléments
   - `grid-gap` pour l'espacement
   - `grid-template-areas` pour des layouts nommés
3. Créez des exemples pratiques :
   - Grille de galerie photo
   - Layout de magazine (en-tête, sidebar, contenu principal)
   - Formulaire organisé en grille

**Critères de validation** :
- [ ] Au moins 4 exemples Grid différents
- [ ] Utilisation de `grid-template-areas`
- [ ] Positionnement explicite d'éléments
- [ ] Espacement cohérent avec `gap`

**Indices** :
- `grid-template-columns: 1fr 2fr 1fr` crée des colonnes proportionnelles
- `grid-column: 1 / 3` fait span sur 2 colonnes
- Nommez les areas : `grid-template-areas: "header header" "nav main"`

## Niveau Avancé

### Exercice 4.5 : Application de Gestion de Projets
**Objectif** : Créer une interface de gestion de projets avec layout complexe.

**Instructions** :
1. Créez une application `gestion-projets.html` avec :
   - Sidebar de navigation (projets, tâches)
   - En-tête avec recherche et profil utilisateur
   - Zone principale avec tableau de bord
   - Grille de cartes de projets
   - Modales pour créer/éditer des projets
2. Utilisez CSS Grid pour le layout principal :
   - Grid areas pour l'organisation globale
   - Grilles imbriquées pour les sections
   - Flexbox pour les composants internes
3. Rendez tout responsive avec breakpoints intelligents

**Critères de validation** :
- [ ] Layout complexe utilisant Grid et Flexbox
- [ ] Interface fonctionnelle et intuitive
- [ ] Design entièrement responsive
- [ ] Animations et transitions fluides
- [ ] Architecture CSS organisée (BEM ou similaire)

**Indices** :
- Utilisez `grid-template-areas` pour le layout principal
- Pensez mobile-first pour le responsive
- Organisez votre CSS en composants modulaires

### Exercice 4.6 : Framework CSS Simplifié
**Objectif** : Créer votre propre système de grille responsive inspiré de Bootstrap.

**Instructions** :
1. Créez un fichier `mon-framework.css` avec :
   - Système de grille (12 colonnes)
   - Classes utilitaires (`col-6`, `offset-3`)
   - Breakpoints (`sm-`, `md-`, `lg-`)
   - Conteneurs responsives
   - Utilitaires d'espacement (`m-3`, `p-2`)
2. Créez une page de démonstration montrant :
   - Grille de base (lignes et colonnes)
   - Grille responsive (colonnes qui s'empilent)
   - Utilitaires utilisés dans un vrai layout
3. Documentez votre framework

**Critères de validation** :
- [ ] Système de grille fonctionnel (12 colonnes)
- [ ] Breakpoints mobiles/tablettes/desktop
- [ ] Utilitaires d'espacement complets
- [ ] Documentation claire des classes
- [ ] Démonstration pratique complète

**Indices** :
- `.container { max-width: 1200px; margin: 0 auto; }`
- `.row { display: flex; flex-wrap: wrap; }`
- `.col-6 { flex: 0 0 50%; max-width: 50%; }`

## Défi Bonus

### Exercice 4.7 : Design System Complet
**Objectif** : Créer un design system complet avec layout, composants, et thème.

**Instructions** :
1. Étendez votre framework CSS avec :
   - Variables CSS pour thème (couleurs, polices, espacement)
   - Composants de base (boutons, cartes, formulaires)
   - Utilitaires avancés (display, position, z-index)
   - Thème sombre/clair intégré
   - Animations et transitions globales
2. Créez une page de styleguide (`styleguide.html`) montrant :
   - Tous les composants avec variations
   - Palette de couleurs et typographie
   - Grille et breakpoints
   - Exemples d'usage
3. Rendez-le maintenable et extensible

**Critères de validation** :
- [ ] Design system cohérent et complet
- [ ] Variables CSS organisées
- [ ] Composants réutilisables
- [ ] Styleguide professionnel
- [ ] Thème extensible

**Indices** :
- Utilisez `:root` pour les variables globales
- Préfixez les classes de composants (`ds-button`, `ds-card`)
- Documentez avec des exemples de code

### Exercice 4.8 : Optimisation de Performance Layout
**Objectif** : Optimiser un layout existant pour de meilleures performances.

**Instructions** :
1. Prenez un layout complexe existant
2. Identifiez les problèmes de performance :
   - Layout shifts coûteux (changement de `display`)
   - Repaints et reflows inutiles
   - Sélecteurs inefficaces
   - Images non optimisées
3. Appliquez les optimisations :
   - Utilisez `contain` pour isoler les layouts
   - Préférez `transform` aux changements de position
   - Optimisez les images (formats, tailles)
   - Réduisez la complexité des sélecteurs
4. Mesurez les améliorations avec les outils de développement

**Critères de validation** :
- [ ] Analyse de performance fournie (avant/après)
- [ ] Optimisations appliquées et justifiées
- [ ] Amélioration mesurable des métriques
- [ ] Layout préservé visuellement
- [ ] Code plus maintenable

**Indices** :
- Utilisez l'onglet Performance de Chrome DevTools
- `contain: layout style paint` isole les sous-arbres
- Préchargez les ressources critiques
- Utilisez `content-visibility: auto` pour les longues pages

## Intégration Inter-modules

### Exercice 4.9 : Préparation Module 5
**Objectif** : Préparer l'intégration JavaScript en ajoutant des classes pour l'interactivité.

**Instructions** :
1. Reprenez votre portfolio responsive
2. Ajoutez des classes et attributs pour JavaScript :
   - `data-*` pour stocker des informations
   - Classes pour les états (`is-active`, `is-hidden`)
   - IDs pour les éléments interactifs
   - Attributs pour la validation de formulaires
3. Préparez les structures pour :
   - Navigation JavaScript (menu mobile)
   - Filtres et recherche
   - Modales et popups
   - Formulaires avec validation
4. Documentez les hooks JavaScript dans des commentaires

**Critères de validation** :
- [ ] Attributs `data-*` appropriés ajoutés
- [ ] Classes d'état définies en CSS
- [ ] Structure prête pour JavaScript
- [ ] Commentaires indiquant les fonctionnalités futures
- [ ] Compatibilité avec l'ajout de JS préservée

**Indices** :
- `data-project-id="123"` pour identifier les éléments
- Préparez des classes `.js-hidden` pour JavaScript
- Anticipez les event listeners nécessaires

### Exercice 4.10 : Application Web Moderne
**Objectif** : Créer une application web complète combinant tous les apprentissages.

**Instructions** :
1. Créez une application de "Bloc-notes" (`notes-app.html`)
2. Fonctionnalités :
   - Créer/modifier/supprimer des notes
   - Catégoriser les notes (travail, personnel, idées)
   - Recherche dans les notes
   - Vue grille/liste
   - Thème sombre/clair
3. Layout responsive complet :
   - Sidebar pour la navigation/catégories
   - Zone principale pour les notes
   - Header avec contrôles
   - Modales pour créer/éditer
4. Préparez pour JavaScript (structure seulement)

**Critères de validation** :
- [ ] Interface utilisateur complète et intuitive
- [ ] Layout entièrement responsive
- [ ] Architecture préparée pour JavaScript
- [ ] Design moderne et accessible
- [ ] Fonctionnalités futures bien structurées

**Indices** :
- Utilisez Grid pour le layout principal
- Préparez des classes pour les états (active, selected)
- Anticipez la persistance avec localStorage

## Critères de Validation Globaux

Pour réussir ces exercices, assurez-vous que :

- **Responsive** : Design fonctionnel sur tous les appareils (mobile/tablette/desktop)
- **Performance** : Layouts optimisés (éviter les shifts de layout)
- **Accessibilité** : Navigation clavier et lecteurs d'écran supportés
- **Maintenabilité** : Code CSS organisé et documenté
- **Modernité** : Utilisation de Grid et Flexbox appropriée
- **Compatibilité** : Support des navigateurs modernes

## Ressources d'Aide

- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)
- [CSS Performance Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Grid by Example](https://gridbyexample.com/)

## Prochaines Étapes

Ces exercices vous préparent parfaitement pour le Module 5 où vous ajouterez de l'interactivité avec JavaScript. Vous maîtriserez maintenant les layouts modernes et responsives pour créer des applications web professionnelles !