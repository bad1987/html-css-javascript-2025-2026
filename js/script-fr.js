// Système d'Authentification Utilisateur - JavaScript
// Ce fichier contiendra toute la fonctionnalité interactive

// Éléments DOM
const navButtons = {
    register: document.getElementById('nav-register'),
    login: document.getElementById('nav-login'),
    profile: document.getElementById('nav-profile')
};

const sections = {
    register: document.getElementById('register-section'),
    login: document.getElementById('login-section'),
    reset: document.getElementById('reset-section'),
    profile: document.getElementById('profile-section'),
    dashboard: document.getElementById('dashboard-section')
};

const forms = {
    register: document.getElementById('register-form'),
    login: document.getElementById('login-form'),
    reset: document.getElementById('reset-form'),
    profile: document.getElementById('profile-form')
};

const statusMessage = document.getElementById('status-message');

// Fonctions utilitaires
function showSection(sectionName) {
    // Masquer toutes les sections
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    sections[sectionName].classList.add('active');

    // Mettre à jour la navigation
    Object.values(navButtons).forEach(btn => {
        btn.classList.remove('active');
    });
    if (navButtons[sectionName]) {
        navButtons[sectionName].classList.add('active');
    }
}

function showMessage(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.classList.remove('hidden');

    // Masquer automatiquement après 5 secondes
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

function hideMessage() {
    statusMessage.classList.add('hidden');
}

// Utilitaires pour le spinner
function showSpinner(button) {
    button.classList.add('loading');
    const spinner = button.querySelector('.spinner');
    if (spinner) {
        spinner.classList.remove('hidden');
    }
    button.disabled = true;
}

function hideSpinner(button) {
    button.classList.remove('loading');
    const spinner = button.querySelector('.spinner');
    if (spinner) {
        spinner.classList.add('hidden');
    }
    button.disabled = false;
}

// Gestion des données (localStorage)
class AuthManager {
    constructor() {
        this.usersKey = 'auth_users';
        this.currentUserKey = 'auth_current_user';
    }

    // TODO: LEÇON 1 - Sauvegarder les utilisateurs dans localStorage
    /*
    GUIDE POUR DÉBUTANTS : Sauvegarder des données dans le stockage du navigateur

    localStorage est comme une petite base de données dans le navigateur de l'utilisateur.
    Il sauvegarde les données même après avoir fermé le navigateur.

    Étapes pour implémenter saveUsers(users) :

    1. localStorage ne peut stocker que des CHAÎNES, pas des objets ou des tableaux
    2. Utilisez JSON.stringify() pour convertir votre tableau d'utilisateurs en chaîne
    3. Utilisez localStorage.setItem(clé, valeur) pour sauvegarder
    4. Toujours envelopper dans try/catch car localStorage peut échouer

    Exemple :
    try {
        const usersString = JSON.stringify(users);
        localStorage.setItem(this.usersKey, usersString);
        return true; // Succès
    } catch (error) {
        console.error('Erreur lors de la sauvegarde :', error);
        return false; // Échec
    }
    */
    saveUsers(users) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }

    // TODO: LEÇON 2 - Charger les utilisateurs depuis localStorage
    /*
    GUIDE POUR DÉBUTANTS : Charger des données depuis le stockage du navigateur

    Étapes pour implémenter loadUsers() :

    1. Utilisez localStorage.getItem(clé) pour obtenir la chaîne stockée
    2. Si des données existent, reconvertissez en tableau avec JSON.parse()
    3. Si aucune donnée n'existe, retournez un tableau vide []
    4. Enveloppez dans try/catch pour la sécurité

    Exemple :
    try {
        const usersString = localStorage.getItem(this.usersKey);
        if (usersString) {
            return JSON.parse(usersString); // Convertir la chaîne en tableau
        } else {
            return []; // Aucun utilisateur sauvegardé encore
        }
    } catch (error) {
        console.error('Erreur lors du chargement :', error);
        return []; // Retourner un tableau vide en cas d'erreur
    }
    */
    loadUsers() {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }

    // TODO: LEÇON 3 - Sauvegarder l'utilisateur actuel (session)
    /*
    GUIDE POUR DÉBUTANTS : Sauvegarder un objet utilisateur unique

    Similaire à saveUsers, mais pour un seul objet utilisateur au lieu d'un tableau.

    Étapes :
    1. Convertir l'objet utilisateur en chaîne avec JSON.stringify()
    2. Sauvegarder avec localStorage.setItem(this.currentUserKey, userString)
    3. Retourner true/false selon le succès

    Cela garde en mémoire qui est connecté entre les actualisations de page.
    */
    saveCurrentUser(user) {
        // TODO: Écrivez votre code ici
    }

    // TODO: LEÇON 4 - Charger l'utilisateur actuel (session)
    /*
    GUIDE POUR DÉBUTANTS : Charger un objet utilisateur unique

    Étapes :
    1. Obtenir la chaîne depuis localStorage.getItem(this.currentUserKey)
    2. Si elle existe, analyser avec JSON.parse()
    3. Si elle n'existe pas, retourner null
    4. Envelopper dans try/catch

    Cela vérifie si quelqu'un est déjà connecté au chargement de la page.
    */
    loadCurrentUser() {
        // TODO: Écrivez votre code ici
    }

    // TODO: LEÇON 5 - Déconnecter l'utilisateur
    /*
    GUIDE POUR DÉBUTANTS : Effacer la session utilisateur

    Étapes :
    1. Supprimer l'utilisateur actuel de localStorage
    2. Utilisez localStorage.removeItem(this.currentUserKey)
    3. Retourner true/false

    Cela "déconnecte" l'utilisateur en oubliant qui il est.
    */
    logout() {
        // TODO: Écrivez votre code ici
    }

    // TODO: LEÇON 6 - Logique d'inscription utilisateur
    /*
    GUIDE POUR DÉBUTANTS : Créer de nouveaux comptes utilisateur

    Étapes pour implémenter registerUser(username, email, password) :

    1. Charger les utilisateurs existants avec this.loadUsers()
    2. Vérifier si le nom d'utilisateur ou l'email existe déjà :
       - Utilisez array.find() pour rechercher les utilisateurs
       - Vérifier : user.username === username OU user.email === email
    3. Si l'utilisateur existe, retourner { success: false, message: 'Nom d'utilisateur ou email déjà existant' }
    4. Si l'utilisateur n'existe pas, créer un nouvel objet utilisateur :
       {
           id: Date.now().toString(), // ID unique
           username: username.trim(),
           email: email.trim().toLowerCase(),
           password: password, // NOTE : Dans une vraie app, hasher ceci !
           createdAt: new Date().toISOString()
       }
    5. Ajouter le nouvel utilisateur au tableau d'utilisateurs : users.push(newUser)
    6. Sauvegarder le tableau d'utilisateurs avec this.saveUsers(users)
    7. Retourner { success: true, user: newUser }

    Exemple de vérification des doublons :
    const existingUser = users.find(user =>
        user.username === username.trim() ||
        user.email === email.trim().toLowerCase()
    );
    */
    registerUser(username, email, password) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }

    // TODO: LEÇON 7 - Logique de connexion utilisateur
    /*
    GUIDE POUR DÉBUTANTS : Authentifier la connexion utilisateur

    Étapes pour implémenter loginUser(usernameOrEmail, password) :

    1. Charger le tableau d'utilisateurs avec this.loadUsers()
    2. Trouver l'utilisateur qui correspond aux identifiants :
       - Utilisez la méthode array.find()
       - Vérifier si user.username OU user.email correspond à usernameOrEmail
       - ET user.password correspond au mot de passe
    3. Si l'utilisateur est trouvé :
       - Sauvegarder comme utilisateur actuel : this.saveCurrentUser(user)
       - Retourner { success: true, user }
    4. Si l'utilisateur n'est pas trouvé :
       - Retourner { success: false, message: 'Nom d'utilisateur/email ou mot de passe invalide' }

    Exemple de recherche :
    const user = users.find(user =>
        (user.username === usernameOrEmail.trim() ||
         user.email === usernameOrEmail.trim().toLowerCase()) &&
        user.password === password
    );
    */
    loginUser(usernameOrEmail, password) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }

    // TODO: LEÇON 8 - Logique de réinitialisation du mot de passe
    /*
    GUIDE POUR DÉBUTANTS : Réinitialiser les mots de passe utilisateur

    Étapes pour implémenter resetPassword(email, newPassword) :

    1. Charger le tableau d'utilisateurs avec this.loadUsers()
    2. Trouver l'utilisateur par email en utilisant array.findIndex() :
       - Retourne l'INDEX de l'utilisateur, pas l'objet utilisateur
       - Vérifier : user.email === email.trim().toLowerCase()
    3. Si l'utilisateur n'est pas trouvé (index === -1) :
       - Retourner { success: false, message: 'Email non trouvé' }
    4. Si l'utilisateur est trouvé :
       - Mettre à jour le mot de passe : users[userIndex].password = newPassword
       - Sauvegarder les utilisateurs : this.saveUsers(users)
       - Retourner { success: true }

    Note : findIndex() donne la position dans le tableau, find() donne l'objet.
    */
    resetPassword(email, newPassword) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }

    // TODO: LEÇON 9 - Logique de mise à jour du profil
    /*
    GUIDE POUR DÉBUTANTS : Mettre à jour les informations du profil utilisateur

    Étapes pour implémenter updateProfile(userId, updates) :

    1. Charger le tableau d'utilisateurs avec this.loadUsers()
    2. Trouver l'utilisateur par ID en utilisant array.findIndex() :
       - Vérifier : user.id === userId
    3. Si l'utilisateur n'est pas trouvé :
       - Retourner { success: false, message: 'Utilisateur non trouvé' }
    4. Si l'utilisateur est trouvé :
       - Mettre à jour chaque propriété dans l'objet updates
       - Sauter 'id' et 'createdAt' (ne pas changer ceux-ci)
       - Exemple : users[userIndex][key] = updates[key]
    5. Sauvegarder le tableau d'utilisateurs : this.saveUsers(users)
    6. Mettre à jour la session utilisateur actuelle : this.saveCurrentUser(users[userIndex])
    7. Retourner { success: true, user: users[userIndex] }

    L'objet updates contient seulement les champs à changer.
    */
    updateProfile(userId, updates) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    }
}

