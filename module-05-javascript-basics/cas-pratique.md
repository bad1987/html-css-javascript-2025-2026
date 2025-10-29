# Cas Pratique : Calculateur de Budget Personnel

## Contexte du Projet
Vous venez d'apprendre les bases de JavaScript et vous voulez créer une application interactive utile au quotidien. Ce projet vous permettra de pratiquer tous les concepts JavaScript fondamentaux : variables, conditions, boucles, fonctions, événements et manipulation du DOM.

## Objectif
Créer une application web complète de calcul de budget personnel avec suivi des revenus et dépenses, calculs automatiques, et stockage local des données.

## Structure du Projet
```
calculateur-budget/
├── index.html          # Page principale
├── css/
│   ├── style.css       # Styles principaux
│   └── responsive.css  # Styles responsives
├── js/
│   ├── app.js          # Logique principale
│   ├── budget.js       # Gestion du budget
│   └── storage.js      # Gestion du stockage local
└── README.md
```

## Étapes de Réalisation

### Étape 1 : Configuration du Projet
1. Créez le dossier `calculateur-budget`
2. Structurez les fichiers selon l'arborescence ci-dessus
3. Créez un fichier HTML de base avec la structure

### Étape 2 : Interface HTML (index.html)
Créez une interface moderne et intuitive :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculateur de Budget Personnel</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>💰 Calculateur de Budget Personnel</h1>
            <p>Gérez vos finances personnelles avec facilité</p>
        </header>

        <div class="dashboard">
            <div class="balance-card">
                <h2>Solde Actuel</h2>
                <div class="balance-amount" id="balance-amount">0,00 €</div>
                <div class="balance-status" id="balance-status">Équilibré</div>
            </div>

            <div class="summary-cards">
                <div class="summary-card income">
                    <h3>Revenus Totaux</h3>
                    <div class="amount" id="total-income">0,00 €</div>
                </div>
                <div class="summary-card expense">
                    <h3>Dépenses Totales</h3>
                    <div class="amount" id="total-expense">0,00 €</div>
                </div>
            </div>
        </div>

        <div class="forms-section">
            <div class="form-container">
                <h2>Ajouter une Transaction</h2>
                <form id="transaction-form">
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" id="description" placeholder="Ex: Salaire, Courses, Loyer..." required>
                    </div>

                    <div class="form-group">
                        <label for="amount">Montant (€)</label>
                        <input type="number" id="amount" step="0.01" min="0.01" placeholder="0,00" required>
                    </div>

                    <div class="form-group">
                        <label for="type">Type</label>
                        <select id="type" required>
                            <option value="">Sélectionnez un type</option>
                            <option value="income">Revenu</option>
                            <option value="expense">Dépense</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="category">Catégorie</label>
                        <select id="category" required>
                            <option value="">Sélectionnez une catégorie</option>
                            <!-- Options seront ajoutées par JavaScript -->
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Ajouter la Transaction</button>
                </form>
            </div>

            <div class="filters-container">
                <h2>Filtres</h2>
                <div class="filters">
                    <div class="filter-group">
                        <label for="filter-type">Type :</label>
                        <select id="filter-type">
                            <option value="all">Tous</option>
                            <option value="income">Revenus</option>
                            <option value="expense">Dépenses</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="filter-category">Catégorie :</label>
                        <select id="filter-category">
                            <option value="all">Toutes</option>
                            <!-- Options seront ajoutées par JavaScript -->
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="sort-by">Trier par :</label>
                        <select id="sort-by">
                            <option value="date-desc">Date (récent)</option>
                            <option value="date-asc">Date (ancien)</option>
                            <option value="amount-desc">Montant (élevé)</option>
                            <option value="amount-asc">Montant (faible)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="transactions-section">
            <h2>Historique des Transactions</h2>
            <div class="transactions-list" id="transactions-list">
                <div class="empty-state">
                    <p>Aucune transaction pour le moment.</p>
                    <p>Ajoutez votre première transaction ci-dessus !</p>
                </div>
            </div>
        </div>

        <div class="charts-section">
            <h2>Analyse de vos Finances</h2>
            <div class="charts-container">
                <div class="chart-card">
                    <h3>Répartition par Catégorie</h3>
                    <canvas id="category-chart" width="300" height="300"></canvas>
                </div>
                <div class="chart-card">
                    <h3>Évolution Mensuelle</h3>
                    <canvas id="monthly-chart" width="400" height="200"></canvas>
                </div>
            </div>
        </div>

        <div class="export-section">
            <h2>Exporter vos Données</h2>
            <div class="export-buttons">
                <button id="export-json" class="btn btn-secondary">Exporter en JSON</button>
                <button id="export-csv" class="btn btn-secondary">Exporter en CSV</button>
                <button id="clear-data" class="btn btn-danger">Effacer Toutes les Données</button>
            </div>
        </div>
    </div>

    <!-- Modal de confirmation -->
    <div id="confirm-modal" class="modal">
        <div class="modal-content">
            <h3>Confirmer la Suppression</h3>
            <p>Êtes-vous sûr de vouloir supprimer cette transaction ?</p>
            <div class="modal-buttons">
                <button id="confirm-delete" class="btn btn-danger">Supprimer</button>
                <button id="cancel-delete" class="btn btn-secondary">Annuler</button>
            </div>
        </div>
    </div>

    <!-- Toast notifications -->
    <div id="toast-container" class="toast-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/storage.js"></script>
    <script src="js/budget.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

