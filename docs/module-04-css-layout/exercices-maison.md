# Homework Exercises

## Overview
These exercises allow you to master Flexbox, CSS Grid, and responsive design. You will learn to create modern layouts that adapt to all devices and screen sizes.

## Beginner Level

### Exercise 4.1: Introduction to Flexbox
**Objective**: Understand and use Flexbox basics to align elements.

**Instructions**:
1. Create a page `flexbox-basics.html` with multiple containers
2. Experiment with Flexbox properties:
   - `display: flex` to activate Flexbox
   - `justify-content` for horizontal alignment
   - `align-items` for vertical alignment
   - `flex-direction` to change direction
3. Create different examples:
   - Centered horizontal navigation
   - Card with aligned image and text
   - Buttons aligned to the right
   - Content centered both vertically and horizontally

**Validation Criteria**:
- [ ] At least 5 different Flexbox examples
- [ ] Use of all basic properties
- [ ] Correct alignments visible
- [ ] Commented code explaining each example

**Hints**:
- `justify-content: center` centers horizontally
- `align-items: center` centers vertically
- `flex-direction: column` changes to vertical layout

### Exercise 4.2: CSS Box Model
**Objective**: Master the box model with margin, border, padding, and content.

**Instructions**:
1. Create a page `box-model.html` demonstrating the box model
2. Create multiple boxes with different properties:
   - External margins (`margin`)
   - Borders (`border`)
   - Internal spacing (`padding`)
   - Content dimensions (`width`, `height`)
3. Use developer tools to inspect the boxes
4. Demonstrate the difference between `box-sizing: content-box` and `border-box`

**Validation Criteria**:
- [ ] Different box configurations visible
- [ ] Use of all box model properties
- [ ] Explanation of `box-sizing` differences
- [ ] Developer tools used for inspection

**Hints**:
- `box-sizing: border-box` includes padding and border in width
- `margin: 0 auto` centers blocks horizontally
- Inspect with F12 > Elements in Chrome

## Intermediate Level

### Exercise 4.3: Responsive Portfolio Layout
**Objective**: Create a complete portfolio with navigation, sections, and responsive design.

**Instructions**:
1. Create a multi-section portfolio (`portfolio-responsive.html`)
2. Include:
   - Header with navigation (Flexbox)
   - Hero section with title and description
   - Projects section as a grid
   - About section with flexible layout
   - Footer with contact information
3. Make it responsive:
   - Hamburger navigation for mobile
   - Adaptive grid (3 columns → 2 → 1)
   - Adaptive font sizes
   - Screen-adjusted spacing

**Validation Criteria**:
- [ ] Layout using Flexbox and Grid
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Functional navigation on all devices
- [ ] Images and content adapted to screens

**Hints**:
- `@media (max-width: 768px)` for breakpoints
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Use relative units (`rem`, `em`, `%`)

### Exercise 4.4: Introduction to CSS Grid
**Objective**: Learn CSS Grid basics to create complex layouts.

**Instructions**:
1. Create a page `grid-basics.html` with different Grid layouts
2. Experiment with:
   - `grid-template-columns` and `grid-template-rows`
   - `grid-column` and `grid-row` to position elements
   - `grid-gap` for spacing
   - `grid-template-areas` for named layouts
3. Create practical examples:
   - Photo gallery grid
   - Magazine layout (header, sidebar, main content)
   - Grid-organized form

**Validation Criteria**:
- [ ] At least 4 different Grid examples
- [ ] Use of `grid-template-areas`
- [ ] Explicit element positioning
- [ ] Consistent spacing with `gap`

**Hints**:
- `grid-template-columns: 1fr 2fr 1fr` creates proportional columns
- `grid-column: 1 / 3` spans across 2 columns
- Name areas: `grid-template-areas: "header header" "nav main"`

## Advanced Level

### Exercise 4.5: Project Management Application
**Objective**: Create a project management interface with complex layout.

**Instructions**:
1. Create an application `project-management.html` with:
   - Navigation sidebar (projects, tasks)
   - Header with search and user profile
   - Main area with dashboard
   - Project cards grid
   - Modals for creating/editing projects
2. Use CSS Grid for main layout:
   - Grid areas for global organization
   - Nested grids for sections
   - Flexbox for internal components
3. Make everything responsive with smart breakpoints

**Validation Criteria**:
- [ ] Complex layout using Grid and Flexbox
- [ ] Functional and intuitive interface
- [ ] Fully responsive design
- [ ] Smooth animations and transitions
- [ ] Organized CSS architecture (BEM or similar)

**Hints**:
- Use `grid-template-areas` for main layout
- Think mobile-first for responsive
- Organize your CSS into modular components

### Exercise 4.6: Simplified CSS Framework
**Objective**: Create your own responsive grid system inspired by Bootstrap.

**Instructions**:
1. Create a file `my-framework.css` with:
   - Grid system (12 columns)
   - Utility classes (`col-6`, `offset-3`)
   - Breakpoints (`sm-`, `md-`, `lg-`)
   - Responsive containers
   - Spacing utilities (`m-3`, `p-2`)