// Validation des formulaires
class FormValidator {
    // TODO: LEÇON 10 - Validation du formulaire d'inscription
    /*
    GUIDE POUR DÉBUTANTS : Valider les formulaires d'inscription

    Étapes pour implémenter validateRegistration(formData) :

    1. Créer un tableau d'erreurs vide : const errors = []
    2. Vérifier le nom d'utilisateur :
       - Doit exister et avoir au moins 3 caractères : formData.username && formData.username.trim().length >= 3
       - Si invalide, ajouter aux erreurs : errors.push('Le nom d'utilisateur doit contenir au moins 3 caractères')
    3. Vérifier l'email :
       - Doit exister et correspondre au modèle d'email
       - Utiliser regex : const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       - Si invalide, ajouter : 'Veuillez saisir une adresse email valide'
    4. Vérifier le mot de passe :
       - Doit avoir au moins 6 caractères : formData.password && formData.password.length >= 6
       - Si invalide, ajouter : 'Le mot de passe doit contenir au moins 6 caractères'
    5. Vérifier la confirmation du mot de passe :
       - Doit correspondre au mot de passe : formData.password === formData.confirmPassword
       - Si invalide, ajouter : 'Les mots de passe ne correspondent pas'
    6. Retourner l'objet : { isValid: errors.length === 0, errors }

    Exemple :
    if (!formData.username || formData.username.trim().length < 3) {
        errors.push('Le nom d'utilisateur doit contenir au moins 3 caractères');
    }
    */
    validateRegistration(formData) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
        return { isValid: true, errors: [] };
    }

    // TODO: LEÇON 11 - Validation du formulaire de connexion
    /*
    GUIDE POUR DÉBUTANTS : Valider les formulaires de connexion

    Étapes (plus simple que l'inscription) :

    1. Créer un tableau d'erreurs
    2. Vérifier que usernameOrEmail existe et n'est pas vide
    3. Vérifier que le mot de passe existe et n'est pas vide
    4. Retourner l'objet de validation

    C'est une validation basique - l'authentification réelle se passe dans AuthManager.
    */
    validateLogin(formData) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
        return { isValid: true, errors: [] };
    }

    // TODO: LEÇON 12 - Validation de la réinitialisation du mot de passe
    /*
    GUIDE POUR DÉBUTANTS : Valider les formulaires de réinitialisation du mot de passe

    Similaire à l'inscription mais plus simple :
    1. Valider le format de l'email
    2. Valider le nouveau mot de passe (min 6 caractères)
    3. Vérifier que les mots de passe correspondent
    */
    validatePasswordReset(formData) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
        return { isValid: true, errors: [] };
    }

    // TODO: LEÇON 13 - Validation de la mise à jour du profil
    /*
    GUIDE POUR DÉBUTANTS : Valider les mises à jour de profil

    Plus complexe - nécessite l'utilisateur actuel pour vérifier le mot de passe :

    1. Valider le nom d'utilisateur (min 3 caractères)
    2. Valider le format de l'email
    3. Vérifier que le mot de passe actuel correspond au mot de passe de l'utilisateur
    4. Si un nouveau mot de passe est fourni, le valider (min 6) et vérifier la correspondance
    5. Retourner l'objet de validation

    Le paramètre currentUser contient les données de l'utilisateur connecté.
    */
    validateProfileUpdate(formData, currentUser) {
        // TODO: Écrivez votre code ici en suivant le guide ci-dessus
        return { isValid: true, errors: [] };
    }
}