### Étape 3 : Gestion du Stockage Local (js/storage.js)
Implémentez la persistance des données :

```javascript
// js/storage.js - Gestion du stockage local

class StorageManager {
    constructor() {
        this.TRANSACTIONS_KEY = 'budget_transactions';
        this.SETTINGS_KEY = 'budget_settings';
    }

    // Transactions
    saveTransactions(transactions) {
        try {
            localStorage.setItem(this.TRANSACTIONS_KEY, JSON.stringify(transactions));
            return true;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            this.showToast('Erreur lors de la sauvegarde des données', 'error');
            return false;
        }
    }

    loadTransactions() {
        try {
            const data = localStorage.getItem(this.TRANSACTIONS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            this.showToast('Erreur lors du chargement des données', 'error');
            return [];
        }
    }

    clearAllData() {
        try {
            localStorage.removeItem(this.TRANSACTIONS_KEY);
            localStorage.removeItem(this.SETTINGS_KEY);
            return true;
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            return false;
        }
    }

    // Export des données
    exportToJSON() {
        const transactions = this.loadTransactions();
        const dataStr = JSON.stringify(transactions, null, 2);
        this.downloadFile(dataStr, 'budget-data.json', 'application/json');
    }

    exportToCSV() {
        const transactions = this.loadTransactions();

        if (transactions.length === 0) {
            this.showToast('Aucune donnée à exporter', 'warning');
            return;
        }

        // En-têtes CSV
        const headers = ['Date', 'Description', 'Montant', 'Type', 'Catégorie'];
        let csvContent = headers.join(',') + '\n';

        // Données
        transactions.forEach(transaction => {
            const row = [
                transaction.date,
                `"${transaction.description}"`, // Échapper les virgules
                transaction.amount.toString().replace('.', ','),
                transaction.type === 'income' ? 'Revenu' : 'Dépense',
                transaction.category
            ];
            csvContent += row.join(',') + '\n';
        });

        this.downloadFile(csvContent, 'budget-data.csv', 'text/csv');
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    // Notifications (toast)
    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icon = this.getToastIcon(type);
        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;

        toastContainer.appendChild(toast);

        // Animation d'entrée
        setTimeout(() => toast.classList.add('show'), 100);

        // Fermeture automatique
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);

        // Fermeture manuelle
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }

    getToastIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }
}

// Instance globale
const storageManager = new StorageManager();
```

### Étape 4 : Logique du Budget (js/budget.js)
Implémentez la gestion des transactions et calculs :

