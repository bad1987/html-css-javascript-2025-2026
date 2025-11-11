# Practical Project: Creative Agency Website

## Project Context
Now that you have mastered the basics of CSS, you are ready to create a professional website with a modern layout. This project will allow you to apply Flexbox and CSS Grid to create responsive and attractive layouts.

## Objective
Create a creative agency website with multiple sections using different CSS layout techniques (Flexbox, Grid, box model).

## Project Structure
```
creative-agency/
├── index.html              # Home page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── css/
│   ├── style.css          # Main styles
│   ├── layout.css         # Layout styles
│   └── responsive.css     # Responsive styles
├── images/                # Project images
└── README.md
```

## Implementation Steps

### Step 1: Project Setup
1. Create the folder `creative-agency`
2. Organize files according to the structure above
3. Prepare representative images (logo, projects, team)

### Step 2: Basic HTML Structure (index.html)
Create a modern home page with multiple sections:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Agency - Web Design & Development</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Header with navigation -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Creative Agency Logo" class="logo-img">
                        <span class="logo-text">Creative Agency</span>
                    </a>
                </div>

                <div class="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="index.html" class="nav-link active">Home</a></li>
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

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">Let's Build the Digital Future Together</h1>
                <p class="hero-subtitle">We transform your ideas into exceptional web experiences that captivate your users and boost your business.</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">Start a Project</a>
                    <a href="#portfolio" class="btn btn-secondary">See Our Work</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="images/hero-image.jpg" alt="Creative team at work" class="hero-img">
            </div>
        </div>
    </section>

    <!-- Section Services -->
    <section class="services" id="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Complete solutions for your digital presence</p>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/design.svg" alt="Design Icon">
                    </div>
                    <h3>UX/UI Design</h3>
                    <p>Creating intuitive and aesthetic user interfaces that provide exceptional experiences.</p>
                    <ul class="service-features">
                        <li>User needs analysis</li>
                        <li>Wireframes and mockups</li>
                        <li>Complete design system</li>
                        <li>User testing</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/dev.svg" alt="Development Icon">
                    </div>
                    <h3>Web Development</h3>
                    <p>Transforming your designs into high-performance websites using the latest technologies.</p>
                    <ul class="service-features">
                        <li>HTML5, CSS3, JavaScript</li>
                        <li>Modern frameworks (React, Vue)</li>
                        <li>Robust backend (Node.js)</li>
                        <li>Performance optimization</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src="images/icons/strat.svg" alt="Strategy Icon">
                    </div>
                    <h3>Digital Strategy</h3>
                    <p>Developing digital strategies to achieve your business goals and increase your visibility.</p>
                    <ul class="service-features">
                        <li>Digital audit</li>
                        <li>SEO and search engine optimization</li>
                        <li>Content marketing</li>
                        <li>Analytics and reporting</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Portfolio -->
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Portfolio</h2>
                <p class="section-subtitle">Discover our latest achievements</p>
            </div>

            <div class="portfolio-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="web">Web</button>
                <button class="filter-btn" data-filter="mobile">Mobile</button>
                <button class="filter-btn" data-filter="branding">Branding</button>
            </div>

            <div class="portfolio-grid">
                <div class="portfolio-item web mobile">
                    <img src="images/portfolio/project1.jpg" alt="E-commerce application">
                    <div class="portfolio-overlay">
                        <h3>E-commerce Store</h3>
                        <p>Responsive e-commerce site with integrated payment</p>
                        <div class="project-tags">
                            <span class="tag">React</span>
                            <span class="tag">Stripe</span>
                            <span class="tag">MongoDB</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item web">
                    <img src="images/portfolio/project2.jpg" alt="Restaurant showcase website">
                    <div class="portfolio-overlay">
                        <h3>Restaurant La Belle Époque</h3>
                        <p>Elegant showcase website with online booking</p>
                        <div class="project-tags">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">JavaScript</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item mobile branding">
                    <img src="images/portfolio/project3.jpg" alt="Fitness mobile application">
                    <div class="portfolio-overlay">
                        <h3>App Fitness Coach</h3>
                        <p>Personalized fitness coaching mobile app</p>
                        <div class="project-tags">
                            <span class="tag">React Native</span>
                            <span class="tag">Firebase</span>
                            <span class="tag">AI</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item web branding">
                    <img src="images/portfolio/project4.jpg" alt="Startup visual identity">
                    <div class="portfolio-overlay">
                        <h3>TechStartup Branding</h3>
                        <p>Complete redesign of the visual identity and website</p>
                        <div class="project-tags">
                            <span class="tag">Brand Design</span>
                            <span class="tag">WordPress</span>
                            <span class="tag">SEO</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item web mobile">
                    <img src="images/portfolio/project5.jpg" alt="Educational platform">
                    <div class="portfolio-overlay">
                        <h3>E-learning Platform</h3>
                        <p>Complete online learning solution</p>
                        <div class="project-tags">
                            <span class="tag">Vue.js</span>
                            <span class="tag">Node.js</span>
                            <span class="tag">PostgreSQL</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item branding">
                    <img src="images/portfolio/project6.jpg" alt="Marketing campaign">
                    <div class="portfolio-overlay">
                        <h3>Digital Marketing Campaign</h3>
                        <p>Complete digital marketing and content strategy</p>
                        <div class="project-tags">
                            <span class="tag">Social Media</span>
                            <span class="tag">Content</span>
                            <span class="tag">Analytics</span>
                        </div>
                        <a href="#" class="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Team</h2>
                <p class="section-subtitle">The talents behind your projects</p>
            </div>

            <div class="team-grid">
                <div class="team-member">
                    <img src="images/team/sarah.jpg" alt="Sarah Martin - Creative Director">
                    <div class="member-info">
                        <h3>Sarah Martin</h3>
                        <p class="member-role">Creative Director</p>
                        <p class="member-bio">UX/UI designer with 8 years of experience creating exceptional user experiences.</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Dribbble</a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <img src="images/team/marc.jpg" alt="Marc Dubois - Senior Developer">
                    <div class="member-info">
                        <h3>Marc Dubois</h3>
                        <p class="member-role">Senior Developer</p>
                        <p class="member-bio">Full-stack expert passionate about modern web technologies and scalable architectures.</p>
                        <div class="member-social">
                            <a href="#" class="social-link">GitHub</a>
                            <a href="#" class="social-link">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <img src="images/team/lea.jpg" alt="Léa Moreau - Project Manager">
                    <div class="member-info">
                        <h3>Léa Moreau</h3>
                        <p class="member-role">Project Manager</p>
                        <p class="member-bio">Digital project management specialist ensuring project success from concept to launch.</p>
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
                    <h2>Ready to Get Started?</h2>
                    <p>Let’s discuss your project and create something outstanding together.</p>

                    <div class="contact-details">
                        <div class="contact-item">
                            <h4>📧 Email</h4>
                            <p>contact@agence-creative.fr</p>
                        </div>
                        <div class="contact-item">
                            <h4>📱 Phone</h4>
                            <p>+33 1 23 45 67 89</p>
                        </div>
                        <div class="contact-item">
                            <h4>📍 Address</h4>
                            <p>123 Creatives Avenue<br>75001 Paris, France</p>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <form action="#" method="post">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="company">Company</label>
                            <input type="text" id="company" name="company">
                        </div>

                        <div class="form-group">
                            <label for="project">Project Type</label>
                            <select id="project" name="project">
                                <option value="">Select a type</option>
                                <option value="website">Website</option>
                                <option value="webapp">Web Application</option>
                                <option value="mobile">Mobile Application</option>
                                <option value="branding">Visual Identity</option>
                                <option value="consulting">Consulting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" rows="5" placeholder="Describe your project..." required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Message</button>
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
                        <img src="images/logo-white.png" alt="Creative Agency Logo">
                        <p>Let’s build the digital future together</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services.html">UX/UI Design</a></li>
                        <li><a href="services.html">Web Development</a></li>
                        <li><a href="services.html">Digital Strategy</a></li>
                        <li><a href="services.html">SEO & Analytics</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
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
                <p>&copy; 2024 Creative Agency. All rights reserved. | <a href="#">Legal Notice</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### Step 3: CSS Layout Styles with Flexbox and Grid (css/layout.css)
