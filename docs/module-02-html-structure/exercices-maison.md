# Homework Exercises

## Overview
These exercises allow you to master semantic HTML elements and create accessible, well-structured web pages. Focus on the meaning of content rather than its appearance.

## Beginner Level

### Exercise 2.1: Basic Semantic Structure
**Objective**: Transform a basic HTML page into semantic structure.

**Instructions**:
1. Take your page from exercise 1.4 (portfolio)
2. Replace all generic `<div>` with appropriate semantic elements:
   - `<header>` for the portfolio header
   - `<nav>` for navigation
   - `<main>` for main content
   - `<section>` for each section (about, skills, etc.)
   - `<footer>` for the footer
3. Add ARIA attributes if necessary
4. Test with a screen reader (or simulate by navigating with Tab)

**Validation Criteria**:
- [ ] Semantic elements used correctly
- [ ] Logical and hierarchical structure
- [ ] Functional keyboard navigation
- [ ] No superfluous `<div>`

**Hints**:
- `<header>` generally contains the main title and navigation
- `<main>` should appear only once per page
- `<section>` groups thematic content

### Exercise 2.2: Navigation and Structured Links
**Objective**: Create a complete navigation system with well-organized links.

**Instructions**:
1. Create a page `navigation.html`
2. Create a navigation menu with:
   - Links to page sections (anchors)
   - Links to other pages on your site
   - External links to useful resources
3. Organize navigation into logical categories
4. Add breadcrumbs for hierarchical navigation
5. Include a site map in the footer

**Validation Criteria**:
- [ ] Accessible main navigation
- [ ] Functional anchor links (`#section`)
- [ ] Correct relative and absolute links
- [ ] Logical navigation structure

**Hints**:
- Use `<nav>` for main navigation
- Breadcrumbs often use `<ol>` with links
- Consider the `aria-current` attribute for the active page

## Intermediate Level

### Exercise 2.3: Structured Recipe Page
**Objective**: Create a recipe page using all learned semantic elements.

**Instructions**:
1. Create a page `recette.html` for your favorite recipe
2. Use complete semantic structure:
   - `<header>` with title and general information
   - `<nav>` to navigate between recipe sections
   - `<main>` containing `<article>` for the recipe
   - `<section>` for ingredients, instructions, tips
   - `<aside>` for nutritional information or variations
   - `<footer>` with credits and related links
3. Include relevant metadata in the `<head>`
4. Add links to other similar recipes

**Validation Criteria**:
- [ ] Complete and appropriate semantic structure
- [ ] Content organized into logical sections
- [ ] Metadata in the `<head>` (author, description, keywords)
- [ ] Functional internal navigation links

**Hints**:
- Use `<time>` for preparation/cooking times
- `<figure>` and `<figcaption>` for dish images
- Think about SEO with metadata

### Exercise 2.4: Accessible Form
**Objective**: Create a fully accessible contact form.

**Instructions**:
1. Create a page `contact.html` with a complete form
2. Include all accessibility elements:
   - Explicit labels for each field (`<label>`)
   - Logical grouping with `<fieldset>` and `<legend>`
   - Error messages associated with fields
   - Intuitive keyboard navigation
   - Appropriate ARIA attributes
3. Varied field types: text, email, tel, select, textarea, radio, checkbox
4. Basic HTML5 validation
5. Semantic structure around the form

**Validation Criteria**:
- [ ] All fields have associated labels
- [ ] Logical groups with `<fieldset>`
- [ ] Complete keyboard navigation (Tab order)
- [ ] `aria-describedby` attributes for errors
- [ ] Appropriate field types (`type="email"`, etc.)

**Hints**:
- `<label for="id">` links label to field
- `aria-required="true"` indicates required fields
- Test with a screen reader

## Advanced Level

### Exercise 2.5: Complete Blog Site
**Objective**: Create a multi-page blog site with advanced semantic structure.

**Instructions**:
1. Create a blog site with 4 pages:
   - `index.html`: Homepage with article list
   - `article.html`: Detailed article page
   - `about.html`: About the author page
   - `contact.html`: Contact form
2. Use advanced semantic elements:
   - `<time>` for dates
   - `<figure>` and `<figcaption>` for images
   - `<blockquote>` for quotes
   - `<address>` for contact information
   - `<mark>` to highlight text
3. Implement a complete anchor system
4. Add structured metadata with microdata or JSON-LD
5. Make the site accessible to assistive technologies

**Validation Criteria**:
- [ ] Rich and appropriate semantic structure
- [ ] Smooth navigation between pages
- [ ] Structured metadata present
- [ ] Complete accessibility (WCAG 2.1 level A)
- [ ] Quality and organized content

**Hints**:
- Use `itemscope` and `itemtype` for structured data
- `<time datetime="2024-01-01">January 1, 2024</time>`
- Test accessibility with tools like WAVE

### Exercise 2.6: Accessible Web Application
**Objective**: Create a small web application with focus on accessibility.