```javascript
// js/budget.js - Logique métier du budget

class BudgetManager {
    constructor(storageManager) {
        this.storage = storageManager;
        this.transactions = [];
        this.categories = {
            income: [
                'Salaire',
                'Freelance',
                'Investissements',
                'Autres revenus'
            ],
            expense: [
                'Alimentation',
                'Transport',
                'Logement',
                'Loisirs',
                'Santé',
                'Éducation',
                'Shopping',
                'Autres'
            ]
        };
        this.loadTransactions();
    }

    // Transactions
    addTransaction(description, amount, type, category) {
        if (!description || !amount || !type || !category) {
            throw new Error('Tous les champs sont requis');
        }

        if (amount <= 0) {
            throw new Error('Le montant doit être positif');
        }

        const transaction = {
            id: Date.now().toString(),
            description: description.trim(),
            amount: parseFloat(amount),
            type,
            category,
            date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
            timestamp: Date.now()
        };

        this.transactions.unshift(transaction); // Ajouter au début
        this.saveTransactions();

        this.storage.showToast('Transaction ajoutée avec succès', 'success');
        return transaction;
    }

    removeTransaction(id) {
        const index = this.transactions.findIndex(t => t.id === id);
        if (index === -1) {
            throw new Error('Transaction non trouvée');
        }

        this.transactions.splice(index, 1);
        this.saveTransactions();

        this.storage.showToast('Transaction supprimée', 'success');
    }

    // Sauvegarde et chargement
    saveTransactions() {
        this.storage.saveTransactions(this.transactions);
    }

    loadTransactions() {
        this.transactions = this.storage.loadTransactions();
    }

    // Calculs
    getTotalIncome() {
        return this.transactions
            .filter(t => t.type === 'income')
            .reduce((total, t) => total + t.amount, 0);
    }

    getTotalExpense() {
        return this.transactions
            .filter(t => t.type === 'expense')
            .reduce((total, t) => total + t.amount, 0);
    }

    getBalance() {
        return this.getTotalIncome() - this.getTotalExpense();
    }

    // Filtrage et tri
    getFilteredTransactions(filters = {}) {
        let filtered = [...this.transactions];

        // Filtre par type
        if (filters.type && filters.type !== 'all') {
            filtered = filtered.filter(t => t.type === filters.type);
        }

        // Filtre par catégorie
        if (filters.category && filters.category !== 'all') {
            filtered = filtered.filter(t => t.category === filters.category);
        }

        // Tri
        if (filters.sortBy) {
            filtered.sort((a, b) => {
                switch (filters.sortBy) {
                    case 'date-desc':
                        return new Date(b.date) - new Date(a.date);
                    case 'date-asc':
                        return new Date(a.date) - new Date(b.date);
                    case 'amount-desc':
                        return b.amount - a.amount;
                    case 'amount-asc':
                        return a.amount - b.amount;
                    default:
                        return 0;
                }
            });
        }

        return filtered;
    }

    // Statistiques par catégorie
    getCategoryStats() {
        const stats = {};

        this.transactions.forEach(transaction => {
            const key = `${transaction.type}_${transaction.category}`;
            if (!stats[key]) {
                stats[key] = {
                    category: transaction.category,
                    type: transaction.type,
                    total: 0,
                    count: 0
                };
            }
            stats[key].total += transaction.amount;
            stats[key].count += 1;
        });

        return Object.values(stats);
    }

    // Évolution mensuelle
    getMonthlyEvolution() {
        const monthly = {};

        this.transactions.forEach(transaction => {
            const date = new Date(transaction.date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            if (!monthly[monthKey]) {
                monthly[monthKey] = {
                    month: monthKey,
                    income: 0,
                    expense: 0,
                    balance: 0
                };
            }

            if (transaction.type === 'income') {
                monthly[monthKey].income += transaction.amount;
            } else {
                monthly[monthKey].expense += transaction.amount;
            }

            monthly[monthKey].balance = monthly[monthKey].income - monthly[monthKey].expense;
        });

        return Object.values(monthly)
            .sort((a, b) => a.month.localeCompare(b.month))
            .slice(-6); // Derniers 6 mois
    }

    // Formatage
    formatCurrency(amount) {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Validation
    validateTransaction(description, amount, type, category) {
        const errors = [];

        if (!description || description.trim().length < 3) {
            errors.push('La description doit contenir au moins 3 caractères');
        }

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            errors.push('Le montant doit être un nombre positif');
        }

        if (!type || !['income', 'expense'].includes(type)) {
            errors.push('Le type doit être revenu ou dépense');
        }

        if (!category) {
            errors.push('Une catégorie doit être sélectionnée');
        }

        return errors;
    }

    // Réinitialisation
    clearAllData() {
        this.transactions = [];
        this.storage.clearAllData();
        this.storage.showToast('Toutes les données ont été supprimées', 'warning');
    }
}

// Instance globale
let budgetManager = null;
```

