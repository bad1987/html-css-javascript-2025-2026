# Module 3 : Notions Fondamentales du CSS

## Aperçu
Maintenant que vous maîtrisez la structure HTML, ajoutons de la beauté à vos pages avec CSS ! Ce module vous apprendra les bases du style CSS pour contrôler l'apparence de vos éléments HTML.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Comprendre comment fonctionne CSS
- Appliquer des couleurs et des polices
- Contrôler les espacements et les dimensions
- Utiliser des sélecteurs CSS de base
- Lier des fichiers CSS à vos pages HTML
- Créer des designs visuellement attrayants

## Prérequis
- Module 1 et 2 : Connaissances HTML de base et structure
- Compréhension des éléments HTML courants

## Matériaux Nécessaires
- Éditeur VS Code avec extension Live Server
- Navigateur web moderne
- Fichiers HTML des modules précédents

## Structure de Session
- Session 1 : Introduction à CSS (30 min)
- Session 2 : Couleurs, Polices et Texte (30 min)
- Activité Pratique : Styler une Page Personnelle (1 heure)

## Théorie : Qu'est-ce que CSS ?

### Comment CSS Fonctionne
CSS (Cascading Style Sheets) contrôle l'apparence de vos éléments HTML. Il fonctionne comme une "feuille de style" qui dit au navigateur comment afficher chaque élément.

### Trois Façons d'Appliquer CSS

1. **CSS Inline** (directement dans les balises HTML) :
```html
<p style="color: blue; font-size: 20px;">Texte stylé</p>
```

2. **CSS Interne** (dans la section `<head>`) :
```html
<head>
    <style>
        p { color: blue; font-size: 20px; }
    </style>
</head>
```

3. **CSS Externe** (fichier séparé - recommandé) :
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

## Activité Pratique : Votre Première Feuille de Style

### Étape 1 : Créer un Fichier CSS
1. Créez un fichier `style.css` dans le même dossier que votre `index.html`
2. Liez-le dans votre HTML avec : `<link rel="stylesheet" href="style.css">`

### Étape 2 : Sélecteurs CSS de Base

```css
/* Tous les paragraphes */
p {
    color: blue;
    font-size: 16px;
}

/* Éléments par classe */
.destacado {
    font-weight: bold;
    background-color: yellow;
}

/* Éléments par ID */
#principal {
    border: 2px solid black;
    padding: 10px;
}
```

### Étape 3 : Propriétés de Couleur

```css
/* Noms de couleurs */
h1 {
    color: red;
}

/* Codes hexadécimaux */
h2 {
    color: #FF0000;
}

/* RGB */
p {
    color: rgb(255, 0, 0);
}

/* Couleurs d'arrière-plan */
body {
    background-color: #f0f0f0;
}
```

### Étape 4 : Polices et Texte

```css
/* Famille de polices */
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-family: 'Georgia', serif;
    font-size: 32px;
    font-weight: bold;
}

/* Espacement des lignes */
p {
    line-height: 1.6;
}

/* Alignement du texte */
h1 {
    text-align: center;
}

p {
    text-align: justify;
}
```

### Étape 5 : Espacement et Dimensions

```css
/* Marges (extérieur) */
div {
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
}

/* Rembourrage (intérieur) */
div {
    padding: 15px;
}

/* Largeur et hauteur */
img {
    width: 300px;
    height: 200px;
}

/* Bordures */
div {
    border: 1px solid #ccc;
    border-radius: 5px;
}
```

## Projet : Page Personnelle Stylée

Améliorez votre page de profil du Module 1 avec du CSS :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Profil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="principal">
        <h1>Mon Profil Personnel</h1>
        <p>Développeur Web en Apprentissage</p>
    </header>

    <main>
        <section class="about">
            <h2>À Propos de Moi</h2>
            <p>Je suis passionné par le développement web et j'apprends HTML, CSS et JavaScript.</p>
        </section>

        <section class="interets">
            <h2>Mes Intérêts</h2>
            <ul>
                <li>Programmation</li>
                <li class="destacado">Design Web</li>
                <li>Technologie</li>
            </ul>
        </section>
    </main>
</body>
</html>
```

```css
/* style.css */
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
}

#principal {
    background-color: #007bff;
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 30px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

h2 {
    color: #333;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

section {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.destacado {
    background-color: #fff3cd;
    padding: 5px;
    border-radius: 3px;
}

ul {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
}

li {
    margin-bottom: 5px;
}
```

## Évaluation
1. Créez une page avec au moins 3 sections différentes
2. Appliquez des couleurs cohérentes dans tout le design
3. Utilisez au moins 4 propriétés CSS différentes
4. Assurez-vous que la page est lisible et attrayante

## Défi Supplémentaire
Ajoutez des effets hover (survol) :

```css
.destacado:hover {
    background-color: #ffeaa7;
    cursor: pointer;
    transition: background-color 0.3s;
}
```

## Prochaines Étapes
Bravo pour vos premiers pas en CSS ! Au prochain module, nous apprendrons la mise en page CSS pour organiser vos éléments sur la page.

## Ressources
- [MDN : Premiers Pas en CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)
- [CSS-Tricks Guide Complet](https://css-tricks.com/guides/)
- [FreeCodeCamp CSS](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)