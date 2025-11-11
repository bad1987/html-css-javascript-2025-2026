# Module 01 - Introduction to Web Development

## Overview
Welcome to your journey into web development. In this module, you will learn what HTML is, how it forms the foundation of every website, and how to create your first simple web page.

## Objectives
By the end of this module, you will be able to:
- Understand the roles of HTML, CSS, and JavaScript
- Create a basic HTML document structure
- Add text content to a web page
- Use common HTML tags for formatting
- Preview your work in a web browser

## Prerequisites
- None. This module is designed for complete beginners.

## Required Materials
- VS Code editor (download from https://code.visualstudio.com/)
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- VS Code extension: Live Server (for easy in-browser preview)

## Session Structure
- Session 1: What is Web Development? (30 min)
- Session 2: Your First HTML Page (30 min)
- Practical Activity: Build a Simple Personal Profile Page (1 hour)

## Theory: What is Web Development?

### The Three Pillars of the Web
Every website you visit is built using three core technologies:

1. **HTML (HyperText Markup Language)**: The structure and content of the page
   - Like the skeleton of a building
   - Defines headings, paragraphs, images, and links

2. **CSS (Cascading Style Sheets)**: The visual style and layout
   - Like the paint, furniture, and decorations
   - Controls colors, fonts, spacing, and positioning

3. **JavaScript**: Interactivity and behavior
   - Like the electricity and devices
   - Makes pages respond to user actions

### How Browsers Work (Simplified)
When you open a website:
1. The browser requests the HTML file from a server
2. The browser reads the HTML and builds the page structure
3. If CSS and JavaScript are linked, the browser loads and applies them
4. You see the final rendered web page

## Practical Activity: Your First HTML Page

### Step 1: Set Up Your Workspace
1. Open VS Code
2. Create a new folder named `module-01`
3. Inside it, create a file named `index.html`
4. Install the Live Server extension in VS Code

### Step 2: Basic HTML Structure
Every HTML page starts with this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Web Page</title>
</head>
<body>
  <!-- Your content goes here -->
</body>
</html>
```

### Step 3: Add Content
Add some simple content to your page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page. I am learning HTML.</p>
  <p>HTML stands for <strong>HyperText Markup Language</strong>.</p>

  <h2>My Goals for This Course</h2>
  <ul>
    <li>Learn semantic HTML structure</li>
    <li>Understand CSS styling and responsive design</li>
    <li>Explore JavaScript interactivity and APIs</li>
    <li>Build full-stack web applications</li>
    <li>Apply modern development best practices</li>
  </ul>
</body>
</html>
```

### Step 4: Common HTML Tags
| Tag        | Purpose                          | Example                              |
|-----------|----------------------------------|--------------------------------------|
| `<h1>`–`<h6>` | Headings (h1 is the most important) | `<h1>Main Title</h1>`            |
| `<p>`     | Paragraph                        | `<p>This is a paragraph.</p>`       |
| `<strong>`| Bold / strong importance         | `<strong>Important!</strong>`       |
| `<em>`    | Emphasis (italic)                | `<em>Highlighted text</em>`         |
| `<ul>`    | Unordered list                   | `<ul><li>Item</li></ul>`            |
| `<ol>`    | Ordered list                     | `<ol><li>First</li></ol>`           |

## Assessment
Create a personal introduction page that includes:
- Your name as the main heading
- A short paragraph about yourself
- A list of three things you want to learn
- At least two different heading levels

## Project: Personal Profile Page
Build a simple web page that introduces you. Include:
- A main heading with your name
- Several paragraphs about your interests
- A list of your favorite things
- Different text formats (bold, italic)

## Next Steps
You have created your first web page. In the next module, you will dive deeper into HTML structure and learn semantic elements that give meaning to your content.

## Resources
- [MDN Web Docs: HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools: HTML Tutorial](https://www.w3schools.com/html/)
- [freeCodeCamp: Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)