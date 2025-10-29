# Cas Pratique : Site Web d'Agence Créative

## Contexte du Projet
Vous maîtrisez maintenant les bases du CSS et vous voulez créer un site web professionnel avec une mise en page moderne. Ce projet vous permettra d'appliquer Flexbox et CSS Grid pour créer des layouts responsives et attrayants.

## Objectif
Créer un site web d'agence créative avec plusieurs sections utilisant différentes techniques de mise en page CSS (Flexbox, Grid, modèle de boîte).

## Structure du Projet
```
agence-creative/
├── index.html              # Page d'accueil
├── services.html           # Page Services
├── portfolio.html          # Page Portfolio
├── contact.html            # Page Contact
├── css/
│   ├── style.css          # Styles principaux
│   ├── layout.css         # Styles de mise en page
│   └── responsive.css     # Styles responsives
├── images/                # Images du projet
└── README.md
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez le dossier `agence-creative`
2. Organisez les fichiers selon la structure ci-dessus
3. Préparez des images représentatives (logo, projets, équipe)

### Étape 2 : Structure HTML de Base (index.html)
Créez une page d'accueil moderne avec plusieurs sections :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agence Créative - Design & Développement Web</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Header avec navigation -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Logo Agence Créative" class="logo-img">
                        <span class="logo-text">Agence Créative</span>
                    </a>
                </div>

                <div class="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="index.html" class="nav-link active">Accueil</a></li>
                        <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
                        <li class="nav-item"><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav-toggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    </header>

    <!-- Section Hero -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">Créons l'Avenir Digital Ensemble</h1>
                <p class="hero-subtitle">Nous transformons vos idées en expériences web exceptionnelles qui captivent vos utilisateurs et boostent votre business.</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">Commencer un Projet</a>
                    <a href="#portfolio" class="btn btn-secondary">Voir Notre Travail</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="images/hero-image.jpg" alt="Équipe créative au travail" class="hero-img">
            </div>
        </div>
    </section>

    <!-- Section Services -->
    <section class="services" id="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Nos Services</h2>
                <p class="section-subtitle">Des solutions complètes pour votre présence digitale</p>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/design.svg" alt="Design Icon">
                    </div>
                    <h3>Design UX/UI</h3>
                    <p>Création d'interfaces utilisateur intuitives et esthétiques qui offrent une expérience exceptionnelle.</p>
                    <ul class="service-features">
                        <li>Analyse des besoins utilisateurs</li>
                        <li>Wireframes et maquettes</li>
                        <li>Design system complet</li>
                        <li>Tests utilisateurs</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/dev.svg" alt="Development Icon">
                    </div>
                    <h3>Développement Web</h3>
                    <p>Transformation de vos designs en sites web performants utilisant les dernières technologies.</p>
                    <ul class="service-features">
                        <li>HTML5, CSS3, JavaScript</li>
                        <li>Frameworks modernes (React, Vue)</li>
                        <li>Backend robuste (Node.js)</li>
                        <li>Optimisation performance</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/strat.svg" alt="Strategy Icon">
                    </div>
                    <h3>Stratégie Digitale</h3>
                    <p>Développement de stratégies digitales pour atteindre vos objectifs business et accroître votre visibilité.</p>
                    <ul class="service-features">
                        <li>Audit digital</li>
                        <li>SEO et référencement</li>
                        <li>Marketing de contenu</li>
                        <li>Analytics et reporting</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Portfolio -->
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Notre Portfolio</h2>
                <p class="section-subtitle">Découvrez nos réalisations les plus récentes</p>
            </div>

            <div class="portfolio-filters">
                <button class="filter-btn active" data-filter="all">Tous</button>
                <button class="filter-btn" data-filter="web">Web</button>
                <button class="filter-btn" data-filter="mobile">Mobile</button>
                <button class="filter-btn" data-filter="branding">Branding</button>
            </div>

            <div class="portfolio-grid">
                <div class="portfolio-item web mobile">
                    <img src="images/portfolio/project1.jpg" alt="Application E-commerce">
                    <div class="portfolio-overlay">
                        <h3>Boutique E-commerce</h3>
                        <p>Site e-commerce responsive avec paiement intégré</p>
                        <div class="project-tags">
                            <span class="tag">React</span>
                            <span class="tag">Stripe</span>
                            <span class="tag">MongoDB</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>

                <div class="portfolio-item web">
                    <img src="images/portfolio/project2.jpg" alt="Site Vitrine Restaurant">
                    <div class="portfolio-overlay">
                        <h3>Restaurant La Belle Époque</h3>
                        <p>Site vitrine élégant avec réservation en ligne</p>
                        <div class="project-tags">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">JavaScript</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>

                <div class="portfolio-item mobile branding">
                    <img src="images/portfolio/project3.jpg" alt="Application Mobile Fitness">
                    <div class="portfolio-overlay">
                        <h3>App Fitness Coach</h3>
                        <p>Application mobile de coaching sportif personnalisé</p>
                        <div class="project-tags">
                            <span class="tag">React Native</span>
                            <span class="tag">Firebase</span>
                            <span class="tag">AI</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>

                <div class="portfolio-item web branding">
                    <img src="images/portfolio/project4.jpg" alt="Identité Visuelle Startup">
                    <div class="portfolio-overlay">
                        <h3>TechStartup Branding</h3>
                        <p>Refonte complète de l'identité visuelle et du site web</p>
                        <div class="project-tags">
                            <span class="tag">Brand Design</span>
                            <span class="tag">WordPress</span>
                            <span class="tag">SEO</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>

                <div class="portfolio-item web mobile">
                    <img src="images/portfolio/project5.jpg" alt="Plateforme Éducative">
                    <div class="portfolio-overlay">
                        <h3>Plateforme d'E-learning</h3>
                        <p>Solution complète de formation en ligne</p>
                        <div class="project-tags">
                            <span class="tag">Vue.js</span>
                            <span class="tag">Node.js</span>
                            <span class="tag">PostgreSQL</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>

                <div class="portfolio-item branding">
                    <img src="images/portfolio/project6.jpg" alt="Campagne Marketing">
                    <div class="portfolio-overlay">
                        <h3>Campagne Marketing Digital</h3>
                        <p>Stratégie complète de marketing digital et contenu</p>
                        <div class="project-tags">
                            <span class="tag">Social Media</span>
                            <span class="tag">Content</span>
                            <span class="tag">Analytics</span>
                        </div>
                        <a href="#" class="btn btn-primary">Voir le Projet</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Équipe -->
    <section class="team">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Notre Équipe</h2>
                <p class="section-subtitle">Les talents derrière vos projets</p>
            </div>

            <div class="team-grid">
                <div class="team-member">
                    <img src="images/team/sarah.jpg" alt="Sarah Martin - Directrice Créative">
                    <div class="member-info">
                        <h3>Sarah Martin</h3>
                        <p class="member-role">Directrice Créative</p>
                        <p class="member-bio">Designer UX/UI avec 8 ans d'expérience dans la création d'expériences utilisateur exceptionnelles.</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Dribbble</a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <img src="images/team/marc.jpg" alt="Marc Dubois - Développeur Senior">
                    <div class="member-info">
                        <h3>Marc Dubois</h3>
                        <p class="member-role">Développeur Senior</p>
                        <p class="member-bio">Expert en développement full-stack, passionné par les technologies web modernes et les architectures scalables.</p>
                        <div class="member-social">
                            <a href="#" class="social-link">GitHub</a>
                            <a href="#" class="social-link">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <img src="images/team/lea.jpg" alt="Léa Moreau - Chef de Projet">
                    <div class="member-info">
                        <h3>Léa Moreau</h3>
                        <p class="member-role">Chef de Projet</p>
                        <p class="member-bio">Spécialiste en gestion de projet digital, elle assure la réussite de vos projets de la conception au déploiement.</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Contact -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2>Prêt à Commencer ?</h2>
                    <p>Discutons de votre projet et créons ensemble quelque chose d'extraordinaire.</p>

                    <div class="contact-details">
                        <div class="contact-item">
                            <h4>📧 Email</h4>
                            <p>contact@agence-creative.fr</p>
                        </div>
                        <div class="contact-item">
                            <h4>📱 Téléphone</h4>
                            <p>+33 1 23 45 67 89</p>
                        </div>
                        <div class="contact-item">
                            <h4>📍 Adresse</h4>
                            <p>123 Avenue des Créatifs<br>75001 Paris, France</p>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <form action="#" method="post">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">Prénom *</label>
                                <input type="text" id="firstName" name="firstName" required>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Nom *</label>
                                <input type="text" id="lastName" name="lastName" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="company">Entreprise</label>
                            <input type="text" id="company" name="company">
                        </div>

                        <div class="form-group">
                            <label for="project">Type de Projet</label>
                            <select id="project" name="project">
                                <option value="">Sélectionnez un type</option>
                                <option value="website">Site Web</option>
                                <option value="webapp">Application Web</option>
                                <option value="mobile">Application Mobile</option>
                                <option value="branding">Identité Visuelle</option>
                                <option value="consulting">Conseil</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" rows="5" placeholder="Décrivez votre projet..." required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Envoyer le Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="images/logo-white.png" alt="Logo Agence Créative">
                        <p>Créons l'avenir digital ensemble</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services.html">Design UX/UI</a></li>
                        <li><a href="services.html">Développement Web</a></li>
                        <li><a href="services.html">Stratégie Digitale</a></li>
                        <li><a href="services.html">SEO & Analytics</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Entreprise</h4>
                    <ul>
                        <li><a href="#">À Propos</a></li>
                        <li><a href="#">Équipe</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>📧 contact@agence-creative.fr</li>
                        <li>📱 +33 1 23 45 67 89</li>
                        <li>📍 Paris, France</li>
                    </ul>
                    <div class="footer-social">
                        <a href="#" class="social-link">Facebook</a>
                        <a href="#" class="social-link">Twitter</a>
                        <a href="#" class="social-link">LinkedIn</a>
                        <a href="#" class="social-link">Instagram</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 Agence Créative. Tous droits réservés. | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a></p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### Étape 3 : Styles CSS avec Flexbox et Grid (css/layout.css)
Implémentez les techniques de mise en page modernes :

```css
/* Layout CSS - Flexbox et Grid */