// Instances globales
const authManager = new AuthManager();
const validator = new FormValidator();

// Gestionnaires d'événements
function handleNavigation(e) {
    const sectionName = e.target.id.replace('nav-', '');
    showSection(sectionName);
}

function handleFormSwitch(e) {
    e.preventDefault();
    const targetSection = e.target.id.replace('switch-to-', '').replace('-from-reset', '');
    showSection(targetSection);
}

// TODO: LEÇON 14 - Gestion de la soumission du formulaire d'inscription
/*
GUIDE POUR DÉBUTANTS : Traiter les formulaires d'inscription

Étapes pour implémenter handleRegistration(e) :

1. Empêcher la soumission par défaut du formulaire : e.preventDefault()
2. Obtenir le bouton de soumission et afficher le spinner : showSpinner(button)
3. Obtenir les données du formulaire : const formData = new FormData(e.target)
4. Extraire les valeurs :
   - const username = formData.get('username')
   - const email = formData.get('email')
   - const password = formData.get('password')
   - const confirmPassword = formData.get('confirmPassword')
5. Valider le formulaire : const validation = validator.validateRegistration({...})
6. Si invalide : hideSpinner, showMessage(validation.errors.join('<br>'), 'error'), return
7. Si valide : inscrire l'utilisateur avec authManager.registerUser(...)
8. Gérer le résultat :
   - Si succès : showMessage, réinitialiser le formulaire, basculer vers connexion
   - Si erreur : showMessage d'erreur
9. Toujours masquer le spinner à la fin

Utilisez setTimeout pour simuler un délai réseau pour une UX réaliste.
*/
function handleRegistration(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    // Simuler une opération asynchrone
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Fonctionnalité d\'inscription bientôt disponible !', 'info');
    }, 2000);
}

