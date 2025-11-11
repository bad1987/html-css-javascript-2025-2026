# Homework Exercises

## Overview
These practical exercises allow you to apply the fundamental concepts of web development learned in this module. All exercises are to be completed in English.

## Beginner Level

### Exercise 1.1: Your First Web Page
**Objective**: Create a simple HTML page with basic structure.

**Instructions**:
1. Create a file `ma-premiere-page.html`
2. Use the basic HTML structure (DOCTYPE, html, head, body)
3. Add a main title with your name
4. Include at least 3 paragraphs describing your interests
5. Use at least 2 different heading levels (h1, h2)

**Validation Criteria**:
- [ ] Page opens correctly in a browser
- [ ] Valid HTML structure
- [ ] At least 3 paragraphs
- [ ] Headings hierarchically correct

**Hints**:
- Always start with `<!DOCTYPE html>`
- Use `<h1>` for the main title
- Paragraphs use the `<p>` tag

### Exercise 1.2: Basic Formatting
**Objective**: Add simple formatting to text.

**Instructions**:
1. On the page created in exercise 1.1
2. Bold an important word in each paragraph
3. Underline your name in the title
4. Create a list of your 3 favorite things

**Validation Criteria**:
- [ ] Bold text visible (`<strong>` or `<b>`)
- [ ] Underlined text visible (`<em>` or `<i>`)
- [ ] List with at least 3 items (`<ul>` and `<li>`)

**Hints**:
- Use `<strong>` for bold text
- Use `<em>` for underlined text
- Lists use `<ul>` (unordered) or `<ol>` (ordered)

### Exercise 1.3: Links and Images
**Objective**: Add hyperlinks and an image to your page.

**Instructions**:
1. Add a link to your favorite website
2. Add a link to another HTML page (even if it doesn't exist yet)
3. Insert an image from the web with a descriptive alt text
4. Create a "Useful Links" section with 3 external links

**Validation Criteria**:
- [ ] At least 2 functional links (`<a href="...">`)
- [ ] One image with `alt` attribute (`<img src="..." alt="...">`)
- [ ] Links open in the browser

**Hints**:
- Links use `<a href="url">text</a>`
- Images use `<img src="url" alt="description">`
- Always think about accessibility with the `alt` attribute

## Intermediate Level

### Exercise 1.4: Personal Portfolio
**Objective**: Create a complete portfolio page.

**Instructions**:
1. Create a page `portfolio.html`
2. Include a profile photo or avatar
3. Add an "About" section with title and paragraphs
4. Create a "Skills" section as a list
5. Add a "Contact" section with email and social media links
6. Use all HTML elements learned

**Validation Criteria**:
- [ ] Appropriate semantic structure
- [ ] At least 5 paragraphs of content
- [ ] Images with alt texts
- [ ] Navigation between sections with anchors
- [ ] Functional external links

**Hints**:
- Use anchors to navigate on the page (`<a href="#section">`)
- Organize content into logical sections
- Think about user experience

### Exercise 1.5: Technology Comparison
**Objective**: Create an explanatory page of the three pillars of the web.

**Instructions**:
1. Create a page `technologies-web.html`
2. Create a section for each technology (HTML, CSS, JavaScript)
3. For each technology, include:
   - A descriptive title
   - 2-3 explanation paragraphs
   - A list of main features
   - A list of advantages
4. Add links to learning resources
5. Create a comparison table of the three technologies

**Validation Criteria**:
- [ ] Three distinct and well-organized sections
- [ ] Informative and accurate content
- [ ] Comparison table with appropriate headers
- [ ] Links to external resources

**Hints**:
- Use `<table>`, `<thead>`, `<tbody>` for the table
- Organize content with clear sections
- Make content engaging and accessible

## Advanced Level

### Exercise 1.6: Multi-page Site
**Objective**: Create a small website with multiple linked pages.

**Instructions**:
1. Create 3 HTML pages: `index.html`, `about.html`, `contact.html`
2. Each page must have:
   - A header with navigation to other pages
   - Unique main content
   - A footer with copyright information
3. The index page should present your site
4. The about page should tell your story
5. The contact page should include a form (even if not functional)
6. Use consistent navigation across all pages

**Validation Criteria**:
- [ ] Functional navigation between all pages
- [ ] Unique and relevant content for each page
- [ ] Consistent structure across all pages
- [ ] Correct relative links (`href="about.html"`)

**Hints**:
- Use relative paths for links
- Maintain similar structure on each page
- Think about navigation experience

### Exercise 1.7: Registration Form
**Objective**: Create a complete user registration form.

**Instructions**:
1. Create a page `inscription.html`
2. Include the following fields:
   - Full name (text)
   - Email (email)
   - Password (password)
   - Password confirmation (password)
   - Date of birth (date)
   - Country (select with options)
   - Interests (multiple checkboxes)
   - Newsletter (checkbox)
   - Comment (textarea)
3. Add appropriate labels for each field
4. Include "Submit" and "Reset" buttons
5. Organize the form into logical sections

**Validation Criteria**:
- [ ] All appropriate field types used
- [ ] Labels associated with fields (`<label for="...">`)
- [ ] Submit and reset buttons
- [ ] Organized structure with `<fieldset>` if appropriate

**Hints**:
- Use appropriate `name`, `id`, and `type` attributes
- `<label>` tags improve accessibility
- Test the form in a browser

## Bonus Challenge

### Exercise 1.8: Interactive Web Resume
**Objective**: Create a modern and interactive online resume.

**Instructions**:
1. Create a complete `cv.html` page
2. Include all classic resume sections:
   - Header with personal information
   - Professional experience
   - Education
   - Technical skills
   - Personal projects
   - Interests
   - Contact
3. Use anchors to quickly navigate between sections
4. Add links to your professional profiles
5. Include appropriate images or icons
6. Make it responsive in thought (even without CSS for now)

**Validation Criteria**:
- [ ] Complete and logical semantic structure
- [ ] Smooth internal navigation
- [ ] Professional and well-presented content
- [ ] Relevant external links
- [ ] Images with alt texts

**Hints**:
- Think about information hierarchy
- Use lists for skills and experiences
- Anchors allow quick navigation

## Inter-module Integration

### Exercise 1.9: Module 2 Preparation
**Objective**: Anticipate Module 2 concepts by applying HTML semantics.

**Instructions**:
1. Take your portfolio from exercise 1.4
2. Replace generic `<div>` with appropriate semantic elements:
   - `<header>` for the header
   - `<nav>` for navigation
   - `<main>` for main content
   - `<section>` for each major section
   - `<footer>` for the footer
3. Add relevant metadata in the `<head>`
4. Create an anchor-based navigation structure
5. Test basic accessibility (keyboard navigation)

**Validation Criteria**:
- [ ] Semantic elements used correctly
- [ ] Metadata in the `<head>` (charset, viewport, description)
- [ ] Functional anchor navigation
- [ ] Logical and accessible structure

**Hints**:
- Semantic elements improve SEO and accessibility
- Use `<meta charset="UTF-8">` for character set
- Test with Tab key for keyboard navigation

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Validity**: HTML code passes W3C validation
- **Accessibility**: Use of `alt` attributes and appropriate labels
- **Semantics**: Correct use of tags according to their purpose
- **Navigation**: Functional and intuitive links
- **Content**: Original and relevant text
- **Structure**: Logical and hierarchical organization

## Help Resources

- [MDN Web Docs - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Validator](https://validator.w3.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Next Steps

Once these exercises are completed, you will be ready to tackle Module 2 with a solid understanding of HTML basics. Don't hesitate to experiment and personalize your creations!