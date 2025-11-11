# Practical Project: Personal Budget Calculator

## Project Context
You have just learned the basics of JavaScript and want to build a helpful interactive application for everyday life. This project lets you practice every fundamental JavaScript concept—variables, conditions, loops, functions, events, and DOM manipulation.

## Goal
Build a complete personal budget web app that tracks income and expenses, provides automatic calculations, and stores data locally.

## Project Structure
```
calculateur-budget/
├── index.html          # Page principale
├── css/
│   ├── style.css       # Styles principaux
│   └── responsive.css  # Styles responsives
├── js/
│   ├── app.js          # Main logic
│   ├── budget.js       # Budget management
│   └── storage.js      # Local storage management
└── README.md
```

## Implementation Steps

### Step 1: Project Setup
1. Create the `budget-calculator` folder.
2. Organize the files following the structure above.
3. Create a basic HTML file with the standard structure.

### Step 2: HTML Interface (index.html)
Create a modern, intuitive interface:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Budget Calculator</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>💰 Personal Budget Calculator</h1>
            <p>Manage your personal finances with ease</p>
        </header>

        <div class="dashboard">
            <div class="balance-card">
                <h2>Current Balance</h2>
                <div class="balance-amount" id="balance-amount">0,00 €</div>
                <div class="balance-status" id="balance-status">Balanced</div>
            </div>

            <div class="summary-cards">
                <div class="summary-card income">
                    <h3>Total Income</h3>
                    <div class="amount" id="total-income">0,00 €</div>
                </div>
                <div class="summary-card expense">
                    <h3>Total Expenses</h3>
                    <div class="amount" id="total-expense">0,00 €</div>
                </div>
            </div>
        </div>

        <div class="forms-section">
            <div class="form-container">
                <h2>Add a Transaction</h2>
                <form id="transaction-form">
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" id="description" placeholder="Ex: Salary, Groceries, Rent..." required>
                    </div>

                    <div class="form-group">
                        <label for="amount">Amount (€)</label>
                        <input type="number" id="amount" step="0.01" min="0.01" placeholder="0,00" required>
                    </div>

                    <div class="form-group">
                        <label for="type">Type</label>
                        <select id="type" required>
                            <option value="">Select a type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category" required>
                            <option value="">Select a category</option>
                            <!-- Options will be added by JavaScript -->
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Add Transaction</button>
                </form>
            </div>

            <div class="filters-container">
                <h2>Filters</h2>
                <div class="filters">
                    <div class="filter-group">
                        <label for="filter-type">Type:</label>
                        <select id="filter-type">
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expenses</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="filter-category">Category:</label>
                        <select id="filter-category">
                            <option value="all">All</option>
                            <!-- Options will be added by JavaScript -->
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="sort-by">Sort by:</label>
                        <select id="sort-by">
                            <option value="date-desc">Date (recent)</option>
                            <option value="date-asc">Date (oldest)</option>
                            <option value="amount-desc">Amount (highest)</option>
                            <option value="amount-asc">Amount (lowest)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="transactions-section">
            <h2>Transaction History</h2>
            <div class="transactions-list" id="transactions-list">
                <div class="empty-state">
                    <p>No transactions yet.</p>
                    <p>Add your first transaction above!</p>
                </div>
            </div>
        </div>

        <div class="charts-section">
            <h2>Analyze Your Finances</h2>
            <div class="charts-container">
                <div class="chart-card">
                    <h3>Breakdown by Category</h3>
                    <canvas id="category-chart" width="300" height="300"></canvas>
                </div>
                <div class="chart-card">
                    <h3>Monthly Trend</h3>
                    <canvas id="monthly-chart" width="400" height="200"></canvas>
                </div>
            </div>
        </div>

        <div class="export-section">
            <h2>Export Your Data</h2>
            <div class="export-buttons">
                <button id="export-json" class="btn btn-secondary">Export to JSON</button>
                <button id="export-csv" class="btn btn-secondary">Export to CSV</button>
                <button id="clear-data" class="btn btn-danger">Clear All Data</button>
            </div>
        </div>
    </div>

    <!-- Confirmation modal -->
    <div id="confirm-modal" class="modal">
        <div class="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this transaction?</p>
            <div class="modal-buttons">
                <button id="confirm-delete" class="btn btn-danger">Delete</button>
                <button id="cancel-delete" class="btn btn-secondary">Cancel</button>
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

### Step 3: Local Storage Management (`js/storage.js`)
Implement data persistence:

