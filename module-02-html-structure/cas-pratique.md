# Cas Pratique : Site Web de Recettes de Cuisine

## Contexte du Projet
Vous maîtrisez maintenant les bases du HTML et vous voulez créer un site web utile et pratique. Ce projet vous permettra de pratiquer tous les éléments HTML sémantiques, les liens, les images et les tableaux vus dans ce module.

## Objectif
Créer un site web complet de recettes de cuisine avec plusieurs pages, utilisant HTML sémantique pour une bonne accessibilité et SEO.

## Structure du Projet
```
recettes-cuisine/
├── index.html           # Page d'accueil
├── recettes.html        # Liste des recettes
├── contact.html         # Page de contact
├── assets/
│   └── images/          # Dossier pour les images
└── README.md           # Documentation
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez un dossier `recettes-cuisine`
2. Créez les fichiers HTML nécessaires
3. Préparez des images d'exemple (ou utilisez des URLs d'images en ligne)

### Étape 2 : Page d'Accueil (index.html)
Créez une page d'accueil attractive avec :

#### En-tête avec navigation
```html
<header>
    <h1>🍳 Mes Délicieuses Recettes</h1>
    <nav>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="recettes.html">Recettes</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

#### Section d'introduction
```html
<main>
    <section id="hero">
        <h2>Découvrez des Recettes Simples et Délicieuses</h2>
        <p>Apprenez à cuisiner des plats savoureux avec nos recettes faciles à suivre.</p>
        <a href="recettes.html" class="btn-primary">Voir les Recettes</a>
    </section>
</main>
```

#### Section des recettes populaires
```html
<section id="featured-recipes">
    <h2>Recettes Populaires</h2>
    <div class="recipe-grid">
        <article class="recipe-card">
            <img src="assets/images/pasta.jpg" alt="Pâtes à la carbonara" width="300" height="200">
            <h3><a href="recettes.html#pasta">Pâtes à la Carbonara</a></h3>
            <p>Une recette italienne classique, crémeuse et savoureuse.</p>
            <div class="recipe-meta">
                <span>⏱️ 25 min</span>
                <span>👥 4 personnes</span>
                <span>⭐ 4.8/5</span>
            </div>
        </article>

        <article class="recipe-card">
            <img src="assets/images/salad.jpg" alt="Salade César" width="300" height="200">
            <h3><a href="recettes.html#salad">Salade César</a></h3>
            <p>Fraîche et croquante, parfaite pour l'été.</p>
            <div class="recipe-meta">
                <span>⏱️ 15 min</span>
                <span>👥 2 personnes</span>
                <span>⭐ 4.5/5</span>
            </div>
        </article>
    </div>
</section>
```

### Étape 3 : Page des Recettes (recettes.html)
Créez une page complète avec plusieurs recettes :

