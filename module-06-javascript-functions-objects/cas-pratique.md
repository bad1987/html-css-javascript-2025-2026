# Cas Pratique : Système de Gestion de Bibliothèque

## Contexte du Projet
Vous maîtrisez maintenant les bases de JavaScript et vous voulez créer une application plus complexe utilisant des objets et des fonctions avancées. Ce projet vous permettra de pratiquer la programmation orientée objet, les modules, et la gestion d'état complexe.

## Objectif
Créer un système complet de gestion de bibliothèque avec gestion des livres, emprunts, utilisateurs, et recherche avancée.

## Structure du Projet
```
gestion-bibliotheque/
├── index.html          # Page principale
├── admin.html          # Interface d'administration
├── css/
│   ├── style.css       # Styles principaux
│   └── responsive.css  # Styles responsives
├── js/
│   ├── models/
│   │   ├── Book.js     # Classe Livre
│   │   ├── User.js     # Classe Utilisateur
│   │   ├── Loan.js     # Classe Emprunt
│   │   └── Library.js  # Classe Bibliothèque
│   ├── services/
│   │   ├── storage.js  # Gestion du stockage
│   │   ├── search.js   # Moteur de recherche
│   │   └── validation.js # Validation des données
│   ├── utils/
│   │   ├── date.js     # Utilitaires de date
│   │   └── format.js   # Formatage
│   ├── ui/
│   │   ├── BookUI.js   # Interface des livres
│   │   ├── UserUI.js   # Interface des utilisateurs
│   │   └── AdminUI.js  # Interface d'administration
│   └── app.js          # Application principale
└── README.md
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez le dossier `gestion-bibliotheque`
2. Organisez les fichiers selon l'arborescence ci-dessus
3. Créez une structure HTML de base

### Étape 2 : Classes et Objets (Modèles)
Créez les classes fondamentales :

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

    // Méthodes
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
        return `${this.title} par ${this.author} (${this.year})`;
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

    // Méthodes
    canBorrow() {
        const maxLoans = this.membershipType === 'premium' ? 10 : 5;
        return this.getActiveLoans().length < maxLoans && this.fines === 0;
    }

    getActiveLoans() {
        return this.loans.filter(loan => !loan.returnDate);
    }

    borrowBook(book, dueDate) {
        if (!this.canBorrow()) {
            throw new Error('Utilisateur ne peut pas emprunter de livre');
        }

        const loan = new Loan(Date.now().toString(), this.id, book.id, new Date(), dueDate);
        this.loans.push(loan);
        return loan;
    }

    returnBook(bookId) {
        const loan = this.loans.find(l => l.bookId === bookId && !l.returnDate);
        if (loan) {
            loan.returnDate = new Date();

            // Calcul des pénalités si retour en retard
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

    // Méthodes
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

        // 0.50€ par jour de retard
        return daysOverdue * 0.5;
    }

    getDaysOverdue() {
        if (!this.isOverdue()) return 0;

        const referenceDate = this.returnDate || new Date();
        return Math.ceil((referenceDate - this.dueDate) / (1000 * 60 * 60 * 24));
    }

    toString() {
        return `Emprunt du ${this.loanDate.toLocaleDateString()} - Échéance: ${this.dueDate.toLocaleDateString()}`;
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
            'Roman', 'Science-fiction', 'Policier', 'Biographie',
            'Histoire', 'Informatique', 'Science', 'Art', 'Autre'
        ];
    }

    // Gestion des livres
    addBook(book) {
        this.books.push(book);
        return book;
    }

    removeBook(bookId) {
        const index = this.books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            // Vérifier qu'il n'y a pas d'emprunts actifs
            const activeLoans = this.loans.filter(loan =>
                loan.bookId === bookId && !loan.returnDate
            );

            if (activeLoans.length > 0) {
                throw new Error('Impossible de supprimer un livre en cours d\'emprunt');
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

    // Gestion des utilisateurs
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

    // Gestion des emprunts
    borrowBook(userId, bookId, days = 14) {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);

        if (!user) throw new Error('Utilisateur non trouvé');
        if (!book) throw new Error('Livre non trouvé');
        if (!book.isAvailable()) throw new Error('Livre non disponible');

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

    // Statistiques
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

    // Recherche avancée
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

### Étape 3 : Services Utilitaires
Créez les services de support :

```javascript
// js/services/storage.js
class StorageService {
    constructor() {
        this.BOOKS_KEY = 'library_books';
        this.USERS_KEY = 'library_users';
        this.LOANS_KEY = 'library_loans';
    }

