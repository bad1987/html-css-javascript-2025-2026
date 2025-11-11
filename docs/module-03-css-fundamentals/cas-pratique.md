# Practical Project: Styled Personal Portfolio

## Project Context
You now master the basics of HTML and want to style your pages. This practical project will allow you to apply all the fundamental CSS concepts covered in this module: colors, fonts, spacing, selectors, and basic layout.

## Objective
Transform your personal profile page (from Module 1) into a modern and attractive portfolio using CSS for visual styling.

## Project Structure
```
personal-portfolio/
├── index.html          # Main portfolio page
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Mobile styles
├── images/             # Portfolio images
└── README.md
```

## Implementation Steps

### Step 1: Project Setup
1. Create the folder `personal-portfolio`
2. Structure the files as indicated above
3. Prepare some images (profile photo, project screenshots)

### Step 2: Basic HTML Structure (index.html)
Start with a clean HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio - John Doe</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>John Doe</h1>
            <p>Full-Stack Web Developer</p>
            <nav class="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <h2>Creator of Digital Experiences</h2>
                    <p>Passionate about modern web development and innovative technologies.</p>
                    <a href="#projects" class="btn-primary">View My Projects</a>
                </div>
                <div class="hero-image">
                    <img src="images/profile.jpg" alt="Profile photo of John Doe" class="profile-img">
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>About Me</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>I am a passionate web developer with over 2 years of experience creating modern and responsive web applications.</p>
                        <p>My passion for code and design drives me to create exceptional user experiences.</p>
                        <h3>My Skills</h3>
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
                <h2>My Projects</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <img src="images/project1.jpg" alt="Task Management Application">
                        <div class="project-info">
                            <h3>Task Management Application</h3>
                            <p>Full-stack web application for managing tasks with user authentication.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">MongoDB</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">View Code</a>
                                <a href="#" class="btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <img src="images/project2.jpg" alt="E-commerce Website">
                        <div class="project-info">
                            <h3>E-commerce Website</h3>
                            <p>Responsive online store with shopping cart and integrated payment.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">View Code</a>
                                <a href="#" class="btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <img src="images/project3.jpg" alt="Weather Application">
                        <div class="project-info">
                            <h3>Weather Application</h3>
                            <p>Weather app using external API to display forecasts.</p>
                            <div class="project-tech">
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">API</span>
                                <span class="tech-tag">CSS</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="btn-secondary">View Code</a>
                                <a href="#" class="btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Contact Me</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Let's Stay in Touch</h3>
                        <p>Interested in collaboration or have questions? Feel free to contact me!</p>
                        <div class="contact-details">
                            <p><strong>Email:</strong> john.doe@email.com</p>
                            <p><strong>Phone:</strong> +33 6 12 34 56 78</p>
                            <p><strong>Location:</strong> Paris, France</p>
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
                                <label for="name">Full name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
            <p>Built with ❤️ in HTML, CSS and JavaScript</p>
        </div>
    </footer>
</body>
</html>
```

### Step 3: Basic CSS Styles (css/style.css)
Create modern and attractive styles:


```css
/* Reset and CSS variables */
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

/* Basic styles */
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

/* Hero Section */
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

/* Common sections */
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

/* About Section */
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

/* Skills */
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

/* Projects Section */
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

/* Contact Section */
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

/* Form */
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

/* Buttons */
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

### Step 4: Responsive Styles (css/responsive.css)
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

## Testing Instructions

### Visual Validation
- [ ] The page has a professional and modern appearance
- [ ] Colors are consistent and attractive
- [ ] Fonts are readable and hierarchical
- [ ] Spacing is balanced

### Functional Validation
- [ ] Smooth navigation between sections
- [ ] Interactive buttons and links with hover effects
- [ ] Functional contact form
- [ ] Images display correctly

### Responsive Validation
- [ ] Design adapted to mobile screens
- [ ] Navigation adapted to small screens
- [ ] Content readable on all screen sizes

## Additional Challenges

### Level 1: Visual Improvements
- Add icons to sections (Font Awesome or SVG)
- Implement a dark/light theme
- Add entry animations for sections
- Create a "Testimonials" section with cards

### Level 2: Interactive Features
- Create a hamburger menu for mobile
- Add a "Back to top" button
- Implement a project filter by technology
- Create a modal to display project details

### Level 3: Advanced Optimizations
- Use CSS Grid for layout
- Implement a customizable CSS variable system
- Add parallax effects
- Create a portfolio grid with dynamic filtering

## Evaluation Criteria

### Design and Aesthetics (30%)
- Consistent use of colors and fonts
- Modern and professional layout
- Attractive and balanced visual elements

### Responsive Design (25%)
- Perfect adaptation to different screen sizes
- Mobile-optimized navigation
- Content readable on all devices

### CSS Functionality (25%)
- Appropriate use of CSS selectors
- Advanced CSS properties (flexbox, grid if used)
- Smooth animations and transitions

### Code Quality (20%)
- Organized and commented CSS code
- Respect for CSS best practices
- Optimized performance (no unnecessary repetitions)

## Next Steps
Congratulations on your styled portfolio! You now master the basics of CSS. In the next module, we will learn advanced layout techniques with Flexbox and CSS Grid to create more complex layouts.
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

/* Basic styles */
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

/* Hero Section */
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

/* Common sections */
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

/* About Section */
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

/* Skills */
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

/* Projects Section */
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

/* Contact Section */
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

/* Form */
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

/* Buttons */
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

### Step 4: Responsive Styles (css/responsive.css)
Add styles for mobile devices:


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

## Testing Instructions

### Visual Validation
- [ ] The page has a professional and modern appearance
- [ ] Colors are consistent and attractive
- [ ] Fonts are readable and hierarchical
- [ ] Spacing is balanced

### Functional Validation
- [ ] Smooth navigation between sections
- [ ] Interactive buttons and links with hover effects
- [ ] Functional contact form
- [ ] Images display correctly

### Responsive Validation
- [ ] Design adapted to mobile screens
- [ ] Navigation adapted to small screens
- [ ] Content readable on all screen sizes

## Additional Challenges

### Level 1: Visual Improvements
- Add icons to sections (Font Awesome or SVG)
- Implement a dark/light theme
- Add entry animations for sections
- Create a "Testimonials" section with cards

### Level 2: Interactive Features
- Create a hamburger menu for mobile
- Add a "Back to top" button
- Implement a project filter by technology
- Create a modal to display project details

### Level 3: Advanced Optimizations
- Use CSS Grid for layout
- Implement a customizable CSS variable system
- Add parallax effects
- Create a portfolio grid with dynamic filtering

## Evaluation Criteria

### Design and Aesthetics (30%)
- Consistent use of colors and fonts
- Modern and professional layout
- Attractive and balanced visual elements

### Responsive Design (25%)
- Perfect adaptation to different screen sizes
- Mobile-optimized navigation
- Content readable on all devices

### CSS Functionality (25%)
- Appropriate use of CSS selectors
- Advanced CSS properties (flexbox, grid if used)
- Smooth animations and transitions

### Code Quality (20%)
- Organized and commented CSS code
- Respect for CSS best practices
- Optimized performance (no unnecessary repetitions)

## Next Steps
Congratulations on your styled portfolio! You now master the basics of CSS. In the next module, we will learn advanced layout techniques with Flexbox and CSS Grid to create more complex layouts.