2. Create a demonstration page showing:
   - Basic grid (rows and columns)
   - Responsive grid (columns that stack)
   - Utilities used in a real layout
3. Document your framework

**Validation Criteria**:
- [ ] Functional grid system (12 columns)
- [ ] Mobile/tablet/desktop breakpoints
- [ ] Complete spacing utilities
- [ ] Clear documentation of classes
- [ ] Complete practical demonstration

**Hints**:
- `.container { max-width: 1200px; margin: 0 auto; }`
- `.row { display: flex; flex-wrap: wrap; }`
- `.col-6 { flex: 0 0 50%; max-width: 50%; }`

## Bonus Challenge

### Exercise 4.7: Complete Design System
**Objective**: Create a complete design system with layout, components, and theme.

**Instructions**:
1. Extend your CSS framework with:
   - CSS variables for theme (colors, fonts, spacing)
   - Basic components (buttons, cards, forms)
   - Advanced utilities (display, position, z-index)
   - Integrated dark/light theme
   - Global animations and transitions
2. Create a styleguide page (`styleguide.html`) showing:
   - All components with variations
   - Color palette and typography
   - Grid and breakpoints
   - Usage examples
3. Make it maintainable and extensible

**Validation Criteria**:
- [ ] Consistent and complete design system
- [ ] Organized CSS variables
- [ ] Reusable components
- [ ] Professional styleguide
- [ ] Extensible theme

**Hints**:
- Use `:root` for global variables
- Prefix component classes (`ds-button`, `ds-card`)
- Document with code examples

### Exercise 4.8: Layout Performance Optimization
**Objective**: Optimize an existing layout for better performance.

**Instructions**:
1. Take an existing complex layout
2. Identify performance issues:
   - Costly layout shifts (changing `display`)
   - Unnecessary repaints and reflows
   - Inefficient selectors
   - Unoptimized images
3. Apply optimizations:
   - Use `contain` to isolate layouts
   - Prefer `transform` to position changes
   - Optimize images (formats, sizes)
   - Reduce selector complexity
4. Measure improvements with developer tools

**Validation Criteria**:
- [ ] Performance analysis provided (before/after)
- [ ] Applied optimizations justified
- [ ] Measurable improvement in metrics
- [ ] Layout visually preserved
- [ ] More maintainable code

**Hints**:
- Use Chrome DevTools Performance tab
- `contain: layout style paint` isolates subtrees
- Preload critical resources
- Use `content-visibility: auto` for long pages

## Inter-module Integration

### Exercise 4.9: Module 5 Preparation
**Objective**: Prepare JavaScript integration by adding classes for interactivity.

**Instructions**:
1. Take your responsive portfolio
2. Add classes and attributes for JavaScript:
   - `data-*` to store information
   - Classes for states (`is-active`, `is-hidden`)
   - IDs for interactive elements
   - Attributes for form validation
3. Prepare structures for:
   - JavaScript navigation (mobile menu)
   - Filters and search
   - Modals and popups
   - Forms with validation
4. Document JavaScript hooks in comments

**Validation Criteria**:
- [ ] Appropriate `data-*` attributes added
- [ ] State classes defined in CSS
- [ ] Structure ready for JavaScript
- [ ] Comments indicating future features
- [ ] Compatibility with JS addition preserved

**Hints**:
- `data-project-id="123"` to identify elements
- Prepare `.js-hidden` classes for JavaScript
- Anticipate necessary event listeners

### Exercise 4.10: Modern Web Application
**Objective**: Create a complete web application combining all learnings.

**Instructions**:
1. Create a "Notes" application (`notes-app.html`)
2. Features:
   - Create/edit/delete notes
   - Categorize notes (work, personal, ideas)
   - Search in notes
   - Grid/list view
   - Dark/light theme
3. Complete responsive layout:
   - Sidebar for navigation/categories
   - Main area for notes
   - Header with controls
   - Modals for creating/editing
4. Prepare for JavaScript (structure only)

**Validation Criteria**:
- [ ] Complete and intuitive user interface
- [ ] Fully responsive layout
- [ ] Architecture prepared for JavaScript
- [ ] Modern and accessible design
- [ ] Future features well structured

**Hints**:
- Use Grid for main layout
- Prepare classes for states (active, selected)
- Anticipate persistence with localStorage

## Global Validation Criteria

To succeed in these exercises, ensure that:

- **Responsive**: Functional design on all devices (mobile/tablet/desktop)
- **Performance**: Optimized layouts (avoid layout shifts)
- **Accessibility**: Keyboard navigation and screen readers supported
- **Maintainability**: Organized and documented CSS code
- **Modernity**: Appropriate use of Grid and Flexbox
- **Compatibility**: Support for modern browsers

## Help Resources

- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)
- [CSS Performance Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Grid by Example](https://gridbyexample.com/)

## Next Steps

These exercises perfectly prepare you for Module 5 where you will add interactivity with JavaScript. You will now master modern and responsive layouts to create professional web applications!