/* Variables CSS */
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #f59e0b;
    --text-color: #1f2937;
    --text-light: #6b7280;
    --bg-color: #ffffff;
    --bg-light: #f8fafc;
    --bg-dark: #0f172a;
    --border-color: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --border-radius-lg: 16px;
    --transition: all 0.3s ease;
    --container-max-width: 1200px;
}

/* Container et Layout de Base */
.container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 20px;
}

* {
    box-sizing: border-box;
}

/* Navigation avec Flexbox */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: var(--shadow);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 20px;
    height: 80px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-img {
    height: 40px;
    width: auto;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
    background: rgba(99, 102, 241, 0.1);
}

/* Menu mobile toggle */
.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    transition: var(--transition);
}

/* Section Hero avec Flexbox */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 80vh;
    display: flex;
    align-items: center;
}

.hero-container {
    display: flex;
    align-items: center;
    gap: 4rem;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 20px;
}

.hero-content {
    flex: 1;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-image {
    flex: 0 0 500px;
}

.hero-img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
}

/* Boutons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background: #5855eb;
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-2px);
}

/* Sections communes */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
}

/* Services avec Grid */
.services {
    padding: 5rem 0;
    background: var(--bg-light);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.service-icon img {
    width: 40px;
    height: 40px;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.service-card p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.service-features {
    list-style: none;
    padding: 0;
    text-align: left;
}

.service-features li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-light);
}

