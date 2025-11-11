# Practical Project: Create a Personal Profile Page

## Project Context
You have just learned the basics of HTML and want to create your first web page that introduces you. This simple project will allow you to practice all the basic HTML elements covered in this module.

## Objective
Create a simple personal profile page that includes your name, an introduction, your interests, and contact information.

## Implementation Steps

### Step 1: Environment Setup
1. Create a folder named `my-profile`
2. Open VS Code and create a file `index.html`
3. Install the Live Server extension if not already done

### Step 2: Basic HTML Structure
Create the fundamental structure of your page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Profile</title>
</head>
<body>
    <!-- Your content will go here -->
</body>
</html>
```

### Step 3: Adding Main Content
Add the following sections with appropriate HTML tags:

#### Header with your name
```html
<header>
    <h1>Your Full Name</h1>
    <p>Web Developer in Training</p>
</header>
```

#### About Section
```html
<section>
    <h2>About Me</h2>
    <p>Write 2-3 sentences about yourself, your motivations, and your goals in web development.</p>
</section>
```

#### My Interests Section
```html
<section>
    <h2>My Interests</h2>
    <ul>
        <li>Web Development</li>
        <li>Technology</li>
        <li>Design</li>
        <li>Continuous Learning</li>
    </ul>
</section>
```

#### Goals Section
```html
<section>
    <h2>My Goals</h2>
    <ol>
        <li>Master HTML, CSS, and JavaScript</li>
        <li>Learn modern frameworks</li>
        <li>Build complete web applications</li>
        <li>Contribute to open source projects</li>
    </ol>
</section>
```

### Step 4: Content Enrichment
Add formatted text:

```html
<p>I started my journey in web development because I am passionate about <strong>creating digital experiences</strong> that make people's lives easier.</p>

<p>I particularly like <em>the creative aspect</em> of web development, where I can combine logic and design to create something useful.</p>
```

### Step 5: Adding Contact Information
```html
<section>
    <h2>Contact</h2>
    <p>You can contact me:</p>
    <ul>
        <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">Your LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank">Your GitHub</a></li>
    </ul>
</section>
```

### Step 6: Testing and Validation
1. Open your `index.html` file in a browser
2. Use Live Server for automatic preview
3. Check that all links work
4. Test responsiveness by resizing the window

## Complete Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Profile - John Doe</title>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Web Developer in Training</p>
    </header>

    <main>
        <section>
            <h2>About Me</h2>
            <p>Hello! My name is John and I am passionate about web development. I started this journey to create useful and modern websites.</p>
            <p>I particularly like <strong>combining creativity and logic</strong> to solve complex problems and improve user experience.</p>
        </section>

        <section>
            <h2>My Interests</h2>
            <ul>
                <li><strong>Web Development</strong> - HTML, CSS, JavaScript</li>
                <li><em>Emerging Technologies</em> - AI, Blockchain, IoT</li>
                <li>UX/UI Design</li>
                <li>Continuous learning and technological watch</li>
            </ul>
        </section>

        <section>
            <h2>My Goals</h2>
            <ol>
                <li>Master modern web technologies</li>
                <li>Learn React and Node.js</li>
                <li>Contribute to open source projects</li>
                <li>Develop full-stack applications</li>
            </ol>
        </section>

        <section>
            <h2>Contact</h2>
            <p>Feel free to contact me to discuss projects or opportunities!</p>
            <ul>
                <li>Email: <a href="mailto:john.doe@email.com">john.doe@email.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">John Doe</a></li>
                <li>GitHub: <a href="https://github.com/johndoe" target="_blank">johndoe</a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
</body>
</html>
```

## Testing Instructions

### Functional Validation
- [ ] The page loads correctly in the browser
- [ ] All headings use the appropriate hierarchy (h1, h2)
- [ ] Lists are properly formatted (ul for interests, ol for goals)
- [ ] Email and external links work
- [ ] Formatted text (bold, italic) displays correctly

### Semantic Validation
- [ ] The structure uses appropriate semantic elements
- [ ] The DOCTYPE is present and correct
- [ ] Meta charset and viewport tags are present
- [ ] The lang="en" attribute is set on the html tag

## Additional Challenges

### Level 1: Customization
- Add a profile photo with the `<img>` tag
- Include a favorite quote with the `<blockquote>` tag
- Add relevant emojis in your content

### Level 2: Dynamic Content
- Create a skills list with a simple star rating system
- Add a "Recent Projects" section with links
- Include information about your education

### Level 3: Advanced Structure
- Organize your content in sections with descriptive headers
- Add a table to display your technical skills
- Create internal navigation with anchors

## Evaluation Criteria

### Functionality (40%)
- Page accessible and navigable
- All links functional
- Content displayed correctly

### HTML Structure (30%)
- Correct use of semantic tags
- Appropriate heading hierarchy
- Valid HTML syntax

### Content (20%)
- Relevant personal information
- Well-formatted and readable text
- Useful and functional links

### Presentation (10%)
- Well-organized and commented code
- Respect for HTML best practices

## Next Steps
Once this project is completed, you will have created your first functional web page! In the next module, we will learn about semantic HTML structure and adding images and links to further enrich your pages.