// TODO: LEÇON 15 - Gestion de la soumission du formulaire de connexion
/*
GUIDE POUR DÉBUTANTS : Traiter les formulaires de connexion

Similaire à l'inscription mais plus simple :

1. Empêcher par défaut, afficher le spinner
2. Obtenir les données du formulaire : usernameOrEmail et password
3. Valider : validator.validateLogin({...})
4. Si invalide : afficher les erreurs, masquer le spinner, retourner
5. Si valide : authManager.loginUser(usernameOrEmail, password)
6. Gérer le résultat :
   - Succès : showMessage, mettre à jour l'UI (nom utilisateur, afficher nav profil), basculer vers dashboard
   - Erreur : showMessage d'erreur
7. Masquer le spinner

Pour les mises à jour UI en cas de succès :
- document.getElementById('user-display-name').textContent = result.user.username
- navButtons.profile.classList.remove('hidden')
- showSection('dashboard')
*/
function handleLogin(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    // Simuler une opération asynchrone
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Fonctionnalité de connexion bientôt disponible !', 'info');
    }, 2000);
}

// TODO: LEÇON 16 - Gestion de la réinitialisation du mot de passe
/*
GUIDE POUR DÉBUTANTS : Traiter les formulaires de réinitialisation du mot de passe

Étapes :

1. Empêcher par défaut, afficher le spinner
2. Obtenir les données du formulaire : email, newPassword, confirmPassword
3. Valider : validator.validatePasswordReset({...})
4. Si invalide : afficher les erreurs, masquer le spinner, retourner
5. Si valide : authManager.resetPassword(email, newPassword)
6. Gérer le résultat :
   - Succès : showMessage, réinitialiser le formulaire, basculer vers connexion
   - Erreur : showMessage d'erreur
7. Masquer le spinner

Note : Dans une vraie app, ceci enverrait un email. Ici nous réinitialisons directement.
*/
function handlePasswordReset(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    // Simuler une opération asynchrone
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Fonctionnalité de réinitialisation bientôt disponible !', 'info');
    }, 2000);
}

