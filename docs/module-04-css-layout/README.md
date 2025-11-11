# Module 04 - CSS Layout and Responsive Design

## Overview
Now that you have mastered basic styling, let's learn how to organize elements on the page! This module covers CSS layout techniques and responsive design so your sites work on all devices.

## Objectives
By the end of this module, you will be able to:
- Understand the CSS box model
- Use Flexbox for flexible layouts
- Create adaptive (responsive) designs
- Position elements on the page
- Build modern layouts with CSS Grid

## Prerequisites
- Module 03 - CSS Fundamentals
- Understanding of basic CSS selectors and properties

## Required Materials
- VS Code with Live Server
- Browser with developer tools
- Multiple devices or responsive simulator for testing

## Session Structure
- Session 1: Box Model and Positioning (30 min)
- Session 2: Flexbox and Responsive Design (30 min)
- Practical Activity: Build a Responsive Portfolio Layout (1 hour)

## Theory: The CSS Box Model

Every HTML element is a "box" with these layers:
- **Content**: The text or image
- **Padding**: Inner space
- **Border**: Border around the padding
- **Margin**: Outer space

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #000;
  margin: 10px;
  /* Total width = 200 + 40 + 4 + 20 = 264px */
}
```

## Practical Activity: Flexbox Layout

### Introduction to Flexbox
Flexbox organizes elements in rows or columns with ease.

```css
/* Flex container */
.container {
  display: flex;
  justify-content: space-between; /* Space between items */
  align-items: center; /* Vertical alignment */
  flex-direction: row; /* Direction: row or column */
}
```

### Common Flexbox Properties

| Property      | Values                           | Description                    |
|---------------|----------------------------------|--------------------------------|
| `display`     | `flex`                          | Activates flex mode            |
| `flex-direction` | `row`, `column`               | Main direction                 |
| `justify-content` | `flex-start`, `center`, `space-between` | Horizontal alignment |
| `align-items` | `stretch`, `center`, `flex-end` | Vertical alignment             |
| `flex-wrap`   | `wrap`, `nowrap`                | Line wrapping                  |

## Project: Responsive Portfolio Layout

Let's create a modern portfolio with header, navigation, and responsive content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header">
    <div class="container">
      <h1>My Portfolio</h1>
      <nav class="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="main">
    <section id="about" class="section">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>I am a passionate web developer learning HTML, CSS, and JavaScript.</p>
            <p>I love creating exceptional user experiences.</p>
          </div>
          <div class="about-image">
            <img src="profile.jpg" alt="My photo" class="profile-img" />
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="container">
        <h2>My Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Recipe Website</h3>
            <p>Web application for sharing recipes with semantic HTML.</p>
          </div>
          <div class="project-card">
            <h3>Personal Portfolio</h3>
            <p>Responsive site showcasing my web development skills.</p>
          </div>
          <div class="project-card">
            <h3>Interactive Game</h3>
            <p>Simple game built with JavaScript and CSS.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
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

## Assessment
1. Create a layout with header, navigation, and multiple sections
2. Use Flexbox to organize content horizontally
3. Make the design responsive (test on mobile and desktop)
4. Add hover effects and transitions

## Extra Challenge
Implement a modern CSS Grid:

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

## Next Steps
Excellent work with CSS layouts! Now we will add interactivity with JavaScript to make your pages dynamic.

## Resources
- [Complete Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [MDN: CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)