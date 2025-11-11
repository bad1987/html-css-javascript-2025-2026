# Practical Project: Library Management System

## Project Context
You now have a firm grasp of JavaScript fundamentals and want to build a more sophisticated application that leverages objects and advanced functions. This project will let you practice object-oriented programming, modular code organization, and complex state management.

## Goal
Build a complete library management system that handles books, loans, users, and advanced search capabilities.

## Project Structure
```
library-management/
├── index.html          # Main page
├── admin.html          # Admin interface
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Responsive styles
├── js/
│   ├── models/
│   │   ├── Book.js     # Book class
│   │   ├── User.js     # User class
│   │   ├── Loan.js     # Loan class
│   │   └── Library.js  # Library class
│   ├── services/
│   │   ├── storage.js  # Storage management
│   │   ├── search.js   # Search engine
│   │   └── validation.js # Data validation
│   ├── utils/
│   │   ├── date.js     # Date utilities
│   │   └── format.js   # Formatting
│   ├── ui/
│   │   ├── BookUI.js   # Book interface
│   │   ├── UserUI.js   # User interface
│   │   └── AdminUI.js  # Admin interface
│   └── app.js          # Main application
└── README.md
```

## Implementation Steps

### Step 1: Project Setup
1. Create the `gestion-bibliotheque` folder
2. Organize the files following the structure above
3. Create a basic HTML scaffold

### Step 2: Data Models (Classes and Objects)
Create the core classes:

```javascript
// js/models/Book.js
class Book {
    constructor(id, title, author, isbn, category, year, copies = 1) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.year = year;
        this.copies = copies;
        this.availableCopies = copies;
        this.loans = [];
    }

    // Methods
    isAvailable() {
        return this.availableCopies > 0;
    }

    borrow() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }

    returnBook() {
        if (this.availableCopies < this.copies) {
            this.availableCopies++;
            return true;
        }
        return false;
    }

    getLoanCount() {
        return this.loans.length;
    }

    toString() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
}

// Export pour les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Book;
}
```

```javascript
// js/models/User.js
class User {
    constructor(id, name, email, membershipType = 'standard') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.membershipType = membershipType;
        this.registrationDate = new Date();
        this.isActive = true;
        this.loans = [];
        this.fines = 0;
    }

    // Methods
    canBorrow() {
        const maxLoans = this.membershipType === 'premium' ? 10 : 5;
        return this.getActiveLoans().length < maxLoans && this.fines === 0;
    }

    getActiveLoans() {
        return this.loans.filter(loan => !loan.returnDate);
    }

    borrowBook(book, dueDate) {
        if (!this.canBorrow()) {
            throw new Error('User cannot borrow a book');
        }

        const loan = new Loan(Date.now().toString(), this.id, book.id, new Date(), dueDate);
        this.loans.push(loan);
        return loan;
    }

    returnBook(bookId) {
        const loan = this.loans.find(l => l.bookId === bookId && !l.returnDate);
        if (loan) {
            loan.returnDate = new Date();

            // Calculate penalties if returned late
            if (loan.isOverdue()) {
                this.fines += loan.calculateFine();
            }

            return loan;
        }
        return null;
    }

    payFine(amount) {
        this.fines = Math.max(0, this.fines - amount);
    }

    getTotalFines() {
        return this.fines;
    }

    toString() {
        return `${this.name} (${this.email})`;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = User;
}
```

```javascript
// js/models/Loan.js
class Loan {
    constructor(id, userId, bookId, loanDate, dueDate) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.loanDate = loanDate;
        this.dueDate = dueDate;
        this.returnDate = null;
        this.fine = 0;
    }

    // Methods
    isOverdue() {
        if (this.returnDate) {
            return this.returnDate > this.dueDate;
        }
        return new Date() > this.dueDate;
    }

    calculateFine() {
        if (!this.isOverdue()) return 0;

        const returnDate = this.returnDate || new Date();
        const daysOverdue = Math.ceil((returnDate - this.dueDate) / (1000 * 60 * 60 * 24));

        // 0.50€ per day late
        return daysOverdue * 0.5;
    }

    getDaysOverdue() {
        if (!this.isOverdue()) return 0;

        const referenceDate = this.returnDate || new Date();
        return Math.ceil((referenceDate - this.dueDate) / (1000 * 60 * 60 * 24));
    }

    toString() {
        return `Loan from ${this.loanDate.toLocaleDateString()} - Due: ${this.dueDate.toLocaleDateString()}`;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Loan;
}
```

