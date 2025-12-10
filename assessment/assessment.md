# HTML/CSS/JavaScript In-Class Assessment: Task Manager

## Course Information
- **Course**: HTML/CSS/JavaScript 2025-2026
- **Module**: Basics (HTML, CSS, JavaScript)
- **Assessment Type**: Supervised In-Class Practical
- **Duration**: 4 hours (continuous session)

## Assessment Overview
This is a supervised in-class assessment where students will build a simple Task Manager web application from scratch. The assessment emphasizes semantic HTML structure, CSS styling, and JavaScript functionality. Students work individually under instructor supervision.

## Session Structure (4 hours)

### Phase 1: Planning & HTML (60 minutes)
- Review requirements and plan approach
- Create semantic HTML structure
- Set up basic page layout

### Phase 2: CSS Styling (60 minutes)
- Implement CSS design
- Style forms, buttons, and task list
- Ensure professional appearance

### Phase 3: JavaScript Functionality (90 minutes)
- Implement task addition
- Add completion and deletion features
- Test and debug functionality

### Phase 4: Review & Submission (30 minutes)
- Final testing and refinements
- Code review and documentation
- Submit completed files

## Project Requirements

### HTML (Semantic Structure - 25%)
- Use semantic HTML elements: `<header>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy
- Input field with label and button
- Task list structure using `<ul>` and `<li>`

### CSS (Styling - 25%)
- Clean, professional design
- Consistent color scheme and typography
- Visual feedback for interactive elements
- Complete all TODO comments in assessment.css for proper styling

### JavaScript (Functionality - 50%)
- Add tasks to list from input field
- Mark tasks as completed (visual change)
- Delete tasks from list
- Input validation (prevent empty submissions)
- Event handling for all interactions
- Complete all TODO comments in assessment.js for full functionality

## Implementation Tasks

### HTML Tasks (assessment.html)
- Add header element with h1 "Task Manager" and p "Organize your tasks efficiently"
- Add main element wrapping all content
- Add task-input-section with h2 "Add New Task", form div with label, input, and button
- Add task-list-section with h2 "Your Tasks" and empty ul
- Add footer with copyright text
- Link to assessment.js at the end

### CSS Tasks (assessment.css)
- Add styles to header: text-align center, margin-bottom 30px, padding 30px, background rgba(255, 255, 255, 0.95)
- Add styles to h1 in header: color #4a5568, font-size 2.5rem, margin-bottom 10px, font-weight 700
- Add styles to main: max-width 800px, margin auto, display grid, gap 30px
- Style all section elements: background rgba(255, 255, 255, 0.95), padding 30px, border-radius 15px, box-shadow 0 8px 32px rgba(0, 0, 0, 0.1), backdrop-filter blur(10px)
- Style h2 in sections: color #4a5568, margin-bottom 20px, font-size 1.8rem, font-weight 600
- Style #task-form with flexbox column and gap 15px
- Remove border from #task-form button and add padding 15px 30px
- Style #task-list li with flexbox row, space-between, align-items center, border-color #e2e8f0
- Style .task-actions with flexbox row and gap 10px

### JavaScript Tasks (assessment.js)
- Get task input element with id 'task-input', name variable taskInput
- Get task list element with id 'task-list', name variable taskList
- Clear task input value to empty string after adding task
- Set className of taskSpan to 'task-text'
- Set textContent of completeBtn to 'Complete'
- Add click event listener to completeBtn with () => toggleComplete(li)
- Set textContent of notification to message

## Provided Materials
- Assessment instructions (this document)
- Development environment (VS Code)
- Browser for testing (Chrome/Firefox/Edge)

## Technical Specifications
- HTML5 semantic elements required
- CSS3 features allowed (no preprocessors)
- Vanilla JavaScript only (no frameworks/libraries)
- Must work in modern browsers
- No external dependencies


## Assessment Rules
- Individual work only
- No collaboration or code sharing
- Instructor available for clarification questions
- Regular check-ins by instructor
- All work must be completed within 4 hours

## Submission Requirements
- Three files: `assessment.html`, `assessment.css`, `assessment.js`
- Files must be functional when opened together
- Submit to the instructor at the end of the session

## Support During Assessment
- Instructor will circulate to provide guidance
- Clarification questions allowed (conceptual only)
- Technical issues will be addressed
- No direct coding help provided

## Preparation Notes
- Review semantic HTML elements
- Practice CSS layouts and styling
- Understand DOM manipulation and event handling
- Familiarize with form validation techniques

---