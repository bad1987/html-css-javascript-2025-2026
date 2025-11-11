# Module 03 - CSS Fundamentals

## Overview
Now that you have mastered HTML structure, let's add beauty to your pages with CSS! This module will teach you the basics of CSS styling to control the appearance of your HTML elements.

## Objectives
By the end of this module, you will be able to:
- Understand how CSS works
- Apply colors and fonts
- Control spacing and dimensions
- Use basic CSS selectors
- Link CSS files to your HTML pages
- Create visually appealing designs

## Prerequisites
- Modules 1 and 2: Basic HTML knowledge and structure
- Understanding of common HTML elements

## Required Materials
- VS Code with Live Server extension
- Modern web browser
- HTML files from previous modules

## Session Structure
- Session 1: CSS Introduction (30 min)
- Session 2: Colors, Fonts, and Text (30 min)
- Practical Activity: Style a Personal Page (1 hour)

## Theory: What is CSS?

### How CSS Works
CSS (Cascading Style Sheets) controls the appearance of your HTML elements. It works like a "stylesheet" that tells the browser how to display each element.

### Three Ways to Apply CSS

1. **Inline CSS** (directly in HTML tags):
```html
<p style="color: blue; font-size: 20px;">Styled text</p>
```

2. **Internal CSS** (in the `<head>` section):
```html
<head>
  <style>
    p { color: blue; font-size: 20px; }
  </style>
</head>
```

3. **External CSS** (separate file - recommended):
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## Practical Activity: Your First Stylesheet

### Step 1: Create a CSS File
1. Create a `style.css` file in the same folder as your `index.html`
2. Link it in your HTML with: `<link rel="stylesheet" href="style.css">`

### Step 2: Basic CSS Selectors

```css
/* All paragraphs */
p {
  color: blue;
  font-size: 16px;
}

/* Elements by class */
.highlighted {
  font-weight: bold;
  background-color: yellow;
}

/* Elements by ID */
#main {
  border: 2px solid black;
  padding: 10px;
}
```

### Step 3: Color Properties

```css
/* Color names */
h1 {
  color: red;
}

/* Hexadecimal codes */
h2 {
  color: #FF0000;
}

/* RGB */
p {
  color: rgb(255, 0, 0);
}

/* Background colors */
body {
  background-color: #f0f0f0;
}
```

### Step 4: Fonts and Text

```css
/* Font family */
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 32px;
  font-weight: bold;
}

/* Line spacing */
p {
  line-height: 1.6;
}

/* Text alignment */
h1 {
  text-align: center;
}

p {
  text-align: justify;
}
```

### Step 5: Spacing and Dimensions

```css
/* Margins (outside) */
div {
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

/* Padding (inside) */
div {
  padding: 15px;
}

/* Width and height */
img {
  width: 300px;
  height: 200px;
}

/* Borders */
div {
  border: 1px solid #ccc;
  border-radius: 5px;
}
```

## Project: Styled Personal Page

Enhance your profile page from Module 1 with CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Profile</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header id="main">
    <h1>My Personal Profile</h1>
    <p>Web Developer in Training</p>
  </header>

  <main>
    <section class="about">
      <h2>About Me</h2>
      <p>I am passionate about web development and learning HTML, CSS, and JavaScript.</p>
    </section>

    <section class="interests">
      <h2>My Interests</h2>
      <ul>
        <li>Programming</li>
        <li class="highlighted">Web Design</li>
        <li>Technology</li>
      </ul>
    </section>
  </main>
</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
}

#main {
  background-color: #007bff;
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

h2 {
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.highlighted {
  background-color: #fff3cd;
  padding: 5px;
  border-radius: 3px;
}

ul {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
}

li {
  margin-bottom: 5px;
}
```

## Assessment
1. Create a page with at least 3 different sections
2. Apply consistent colors throughout the design
3. Use at least 4 different CSS properties
4. Ensure the page is readable and attractive

## Extra Challenge
Add hover effects:

```css
.highlighted:hover {
  background-color: #ffeaa7;
  cursor: pointer;
  transition: background-color 0.3s;
}
```

## Next Steps
Great work on your first CSS steps! In the next module, we will learn CSS layout techniques to organize your elements on the page.

## Resources
- [MDN: Getting Started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [CSS-Tricks Complete Guide](https://css-tricks.com/guides/)
- [freeCodeCamp CSS](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)