### Étape 5 : Interface Utilisateur (js/app.js)
Créez l'interface interactive :

```javascript
// js/app.js - Interface utilisateur et gestion des événements

class BudgetApp {
    constructor() {
        this.storageManager = storageManager;
        this.budgetManager = new BudgetManager(this.storageManager);
        this.charts = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateCategoryOptions();
        this.updateUI();
        this.initCharts();
    }

    setupEventListeners() {
        // Formulaire de transaction
        const transactionForm = document.getElementById('transaction-form');
        transactionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleTransactionSubmit();
        });

        // Filtres
        document.getElementById('filter-type').addEventListener('change', () => this.updateTransactionsList());
        document.getElementById('filter-category').addEventListener('change', () => this.updateTransactionsList());
        document.getElementById('sort-by').addEventListener('change', () => this.updateTransactionsList());

        // Export
        document.getElementById('export-json').addEventListener('click', () => {
            this.storageManager.exportToJSON();
        });

        document.getElementById('export-csv').addEventListener('click', () => {
            this.storageManager.exportToCSV();
        });

        document.getElementById('clear-data').addEventListener('click', () => {
            this.confirmClearData();
        });

        // Modal de confirmation
        document.getElementById('confirm-delete').addEventListener('click', () => {
            this.confirmDeleteTransaction();
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            this.hideModal();
        });

        // Fermeture du modal en cliquant en dehors
        document.getElementById('confirm-modal').addEventListener('click', (e) => {
            if (e.target.id === 'confirm-modal') {
                this.hideModal();
            }
        });
    }

    handleTransactionSubmit() {
        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('type').value;
        const category = document.getElementById('category').value;

        try {
            // Validation
            const errors = this.budgetManager.validateTransaction(description, amount, type, category);
            if (errors.length > 0) {
                this.storageManager.showToast(errors.join('<br>'), 'error');
                return;
            }

            // Ajout de la transaction
            this.budgetManager.addTransaction(description, amount, type, category);

            // Réinitialisation du formulaire
            document.getElementById('transaction-form').reset();

            // Mise à jour de l'interface
            this.updateUI();

        } catch (error) {
            this.storageManager.showToast(error.message, 'error');
        }
    }

    updateUI() {
        this.updateBalance();
        this.updateTransactionsList();
        this.updateCharts();
    }

    updateBalance() {
        const balance = this.budgetManager.getBalance();
        const totalIncome = this.budgetManager.getTotalIncome();
        const totalExpense = this.budgetManager.getTotalExpense();

        document.getElementById('balance-amount').textContent = this.budgetManager.formatCurrency(balance);
        document.getElementById('total-income').textContent = this.budgetManager.formatCurrency(totalIncome);
        document.getElementById('total-expense').textContent = this.budgetManager.formatCurrency(totalExpense);

        // Mise à jour du statut
        const balanceElement = document.getElementById('balance-amount');
        const statusElement = document.getElementById('balance-status');

        balanceElement.className = 'balance-amount';
        statusElement.className = 'balance-status';

        if (balance > 0) {
            balanceElement.classList.add('positive');
            statusElement.textContent = 'Équilibré';
            statusElement.classList.add('positive');
        } else if (balance < 0) {
            balanceElement.classList.add('negative');
            statusElement.textContent = 'Déficit';
            statusElement.classList.add('negative');
        } else {
            statusElement.textContent = 'Équilibré';
        }
    }

    updateTransactionsList() {
        const filters = {
            type: document.getElementById('filter-type').value,
            category: document.getElementById('filter-category').value,
            sortBy: document.getElementById('sort-by').value
        };

        const transactions = this.budgetManager.getFilteredTransactions(filters);
        const container = document.getElementById('transactions-list');

        if (transactions.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>Aucune transaction trouvée.</p>
                    <p>Modifiez vos filtres ou ajoutez une nouvelle transaction.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = transactions.map(transaction => `
            <div class="transaction-item ${transaction.type}" data-id="${transaction.id}">
                <div class="transaction-info">
                    <div class="transaction-description">${transaction.description}</div>
                    <div class="transaction-details">
                        <span class="transaction-category">${transaction.category}</span>
                        <span class="transaction-date">${this.budgetManager.formatDate(transaction.date)}</span>
                    </div>
                </div>
                <div class="transaction-amount">
                    <span class="amount ${transaction.type}">
                        ${transaction.type === 'income' ? '+' : '-'}${this.budgetManager.formatCurrency(transaction.amount)}
                    </span>
                    <button class="delete-btn" data-id="${transaction.id}" title="Supprimer">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');

        // Gestionnaires d'événements pour suppression
        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = e.target.dataset.id;
                this.showDeleteConfirmation(id);
            });
        });
    }

    populateCategoryOptions() {
        const categorySelect = document.getElementById('category');
        const filterCategorySelect = document.getElementById('filter-category');

        // Fonction pour ajouter les options
        const addCategoryOptions = (select) => {
            // Vider les options existantes sauf la première
            while (select.children.length > 1) {
                select.removeChild(select.lastChild);
            }

            // Ajouter les catégories de revenus
            const incomeGroup = document.createElement('optgroup');
            incomeGroup.label = 'Revenus';
            this.budgetManager.categories.income.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                incomeGroup.appendChild(option);
            });
            select.appendChild(incomeGroup);

            // Ajouter les catégories de dépenses
            const expenseGroup = document.createElement('optgroup');
            expenseGroup.label = 'Dépenses';
            this.budgetManager.categories.expense.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                expenseGroup.appendChild(option);
            });
            select.appendChild(expenseGroup);
        };

        addCategoryOptions(categorySelect);
        addCategoryOptions(filterCategorySelect);
    }

    showDeleteConfirmation(transactionId) {
        this.transactionToDelete = transactionId;
        document.getElementById('confirm-modal').classList.add('show');
    }

    hideModal() {
        document.getElementById('confirm-modal').classList.remove('show');
        this.transactionToDelete = null;
    }

    confirmDeleteTransaction() {
        if (this.transactionToDelete) {
            try {
                this.budgetManager.removeTransaction(this.transactionToDelete);
                this.updateUI();
            } catch (error) {
                this.storageManager.showToast(error.message, 'error');
            }
        }
        this.hideModal();
    }

    confirmClearData() {
        if (confirm('Êtes-vous sûr de vouloir effacer TOUTES les données ? Cette action est irréversible.')) {
            this.budgetManager.clearAllData();
            this.updateUI();
        }
    }

    initCharts() {
        this.initCategoryChart();
        this.initMonthlyChart();
    }

    initCategoryChart() {
        const ctx = document.getElementById('category-chart').getContext('2d');
        this.charts.category = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
                        '#06b6d4', '#f97316', '#84cc16', '#ec4899'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    initMonthlyChart() {
        const ctx = document.getElementById('monthly-chart').getContext('2d');
        this.charts.monthly = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Revenus',
                    data: [],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Dépenses',
                    data: [],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    updateCharts() {
        this.updateCategoryChart();
        this.updateMonthlyChart();
    }

    updateCategoryChart() {
        const categoryStats = this.budgetManager.getCategoryStats();

        // Regrouper par type pour les dépenses seulement
        const expenseStats = categoryStats.filter(stat => stat.type === 'expense');

        const labels = expenseStats.map(stat => stat.category);
        const data = expenseStats.map(stat => stat.total);

        this.charts.category.data.labels = labels;
        this.charts.category.data.datasets[0].data = data;
        this.charts.category.update();
    }

    updateMonthlyChart() {
        const monthlyData = this.budgetManager.getMonthlyEvolution();

        const labels = monthlyData.map(month => {
            const [year, monthNum] = month.month.split('-');
            const date = new Date(year, monthNum - 1);
            return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
        });

        const incomeData = monthlyData.map(month => month.income);
        const expenseData = monthlyData.map(month => month.expense);

        this.charts.monthly.data.labels = labels;
        this.charts.monthly.data.datasets[0].data = incomeData;
        this.charts.monthly.data.datasets[1].data = expenseData;
        this.charts.monthly.update();
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new BudgetApp();
});
```

## Instructions de Test

### Validation Fonctionnelle (40%)
- [ ] Ajout de transactions fonctionne correctement
- [ ] Calculs de solde, revenus et dépenses sont exacts
- [ ] Filtres et tri fonctionnent correctement
- [ ] Suppression de transactions avec confirmation
- [ ] Stockage local persiste les données

### Validation Technique (30%)
- [ ] Toutes les variables sont correctement déclarées et utilisées
- [ ] Conditions if/else gèrent tous les cas possibles
- [ ] Boucles forEach/map/filter fonctionnent correctement
- [ ] Fonctions sont définies et appelées correctement
- [ ] Événements sont gérés proprement

### Validation Interface (20%)
- [ ] Interface s'adapte aux écrans mobiles
- [ ] Messages d'erreur s'affichent correctement
- [ ] Animations et transitions sont fluides
- [ ] Design est intuitif et professionnel

### Validation Données (10%)
- [ ] Export JSON et CSV fonctionne correctement
- [ ] Import des données au chargement fonctionne
- [ ] Validation des formulaires empêche les erreurs

## Défis Supplémentaires

### Niveau 1 : Améliorations Fonctionnelles
- Ajoutez une fonctionnalité de recherche textuelle
- Implémentez des catégories personnalisées
- Créez un système de budgets par catégorie
- Ajoutez des rappels pour les échéances

### Niveau 2 : Fonctionnalités Avancées
- Implémentez une synchronisation cloud (avec API)
- Créez des rapports PDF des finances
- Ajoutez un système de tags et de notes
- Implémentez des objectifs financiers

### Niveau 3 : Optimisations Techniques
- Ajoutez des tests unitaires pour les fonctions critiques
- Implémentez la mise en cache des calculs
- Ajoutez un service worker pour le mode hors ligne
- Optimisez les performances avec la virtualisation des listes

## Critères d'Évaluation

### Programmation JavaScript (40%)
- Utilisation correcte des variables, types de données et opérateurs
- Implémentation correcte des conditions et boucles
- Création et utilisation appropriée des fonctions
- Gestion correcte des événements et du DOM

### Logique Applicative (30%)
- Calculs financiers corrects et précis
- Gestion d'état cohérente
- Validation des données appropriée
- Gestion d'erreurs robuste

### Interface Utilisateur (20%)
- Design responsive et moderne
- Expérience utilisateur fluide
- Feedback visuel approprié
- Accessibilité respectée

### Qualité du Code (10%)
- Code organisé et commenté
- Respect des bonnes pratiques JavaScript
- Gestion d'erreurs appropriée
- Performance optimisée

## Prochaines Étapes
Félicitations pour votre première application JavaScript complète ! Vous maîtrisez maintenant les bases de JavaScript. Au prochain module, nous approfondirons les fonctions et objets pour créer du code plus modulaire et maintenable.