Implement modern layout techniques:

```css
/* Layout CSS - Flexbox and Grid */

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

/* Container and Base Layout */
.container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 20px;
}

* {
    box-sizing: border-box;
}

/* Navigation with Flexbox */
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

/* Hero Section with Flexbox */
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

/* Buttons */
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

/* Common sections */
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

/* Services with Grid */
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

/* Portfolio with Grid and Flexbox */
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

/* Team with Grid */
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

/* Contact Section with Flexbox */
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

/* Footer with Grid */
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

### Step 4: Responsive Styles (css/responsive.css)
Adapt the design for mobile devices:

```css
/* Responsive Design */

/* Mobile First - Base styles for mobile */
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

    /* Team */
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

/* Tablet */
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

/* Large Desktop */
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

/* Enhanced animations and transitions for desktop */
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

## Testing Instructions

### Layout Validation (40%)
- [ ] Sticky navigation works correctly
- [ ] Hero section uses Flexbox for side-by-side layout
- [ ] Services grid adapts column count
- [ ] Portfolio uses CSS Grid with hover overlays
- [ ] Team section displays members in a grid
- [ ] Contact form uses Flexbox for the fields

### Responsive Validation (30%)
- [ ] Hamburger menu appears on mobile
- [ ] Grids adapt to different screen sizes
- [ ] Images and content are readable on small screens
- [ ] Forms are usable on mobile

### Technical Validation (20%)
- [ ] Box model correctly applied (padding, margin, border)
- [ ] Flexbox properties correctly used (justify-content, align-items)
- [ ] CSS Grid implemented for complex layouts
- [ ] Smooth transitions and animations

### User Experience Validation (10%)
- [ ] Site is keyboard navigable
- [ ] Links and buttons are clearly identifiable
- [ ] Content is well-structured and readable
- [ ] Design is professional and consistent

## Additional Challenges

### Level 1: Visual Enhancements
- Add custom SVG icons for each service
- Implement a dark/light theme system
- Create entrance animations for sections (Intersection Observer)
- Add a parallax effect to the hero section

### Level 2: Interactive Features
- Create a dynamic filtering system for the portfolio
- Implement a slider/carousel for customer testimonials
- Add a real-time search feature
- Create a modal to display project details

### Level 3: Advanced Optimizations
- Use CSS Grid for a 12-column layout system
- Implement a customizable CSS variables system
- Add complex animations with CSS keyframes
- Create a system of reusable components

## Evaluation Criteria

### Flexbox Layout (30%)
- Appropriate use of Flexbox properties
- Correct handling of directions and alignment
- Responsive adaptation of flexible layouts

### Grid Layout (30%)
- Correct implementation of CSS Grid
- Proper management of grid areas and spacing
- Grids adapted to different screen sizes

### Responsive Design (25%)
- Appropriate breakpoints for all devices
- Smart content adaptation
- Optimized performance on mobile

### Code Quality (15%)
- Organized and modular CSS structure
- Helpful explanatory comments
- Compliance with CSS best practices

## Next Steps
Well done on your creative agency website! You now have solid control of Flexbox and CSS Grid. In the next module, we will add interactivity with JavaScript to build dynamic web applications.
