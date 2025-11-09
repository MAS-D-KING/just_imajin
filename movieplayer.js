// Movie Player System
// This integrates with filter.js content data

// Function to watch movie - redirects to player page
function watchAnime(movieId) {
    console.log('Watching movie:', movieId);
    
    // Add to watch history if user is logged in
    if (window.authSystem && window.authSystem.isAuthenticated()) {
        window.authSystem.addToWatchHistory(movieId, 1, 0);
    }
    
    // Navigate to player page with movie parameter
    window.location.href = `player.html?anime=${movieId}`;
}

// Function to toggle watchlist
function toggleWatchlist(movieId) {
    if (!window.authSystem) {
        console.error('Auth system not initialized');
        return;
    }
    
    if (!window.authSystem.isAuthenticated()) {
        alert('Please log in to add items to your watchlist');
        return;
    }
    
    const button = document.querySelector(`.watchlist-btn[data-anime-id="${movieId}"]`);
    const icon = button?.querySelector('i');
    
    if (window.authSystem.isInWatchlist(movieId)) {
        window.authSystem.removeFromWatchlist(movieId);
        if (icon) {
            icon.className = 'fas fa-plus';
        }
        if (button) {
            button.innerHTML = '<i class="fas fa-plus"></i> Watchlist';
        }
    } else {
        // Get movie data from contentFilter
        const movie = window.contentFilter?.content.find(m => m.id === movieId);
        if (movie) {
            window.authSystem.addToWatchlist({
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                type: movie.type,
                rating: movie.rating,
                year: movie.year
            });
            if (icon) {
                icon.className = 'fas fa-check';
            }
            if (button) {
                button.innerHTML = '<i class="fas fa-check"></i> In Watchlist';
            }
        }
    }
}

// Initialize movie player functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Movie player initialized');
    
    // Setup click handlers for dynamically loaded content
    setupMovieClickHandlers();
    
    // Watch for content updates
    const observer = new MutationObserver(() => {
        setupMovieClickHandlers();
    });
    
    const contentGrid = document.getElementById('contentGrid');
    if (contentGrid) {
        observer.observe(contentGrid, { childList: true, subtree: true });
    }
});

// Setup click handlers for movie cards
function setupMovieClickHandlers() {
    // Watch buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        if (button.hasAttribute('data-movie-handler')) return;
        button.setAttribute('data-movie-handler', 'true');
        
        const movieId = button.getAttribute('onclick')?.match(/watchAnime\('([^']+)'\)/)?.[1];
        if (movieId) {
            button.removeAttribute('onclick');
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                watchAnime(movieId);
            });
        }
    });
    
    // Watchlist buttons
    document.querySelectorAll('.watchlist-btn').forEach(button => {
        if (button.hasAttribute('data-watchlist-handler')) return;
        button.setAttribute('data-watchlist-handler', 'true');
        
        const movieId = button.getAttribute('data-anime-id');
        if (movieId) {
            button.removeAttribute('onclick');
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWatchlist(movieId);
            });
        }
    });
    
    // Update watchlist button states
    if (window.authSystem && window.authSystem.isAuthenticated()) {
        document.querySelectorAll('.watchlist-btn').forEach(button => {
            const movieId = button.getAttribute('data-anime-id');
            if (movieId && window.authSystem.isInWatchlist(movieId)) {
                const icon = button.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-check';
                }
                button.innerHTML = '<i class="fas fa-check"></i> In Watchlist';
            }
        });
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { watchAnime, toggleWatchlist };
}