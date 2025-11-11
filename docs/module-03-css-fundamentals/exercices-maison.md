# Homework Exercises

## Overview
These exercises allow you to master the basics of CSS: selectors, properties, colors, fonts, and spacing. You will learn to create visually appealing and coherent designs.

## Beginner Level

### Exercise 3.1: First Steps in CSS
**Objective**: Link a CSS stylesheet to an HTML page and apply basic styles.

**Instructions**:
1. Create a simple HTML page with content (titles, paragraphs, list)
2. Create a separate `style.css` file
3. Link the CSS file to your HTML page with `<link rel="stylesheet" href="style.css">`
4. Apply the following styles:
   - Background color for the page (`body`)
   - Color and font size for titles
   - Spacing between paragraphs
   - Style for the list (colored bullets)

**Validation Criteria**:
- [ ] External CSS file correctly linked
- [ ] At least 5 different CSS properties used
- [ ] Styles visible in the browser
- [ ] Code organized and commented

**Hints**:
- Use `background-color` for background color
- `font-size` and `color` for texts
- `margin` or `padding` for spacing

### Exercise 3.2: CSS Selectors
**Objective**: Master the different types of CSS selectors.

**Instructions**:
1. Create an HTML page with different elements:
   - Multiple paragraphs with different classes
   - Elements with specific IDs
   - A nested list
   - Links in different contexts
2. Create CSS rules using:
   - Tag selectors (`p`, `h1`)
   - Class selectors (`.important`, `.secondary`)
   - ID selectors (`#main`, `#footer`)
   - Descendant selectors (`nav a`)
   - Pseudo-class selectors (`:hover`, `:first-child`)

**Validation Criteria**:
- [ ] All types of selectors used at least once
- [ ] Specific styles applied according to selectors
- [ ] `:hover` effect visible on links
- [ ] Specificity hierarchy respected

**Hints**:
- IDs have the highest specificity (`#id > .class > element`)
- `:hover` works on all elements, not just links
- Test the cascade by adding multiple rules for the same element

## Intermediate Level

### Exercise 3.3: Business Card Design
**Objective**: Create an elegant business card with CSS.

**Instructions**:
1. Create a page `carte-visite.html` with a single business card
2. Include classic information:
   - First and last name
   - Position/Profession
   - Contact details (phone, email)
   - Address
   - Logo or photo (optional)
3. Apply a professional design:
   - Gradient or solid background
   - Drop shadows (`box-shadow`)
   - Rounded borders
   - Hierarchical typography
   - Harmonious spacing
4. Make it responsive (centered and adapted)

**Validation Criteria**:
- [ ] Professional and readable design
- [ ] Use of at least 8 different CSS properties
- [ ] Appropriate shadows and visual effects
- [ ] Clear and hierarchical typography
- [ ] Responsive centering on the page

**Hints**:
- Use `border-radius` for rounded corners
- `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` for a soft shadow
- `max-width` and `margin: 0 auto` for centering

### Exercise 3.4: Coherent Color Palette
**Objective**: Create and apply a coherent color palette on a page.

**Instructions**:
1. Choose or create a palette of 5 harmonious colors
2. Create a page `palette.html` demonstrating the palette usage
3. Define CSS variables for your palette:
   ```css
   :root {
     --primary-color: #007bff;
     --secondary-color: #6c757d;
     --accent-color: #28a745;
     --background-color: #f8f9fa;
     --text-color: #212529;
   }
   ```
4. Apply the palette on different elements:
   - Page and section backgrounds
   - Text and link colors
   - Borders and accents
   - Buttons and interactive elements

**Validation Criteria**:
- [ ] CSS variables defined and used
- [ ] Coherent and harmonious palette
- [ ] Application on at least 10 different elements
- [ ] Sufficient contrasts for readability

**Hints**:
- CSS variables use `--variable-name` and `var(--variable-name)`
- Test contrasts with online tools
- Think of light/dark variations of your colors

## Advanced Level

### Exercise 3.5: Styled Portfolio
**Objective**: Transform your HTML portfolio into a modern design with advanced CSS.

**Instructions**:
1. Take your portfolio from Module 2
2. Apply a complete design with:
   - Header with fixed navigation
   - Well-spaced sections with backgrounds
   - Cards to present projects/skills
   - Styled buttons with hover effects
   - Modern typography (Google Fonts recommended)
   - Decorative icons or images
3. Use advanced CSS techniques:
   - Flexbox for layouts
   - Grid for galleries
   - Transitions and animations
   - Pseudo-elements for decorations

**Validation Criteria**:
- [ ] Modern and professional design
- [ ] Use of Flexbox or Grid
- [ ] Smooth animations and transitions
- [ ] Careful typography
- [ ] Basic responsive design