    // Sauvegarde
    saveBooks(books) {
        localStorage.setItem(this.BOOKS_KEY, JSON.stringify(books));
    }

    saveUsers(users) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    saveLoans(loans) {
        localStorage.setItem(this.LOANS_KEY, JSON.stringify(loans));
    }

    // Chargement
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

    // Recherche simple
    search(query) {
        const results = {
            books: [],
            users: []
        };

        if (!query || query.trim().length < 2) {
            return results;
        }

        const searchTerm = query.toLowerCase().trim();

        // Recherche dans les livres
        results.books = this.library.books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm) ||
            book.isbn.includes(searchTerm)
        );

        // Recherche dans les utilisateurs
        results.users = this.library.users.filter(user =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );

        return results;
    }

    // Recherche avancée pour les livres
    advancedBookSearch(criteria) {
        return this.library.searchBooks(criteria);
    }

    // Recherche d'emprunts par utilisateur
    findUserLoans(userId) {
        return this.library.loans.filter(loan => loan.userId === userId);
    }

    // Recherche de livres populaires
    getPopularBooks(limit = 10) {
        return this.library.books
            .sort((a, b) => b.getLoanCount() - a.getLoanCount())
            .slice(0, limit);
    }

    // Recherche de livres en retard
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

### Étape 4 : Interface Utilisateur
Créez l'interface principale :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📚 Gestion de Bibliothèque</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>📚 Gestion de Bibliothèque</h1>
            <nav class="nav">
                <a href="#books" class="nav-link active">Livres</a>
                <a href="#users" class="nav-link">Utilisateurs</a>
                <a href="#loans" class="nav-link">Emprunts</a>
                <a href="#admin" class="nav-link">Administration</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <!-- Section Recherche -->
        <section class="search-section">
            <div class="container">
                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="Rechercher des livres, auteurs, utilisateurs...">
                    <button id="search-btn">🔍</button>
                </div>
            </div>
        </section>

        <!-- Section Statistiques -->
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>Livres Totaux</h3>
                        <div class="stat-number" id="total-books">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Livres Disponibles</h3>
                        <div class="stat-number" id="available-books">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Utilisateurs Actifs</h3>
                        <div class="stat-number" id="active-users">0</div>
                    </div>
                    <div class="stat-card">
                        <h3>Emprunts Actifs</h3>
                        <div class="stat-number" id="active-loans">0</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Livres -->
        <section id="books" class="books-section">
            <div class="container">
                <div class="section-header">
                    <h2>Catalogue des Livres</h2>
                    <button id="add-book-btn" class="btn btn-primary">Ajouter un Livre</button>
                </div>

                <div class="books-filters">
                    <select id="category-filter">
                        <option value="">Toutes les catégories</option>
                    </select>
                    <select id="availability-filter">
                        <option value="">Tous les livres</option>
                        <option value="available">Disponibles uniquement</option>
                        <option value="unavailable">Empruntés uniquement</option>
                    </select>
                </div>

                <div id="books-list" class="books-list">
                    <!-- Les livres seront affichés ici -->
                </div>
            </div>
        </section>

        <!-- Section Utilisateurs -->
        <section id="users" class="users-section">
            <div class="container">
                <div class="section-header">
                    <h2>Gestion des Utilisateurs</h2>
                    <button id="add-user-btn" class="btn btn-primary">Ajouter un Utilisateur</button>
                </div>

                <div id="users-list" class="users-list">
                    <!-- Les utilisateurs seront affichés ici -->
                </div>
            </div>
        </section>

        <!-- Section Emprunts -->
        <section id="loans" class="loans-section">
            <div class="container">
                <div class="section-header">
                    <h2>Gestion des Emprunts</h2>
                    <button id="new-loan-btn" class="btn btn-primary">Nouvel Emprunt</button>
                </div>

                <div class="loans-tabs">
                    <button class="tab-btn active" data-tab="active">Emprunts Actifs</button>
                    <button class="tab-btn" data-tab="overdue">En Retard</button>
                    <button class="tab-btn" data-tab="history">Historique</button>
                </div>

                <div id="loans-list" class="loans-list">
                    <!-- Les emprunts seront affichés ici -->
                </div>
            </div>
        </section>
    </main>

    <!-- Modals -->
    <div id="book-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="book-modal-title">Ajouter un Livre</h3>
                <button class="modal-close">&times;</button>
            </div>
            <form id="book-form">
                <div class="form-group">
                    <label for="book-title">Titre *</label>
                    <input type="text" id="book-title" required>
                </div>
                <div class="form-group">
                    <label for="book-author">Auteur *</label>
                    <input type="text" id="book-author" required>
                </div>
                <div class="form-group">
                    <label for="book-isbn">ISBN</label>
                    <input type="text" id="book-isbn">
                </div>
                <div class="form-group">
                    <label for="book-category">Catégorie *</label>
                    <select id="book-category" required>
                        <!-- Options seront ajoutées par JavaScript -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="book-year">Année</label>
                    <input type="number" id="book-year" min="1000" max="2030">
                </div>
                <div class="form-group">
                    <label for="book-copies">Nombre d'exemplaires</label>
                    <input type="number" id="book-copies" min="1" value="1">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                    <button type="button" id="cancel-book" class="btn btn-secondary">Annuler</button>
                </div>
            </form>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