**Instructions**:
1. Create a "Todo List" application (`todo.html`)
2. Basic features:
   - Add a task (form)
   - Mark as completed (accessible checkbox)
   - Delete a task (button with confirmation)
   - Filter tasks (completed/pending/all)
3. Complete accessibility:
   - Appropriate labels and descriptions
   - Dynamic ARIA states (`aria-checked`, `aria-expanded`)
   - Status messages for actions (`aria-live`)
   - Keyboard shortcuts (Enter, Space, Delete)
   - Correct focus management
4. Appropriate semantic structure
5. Saved states (simulated localStorage)

**Validation Criteria**:
- [ ] All interactions accessible via keyboard
- [ ] States communicated correctly (`aria-live`)
- [ ] Complete labels and descriptions
- [ ] Logical semantic structure
- [ ] Appropriate focus management

**Hints**:
- `role="listbox"` for selectable lists
- `aria-label` for iconic buttons
- `tabindex` to manage focus order

## Bonus Challenge

### Exercise 2.7: Technical Documentation
**Objective**: Create a fully semantic technical documentation page.

**Instructions**:
1. Create a page `documentation.html` for a fictional JavaScript library
2. Include all technical documentation elements:
   - Header with title and version
   - Table of contents with anchors
   - Sections for installation, usage, API
   - Code examples with `<code>` and `<pre>`
   - Tables for parameters and methods
   - Notes and warnings with `<aside>`
   - Footer with navigation and links
3. Use advanced semantic elements:
   - `<details>` and `<summary>` for collapsible sections
   - `<dfn>` to define technical terms
   - `<abbr>` for abbreviations
   - `<kbd>` for keyboard shortcuts
4. Add simulated internal search
5. Make it printable with appropriate page breaks

**Validation Criteria**:
- [ ] Professional documentation structure
- [ ] Complete navigation and table of contents
- [ ] Well-presented code with simulated syntax highlighting
- [ ] Technical accessibility maintained
- [ ] Informative and well-organized content

**Hints**:
- `<dfn>` defines a term, usable in `<abbr title="...">`
- `<kbd>Ctrl</kbd>+<kbd>C</kbd>` for shortcuts
- `@media print` for print CSS (Module 3 anticipation)

## Inter-module Integration

### Exercise 2.8: Module 3 Preparation
**Objective**: Prepare CSS integration by creating semantic classes.

**Instructions**:
1. Take your blog site from exercise 2.5
2. Add semantic CSS classes to elements:
   - Functional classes (`btn-primary`, `card`, `hero`)
   - Layout classes (`container`, `grid`, `flex`)
   - State classes (`is-active`, `is-hidden`, `has-error`)
   - Utility classes (`text-center`, `mb-3`, `bg-light`)
3. Structure HTML to facilitate future CSS:
   - Appropriate containers for layouts
   - Generic elements for reusable components
   - data- attributes for JavaScript interactions
4. Prepare sections for CSS styles (HTML comments)
5. Document used classes in a comment

**Validation Criteria**:
- [ ] Semantic and reusable classes
- [ ] Structure prepared for CSS Grid and Flexbox
- [ ] data- attributes for future interactions
- [ ] Documentation of classes in code
- [ ] Preparation for responsive design

**Hints**:
- Prefix utility classes (`u-`, `text-`, `bg-`)
- Use descriptive names (`btn-cta`, `nav-main`)
- Prepare containers for breakpoints

### Exercise 2.9: Accessibility Audit
**Objective**: Audit and improve the accessibility of an existing web page.

**Instructions**:
1. Choose an existing web page (or use one of your creations)
2. Perform a complete accessibility audit:
   - Keyboard navigation (Tab order)
   - Screen readers (alt texts, labels)
   - Color contrast (simulated)
   - Semantic structure
   - Missing ARIA attributes
3. Fix all identified problems:
   - Add missing labels
   - Improve alt texts
   - Correct semantic structure
   - Add necessary ARIA attributes
4. Create an audit report with before/after
5. Test with accessibility tools

**Validation Criteria**:
- [ ] Detailed audit report provided
- [ ] Measurable improvements made
- [ ] WCAG 2.1 level AA compliance targeted
- [ ] Tests with automated tools
- [ ] User experience improvement

**Hints**:
- Use WAVE extension or Lighthouse for audit
- Axe DevTools for detailed analysis
- NVDA or JAWS to test screen readers
- Document each correction made

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Validity**: HTML code valid according to W3C Validator
- **Accessibility**: WCAG 2.1 level A minimum compliance
- **Semantics**: Appropriate use of all semantic elements
- **Structure**: Logical and navigable hierarchy
- **SEO**: Metadata and structure optimized for search engines
- **Performance**: Structure allowing fast rendering

## Help Resources

- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [Semantic HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_semantic_HTML)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Next Steps

These exercises perfectly prepare you for Module 3 where you will add visual styles with CSS. You will now have a solid foundation to create attractive and accessible user interfaces!