#### Structure sémantique
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recettes - Mes Délicieuses Recettes</title>
</head>
<body>
    <header>
        <h1>🍳 Mes Délicieuses Recettes</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="recettes.html">Recettes</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Notre Collection de Recettes</h2>

        <section class="recipe-filters">
            <h3>Filtrer par Catégorie</h3>
            <ul>
                <li><a href="#pasta">Pâtes</a></li>
                <li><a href="#salads">Salades</a></li>
                <li><a href="#desserts">Desserts</a></li>
            </ul>
        </section>

        <article id="pasta" class="recipe">
            <header>
                <h3>Pâtes à la Carbonara</h3>
                <div class="recipe-info">
                    <p><strong>Temps de préparation :</strong> 10 minutes</p>
                    <p><strong>Temps de cuisson :</strong> 15 minutes</p>
                    <p><strong>Pour :</strong> 4 personnes</p>
                    <p><strong>Difficulté :</strong> Moyenne</p>
                </div>
            </header>

            <section class="ingredients">
                <h4>Ingrédients</h4>
                <ul>
                    <li>400g de spaghetti</li>
                    <li>200g de lardons</li>
                    <li>4 jaunes d'œufs</li>
                    <li>100g de parmesan râpé</li>
                    <li>Poivre noir moulu</li>
                    <li>Sel</li>
                </ul>
            </section>

            <section class="instructions">
                <h4>Instructions</h4>
                <ol>
                    <li>Faire cuire les pâtes dans une grande quantité d'eau salée.</li>
                    <li>Dans une poêle, faire revenir les lardons jusqu'à ce qu'ils soient dorés.</li>
                    <li>Dans un bol, mélanger les jaunes d'œufs et le parmesan.</li>
                    <li>Égoutter les pâtes en gardant un peu d'eau de cuisson.</li>
                    <li>Mélanger rapidement hors du feu avec la sauce.</li>
                    <li>Servir immédiatement avec du poivre fraîchement moulu.</li>
                </ol>
            </section>

            <aside class="recipe-tips">
                <h4>Conseils du Chef</h4>
                <ul>
                    <li>Ne mettez jamais la poêle sur le feu après avoir ajouté les œufs</li>
                    <li>Utilisez du parmesan fraîchement râpé pour plus de saveur</li>
                    <li>Servez immédiatement pour éviter que la sauce ne tourne</li>
                </ul>
            </aside>
        </article>

        <article id="salad" class="recipe">
            <header>
                <h3>Salade César</h3>
                <div class="recipe-info">
                    <p><strong>Temps de préparation :</strong> 15 minutes</p>
                    <p><strong>Pour :</strong> 2 personnes</p>
                    <p><strong>Difficulté :</strong> Facile</p>
                </div>
            </header>

            <section class="ingredients">
                <h4>Ingrédients</h4>
                <ul>
                    <li>1 laitue romaine</li>
                    <li>200g de poulet grillé</li>
                    <li>50g de parmesan</li>
                    <li>100g de croûtons</li>
                    <li>Sauce César (achetée ou faite maison)</li>
                </ul>
            </section>

            <section class="instructions">
                <h4>Instructions</h4>
                <ol>
                    <li>Laver et couper la laitue en morceaux.</li>
                    <li>Couper le poulet en lamelles.</li>
                    <li>Râper le parmesan.</li>
                    <li>Dans un saladier, mélanger tous les ingrédients.</li>
                    <li>Verser la sauce et mélanger délicatement.</li>
                    <li>Servir frais.</li>
                </ol>
            </section>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Mes Délicieuses Recettes. Tous droits réservés.</p>
        <nav>
            <a href="index.html">Accueil</a> |
            <a href="recettes.html">Recettes</a> |
            <a href="contact.html">Contact</a>
        </nav>
    </footer>
</body>
</html>
```

### Étape 4 : Page de Contact (contact.html)
Créez une page de contact avec un formulaire et des informations :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Mes Délicieuses Recettes</title>
</head>
<body>
    <header>
        <h1>🍳 Mes Délicieuses Recettes</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="recettes.html">Recettes</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Contactez-nous</h2>

        <section class="contact-info">
            <h3>Informations de Contact</h3>
            <address>
                <p>📧 Email : <a href="mailto:contact@recettes.com">contact@recettes.com</a></p>
                <p>📱 Téléphone : +33 1 23 45 67 89</p>
                <p>📍 Adresse : 123 Rue de la Cuisine, Paris, France</p>
            </address>
        </section>

        <section class="contact-form">
            <h3>Envoyez-nous un Message</h3>
            <form action="#" method="post">
                <div class="form-group">
                    <label for="name">Nom complet :</label>
                    <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="subject">Sujet :</label>
                    <select id="subject" name="subject">
                        <option value="general">Question générale</option>
                        <option value="recipe">Suggestion de recette</option>
                        <option value="feedback">Retour d'expérience</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Message :</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" class="btn-primary">Envoyer le Message</button>
            </form>
        </section>

        <section class="faq">
            <h3>Questions Fréquentes</h3>
            <dl>
                <dt>Comment soumettre une recette ?</dt>
                <dd>Utilisez le formulaire de contact ci-dessus avec le sujet "Suggestion de recette".</dd>

                <dt>Les recettes sont-elles testées ?</dt>
                <dd>Toutes nos recettes sont testées en cuisine avant publication.</dd>

                <dt>Puis-je modifier les recettes ?</dt>
                <dd>Absolument ! Les recettes sont faites pour être adaptées à vos goûts.</dd>
            </dl>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Mes Délicieuses Recettes. Tous droits réservés.</p>
    </footer>
</body>
</html>
```

