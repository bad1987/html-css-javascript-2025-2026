# Cas Pratique : Portfolio Personnel Stylé

## Contexte du Projet
Vous maîtrisez maintenant les bases du HTML et vous voulez donner du style à vos pages. Ce projet pratique vous permettra d'appliquer tous les concepts CSS fondamentaux vus dans ce module : couleurs, polices, espacement, sélecteurs et mise en page de base.

## Objectif
Transformer votre page de profil personnel (du Module 1) en un portfolio moderne et attrayant en utilisant CSS pour le style visuel.

## Structure du Projet
```
portfolio-personnel/
├── index.html          # Page principale du portfolio
├── about.html          # Page À propos
├── projects.html       # Page Projets
├── contact.html        # Page Contact
├── css/
│   ├── style.css       # Feuille de style principale
│   └── responsive.css  # Styles pour mobile
├── images/             # Images du portfolio
└── README.md
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez le dossier `portfolio-personnel`
2. Structurez les fichiers comme indiqué ci-dessus
3. Préparez quelques images (photo de profil, captures d'écran de projets)

### Étape 2 : Structure HTML de Base (index.html)
Commencez avec une structure HTML propre :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - Jean Dupont</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>Jean Dupont</h1>
            <p>Développeur Web Full-Stack</p>
            <nav class="nav">
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <h2>Créateur d'Expériences Digitales</h2>
                    <p>Passionné par le développement web moderne et les technologies innovantes.</p>
                    <a href="#projects" class="btn-primary">Voir mes Projets</a>
                </div>
                <div class="hero-image">
                    <img src="images/profile.jpg" alt="Photo de profil de Jean Dupont" class="profile-img">
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>À Propos de Moi</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>Je suis un développeur web passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes et responsives.</p>
                        <p>Ma passion pour le code et le design me pousse à créer des expériences utilisateur exceptionnelles.</p>
                        <h3>Mes Compétences</h3>
                        <div class="skills">
                            <div class="skill">
                                <span class="skill-name">HTML/CSS</span>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: 95%"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <span class="skill-name">JavaScript</span>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <span class="skill-name">React</span>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: 85%"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <span class="skill-name">Node.js</span>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <div class="container">
                <h2>Mes Projets</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <img src="images/project1.jpg" alt="Application de Gestion de Tâches">
                        <div class="project-info">
                            <h3>Application de Gestion de Tâches</h3>
                            <p>Application web full-stack pour gérer des tâches avec authentification utilisateur.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">MongoDB</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">Voir le Code</a>
                                <a href="#" class="btn-primary">Voir le Projet</a>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <img src="images/project2.jpg" alt="Site E-commerce">
                        <div class="project-info">
                            <h3>Site E-commerce</h3>
                            <p>Boutique en ligne responsive avec panier d'achat et paiement intégré.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">Voir le Code</a>
                                <a href="#" class="btn-primary">Voir le Projet</a>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <img src="images/project3.jpg" alt="Application Météo">
                        <div class="project-info">
                            <h3>Application Météo</h3>
                            <p>Application météo utilisant une API externe pour afficher les prévisions.</p>
                            <div class="project-tech">
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">API</span>
                                <span class="tech-tag">CSS</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">Voir le Code</a>
                                <a href="#" class="btn-primary">Voir le Projet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Contactez-moi</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Restons en Contact</h3>
                        <p>Intéressé par une collaboration ou avez-vous des questions ? N'hésitez pas à me contacter !</p>
                        <div class="contact-details">
                            <p><strong>Email :</strong> jean.dupont@email.com</p>
                            <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
                            <p><strong>Localisation :</strong> Paris, France</p>
                        </div>
                        <div class="social-links">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">GitHub</a>
                            <a href="#" class="social-link">Twitter</a>
                        </div>
                    </div>
                    <div class="contact-form">
                        <form action="#" method="post">
                            <div class="form-group">
                                <label for="name">Nom complet</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Sujet</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn-primary">Envoyer le Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Jean Dupont. Tous droits réservés.</p>
            <p>Développé avec ❤️ en HTML, CSS et JavaScript</p>
        </div>
    </footer>
</body>
</html>
```

### Étape 3 : Styles CSS de Base (css/style.css)
Créez des styles modernes et attrayants :