```javascript
// js/models/Library.js
class Library {
    constructor() {
        this.books = [];
        this.users = [];
        this.loans = [];
        this.categories = [
            'Fiction', 'Science Fiction', 'Mystery', 'Biography',
            'History', 'Computer Science', 'Science', 'Art', 'Other'
        ];
    }

    // Book management
    addBook(book) {
        this.books.push(book);
        return book;
    }

    removeBook(bookId) {
        const index = this.books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            // Check if there are active loans
            const activeLoans = this.loans.filter(loan =>
                loan.bookId === bookId && !loan.returnDate
            );

            if (activeLoans.length > 0) {
                throw new Error('Cannot delete a book currently on loan');
            }

            return this.books.splice(index, 1)[0];
        }
        return null;
    }

    findBookById(id) {
        return this.books.find(book => book.id === id);
    }

    findBooksByTitle(title) {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    findBooksByAuthor(author) {
        return this.books.filter(book =>
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    findBooksByCategory(category) {
        return this.books.filter(book => book.category === category);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable());
    }

    // User management
    addUser(user) {
        this.users.push(user);
        return user;
    }

    findUserById(id) {
        return this.users.find(user => user.id === id);
    }

    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    getActiveUsers() {
        return this.users.filter(user => user.isActive);
    }

    // Loan management
    borrowBook(userId, bookId, days = 14) {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);

        if (!user) throw new Error('User not found');
        if (!book) throw new Error('Book not found');
        if (!book.isAvailable()) throw new Error('Book unavailable');

        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + days);

        const loan = user.borrowBook(book, dueDate);
        book.borrow();
        this.loans.push(loan);

        return loan;
    }

    returnBook(userId, bookId) {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);

        if (!user) throw new Error('Utilisateur non trouvé');
        if (!book) throw new Error('Livre non trouvé');

        const loan = user.returnBook(bookId);
        if (loan) {
            book.returnBook();
        }

        return loan;
    }

    getActiveLoans() {
        return this.loans.filter(loan => !loan.returnDate);
    }

    getOverdueLoans() {
        return this.loans.filter(loan => loan.isOverdue());
    }

    // Statistics
    getStatistics() {
        return {
            totalBooks: this.books.length,
            availableBooks: this.getAvailableBooks().length,
            totalUsers: this.users.length,
            activeUsers: this.getActiveUsers().length,
            activeLoans: this.getActiveLoans().length,
            overdueLoans: this.getOverdueLoans().length,
            totalRevenue: this.calculateTotalRevenue()
        };
    }

    calculateTotalRevenue() {
        return this.loans.reduce((total, loan) => total + loan.fine, 0);
    }

    // Advanced search
    searchBooks(criteria) {
        let results = [...this.books];

        if (criteria.title) {
            results = results.filter(book =>
                book.title.toLowerCase().includes(criteria.title.toLowerCase())
            );
        }

        if (criteria.author) {
            results = results.filter(book =>
                book.author.toLowerCase().includes(criteria.author.toLowerCase())
            );
        }

        if (criteria.category) {
            results = results.filter(book => book.category === criteria.category);
        }

        if (criteria.year) {
            results = results.filter(book => book.year === criteria.year);
        }

        if (criteria.available !== undefined) {
            results = results.filter(book =>
                criteria.available ? book.isAvailable() : !book.isAvailable()
            );
        }

        return results;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Library;
}
```

### Step 3: Utility Services
Create the supporting services:

