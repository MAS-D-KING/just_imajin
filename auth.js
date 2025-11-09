// Auth System - Using localStorage for demo (replace with real backend in production)
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        this.loadUser();
        this.setupEventListeners();
    }

    // Load user from localStorage
    loadUser() {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            this.currentUser = JSON.parse(userData);
            this.updateUI();
        }
    }

    // Save user to localStorage
    saveUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.updateUI();
    }

    // Clear user data
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateUI();
        this.showNotification('Logged out successfully', 'success');
    }

    // Sign up new user
    async signUp(userData) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check if user already exists
        const users = this.getUsers();
        const existingUser = users.find(user => user.email === userData.email);
        
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username: userData.username,
            email: userData.email,
            password: userData.password, // In real app, hash this!
            createdAt: new Date().toISOString(),
            watchlist: [],
            watchHistory: []
        };

        // Save to "database"
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto-login
        this.saveUser(newUser);
        return newUser;
    }

    // Login user
    async login(email, password) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('Invalid email or password');
        }

        this.saveUser(user);
        return user;
    }

    // Get all users from "database"
    getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    // Update UI based on auth state
    updateUI() {
        const userIcon = document.querySelector('.user-icon');
        const authModal = document.getElementById('authModal');
        const userProfile = document.getElementById('userProfile');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if (this.currentUser) {
            // User is logged in
            userIcon.innerHTML = '<i class="fas fa-user-check"></i>';
            document.getElementById('profileUsername').textContent = this.currentUser.username;
            document.getElementById('profileEmail').textContent = this.currentUser.email;
            
            // Show profile, hide forms
            userProfile.style.display = 'block';
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
        } else {
            // User is logged out
            userIcon.innerHTML = '<i class="fas fa-user"></i>';
            userProfile.style.display = 'none';
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // User icon click
        document.querySelector('.user-icon').addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleAuthModal();
        });

        // Close modal
        document.getElementById('closeModal').addEventListener('click', () => {
            this.hideAuthModal();
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab(btn.dataset.tab);
            });
        });

        // Form submissions
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup();
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
            this.hideAuthModal();
        });

        // Password strength indicator
        document.getElementById('signupPassword')?.addEventListener('input', (e) => {
            this.updatePasswordStrength(e.target.value);
        });

        // Close modal when clicking outside
        document.getElementById('authModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('authModal')) {
                this.hideAuthModal();
            }
        });
    }

    // Toggle auth modal
    toggleAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.toggle('show');
        
        if (!this.currentUser) {
            this.switchTab('login');
        }
    }

    // Hide auth modal
    hideAuthModal() {
        document.getElementById('authModal').classList.remove('show');
    }

    // Switch between login/signup tabs
    switchTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // Update forms
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.toggle('active', form.id === `${tab}Form`);
        });
    }

    // Handle login
    async handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            await this.login(email, password);
            this.showNotification('Login successful!', 'success');
            this.hideAuthModal();
        } catch (error) {
            this.showNotification(error.message, 'error');
        }
    }

    // Handle signup
    async handleSignup() {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Basic validation
        if (password !== confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        if (password.length < 6) {
            this.showNotification('Password must be at least 6 characters', 'error');
            return;
        }

        try {
            await this.signUp({ username, email, password });
            this.showNotification('Account created successfully!', 'success');
            this.hideAuthModal();
        } catch (error) {
            this.showNotification(error.message, 'error');
        }
    }

    // Update password strength indicator
    updatePasswordStrength(password) {
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        let strength = 0;
        let color = '#ff4444';
        let text = 'Weak';

        if (password.length >= 6) strength += 25;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
        if (password.match(/\d/)) strength += 25;
        if (password.match(/[^a-zA-Z\d]/)) strength += 25;

        if (strength >= 75) {
            color = '#4CAF50';
            text = 'Strong';
        } else if (strength >= 50) {
            color = '#ff9800';
            text = 'Medium';
        }

        strengthBar.style.setProperty('--strength-color', color);
        strengthBar.querySelector('::after').style.width = `${strength}%`;
        strengthText.textContent = text;
        strengthText.style.color = color;
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto-hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Check if user is authenticated
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Add to watchlist
    addToWatchlist(animeId) {
        if (!this.isAuthenticated()) {
            this.showNotification('Please login to add to watchlist', 'error');
            this.toggleAuthModal();
            return false;
        }

        const user = this.getCurrentUser();
        if (!user.watchlist.includes(animeId)) {
            user.watchlist.push(animeId);
            this.saveUser(user);
            this.showNotification('Added to watchlist!', 'success');
        }
        return true;
    }

    // Add to watch history
    addToWatchHistory(animeId, episode, timestamp) {
        if (!this.isAuthenticated()) return;

        const user = this.getCurrentUser();
        user.watchHistory.unshift({
            animeId,
            episode,
            timestamp,
            watchedAt: new Date().toISOString()
        });

        // Keep only last 50 items
        user.watchHistory = user.watchHistory.slice(0, 50);
        this.saveUser(user);
    }
}

// Initialize auth system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.authSystem = new AuthSystem();
});