**Hints**:
- Import Google fonts: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`
- Use `transition: all 0.3s ease` for effects
- `display: flex` to align elements horizontally

### Exercise 3.6: Design System
**Objective**: Create a reusable design system with CSS.

**Instructions**:
1. Create a file `design-system.css` with:
   - Variables for colors, spacing, typography
   - Utility classes (`text-center`, `mb-3`, `btn-primary`)
   - Basic components (buttons, cards, forms)
   - Layout helpers (containers, grids)
2. Create a demonstration page `demo-systeme.html`
3. Show all components and utilities:
   - Different button sizes
   - Text and background colors
   - Consistent spacing
   - Composed components (cards with buttons)

**Validation Criteria**:
- [ ] Complete and organized CSS variables
- [ ] Reusable utility classes
- [ ] Consistent components
- [ ] Documentation of used classes
- [ ] Complete demonstration of possibilities

**Hints**:
- Prefix utilities (`u-`, `text-`, `bg-`, `p-`, `m-`)
- Use a spacing scale (4px, 8px, 16px, 24px, 32px...)
- Document with CSS comments

## Bonus Challenge

### Exercise 3.7: Dark/Light Theme
**Objective**: Implement a dark/light theme system.

**Instructions**:
1. Create a page with theme switching
2. Define two sets of CSS variables:
   ```css
   /* Light theme */
   :root {
     --bg-color: #ffffff;
     --text-color: #333333;
     --accent-color: #007bff;
   }
   
   /* Dark theme */
   [data-theme="dark"] {
     --bg-color: #1a1a1a;
     --text-color: #ffffff;
     --accent-color: #4dabf7;
   }
   ```
3. Add a button to toggle between themes
4. Use JavaScript to change the `data-theme` attribute
5. Save user preference (localStorage)

**Validation Criteria**:
- [ ] Functional toggling between themes
- [ ] CSS variables used everywhere
- [ ] Preference saved
- [ ] Smooth transitions between themes
- [ ] Accessibility (system preference respected)

**Hints**:
- `document.documentElement.setAttribute('data-theme', 'dark')`
- `localStorage.setItem('theme', 'dark')`
- `@media (prefers-color-scheme: dark)` for system preference

### Exercise 3.8: Animation and Micro-interactions
**Objective**: Add animations and micro-interactions to an interface.

**Instructions**:
1. Create an interactive page with multiple elements
2. Implement different types of animations:
   - Hover transitions (`:hover`)
   - Entry animations for elements
   - Transformations (rotation, scale, translation)
   - Loading animations
3. Use appropriate CSS properties:
   - `transition`
   - `transform`
   - `animation` with `@keyframes`
   - `opacity` and `visibility`
4. Optimize performance (use `transform` and `opacity`)

**Validation Criteria**:
- [ ] Smooth and non-jerky animations
- [ ] Appropriate use of transformations
- [ ] Optimized performance (no `layout` triggers)
- [ ] Intuitive and pleasant interactions

**Hints**:
- Avoid animating `width`, `height`, `margin`, `padding`
- Prefer `transform: translate()`, `scale()`, `rotate()`
- Use `will-change` for complex animations

## Inter-module Integration

### Exercise 3.9: Module 4 Preparation
**Objective**: Prepare CSS layout by structuring HTML for Flexbox/Grid.

**Instructions**:
1. Take your portfolio from Module 3
2. Refactor HTML to facilitate layouts:
   - Add containers (`<div class="container">`)
   - Create grid sections (`<div class="grid">`)
   - Prepare Flexbox areas (`<div class="flex-row">`)
   - Add layout utility classes
3. Prepare breakpoints for responsive:
   - Mobile classes (`mobile-only`, `desktop-hidden`)
   - Responsive containers (`container-sm`, `container-lg`)
   - Visibility utilities (`hidden-sm`, `visible-lg`)
4. Document the planned structure in comments

**Validation Criteria**:
- [ ] HTML structure ready for Flexbox/Grid
- [ ] Layout utility classes defined
- [ ] Breakpoints prepared
- [ ] Explanatory comments in code
- [ ] Compatibility with Module 4 anticipated

**Hints**:
- Think of class names that will be used in CSS
- Prepare sections for `display: grid` and `display: flex`
- Anticipate media queries for responsive

### Exercise 3.10: CSS Performance Audit
**Objective**: Optimize an existing CSS file for better performance.

**Instructions**:
1. Take an existing CSS file (or create a voluminous one)
2. Perform a performance audit:
   - Identify redundancies
   - Check excessive specificity
   - Optimize selectors
   - Reduce repetitions with variables
3. Apply optimizations:
   - Group similar rules
   - Maximize inheritance
   - Minimize specificity
   - Remove unused rules
4. Compare before/after performance

**Validation Criteria**:
- [ ] Optimized CSS file (reduced size)
- [ ] Reduced specificity where possible
- [ ] CSS variables used to avoid repetitions
- [ ] Optimized selectors (avoid universal selectors)
- [ ] Performance report provided

**Hints**:
- Use Chrome DevTools "Coverage" tool
- Avoid `* { margin: 0; padding: 0; }`
- Prefer classes to complex selectors
- Document your optimizations

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Consistency**: Coherent color palette and typography
- **Performance**: Optimized and efficient CSS
- **Maintainability**: Code organized with variables and comments
- **Accessibility**: Sufficient contrasts and visible focus
- **Responsive**: Design adaptable to different screen sizes
- **Modernity**: Use of latest CSS features

## Help Resources

- [CSS Tricks - Complete Guide](https://css-tricks.com/guides/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Coolors - Color Palette Generator](https://coolors.co/)

## Next Steps

These exercises perfectly prepare you for Module 4 where you will learn layout with Flexbox and CSS Grid. You will now have solid foundations to create complex and modern interfaces!