## Instructions de Test

### Validation Programmation Orientée Objet (40%)
- [ ] Classes Book, User, Loan et Library sont correctement définies
- [ ] Méthodes des classes fonctionnent correctement
- [ ] Héritage et encapsulation sont utilisés appropriés
- [ ] Gestion d'erreurs avec try/catch est implémentée

### Validation Fonctions Avancées (30%)
- [ ] Fermetures (closures) sont utilisées dans les services
- [ ] Fonctions d'ordre supérieur (map, filter, reduce) sont utilisées
- [ ] Méthodes de tableaux modernes sont implémentées
- [ ] Gestion d'événements délégués fonctionne

### Validation Interface Utilisateur (20%)
- [ ] Interface est responsive et moderne
- [ ] Formulaires de saisie valident correctement les données
- [ ] Messages d'erreur et succès s'affichent
- [ ] Navigation entre sections fonctionne

### Validation Architecture (10%)
- [ ] Code est organisé en modules logiques
- [ ] Services sont indépendants et réutilisables
- [ ] Séparation des responsabilités est respectée
- [ ] Gestion d'état est cohérente

## Défis Supplémentaires

### Niveau 1 : Fonctionnalités Étoffées
- Ajoutez un système de réservations de livres
- Implémentez des notifications d'échéance par email simulé
- Créez un système de notation et commentaires pour les livres
- Ajoutez une fonctionnalité d'import/export CSV

### Niveau 2 : Interface Avancée
- Créez une interface d'administration complète
- Implémentez des graphiques de statistiques avec Chart.js
- Ajoutez un système de recherche facettée
- Créez des vues détaillées pour chaque livre/utilisateur

### Niveau 3 : Optimisations Techniques
- Ajoutez une persistance avec IndexedDB
- Implémentez la synchronisation avec un backend API
- Créez des tests unitaires pour toutes les classes
- Ajoutez un service worker pour le mode hors ligne

## Critères d'Évaluation

### Programmation Orientée Objet (35%)
- Utilisation correcte des classes et objets
- Implémentation appropriée de l'encapsulation
- Héritage et polymorphisme utilisés correctement
- Gestion d'erreurs robuste

### Fonctions et Modules (30%)
- Fonctions avancées correctement implémentées
- Organisation modulaire du code
- Utilisation appropriée des fermetures
- Services bien structurés

### Interface et UX (20%)
- Design responsive et intuitif
- Validation des formulaires complète
- Feedback utilisateur approprié
- Performance optimisée

### Architecture et Qualité (15%)
- Séparation claire des responsabilités
- Code maintenable et extensible
- Documentation appropriée
- Gestion d'état cohérente

## Prochaines Étapes
Bravo pour votre système de gestion de bibliothèque ! Vous maîtrisez maintenant les concepts avancés de JavaScript avec les objets et fonctions. Au prochain module, nous explorerons les APIs du navigateur et la programmation asynchrone.