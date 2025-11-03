# Module 1 : Introduction au Développement Web

## Aperçu
Bienvenue dans votre voyage vers le développement web ! Dans ce module, vous apprendrez ce qu'est HTML et comment il forme la base de chaque site web. Nous commencerons par les bases absolues et construirons votre première page web simple.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Comprendre ce que font HTML, CSS et JavaScript
- Créer une structure de document HTML de base
- Ajouter du contenu texte à une page web
- Utiliser des balises HTML de base pour le formatage
- Prévisualiser votre travail dans un navigateur

## Prérequis
- Aucun ! Ceci est conçu pour les débutants complets.

## Matériaux Nécessaires
- Éditeur VS Code (téléchargez depuis https://code.visualstudio.com/)
- Un navigateur web moderne (Chrome, Firefox, Edge ou Safari)
- Extension VS Code : Live Server (pour une prévisualisation facile dans le navigateur)

## Structure de Session
- Session 1 : Qu'est-ce que le Développement Web ? (30 min)
- Session 2 : Votre Première Page HTML (30 min)
- Activité Pratique : Construire une Page de Profil Personnel Simple (1 heure)

## Théorie : Qu'est-ce que le Développement Web ?

### Les Trois Piliers du Développement Web
Chaque site web que vous visitez est construit en utilisant trois technologies de base :

1. **HTML (HyperText Markup Language)** : La structure et le contenu de la page
   - Comme le squelette d'un bâtiment
   - Définit les titres, paragraphes, images, liens

2. **CSS (Cascading Style Sheets)** : Le style visuel et la mise en page
   - Comme la peinture, les meubles et les décorations
   - Contrôle les couleurs, polices, espacement, positionnement

3. **JavaScript** : L'interactivité et le comportement
   - Comme le système électrique et les appareils
   - Rend les pages réactives aux actions des utilisateurs

### Comment Fonctionnent les Navigateurs
Lorsque vous tapez une adresse de site web :
1. Le navigateur demande le fichier HTML à un serveur
2. Le navigateur lit le HTML et construit une structure de page
3. Si CSS/JavaScript sont liés, le navigateur les applique
4. Vous voyez la page web finale !

## Activité Pratique : Votre Première Page HTML

### Étape 1 : Configurer Votre Espace de Travail
1. Ouvrez VS Code
2. Créez un nouveau dossier appelé "module-01"
3. À l'intérieur, créez un fichier appelé "index.html"
4. Installez l'extension Live Server dans VS Code

### Étape 2 : Structure HTML de Base
Chaque page HTML commence par cette structure de base :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ma Première Page Web</title>
</head>
<body>
    <!-- Votre contenu va ici -->
</body>
</html>
```

### Étape 3 : Ajouter du Contenu
Ajoutons du contenu de base à votre page :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ma Première Page Web</title>
</head>
<body>
    <h1>Bonjour, Monde !</h1>
    <p>Ceci est ma première page web. J'apprends HTML !</p>
    <p>HTML signifie <strong>HyperText Markup Language</strong>.</p>

    <h2>Mes Objectifs pour Ce Cours</h2>
    <ul>
        <li>Apprendre la structure HTML sémantique</li>
        <li>Maîtriser le style CSS et le design responsive</li>
        <li>Comprendre l'interactivité JavaScript et les APIs</li>
        <li>Construire des applications web full-stack</li>
        <li>Appliquer les bonnes pratiques de développement</li>
    </ul>
</body>
</html>
```

### Étape 4 : Balises HTML Courantes
| Balise | But | Exemple |
|--------|-----|---------|
| `<h1>` à `<h6>` | Titres (h1 est le plus important) | `<h1>Titre Principal</h1>` |
| `<p>` | Paragraphes | `<p>Ceci est un paragraphe.</p>` |
| `<strong>` | Texte en gras | `<strong>Important !</strong>` |
| `<em>` | Texte en italique | `<em>Texte souligné</em>` |
| `<ul>` | Liste non ordonnée | `<ul><li>Élément 1</li></ul>` |
| `<ol>` | Liste ordonnée | `<ol><li>Premier</li></ol>` |

## Évaluation
Créez une page d'introduction personnelle qui inclut :
- Votre nom comme titre principal
- Un bref paragraphe sur vous
- Une liste de 3 choses que vous espérez apprendre
- Au moins 2 niveaux de titres différents

## Projet : Page de Profil Personnel
Construisez une page web simple qui vous présente. Incluez :
- Un titre principal avec votre nom
- Plusieurs paragraphes sur vos intérêts
- Une liste de vos choses préférées
- Différents formats de texte (gras, italique)

## Prochaines Étapes
Excellent travail ! Vous avez créé votre première page web. Dans le prochain module, nous plongerons plus profondément dans la structure HTML et apprendrons les éléments sémantiques qui donnent du sens à votre contenu.

## Ressources
- [MDN Web Docs : Bases HTML](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools Tutoriel HTML](https://www.w3schools.com/html/)
- [FreeCodeCamp Cours HTML](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)