```javascript
// js/services/storage.js
class StorageService {
    constructor() {
        this.BOOKS_KEY = 'library_books';
        this.USERS_KEY = 'library_users';
        this.LOANS_KEY = 'library_loans';
    }

    // Save
    saveBooks(books) {
        localStorage.setItem(this.BOOKS_KEY, JSON.stringify(books));
    }

    saveUsers(users) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    saveLoans(loans) {
        localStorage.setItem(this.LOANS_KEY, JSON.stringify(loans));
    }

    // Load
    loadBooks() {
        const data = localStorage.getItem(this.BOOKS_KEY);
        if (!data) return [];

        const booksData = JSON.parse(data);
        return booksData.map(bookData => {
            const book = new Book(
                bookData.id,
                bookData.title,
                bookData.author,
                bookData.isbn,
                bookData.category,
                bookData.year,
                bookData.copies
            );
            book.availableCopies = bookData.availableCopies;
            book.loans = bookData.loans || [];
            return book;
        });
    }

    loadUsers() {
        const data = localStorage.getItem(this.USERS_KEY);
        if (!data) return [];

        const usersData = JSON.parse(data);
        return usersData.map(userData => {
            const user = new User(
                userData.id,
                userData.name,
                userData.email,
                userData.membershipType
            );
            user.registrationDate = new Date(userData.registrationDate);
            user.isActive = userData.isActive;
            user.loans = userData.loans || [];
            user.fines = userData.fines || 0;
            return user;
        });
    }

    loadLoans() {
        const data = localStorage.getItem(this.LOANS_KEY);
        if (!data) return [];

        const loansData = JSON.parse(data);
        return loansData.map(loanData => {
            const loan = new Loan(
                loanData.id,
                loanData.userId,
                loanData.bookId,
                new Date(loanData.loanDate),
                new Date(loanData.dueDate)
            );
            if (loanData.returnDate) {
                loan.returnDate = new Date(loanData.returnDate);
            }
            loan.fine = loanData.fine || 0;
            return loan;
        });
    }

    // Export/Import
    exportData() {
        return {
            books: this.loadBooks().map(book => ({
                id: book.id,
                title: book.title,
                author: book.author,
                isbn: book.isbn,
                category: book.category,
                year: book.year,
                copies: book.copies,
                availableCopies: book.availableCopies,
                loans: book.loans
            })),
            users: this.loadUsers().map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                membershipType: user.membershipType,
                registrationDate: user.registrationDate,
                isActive: user.isActive,
                loans: user.loans,
                fines: user.fines
            })),
            loans: this.loadLoans().map(loan => ({
                id: loan.id,
                userId: loan.userId,
                bookId: loan.bookId,
                loanDate: loan.loanDate,
                dueDate: loan.dueDate,
                returnDate: loan.returnDate,
                fine: loan.fine
            }))
        };
    }

    importData(data) {
        if (data.books) this.saveBooks(data.books);
        if (data.users) this.saveUsers(data.users);
        if (data.loans) this.saveLoans(data.loans);
    }

    clearAll() {
        localStorage.removeItem(this.BOOKS_KEY);
        localStorage.removeItem(this.USERS_KEY);
        localStorage.removeItem(this.LOANS_KEY);
    }
}
```

```javascript
// js/services/search.js
class SearchService {
    constructor(library) {
        this.library = library;
    }

    // Simple search
    search(query) {
        const results = {
            books: [],
            users: []
        };

        if (!query || query.trim().length < 2) {
            return results;
        }

        const searchTerm = query.toLowerCase().trim();

        // Search in books
        results.books = this.library.books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm) ||
            book.isbn.includes(searchTerm)
        );

        // Search in users
        results.users = this.library.users.filter(user =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );

        return results;
    }

    // Advanced book search
    advancedBookSearch(criteria) {
        return this.library.searchBooks(criteria);
    }

    // Search loans by user
    findUserLoans(userId) {
        return this.library.loans.filter(loan => loan.userId === userId);
    }

    // Search popular books
    getPopularBooks(limit = 10) {
        return this.library.books
            .sort((a, b) => b.getLoanCount() - a.getLoanCount())
            .slice(0, limit);
    }

    // Search overdue books
    getOverdueBooks() {
        const overdueLoans = this.library.getOverdueLoans();
        const bookIds = [...new Set(overdueLoans.map(loan => loan.bookId))];

        return bookIds.map(bookId => {
            const book = this.library.findBookById(bookId);
            const bookLoans = overdueLoans.filter(loan => loan.bookId === bookId);
            return {
                book,
                overdueLoans: bookLoans
            };
        });
    }
}
```

