# Module 4 : Mise en Page et Design Responsive avec CSS

## Aperçu
Maintenant que vous maîtrisez les styles de base, apprenons à organiser vos éléments sur la page ! Ce module couvre les techniques de mise en page CSS et le design responsive pour que vos sites fonctionnent sur tous les appareils.

## Objectifs d'Apprentissage
À la fin de ce module, vous serez capable de :
- Comprendre le modèle de boîte CSS
- Utiliser Flexbox pour des mises en page flexibles
- Créer des designs adaptatifs (responsive)
- Positionner des éléments sur la page
- Construire des layouts modernes avec CSS Grid

## Prérequis
- Module 3 : Notions fondamentales du CSS
- Compréhension des sélecteurs et propriétés CSS de base

## Matériaux Nécessaires
- Éditeur VS Code avec Live Server
- Navigateur avec outils de développement
- Plusieurs appareils ou simulateur responsive pour tester

## Structure de Session
- Session 1 : Modèle de Boîte et Positionnement (30 min)
- Session 2 : Flexbox et Design Responsive (30 min)
- Activité Pratique : Construire un Layout de Portfolio Responsive (1 heure)

## Théorie : Le Modèle de Boîte CSS

Chaque élément HTML est une "boîte" avec ces couches :
- **Contenu** : Le texte ou image
- **Padding** : Espace intérieur
- **Border** : Bordure autour du padding
- **Margin** : Espace extérieur

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid #000;
    margin: 10px;
    /* Largeur totale = 200 + 40 + 4 + 20 = 264px */
}
```

## Activité Pratique : Flexbox Layout

### Introduction à Flexbox
Flexbox organise les éléments en ligne ou en colonne avec facilité.

```css
/* Conteneur flex */
.container {
    display: flex;
    justify-content: space-between; /* Espace entre les éléments */
    align-items: center; /* Alignement vertical */
    flex-direction: row; /* Direction : row ou column */
}
```

### Propriétés Flexbox Courantes

| Propriété | Valeurs | Description |
|-----------|---------|-------------|
| `display` | `flex` | Active le mode flex |
| `flex-direction` | `row`, `column` | Direction principale |
| `justify-content` | `flex-start`, `center`, `space-between` | Alignement horizontal |
| `align-items` | `stretch`, `center`, `flex-end` | Alignement vertical |
| `flex-wrap` | `wrap`, `nowrap` | Retour à la ligne |

## Projet : Layout de Portfolio Responsive

Créons un portfolio moderne avec header, navigation et contenu responsive :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>Mon Portfolio</h1>
            <nav class="nav">
                <ul>
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">
        <section id="about" class="section">
            <div class="container">
                <h2>À Propos de Moi</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>Je suis un développeur web passionné apprenant HTML, CSS et JavaScript.</p>
                        <p>J'aime créer des expériences utilisateur exceptionnelles.</p>
                    </div>
                    <div class="about-image">
                        <img src="profile.jpg" alt="Ma photo" class="profile-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="section">
            <div class="container">
                <h2>Mes Projets</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>Site de Recettes</h3>
                        <p>Application web pour partager des recettes avec HTML sémantique.</p>
                    </div>
                    <div class="project-card">
                        <h3>Portfolio Personnel</h3>
                        <p>Site responsive montrant mes compétences en développement web.</p>
                    </div>
                    <div class="project-card">
                        <h3>Jeu Interactif</h3>
                        <p>Jeu simple construit avec JavaScript et CSS.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
        </div>
    </footer>
</body>
</html>
```

```css
/* style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav a:hover {
    color: #3498db;
}

/* Sections */
.section {
    padding: 4rem 0;
}

.section:nth-child(even) {
    background-color: #f8f9fa;
}

/* About Section */
.about-content {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.about-text {
    flex: 1;
}

.about-image {
    flex: 0 0 300px;
}

.profile-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

/* Footer */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav ul {
        flex-direction: column;
        gap: 1rem;
    }

    .about-content {
        flex-direction: column;
    }

    .about-image {
        flex: none;
    }

    .profile-img {
        height: 200px;
    }
}
```

## Évaluation
1. Créez un layout avec header, navigation et sections multiples
2. Utilisez Flexbox pour organiser le contenu horizontalement
3. Rendez le design responsive (testez sur mobile et desktop)
4. Ajoutez des effets hover et transitions

## Défi Supplémentaire
Implémentez une grille CSS moderne :

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
}

.grid-item {
    padding: 1rem;
    background-color: #f0f0f0;
}
```

## Prochaines Étapes
Excellent travail avec les layouts CSS ! Maintenant, nous ajouterons de l'interactivité avec JavaScript pour rendre vos pages dynamiques.

## Ressources
- [Guide Complet Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [MDN : Mise en Page CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout)