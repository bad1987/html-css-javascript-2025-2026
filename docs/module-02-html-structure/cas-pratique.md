# Practical Project: Cooking Recipes Website

## Project Context
You now master the basics of HTML and want to create a useful and practical website. This project will allow you to practice all the semantic HTML elements, links, images, and tables covered in this module.

## Objective
Create a complete cooking recipes website with multiple pages, using semantic HTML for good accessibility and SEO.

## Project Structure
```
cooking-recipes/
├── index.html           # Home page
├── recipes.html         # Recipe list
├── contact.html         # Contact page
├── assets/
│   └── images/          # Folder for images
└── README.md           # Documentation
```

## Implementation Steps

### Step 1: Project Setup
1. Create a folder `cooking-recipes`
2. Create the necessary HTML files
3. Prepare example images (or use online image URLs)

### Step 2: Home Page (index.html)
Create an attractive home page with:

#### Header with navigation
```html
<header>
    <h1>🍳 My Delicious Recipes</h1>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="recipes.html">Recipes</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

#### Introduction section
```html
<main>
    <section id="hero">
        <h2>Discover Simple and Delicious Recipes</h2>
        <p>Learn to cook tasty dishes with our easy-to-follow recipes.</p>
        <a href="recipes.html" class="btn-primary">View Recipes</a>
    </section>
</main>
```

#### Popular recipes section
```html
<section id="featured-recipes">
    <h2>Popular Recipes</h2>
    <div class="recipe-grid">
        <article class="recipe-card">
            <img src="assets/images/pasta.jpg" alt="Spaghetti Carbonara" width="300" height="200">
            <h3><a href="recipes.html#pasta">Spaghetti Carbonara</a></h3>
            <p>A classic Italian recipe, creamy and savory.</p>
            <div class="recipe-meta">
                <span>⏱️ 25 min</span>
                <span>👥 4 people</span>
                <span>⭐ 4.8/5</span>
            </div>
        </article>

        <article class="recipe-card">
            <img src="assets/images/salad.jpg" alt="Caesar Salad" width="300" height="200">
            <h3><a href="recipes.html#salad">Caesar Salad</a></h3>
            <p>Fresh and crunchy, perfect for summer.</p>
            <div class="recipe-meta">
                <span>⏱️ 15 min</span>
                <span>👥 2 people</span>
                <span>⭐ 4.5/5</span>
            </div>
        </article>
    </div>
</section>
```

### Step 3: Recipes Page (recipes.html)
Create a complete page with multiple recipes:

#### Semantic structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipes - My Delicious Recipes</title>
</head>
<body>
    <header>
        <h1>🍳 My Delicious Recipes</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="recipes.html">Recipes</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Our Recipe Collection</h2>

        <section class="recipe-filters">
            <h3>Filter by Category</h3>
            <ul>
                <li><a href="#pasta">Pasta</a></li>
                <li><a href="#salads">Salads</a></li>
                <li><a href="#desserts">Desserts</a></li>
            </ul>
        </section>

        <article id="pasta" class="recipe">
            <header>
                <h3>Spaghetti Carbonara</h3>
                <div class="recipe-info">
                    <p><strong>Preparation time:</strong> 10 minutes</p>
                    <p><strong>Cooking time:</strong> 15 minutes</p>
                    <p><strong>Serves:</strong> 4 people</p>
                    <p><strong>Difficulty:</strong> Medium</p>
                </div>
            </header>

            <section class="ingredients">
                <h4>Ingredients</h4>
                <ul>
                    <li>400g spaghetti</li>
                    <li>200g bacon</li>
                    <li>4 egg yolks</li>
                    <li>100g grated parmesan</li>
                    <li>Ground black pepper</li>
                    <li>Salt</li>
                </ul>
            </section>

            <section class="instructions">
                <h4>Instructions</h4>
                <ol>
                    <li>Cook the pasta in plenty of salted boiling water.</li>
                    <li>In a pan, cook the bacon until golden.</li>
                    <li>In a bowl, mix the egg yolks and parmesan.</li>
                    <li>Drain the pasta, keeping some cooking water.</li>
                    <li>Quickly mix off the heat with the sauce.</li>
                    <li>Serve immediately with freshly ground pepper.</li>
                </ol>
            </section>

            <aside class="recipe-tips">
                <h4>Chef's Tips</h4>
                <ul>
                    <li>Never put the pan back on the heat after adding the eggs</li>
                    <li>Use freshly grated parmesan for more flavor</li>
                    <li>Serve immediately to prevent the sauce from curdling</li>
                </ul>
            </aside>
        </article>

        <article id="salad" class="recipe">
            <header>
                <h3>Caesar Salad</h3>
                <div class="recipe-info">
                    <p><strong>Preparation time:</strong> 15 minutes</p>
                    <p><strong>Serves:</strong> 2 people</p>
                    <p><strong>Difficulty:</strong> Easy</p>
                </div>
            </header>

            <section class="ingredients">
                <h4>Ingredients</h4>
                <ul>
                    <li>1 romaine lettuce</li>
                    <li>200g grilled chicken</li>
                    <li>50g parmesan</li>
                    <li>100g croutons</li>
                    <li>Caesar dressing (store-bought or homemade)</li>
                </ul>
            </section>

            <section class="instructions">
                <h4>Instructions</h4>
                <ol>
                    <li>Wash and cut the lettuce into pieces.</li>
                    <li>Cut the chicken into slices.</li>
                    <li>Grate the parmesan.</li>
                    <li>In a salad bowl, mix all ingredients.</li>
                    <li>Pour the dressing and mix gently.</li>
                    <li>Serve fresh.</li>
                </ol>
            </section>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 My Delicious Recipes. All rights reserved.</p>
        <nav>
            <a href="index.html">Home</a> |
            <a href="recipes.html">Recipes</a> |
            <a href="contact.html">Contact</a>
        </nav>
    </footer>
</body>
</html>
```

### Step 4: Contact Page (contact.html)
Create a contact page with a form and information:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - My Delicious Recipes</title>
</head>
<body>
    <header>
        <h1>🍳 My Delicious Recipes</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="recipes.html">Recipes</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Contact Us</h2>

        <section class="contact-info">
            <h3>Contact Information</h3>
            <address>
                <p>📧 Email: <a href="mailto:contact@recipes.com">contact@recipes.com</a></p>
                <p>📱 Phone: +33 1 23 45 67 89</p>
                <p>📍 Address: 123 Cooking Street, Paris, France</p>
            </address>
        </section>

        <section class="contact-form">
            <h3>Send Us a Message</h3>
            <form action="#" method="post">
                <div class="form-group">
                    <label for="name">Full name:</label>
                    <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <select id="subject" name="subject">
                        <option value="general">General question</option>
                        <option value="recipe">Recipe suggestion</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" class="btn-primary">Send Message</button>
            </form>
        </section>

        <section class="faq">
            <h3>Frequently Asked Questions</h3>
            <dl>
                <dt>How to submit a recipe?</dt>
                <dd>Use the contact form above with the subject "Recipe suggestion".</dd>

                <dt>Are the recipes tested?</dt>
                <dd>All our recipes are tested in the kitchen before publication.</dd>

                <dt>Can I modify the recipes?</dt>
                <dd>Absolutely! Recipes are meant to be adapted to your tastes.</dd>
            </dl>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Delicious Recipes. All rights reserved.</p>
    </footer>
</body>
</html>
```

### Step 5: Nutritional Information Table
Add a nutritional information table to a recipe:

```html
<section class="nutrition">
    <h4>Nutritional Information (per serving)</h4>
    <table>
        <caption>Nutritional values for Caesar Salad</caption>
        <thead>
            <tr>
                <th>Nutrient</th>
                <th>Amount</th>
                <th>% DV*</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Energy</td>
                <td>320 kcal</td>
                <td>16%</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td>25g</td>
                <td>50%</td>
            </tr>
            <tr>
                <td>Carbohydrates</td>
                <td>8g</td>
                <td>3%</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td>22g</td>
                <td>31%</td>
            </tr>
            <tr>
                <td>Fiber</td>
                <td>3g</td>
                <td>12%</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">* DV = Daily Value</td>
            </tr>
        </tfoot>
    </table>
</section>
```

## Testing Instructions

### Functional Validation
- [ ] Navigation between pages works correctly
- [ ] All internal and external links are functional
- [ ] Images display with appropriate alt texts
- [ ] Anchors allow navigation within the recipes page

### Semantic Validation
- [ ] Appropriate use of semantic tags (header, nav, main, section, article, aside, footer)
- [ ] Correct hierarchical structure of headings (h1 → h2 → h3, etc.)
- [ ] Appropriate meta tags for SEO and accessibility
- [ ] Correct use of lists (ul, ol, dl)

### Accessibility Validation
- [ ] All `<img>` elements have descriptive `alt` attributes
- [ ] Links have explicit texts (not just "click here")
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation is possible

## Additional Challenges

### Level 1: Content Improvement
- Add 3 additional recipes with varied ingredients
- Create a "Nutritional Tips" section for each recipe
- Add links to preparation videos (YouTube)

### Level 2: Interactive Features
- Create a "Favorites" page to save preferred recipes
- Add a star rating system for recipes
- Implement a recipe search function

### Level 3: Advanced Structure
- Organize recipes by categories (vegetarian, vegan, gluten-free)
- Add a blog section with articles on cooking techniques
- Create an "About" page with the site's history

## Evaluation Criteria

### Structure and Semantics (30%)
- Correct use of semantic HTML elements
- Logical and accessible content hierarchy
- Valid and well-structured HTML code

### Content and Functionality (30%)
- Complete and informative pages
- Smooth navigation between pages
- Functional and useful links

### Accessibility and SEO (20%)
- Images with appropriate alt texts
- Semantic structure promoting search engine optimization
- Accessible navigation

### Quality and Presentation (20%)
- Well-organized and commented code
- Original and engaging content
- Respect for HTML best practices

## Next Steps
Congratulations on your first multi-page website! You now have a solid foundation in semantic HTML. In the next module, we will add styling with CSS to make your pages visually attractive.