### Step 4: User Interface
Create the main interface:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📚 Library Management</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>📚 Library Management</h1>
            <nav class="nav">
                <a href="#books" class="nav-link active">Books</a>
                <a href="#users" class="nav-link">Users</a>
                <a href="#loans" class="nav-link">Loans</a>
                <a href="#admin" class="nav-link">Administration</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <!-- Search Section -->
        <section class="search-section">
            <div class="container">
                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="Search books, authors, users...">
                    <button id="search-btn">🔍</button>
                </div>
            </div>
        </section>

        <!-- Statistics Section -->
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>Total Books</h3>
                        <div class="stat-number" id="total-books">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Available Books</h3>
                        <div class="stat-number" id="available-books">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Active Users</h3>
                        <div class="stat-number" id="active-users">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Active Loans</h3>
                        <div class="stat-number" id="active-loans">0</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Books Section -->
        <section id="books" class="books-section">
            <div class="container">
                <div class="section-header">
                    <h2>Book Catalog</h2>
                    <button id="add-book-btn" class="btn btn-primary">Add Book</button>
                </div>

                <div class="books-filters">
                    <select id="category-filter">
                        <option value="">All categories</option>
                    </select>
                    <select id="availability-filter">
                        <option value="">All books</option>
                        <option value="available">Available only</option>
                        <option value="unavailable">On loan only</option>
                    </select>
                </div>

                <div id="books-list" class="books-list">
                    <!-- Books will be displayed here -->
                </div>
            </div>
        </section>

        <!-- Users Section -->
        <section id="users" class="users-section">
            <div class="container">
                <div class="section-header">
                    <h2>User Management</h2>
                    <button id="add-user-btn" class="btn btn-primary">Add User</button>
                </div>

                <div id="users-list" class="users-list">
                    <!-- Users will be displayed here -->
                </div>
            </div>
        </section>

        <!-- Loans Section -->
        <section id="loans" class="loans-section">
            <div class="container">
                <div class="section-header">
                    <h2>Loan Management</h2>
                    <button id="new-loan-btn" class="btn btn-primary">New Loan</button>
                </div>

                <div class="loans-tabs">
                    <button class="tab-btn active" data-tab="active">Active Loans</button>
                    <button class="tab-btn" data-tab="overdue">Overdue</button>
                    <button class="tab-btn" data-tab="history">History</button>
                </div>

                <div id="loans-list" class="loans-list">
                    <!-- Loans will be displayed here -->
                </div>
            </div>
        </section>
    </main>

    <!-- Modals -->
    <div id="book-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="book-modal-title">Add Book</h3>
                <button class="modal-close">&times;</button>
            </div>
            <form id="book-form">
                <div class="form-group">
                    <label for="book-title">Title *</label>
                    <input type="text" id="book-title" required>
                </div>
                <div class="form-group">
                    <label for="book-author">Author *</label>
                    <input type="text" id="book-author" required>
                </div>
                <div class="form-group">
                    <label for="book-isbn">ISBN</label>
                    <input type="text" id="book-isbn">
                </div>
                <div class="form-group">
                    <label for="book-category">Category *</label>
                    <select id="book-category" required>
                        <!-- Options will be added by JavaScript -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="book-year">Year</label>
                    <input type="number" id="book-year" min="1000" max="2030">
                </div>
                <div class="form-group">
                    <label for="book-copies">Number of copies</label>
                    <input type="number" id="book-copies" min="1" value="1">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" id="cancel-book" class="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

## Testing Instructions

### Object-Oriented Programming Validation (40%)
- [ ] Classes Book, User, Loan and Library are correctly defined
- [ ] Class methods function correctly
- [ ] Inheritance and encapsulation are appropriately used
- [ ] Error handling with try/catch is implemented

### Advanced Functions Validation (30%)
- [ ] Closures are used in services
- [ ] Higher-order functions (map, filter, reduce) are used
- [ ] Modern array methods are implemented
- [ ] Delegated event management works

### User Interface Validation (20%)
- [ ] Interface is responsive and modern
- [ ] Input forms correctly validate data
- [ ] Error and success messages display
- [ ] Navigation between sections works

### Architecture Validation (10%)
- [ ] Code is organized into logical modules
- [ ] Services are independent and reusable
- [ ] Separation of concerns is respected
- [ ] State management is consistent

## Additional Challenges

### Level 1: Enhanced Features
- Add a book reservation system
- Implement simulated email due date notifications
- Create a rating and review system for books
- Add CSV import/export functionality

### Level 2: Advanced Interface
- Create a complete admin interface
- Implement statistical charts with Chart.js
- Add faceted search system
- Create detailed views for each book/user

### Level 3: Technical Optimizations
- Add persistence with IndexedDB
- Implement synchronization with backend API
- Create unit tests for all classes
- Add service worker for offline mode

## Evaluation Criteria

### Object-Oriented Programming (35%)
- Correct use of classes and objects
- Appropriate implementation of encapsulation
- Proper use of inheritance and polymorphism
- Robust error management

### Functions and Modules (30%)
- Advanced functions correctly implemented
- Modular code organization
- Appropriate use of closures
- Well-structured services

### Interface and UX (20%)
- Responsive and intuitive design
- Complete form validation
- Appropriate user feedback
- Optimized performance

### Architecture and Quality (15%)
- Clear separation of responsibilities
- Maintainable and extensible code
- Appropriate documentation
- Consistent state management

## Next Steps
Congratulations on your library management system! You now master advanced JavaScript concepts with objects and functions. In the next module, we will explore browser APIs and asynchronous programming.