// TODO: LEÇON 17 - Gestion des mises à jour de profil
/*
GUIDE POUR DÉBUTANTS : Traiter les formulaires de mise à jour de profil

Étapes :

1. Empêcher par défaut, afficher le spinner
2. Obtenir l'utilisateur actuel : const currentUser = authManager.loadCurrentUser()
3. Vérifier si connecté : if (!currentUser) afficher erreur, retourner
4. Obtenir les données du formulaire : username, email, currentPassword, newPassword, confirmPassword
5. Valider : validator.validateProfileUpdate(formData, currentUser)
6. Si invalide : afficher les erreurs, masquer le spinner, retourner
7. Préparer l'objet updates : { username, email } + newPassword si fourni
8. Mettre à jour le profil : authManager.updateProfile(currentUser.id, updates)
9. Gérer le résultat :
   - Succès : showMessage, mettre à jour l'UI (nom utilisateur), basculer vers dashboard
   - Erreur : showMessage d'erreur
10. Masquer le spinner

Pour la mise à jour UI : document.getElementById('user-display-name').textContent = result.user.username
*/
function handleProfileUpdate(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');

    showSpinner(button);

    // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    // Simuler une opération asynchrone
    setTimeout(() => {
        hideSpinner(button);
        showMessage('Fonctionnalité de mise à jour bientôt disponible !', 'info');
    }, 2000);
}

// TODO: LEÇON 18 - Gestion de la déconnexion utilisateur
/*
GUIDE POUR DÉBUTANTS : Traiter la déconnexion utilisateur

Étapes :

1. Appeler authManager.logout() pour effacer la session
2. Afficher un message de succès
3. Mettre à jour l'UI :
   - Masquer la navigation profil : navButtons.profile.classList.add('hidden')
   - Basculer vers la section de connexion : showSection('login')
4. Aucun spinner nécessaire pour la déconnexion

Cela efface l'utilisateur actuel et retourne à l'écran de connexion.
*/
function handleLogout() {
    // TODO: Écrivez votre code ici en suivant le guide ci-dessus
    showMessage('Fonctionnalité de déconnexion bientôt disponible !', 'info');
}

// Initialisation
function init() {

    // Écouteurs d'événements de navigation
    Object.values(navButtons).forEach(btn => {
        if (btn) btn.addEventListener('click', handleNavigation);
    });

    // Écouteurs d'événements de basculement de formulaire
    document.querySelectorAll('.link-btn').forEach(btn => {
        btn.addEventListener('click', handleFormSwitch);
    });

    // Écouteurs d'événements de soumission de formulaire
    forms.register.addEventListener('submit', handleRegistration);
    forms.login.addEventListener('submit', handleLogin);
    forms.reset.addEventListener('submit', handlePasswordReset);
    forms.profile.addEventListener('submit', handleProfileUpdate);

    // Autres écouteurs d'événements de boutons
    document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
        const currentUser = authManager.loadCurrentUser();
        if (currentUser) {
            // Pré-remplir le formulaire de profil
            document.getElementById('profile-username').value = currentUser.username;
            document.getElementById('profile-email').value = currentUser.email;
        }
        showSection('profile');
    });
    document.getElementById('cancel-profile-edit')?.addEventListener('click', () => showSection('dashboard'));
    document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

    // Vérifier si un utilisateur est déjà connecté
    const currentUser = authManager.loadCurrentUser();
    if (currentUser) {
        showSection('dashboard');
        document.getElementById('user-display-name').textContent = currentUser.username;
        navButtons.profile.classList.remove('hidden');
    } else {
        showSection('login'); // Commencer par la connexion pour une meilleure UX
    }
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', init);