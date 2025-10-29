# Module 2 : Structure et Sémantique HTML

## Aperçu
Maintenant que vous connaissez les bases du HTML, construisons une structure de page web appropriée. Vous apprendrez les éléments HTML sémantiques qui donnent du sens à votre contenu et rendent vos sites accessibles à tous, y compris les lecteurs d'écran et les moteurs de recherche.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Utiliser des éléments HTML sémantiques pour une meilleure structure
- Créer du contenu web accessible
- Construire des mises en page de page web complètes
- Ajouter des images, liens et multimédia
- Comprendre la structure des documents HTML

## Prérequis
- Module 1 : Connaissances HTML de base
- Compréhension des balises de base (h1, p, ul, etc.)

## Matériaux Nécessaires
- Éditeur VS Code avec extension Live Server
- Images d'exemple (ou utilisez des URLs d'images en ligne)

## Structure de Session
- Session 1 : Éléments HTML Sémantiques (30 min)
- Session 2 : Liens, Images et Multimédia (30 min)
- Activité Pratique : Construire une Page de Recette Complète (1 heure)

## Théorie : HTML Sémantique

### Pourquoi le HTML Sémantique est Important
Le HTML sémantique utilise des balises significatives qui décrivent le but du contenu :

**Avantages :**
- **Accessibilité** : Les lecteurs d'écran peuvent mieux naviguer
- **SEO** : Les moteurs de recherche comprennent votre contenu
- **Maintenabilité** : Le code est plus facile à lire et à mettre à jour
- **Standards** : Suit les meilleures pratiques du développement web

### Éléments Sémantiques Courants

| Élément | But | Usage Exemple |
|---------|-----|---------------|
| `<header>` | En-tête du site/page | Logo, navigation, titre du site |
| `<nav>` | Liens de navigation | Menu principal, fil d'Ariane |
| `<main>` | Contenu principal | Contenu primaire de la page |
| `<section>` | Regroupement thématique | Chapitres, différents sujets |
| `<article>` | Contenu indépendant | Articles de blog, actualités |
| `<aside>` | Contenu latéral | Barres latérales, infos liées |
| `<footer>` | Pied de page du site/page | Copyright, contact |

## Activité Pratique : Liens et Images

### Ajouter des Liens
Les liens connectent vos pages et permettent la navigation :

```html
<!-- URL absolue -->
<a href="https://www.google.com">Visiter Google</a>

<!-- Lien relatif (même dossier) -->
<a href="about.html">À Propos</a>

<!-- Lien avec target="_blank" s'ouvre dans un nouvel onglet -->
<a href="https://example.com" target="_blank">Ouvrir dans un Nouvel Onglet</a>
```

### Ajouter des Images
Les images rendent vos pages visuelles :

```html
<!-- Image de base -->
<img src="photo.jpg" alt="Description de l'image">

<!-- Image avec taille -->
<img src="photo.jpg" alt="Mon chat" width="300" height="200">

<!-- Image du web -->
<img src="https://example.com/image.jpg" alt="Image en ligne">
```

**Important :** Incluez toujours du texte `alt` pour l'accessibilité !

## Projet : Page de Site de Recettes

Créez une page de recette complète utilisant le HTML sémantique :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recette de Cookies aux Pépites de Chocolat</title>
</head>
<body>
    <header>
        <h1>Ma Collection de Recettes</h1>
        <nav>
            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#recipes">Recettes</a></li>
                <li><a href="#about">À Propos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h2>Cookies aux Pépites de Chocolat Classiques</h2>
                <p>Temps de préparation : 15 min | Temps de cuisson : 12 min | Pour 24 cookies</p>
            </header>

            <section id="ingredients">
                <h3>Ingrédients</h3>
                <ul>
                    <li>2 1/4 tasses de farine tout usage</li>
                    <li>1 cuillère à café de bicarbonate de soude</li>
                    <li>1 tasse de beurre non salé, ramolli</li>
                    <li>3/4 tasse de sucre granulé</li>
                    <li>3/4 tasse de sucre brun</li>
                    <li>2 gros œufs</li>
                    <li>2 cuillères à café d'extrait de vanille</li>
                    <li>2 tasses de pépites de chocolat</li>
                </ul>
            </section>

            <section id="instructions">
                <h3>Instructions</h3>
                <ol>
                    <li>Préchauffez le four à 190°C</li>
                    <li>Crèmez le beurre avec les sucres</li>
                    <li>Incorporez les œufs et la vanille</li>
                    <li>Mélangez les ingrédients secs séparément</li>
                    <li>Combinez les ingrédients humides et secs</li>
                    <li>Incorporez les pépites de chocolat</li>
                    <li>Déposez des cuillerées sur la plaque</li>
                    <li>Cuisez 9-11 minutes</li>
                </ol>
            </section>

            <section id="tips">
                <h3>Conseils du Chef</h3>
                <p>Pour des cookies plus moelleux, sous-cuisez légèrement. Ils continueront de cuire sur la plaque chaude.</p>
            </section>
        </article>
    </main>

    <aside>
        <h3>Recettes Populaires</h3>
        <ul>
            <li><a href="brownies.html">Brownies Fudge</a></li>
            <li><a href="muffins.html">Muffins aux Myrtilles</a></li>
            <li><a href="cake.html">Cupcakes Vanille</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 Ma Collection de Recettes. Tous droits réservés.</p>
    </footer>
</body>
</html>
```

## Évaluation
Construisez une page de portfolio personnel avec :
- Structure sémantique appropriée (header, nav, main, footer)
- Plusieurs sections pour différentes zones de contenu
- Liens vers des sites web externes et navigation interne
- Images avec du texte alt descriptif et accessibilité
- Au moins 3 pages différentes liées ensemble
- Utilisation appropriée des éléments sémantiques pour le SEO

## Défi Supplémentaire
Ajoutez un tableau pour afficher les informations nutritionnelles de votre recette :

```html
<table>
    <caption>Informations Nutritionnelles (par cookie)</caption>
    <thead>
        <tr>
            <th>Nutriment</th>
            <th>Quantité</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Calories</td>
            <td>150</td>
        </tr>
        <tr>
            <td>Protéines</td>
            <td>2g</td>
        </tr>
    </tbody>
</table>
```

## Prochaines Étapes
Excellent travail avec le HTML sémantique ! Ensuite, nous ajouterons de jolis styles avec CSS pour rendre vos pages visuellement attrayantes.

## Ressources
- [MDN : HTML Sémantique](https://developer.mozilla.org/fr/docs/Glossary/Semantics)
- [WebAIM : Accessibilité Web](https://webaim.org/)
- [HTML5 Doctor : Éléments Sémantiques](http://html5doctor.com/)