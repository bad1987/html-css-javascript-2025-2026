# Module 02 - HTML Structure and Semantics

## Overview
Now that you know the basics of HTML, this module focuses on building well-structured pages using semantic elements. You will learn how to give meaning to your content, improve accessibility, and help search engines and assistive technologies better understand your pages.

## Objectives
By the end of this module, you will be able to:
- Use semantic HTML elements to create meaningful structure
- Build accessible web content
- Create complete page layouts with sections and navigation
- Add images, links, and basic media
- Understand the overall structure of an HTML document

## Prerequisites
- Module 01 - Introduction to Web Development: basic HTML knowledge
- Understanding of basic tags (h1, p, ul, etc.)

## Required Materials
- VS Code with Live Server extension
- Sample images (or online image URLs)

## Session Structure
- Session 1: Semantic HTML Elements (30 min)
- Session 2: Links, Images, and Media (30 min)
- Practical Activity: Build a Complete Recipe Page (1 hour)

## Theory: Semantic HTML

### Why Semantic HTML Matters
Semantic HTML uses meaningful tags that describe the purpose of content.

Benefits:
- Accessibility: Screen readers can navigate pages more easily
- SEO: Search engines better understand your content
- Maintainability: Code is easier to read and update
- Standards: Encourages modern web best practices

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

## Practical Activity: Links and Images

### Adding Links
Links connect your pages and enable navigation:

```html
<!-- Absolute URL -->
<a href="https://www.google.com">Visit Google</a>

<!-- Relative link (same folder) -->
<a href="about.html">About</a>

<!-- Open link in a new tab -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in a new tab
</a>
```

### Adding Images
Images make your pages more visual and engaging:

```html
<!-- Basic image -->
<img src="photo.jpg" alt="Short descriptive text" />

<!-- Image with size -->
<img src="photo.jpg" alt="My cat" width="300" height="200" />

<!-- Remote image -->
<img src="https://example.com/image.jpg" alt="Online image example" />
```

Important: Always include meaningful `alt` text for accessibility.

## Project: Recipe Website Page

Create a complete recipe page using semantic HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Classic Chocolate Chip Cookies</title>
</head>
<body>
  <header>
    <h1>My Recipe Collection</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Classic Chocolate Chip Cookies</h2>
        <p>Prep time: 15 min | Cook time: 12 min | Yield: 24 cookies</p>
      </header>

      <section id="ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li>2 1/4 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1 cup unsalted butter, softened</li>
          <li>3/4 cup granulated sugar</li>
          <li>3/4 cup brown sugar</li>
          <li>2 large eggs</li>
          <li>2 teaspoons vanilla extract</li>
          <li>2 cups chocolate chips</li>
        </ul>
      </section>

      <section id="instructions">
        <h3>Instructions</h3>
        <ol>
          <li>Preheat the oven to 190°C (375°F).</li>
          <li>Cream the butter with both sugars until smooth.</li>
          <li>Mix in the eggs and vanilla.</li>
          <li>In a separate bowl, combine flour and baking soda.</li>
          <li>Gradually mix dry ingredients into the wet mixture.</li>
          <li>Stir in the chocolate chips.</li>
          <li>Drop spoonfuls of dough onto a baking tray.</li>
          <li>Bake for 9–11 minutes until lightly golden.</li>
        </ol>
      </section>

      <section id="tips">
        <h3>Baking Tips</h3>
        <p>
          For softer cookies, slightly underbake them. They will continue to cook
          on the hot tray after you remove them from the oven.
        </p>
      </section>
    </article>
  </main>

  <aside>
    <h3>Popular Recipes</h3>
    <ul>
      <li><a href="brownies.html">Fudgy Brownies</a></li>
      <li><a href="muffins.html">Blueberry Muffins</a></li>
      <li><a href="cake.html">Vanilla Cupcakes</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2024 My Recipe Collection. All rights reserved.</p>
  </footer>
</body>
</html>
```

## Assessment
Build a personal portfolio site with:
- Proper semantic structure (header, nav, main, footer)
- Multiple sections for different content areas
- Links to external websites and internal navigation
- Images with descriptive alt text for accessibility
- At least three pages linked together
- Appropriate semantic elements to support SEO

## Extra Challenge
Add a table to display nutrition information for your recipe:

```html
<table>
  <caption>Nutrition Information (per cookie)</caption>
  <thead>
    <tr>
      <th>Nutrient</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Calories</td>
      <td>150</td>
    </tr>
    <tr>
      <td>Protein</td>
      <td>2 g</td>
    </tr>
  </tbody>
</table>
```

## Next Steps
Great work with semantic HTML. In the next module, you will start using CSS to style your pages and make them visually engaging.

## Resources
- [MDN: HTML semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [WebAIM: Web accessibility](https://webaim.org/)
- [HTML5 Doctor: Semantic elements](http://html5doctor.com/)