### Étape 5 : Tableau d'Informations Nutritionnelles
Ajoutez un tableau d'informations nutritionnelles à une recette :

```html
<section class="nutrition">
    <h4>Informations Nutritionnelles (par portion)</h4>
    <table>
        <caption>Valeurs nutritionnelles pour la Salade César</caption>
        <thead>
            <tr>
                <th>Nutriment</th>
                <th>Quantité</th>
                <th>% AJR*</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Énergie</td>
                <td>320 kcal</td>
                <td>16%</td>
            </tr>
            <tr>
                <td>Protéines</td>
                <td>25g</td>
                <td>50%</td>
            </tr>
            <tr>
                <td>Glucides</td>
                <td>8g</td>
                <td>3%</td>
            </tr>
            <tr>
                <td>Lipides</td>
                <td>22g</td>
                <td>31%</td>
            </tr>
            <tr>
                <td>Fibres</td>
                <td>3g</td>
                <td>12%</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">* AJR = Apports Journaliers Recommandés</td>
            </tr>
        </tfoot>
    </table>
</section>
```

## Instructions de Test

### Validation Fonctionnelle
- [ ] Navigation entre les pages fonctionne correctement
- [ ] Tous les liens internes et externes sont fonctionnels
- [ ] Les images s'affichent avec des textes alternatifs appropriés
- [ ] Les ancres permettent la navigation dans la page des recettes

### Validation Sémantique
- [ ] Utilisation appropriée des balises sémantiques (header, nav, main, section, article, aside, footer)
- [ ] Structure hiérarchique correcte des titres (h1 → h2 → h3, etc.)
- [ ] Balises meta appropriées pour le SEO et l'accessibilité
- [ ] Utilisation correcte des listes (ul, ol, dl)

### Validation Accessibilité
- [ ] Tous les éléments `<img>` ont un attribut `alt` descriptif
- [ ] Les liens ont des textes explicites (pas seulement "cliquez ici")
- [ ] Le contraste des couleurs est suffisant
- [ ] La navigation au clavier est possible

## Défis Supplémentaires

### Niveau 1 : Amélioration du Contenu
- Ajoutez 3 recettes supplémentaires avec des ingrédients variés
- Créez une section "Conseils nutritionnels" pour chaque recette
- Ajoutez des liens vers des vidéos de préparation (YouTube)

### Niveau 2 : Fonctionnalités Interactives
- Créez une page "Favoris" pour sauvegarder les recettes préférées
- Ajoutez un système de notation par étoiles pour les recettes
- Implémentez une fonction de recherche de recettes

### Niveau 3 : Structure Avancée
- Organisez les recettes par catégories (végétarien, végan, sans gluten)
- Ajoutez une section blog avec des articles sur les techniques culinaires
- Créez une page "À propos" avec l'histoire du site

## Critères d'Évaluation

### Structure et Sémantique (30%)
- Utilisation correcte des éléments HTML sémantiques
- Hiérarchie de contenu logique et accessible
- Code HTML valide et bien structuré

### Contenu et Fonctionnalité (30%)
- Pages complètes et informatives
- Navigation fluide entre les pages
- Liens fonctionnels et utiles

### Accessibilité et SEO (20%)
- Images avec textes alternatifs appropriés
- Structure sémantique favorisant le référencement
- Navigation accessible

### Qualité et Présentation (20%)
- Code bien organisé et commenté
- Contenu original et engageant
- Respect des bonnes pratiques HTML

## Prochaines Étapes
Félicitations pour votre premier site web multi-pages ! Vous avez maintenant une base solide en HTML sémantique. Au prochain module, nous ajouterons du style avec CSS pour rendre vos pages visuellement attrayantes.