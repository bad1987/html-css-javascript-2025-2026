# Cas Pratique : Création d'une Page de Profil Personnel

## Contexte du Projet
Vous venez d'apprendre les bases du HTML et vous voulez créer votre première page web qui vous présente. Ce projet simple vous permettra de pratiquer tous les éléments HTML de base vus dans ce module.

## Objectif
Créer une page de profil personnel simple qui inclut votre nom, une présentation, vos intérêts et des informations de contact.

## Étapes de Réalisation

### Étape 1 : Configuration de l'Environnement
1. Créez un dossier nommé `mon-profil`
2. Ouvrez VS Code et créez un fichier `index.html`
3. Installez l'extension Live Server si ce n'est pas déjà fait

### Étape 2 : Structure HTML de Base
Créez la structure fondamentale de votre page :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Profil Personnel</title>
</head>
<body>
    <!-- Votre contenu viendra ici -->
</body>
</html>
```

### Étape 3 : Ajout du Contenu Principal
Ajoutez les sections suivantes avec les balises HTML appropriées :

#### En-tête avec votre nom
```html
<header>
    <h1>Votre Nom Complet</h1>
    <p>Développeur Web en Apprentissage</p>
</header>
```

#### Section À Propos
```html
<section>
    <h2>À Propos de Moi</h2>
    <p>Écrivez 2-3 phrases sur vous, vos motivations et vos objectifs en développement web.</p>
</section>
```

#### Section Mes Intérêts
```html
<section>
    <h2>Mes Intérêts</h2>
    <ul>
        <li>Développement Web</li>
        <li>Technologies</li>
        <li>Design</li>
        <li>Apprentissage continu</li>
    </ul>
</section>
```

#### Section Objectifs
```html
<section>
    <h2>Mes Objectifs</h2>
    <ol>
        <li>Maîtriser HTML, CSS et JavaScript</li>
        <li>Apprendre les frameworks modernes</li>
        <li>Construire des applications web complètes</li>
        <li>Contribuer à des projets open source</li>
    </ol>
</section>
```

### Étape 4 : Enrichissement du Contenu
Ajoutez du texte formaté :

```html
<p>J'ai commencé mon voyage dans le développement web parce que je suis passionné par <strong>la création d'expériences numériques</strong> qui rendent la vie des gens plus facile.</p>

<p>J'aime particulièrement <em>l'aspect créatif</em> du développement web, où je peux combiner logique et design pour créer quelque chose d'utile.</p>
```

### Étape 5 : Ajout d'Informations de Contact
```html
<section>
    <h2>Contact</h2>
    <p>Vous pouvez me contacter :</p>
    <ul>
        <li>Email : <a href="mailto:votre.email@example.com">votre.email@example.com</a></li>
        <li>LinkedIn : <a href="https://linkedin.com/in/votreprofil" target="_blank">Votre Profil LinkedIn</a></li>
        <li>GitHub : <a href="https://github.com/votreusername" target="_blank">Votre GitHub</a></li>
    </ul>
</section>
```

### Étape 6 : Test et Validation
1. Ouvrez votre fichier `index.html` dans un navigateur
2. Utilisez Live Server pour une prévisualisation automatique
3. Vérifiez que tous les liens fonctionnent
4. Testez la responsivité en redimensionnant la fenêtre

## Code Complet Exemple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Profil Personnel - Jean Dupont</title>
</head>
<body>
    <header>
        <h1>Jean Dupont</h1>
        <p>Développeur Web en Apprentissage</p>
    </header>

    <main>
        <section>
            <h2>À Propos de Moi</h2>
            <p>Bonjour ! Je m'appelle Jean et je suis passionné par le développement web. J'ai commencé ce voyage pour créer des sites web utiles et modernes.</p>
            <p>J'aime particulièrement <strong>combiner créativité et logique</strong> pour résoudre des problèmes complexes et améliorer l'expérience utilisateur.</p>
        </section>

        <section>
            <h2>Mes Intérêts</h2>
            <ul>
                <li><strong>Développement Web</strong> - HTML, CSS, JavaScript</li>
                <li><em>Technologies Émergentes</em> - IA, Blockchain, IoT</li>
                <li>Design UX/UI</li>
                <li>Apprentissage continu et veille technologique</li>
            </ul>
        </section>

        <section>
            <h2>Mes Objectifs</h2>
            <ol>
                <li>Maîtriser les technologies web modernes</li>
                <li>Apprendre React et Node.js</li>
                <li>Contribuer à des projets open source</li>
                <li>Développer des applications full-stack</li>
            </ol>
        </section>

        <section>
            <h2>Contact</h2>
            <p>N'hésitez pas à me contacter pour discuter de projets ou d'opportunités !</p>
            <ul>
                <li>Email : <a href="mailto:jean.dupont@email.com">jean.dupont@email.com</a></li>
                <li>LinkedIn : <a href="https://linkedin.com/in/jeandupont" target="_blank">Jean Dupont</a></li>
                <li>GitHub : <a href="https://github.com/jeandupont" target="_blank">jeandupont</a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Jean Dupont. Tous droits réservés.</p>
    </footer>
</body>
</html>
```

## Instructions de Test

### Validation Fonctionnelle
- [ ] La page se charge correctement dans le navigateur
- [ ] Tous les titres utilisent la hiérarchie appropriée (h1, h2)
- [ ] Les listes sont correctement formatées (ul pour intérêts, ol pour objectifs)
- [ ] Les liens email et externes fonctionnent
- [ ] Le texte formaté (gras, italique) s'affiche correctement

### Validation Sémantique
- [ ] La structure utilise des éléments sémantiques appropriés
- [ ] Le DOCTYPE est présent et correct
- [ ] Les balises meta charset et viewport sont présentes
- [ ] L'attribut lang="fr" est défini sur la balise html

## Défis Supplémentaires

### Niveau 1 : Personnalisation
- Ajoutez une photo de profil avec la balise `<img>`
- Incluez une citation favorite avec la balise `<blockquote>`
- Ajoutez des émojis pertinents dans votre contenu

### Niveau 2 : Contenu Dynamique
- Créez une liste de compétences avec un système d'étoiles simple
- Ajoutez une section "Projets récents" avec des liens
- Incluez des informations sur vos formations

### Niveau 3 : Structure Avancée
- Organisez votre contenu en sections avec des en-têtes descriptifs
- Ajoutez une table pour afficher vos compétences techniques
- Créez une navigation interne avec des ancres

## Critères d'Évaluation

### Fonctionnalité (40%)
- Page accessible et navigable
- Tous les liens fonctionnels
- Contenu correctement affiché

### Structure HTML (30%)
- Utilisation correcte des balises sémantiques
- Hiérarchie de titres appropriée
- Syntaxe HTML valide

### Contenu (20%)
- Informations personnelles pertinentes
- Texte bien formaté et lisible
- Liens utiles et fonctionnels

### Présentation (10%)
- Code bien organisé et commenté
- Respect des bonnes pratiques HTML

## Prochaines Étapes
Une fois ce projet terminé, vous aurez créé votre première page web fonctionnelle ! Au prochain module, nous apprendrons la structure HTML sémantique et l'ajout d'images et de liens pour enrichir davantage vos pages.