```javascript
// js/storage.js - Local storage management

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
            console.error('Error while saving:', error);
            this.showToast('Error while saving data', 'error');
            return false;
        }
    }

    loadTransactions() {
        try {
            const data = localStorage.getItem(this.TRANSACTIONS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error while loading:', error);
            this.showToast('Error while loading data', 'error');
            return [];
        }
    }

    clearAllData() {
        try {
            localStorage.removeItem(this.TRANSACTIONS_KEY);
            localStorage.removeItem(this.SETTINGS_KEY);
            return true;
        } catch (error) {
            console.error('Error while clearing:', error);
            return false;
        }
    }

    // Data export
    exportToJSON() {
        const transactions = this.loadTransactions();
        const dataStr = JSON.stringify(transactions, null, 2);
        this.downloadFile(dataStr, 'budget-data.json', 'application/json');
    }

    exportToCSV() {
        const transactions = this.loadTransactions();

        if (transactions.length === 0) {
            this.showToast('No data to export', 'warning');
            return;
        }

        // CSV headers
        const headers = ['Date', 'Description', 'Amount', 'Type', 'Category'];
        let csvContent = headers.join(',') + '\n';

        // Rows
        transactions.forEach(transaction => {
            const row = [
                transaction.date,
                `"${transaction.description}"`, // Escape commas
                transaction.amount.toString().replace('.', ','),
                transaction.type === 'income' ? 'Income' : 'Expense',
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

    // Toast notifications
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

        // Intro animation
        setTimeout(() => toast.classList.add('show'), 100);

        // Auto-close
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);

        // Manual close
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

// Global instance
const storageManager = new StorageManager();
```

### Step 4: Budget Logic (`js/budget.js`)
Implement transaction management and calculations:
```javascript
// js/budget.js - Budget business logic

class BudgetManager {
    constructor(storageManager) {
        this.storage = storageManager;
        this.transactions = [];
        this.categories = {
            income: [
                'Salary',
                'Freelance',
                'Investments',
                'Other income'
            ],
            expense: [
                'Food',
                'Transport',
                'Housing',
                'Entertainment',
                'Healthcare',
                'Education',
                'Shopping',
                'Other'
            ]
        };
        this.loadTransactions();
    }

    // Transactions
    addTransaction(description, amount, type, category) {
        if (!description || !amount || !type || !category) {
            throw new Error('All fields are required');
        }

        if (amount <= 0) {
            throw new Error('Amount must be positive');
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

        this.storage.showToast('Transaction added successfully', 'success');
        return transaction;
    }

    removeTransaction(id) {
        const index = this.transactions.findIndex(t => t.id === id);
        if (index === -1) {
            throw new Error('Transaction not found');
        }

        this.transactions.splice(index, 1);
        this.saveTransactions();

        this.storage.showToast('Transaction deleted', 'success');
    }

    // Save & load
    saveTransactions() {
        this.storage.saveTransactions(this.transactions);
    }

    loadTransactions() {
        this.transactions = this.storage.loadTransactions();
    }

    // Calculations
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

    // Filtering & sorting
    getFilteredTransactions(filters = {}) {
        let filtered = [...this.transactions];

        // Filter by type
        if (filters.type && filters.type !== 'all') {
            filtered = filtered.filter(t => t.type === filters.type);
        }

        // Filter by category
        if (filters.category && filters.category !== 'all') {
            filtered = filtered.filter(t => t.category === filters.category);
        }

        // Sorting
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

    // Category statistics
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

    // Monthly trend
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
            .slice(-6); // Last 6 months
    }

    // Formatting
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Validation
    validateTransaction(description, amount, type, category) {
        const errors = [];

        if (!description || description.trim().length < 3) {
            errors.push('Description must contain at least 3 characters');
        }

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            errors.push('Amount must be a positive number');
        }

        if (!type || !['income', 'expense'].includes(type)) {
            errors.push('Type must be income or expense');
        }

        if (!category) {
            errors.push('A category must be selected');
        }

        return errors;
    }

    // Reset
    clearAllData() {
        this.transactions = [];
        this.storage.clearAllData();
        this.storage.showToast('All data has been deleted', 'warning');
    }
}

// Global instance
let budgetManager = null;
```