.service-features li:last-child {
    border-bottom: none;
}

/* Portfolio avec Grid et Flexbox */
.portfolio {
    padding: 5rem 0;
}

.portfolio-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid var(--border-color);
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    position: relative;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
}

.portfolio-item:hover {
    transform: scale(1.05);
}

.portfolio-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: var(--transition);
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 2rem 1.5rem;
    color: white;
    transform: translateY(100%);
    transition: var(--transition);
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-overlay h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.portfolio-overlay p {
    opacity: 0.9;
    margin-bottom: 1rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tag {
    background: rgba(255,255,255,0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Équipe avec Grid */
.team {
    padding: 5rem 0;
    background: var(--bg-light);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.team-member {
    background: white;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.team-member:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.team-member img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.member-info {
    padding: 1.5rem;
    text-align: center;
}

.member-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.member-role {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
}

.member-bio {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.member-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.member-social .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--bg-light);
    color: var(--text-color);
    border-radius: 50%;
    text-decoration: none;
    transition: var(--transition);
}

.member-social .social-link:hover {
    background: var(--primary-color);
    color: white;
}

/* Section Contact avec Flexbox */
.contact {
    padding: 5rem 0;
}

.contact-content {
    display: flex;
    gap: 4rem;
    align-items: start;
}

.contact-info {
    flex: 1;
}

.contact-info h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.contact-info p {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-item h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.contact-item p {
    color: var(--text-light);
    line-height: 1.5;
}

.contact-form {
    flex: 1;
    background: var(--bg-light);
    padding: 2.5rem;
    border-radius: var(--border-radius-lg);
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
    flex: 1;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* Footer avec Grid */
.footer {
    background: var(--bg-dark);
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-logo p {
    color: #9ca3af;
    margin-top: 1rem;
    line-height: 1.6;
}

.footer-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: white;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: #9ca3af;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section a:hover {
    color: var(--primary-color);
}

.footer-social {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.footer-social .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #374151;
    color: white;
    border-radius: 50%;
    text-decoration: none;
    transition: var(--transition);
}

.footer-social .social-link:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
}

.footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 1.5rem;
    text-align: center;
}

.footer-bottom p {
    color: #9ca3af;
    font-size: 0.9rem;
}

.footer-bottom a {
    color: var(--primary-color);
    text-decoration: none;
}

.footer-bottom a:hover {
    text-decoration: underline;
}
```

### Étape 4 : Styles Responsives (css/responsive.css)
Adaptez le design aux appareils mobiles :

```css
/* Responsive Design */

/* Mobile First - Styles de base pour mobile */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    /* Navigation mobile */
    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 2rem;
        transition: left 0.3s ease;
        box-shadow: var(--shadow-lg);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-list {
        flex-direction: column;
        gap: 2rem;
    }

    .nav-toggle {
        display: flex;
    }

    .nav-toggle.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Hero section */
    .hero {
        padding: 100px 0 60px;
        min-height: auto;
    }

    .hero-container {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-image {
        flex: none;
        max-width: 400px;
    }

    /* Sections */
    .section-header {
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 2rem;
    }

    /* Services */
    .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .service-card {
        padding: 2rem;
    }

    /* Portfolio */
    .portfolio-filters {
        justify-content: center;
    }

    .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .portfolio-overlay {
        padding: 1.5rem;
    }

    /* Équipe */
    .team-grid {
        grid-template-columns: 1fr;
    }

    /* Contact */
    .contact-content {
        flex-direction: column;
        gap: 2rem;
    }

    .contact-form {
        padding: 2rem;
    }

    .form-row {
        flex-direction: column;
        gap: 0;
    }

    /* Footer */
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-section {
        text-align: center;
    }

    .footer-social {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .btn {
        padding: 0.875rem 1.5rem;
        font-size: 0.9rem;
    }

    .service-card {
        padding: 1.5rem;
    }

    .portfolio-item {
        margin-bottom: 1rem;
    }

    .contact-form {
        padding: 1.5rem;
    }
}

/* Tablette */
@media (min-width: 769px) and (max-width: 1024px) {
    .hero-container {
        gap: 3rem;
    }

    .hero-title {
        font-size: 3rem;
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .team-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop large */
@media (min-width: 1200px) {
    .hero-title {
        font-size: 4rem;
    }

    .hero-subtitle {
        font-size: 1.4rem;
    }

    .services-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .portfolio-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .team-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Animations et transitions améliorées pour desktop */
@media (min-width: 769px) {
    .service-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
        transform: translateY(-10px);
    }

    .portfolio-item {
        transition: transform 0.3s ease;
    }

    .portfolio-item:hover {
        transform: scale(1.03);
    }

    .team-member {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .team-member:hover {
        transform: translateY(-10px);
    }
}
```

## Instructions de Test

### Validation Layout (40%)
- [ ] Navigation sticky fonctionne correctement
- [ ] Section hero utilise Flexbox pour disposition côte à côte
- [ ] Grille des services s'adapte au nombre de colonnes
- [ ] Portfolio utilise CSS Grid avec overlays au hover
- [ ] Section équipe présente les membres en grille
- [ ] Formulaire de contact utilise Flexbox pour les champs

### Validation Responsive (30%)
- [ ] Menu hamburger apparaît sur mobile
- [ ] Grilles s'adaptent aux différentes tailles d'écran
- [ ] Images et contenus sont lisibles sur petit écran
- [ ] Formulaires sont utilisables sur mobile

### Validation Technique (20%)
- [ ] Modèle de boîte respecté (padding, margin, border)
- [ ] Propriétés Flexbox utilisées correctement (justify-content, align-items)
- [ ] CSS Grid implémenté pour les layouts complexes
- [ ] Transitions et animations fluides

### Validation Utilisateur (10%)
- [ ] Site navigable au clavier
- [ ] Liens et boutons clairement identifiables
- [ ] Contenu hiérarchisé et lisible
- [ ] Design professionnel et cohérent

## Défis Supplémentaires

### Niveau 1 : Améliorations Visuelles
- Ajoutez des icônes SVG personnalisées pour chaque service
- Implémentez un système de thème sombre/clair
- Créez des animations d'entrée pour les sections (Intersection Observer)
- Ajoutez un effet parallax à la section hero

### Niveau 2 : Fonctionnalités Interactives
- Créez un système de filtrage dynamique pour le portfolio
- Implémentez un slider/ carousel pour les témoignages clients
- Ajoutez une fonctionnalité de recherche en temps réel
- Créez un modal pour afficher les détails des projets

### Niveau 3 : Optimisations Avancées
- Utilisez CSS Grid pour un système de layout 12 colonnes
- Implémentez un système de variables CSS personnalisables
- Ajoutez des animations complexes avec CSS keyframes
- Créez un système de composants réutilisables

## Critères d'Évaluation

### Mise en Page Flexbox (30%)
- Utilisation appropriée des propriétés Flexbox
- Gestion correcte des directions et alignements
- Adaptation responsive des layouts flexibles

### Mise en Page Grid (30%)
- Implémentation correcte de CSS Grid
- Gestion des zones de grille et des espaces
- Adaptation des grilles aux différentes tailles

### Responsive Design (25%)
- Breakpoints appropriés pour tous les appareils
- Adaptation intelligente des contenus
- Performance optimisée sur mobile

### Qualité du Code (15%)
- Structure CSS organisée et modulaire
- Commentaires explicatifs
- Respect des bonnes pratiques CSS

## Prochaines Étapes
Bravo pour votre site web d'agence créative ! Vous maîtrisez maintenant Flexbox et CSS Grid. Au prochain module, nous ajouterons de l'interactivité avec JavaScript pour créer des applications web dynamiques.