```css
/* Reset et variables CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --bg-light: #f8fafc;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

/* Styles de base */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: linear-gradient(135deg, var(--primary-color), #1d4ed8);
    color: white;
    padding: 2rem 0;
    box-shadow: var(--shadow);
}

.header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.header p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    justify-content: center;
}

.nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.nav a:hover,
.nav a:focus {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* Section Hero */
.hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 60vh;
    display: flex;
    align-items: center;
}

.hero .container {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.hero-content {
    flex: 1;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-image {
    flex: 0 0 300px;
}

.profile-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid rgba(255, 255, 255, 0.2);
    box-shadow: var(--shadow);
}

/* Sections communes */
section {
    padding: 5rem 0;
}

section:nth-child(even) {
    background-color: var(--bg-light);
}

section h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-color);
}

/* Section À Propos */
.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.about h3 {
    color: var(--primary-color);
    margin: 2rem 0 1rem 0;
    font-size: 1.5rem;
}

/* Compétences */
.skills {
    margin-top: 2rem;
}

.skill {
    margin-bottom: 1.5rem;
}

.skill-name {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-color);
}

.skill-bar {
    background-color: #e5e7eb;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 4px;
    transition: width 1s ease-in-out;
}

/* Section Projets */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 1.5rem;
}

.project-card h3 {
    color: var(--text-color);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.project-card p {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background-color: var(--bg-light);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: 1rem;
}

/* Section Contact */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1000px;
    margin: 0 auto;
}

.contact-info h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.contact-info p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.contact-details p {
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.social-link:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
}

/* Formulaire */
.contact-form {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* Boutons */
.btn-primary {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: transparent;
    color: var(--primary-color);
    text-decoration: none;
    border: 2px solid var(--primary-color);
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    font-size: 1rem;
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background-color: var(--text-color);
    color: white;
    text-align: center;
    padding: 2rem 0;
}

.footer p {
    margin-bottom: 0.5rem;
    opacity: 0.8;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

section {
    animation: fadeInUp 0.6s ease-out;
}
```

### Étape 4 : Styles Responsives (css/responsive.css)
Ajoutez des styles pour les appareils mobiles :

```css
/* Responsive Design */
@media (max-width: 768px) {
    .header h1 {
        font-size: 2rem;
    }

    .nav ul {
        flex-direction: column;
        gap: 1rem;
    }

    .hero .container {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    .hero h2 {
        font-size: 2rem;
    }

    .hero-image {
        flex: none;
    }

    .profile-img {
        height: 250px;
    }

    section h2 {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .project-links {
        flex-direction: column;
    }

    .social-links {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .header {
        padding: 1.5rem 0;
    }

    .hero {
        padding: 2rem 0;
    }

    .hero h2 {
        font-size: 1.8rem;
    }

    section {
        padding: 3rem 0;
    }

    .contact-form {
        padding: 1.5rem;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        margin-bottom: 0.5rem;
    }
}
```

## Instructions de Test

### Validation Visuelle
- [ ] La page a un aspect professionnel et moderne
- [ ] Les couleurs sont cohérentes et attrayantes
- [ ] Les polices sont lisibles et hiérarchisées
- [ ] Les espacements sont équilibrés

### Validation Fonctionnelle
- [ ] Navigation fluide entre les sections
- [ ] Boutons et liens interactifs avec effets hover
- [ ] Formulaire de contact fonctionnel
- [ ] Images s'affichent correctement

### Validation Responsive
- [ ] Design adapté aux écrans mobiles
- [ ] Navigation adaptée aux petits écrans
- [ ] Contenu lisible sur toutes les tailles d'écran

## Défis Supplémentaires

### Niveau 1 : Améliorations Visuelles
- Ajoutez des icônes aux sections (Font Awesome ou SVG)
- Implémentez un thème sombre/clair
- Ajoutez des animations d'entrée pour les sections
- Créez une section "Témoignages" avec des cartes

### Niveau 2 : Fonctionnalités Interactives
- Créez un menu hamburger pour mobile
- Ajoutez un bouton "Retour en haut"
- Implémentez un filtre de projets par technologie
- Créez un modal pour afficher les détails des projets

### Niveau 3 : Optimisations Avancées
- Utilisez CSS Grid pour la mise en page
- Implémentez un système de variables CSS personnalisables
- Ajoutez des effets de parallax
- Créez une grille de portfolio avec filtrage dynamique

## Critères d'Évaluation

### Design et Esthétique (30%)
- Utilisation cohérente des couleurs et polices
- Mise en page moderne et professionnelle
- Éléments visuels attrayants et équilibrés

### Responsive Design (25%)
- Adaptation parfaite aux différentes tailles d'écran
- Navigation optimisée pour mobile
- Contenu lisible sur tous les appareils

### Fonctionnalité CSS (25%)
- Utilisation appropriée des sélecteurs CSS
- Propriétés CSS avancées (flexbox, grid si utilisé)
- Animations et transitions fluides

### Qualité du Code (20%)
- Code CSS organisé et commenté
- Respect des bonnes pratiques CSS
- Performance optimisée (pas de répétitions inutiles)

## Prochaines Étapes
Félicitations pour votre portfolio stylé ! Vous maîtrisez maintenant les bases du CSS. Au prochain module, nous apprendrons les techniques de mise en page avancées avec Flexbox et CSS Grid pour créer des layouts plus complexes.