### Step 5: User Interface (`js/app.js`)
Create the interactive interface:
```javascript
// js/app.js - User interface and event handling

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
        // Transaction form
        const transactionForm = document.getElementById('transaction-form');
        transactionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleTransactionSubmit();
        });

        // Filters
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

        // Confirmation modal
        document.getElementById('confirm-delete').addEventListener('click', () => {
            this.confirmDeleteTransaction();
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            this.hideModal();
        });

        // Close modal when clicking outside
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

            // Add the transaction
            this.budgetManager.addTransaction(description, amount, type, category);

            // Reset form
            document.getElementById('transaction-form').reset();

            // Refresh UI
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

        // Update status
        const balanceElement = document.getElementById('balance-amount');
        const statusElement = document.getElementById('balance-status');

        balanceElement.className = 'balance-amount';
        statusElement.className = 'balance-status';

        if (balance > 0) {
            balanceElement.classList.add('positive');
            statusElement.textContent = 'Balanced';
            statusElement.classList.add('positive');
        } else if (balance < 0) {
            balanceElement.classList.add('negative');
            statusElement.textContent = 'Deficit';
            statusElement.classList.add('negative');
        } else {
            statusElement.textContent = 'Balanced';
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
                    <p>No transactions found.</p>
                    <p>Adjust your filters or add a new transaction.</p>
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
                    <button class="delete-btn" data-id="${transaction.id}" title="Delete">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');

        // Event listeners for deletion
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

        // Helper to add options
        const addCategoryOptions = (select) => {
            // Clear existing options except the first one
            while (select.children.length > 1) {
                select.removeChild(select.lastChild);
            }

            // Add income categories
            const incomeGroup = document.createElement('optgroup');
            incomeGroup.label = 'Income';
            this.budgetManager.categories.income.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                incomeGroup.appendChild(option);
            });
            select.appendChild(incomeGroup);

            // Add expense categories
            const expenseGroup = document.createElement('optgroup');
            expenseGroup.label = 'Expenses';
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
        if (confirm('Are you sure you want to delete ALL data? This action cannot be undone.')) {
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

        // Group by type (expenses only)
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
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        });

        const incomeData = monthlyData.map(month => month.income);
        const expenseData = monthlyData.map(month => month.expense);

        this.charts.monthly.data.labels = labels;
        this.charts.monthly.data.datasets[0].data = incomeData;
        this.charts.monthly.data.datasets[1].data = expenseData;
        this.charts.monthly.update();
    }
}

// App initialization
document.addEventListener('DOMContentLoaded', () => {
    new BudgetApp();
});
```

## Testing Checklist

### Functional Validation (40%)
- [ ] Adding transactions works correctly
- [ ] Balance, income, and expense calculations are accurate
- [ ] Filters and sorting behave as expected
- [ ] Transaction deletion requires confirmation
- [ ] Local storage persists data between sessions

### Technical Validation (30%)
- [ ] Variables are properly declared and used
- [ ] If/else conditions cover every scenario
- [ ] forEach/map/filter loops operate correctly
- [ ] Functions are defined and called appropriately
- [ ] Events are handled cleanly

### Interface Validation (20%)
- [ ] Interface adapts to mobile screens
- [ ] Error messages display properly
- [ ] Animations and transitions run smoothly
- [ ] Design is intuitive and professional

### Data Validation (10%)
- [ ] JSON and CSV exports work correctly
- [ ] Data loads properly at startup
- [ ] Form validation prevents invalid input

## Additional Challenges

### Level 1: Feature Enhancements
- Add a text search capability
- Implement custom categories
- Create per-category budgets
- Add reminders for due dates

### Level 2: Advanced Features
- Implement cloud sync (via API)
- Generate PDF finance reports
- Add a tagging and notes system
- Implement financial goals

### Level 3: Technical Optimizations
- Add unit tests for critical functions
- Implement calculation caching
- Add a service worker for offline mode
- Optimize performance with list virtualization

## Evaluation Criteria

### JavaScript Programming (40%)
- Correct use of variables, data types, and operators
- Proper implementation of conditions and loops
- Appropriate creation and use of functions
- Solid event and DOM handling

### Application Logic (30%)
- Accurate financial calculations
- Consistent state management
- Appropriate data validation
- Robust error handling

### User Interface (20%)
- Modern, responsive design
- Smooth user experience
- Clear visual feedback
- Accessibility considered

### Code Quality (10%)
- Organized, well-structured code
- JavaScript best practices respected
- Proper error management
- Optimized performance

## Next Steps

Congratulations on building your first complete JavaScript application! You now have a solid grasp of JavaScript fundamentals. In the next module, we will dive deeper into functions and objects to create more modular, maintainable code.