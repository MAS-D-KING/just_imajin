// Content Filtering and Search System
class ContentFilter {
    constructor() {
        this.content = [];
        this.filteredContent = [];
        this.filters = {
            type: 'all',
            genre: 'all',
            search: '',
            sort: 'popular'
        };
        this.init();
    }

    init() {
        this.loadContentData();
        this.setupEventListeners();
        this.applyFilters();
    }

    // Load sample content data
    loadContentData() {
        this.content = 
    [
    {
        id: 'an-letter',
        title: 'One Piece Fan Letter',
        type: 'special',
        genres: ['action', 'adventure', 'comedy', 'fantasy'],
        rating: 9.2,
        year: 2013,
        episodes: 88,
        poster: 'img/fan letter.jpg',
        description: 'In a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans, the story follows Eren Yeager and his friends.',
        isNew: false
    },
    {
        id: 'demon-slayer',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.9,
        year: 2019,
        episodes: 55,
        poster: 'img/kimetsu.jpg',
        description: 'After his family is slaughtered and his sister turned into a demon, Tanjiro Kamado becomes a demon slayer to find a cure and avenge his family.',
        isNew: true
    }
];

        console.log('📦 Loaded content:', this.content.length, 'items');
    }

    // Setup event listeners
    setupEventListeners() {
        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setFilter('type', btn.dataset.type);
                this.updateActiveTab(btn);
            });
        });

        // Genre filter
        document.getElementById('genreSelect').addEventListener('change', (e) => {
            this.setFilter('genre', e.target.value);
        });

        // Sort filter
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.setFilter('sort', e.target.value);
        });

        // Search input
        document.getElementById('contentSearch').addEventListener('input', (e) => {
            this.setFilter('search', e.target.value);
        });

        // Reset filters
        document.getElementById('resetFilters').addEventListener('click', () => {
            this.resetFilters();
        });

        // Debounce search input
        this.debounceSearch();
    }

    // Debounce search for better performance
    debounceSearch() {
        let timeout;
        const searchInput = document.getElementById('contentSearch');
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.setFilter('search', e.target.value);
            }, 300);
        });
    }

    // Set filter and apply
    setFilter(key, value) {
        this.filters[key] = value;
        this.applyFilters();
    }

    // Update active tab
    updateActiveTab(activeBtn) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    // Apply all filters
    applyFilters() {
        this.showLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            let filtered = [...this.content];

            // Type filter
            if (this.filters.type !== 'all') {
                filtered = filtered.filter(item => item.type === this.filters.type);
            }

            // Genre filter
            if (this.filters.genre !== 'all') {
                filtered = filtered.filter(item => 
                    item.genres.includes(this.filters.genre)
                );
            }

            // Search filter
            if (this.filters.search.trim()) {
                const searchTerm = this.filters.search.toLowerCase();
                filtered = filtered.filter(item =>
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm) ||
                    item.genres.some(genre => genre.includes(searchTerm))
                );
            }

            // Sort results
            filtered = this.sortContent(filtered);

            this.filteredContent = filtered;
            this.renderContent();
            this.updateResultsInfo();
            this.updateActiveFilters();
            this.showLoading(false);
        }, 500);
    }

    // Sort content based on selected option
    sortContent(content) {
        switch (this.filters.sort) {
            case 'rating':
                return content.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return content.sort((a, b) => b.year - a.year);
            case 'oldest':
                return content.sort((a, b) => a.year - b.year);
            case 'title':
                return content.sort((a, b) => a.title.localeCompare(b.title));
            case 'popular':
            default:
                return content.sort((a, b) => {
                    // Combine rating and new status for "popularity"
                    const aScore = a.rating + (a.isNew ? 0.5 : 0);
                    const bScore = b.rating + (b.isNew ? 0.5 : 0);
                    return bScore - aScore;
                });
        }
    }

    // Render content to grid
    renderContent() {
        const grid = document.getElementById('contentGrid');
        
        if (this.filteredContent.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No content found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button class="btn btn-primary" onclick="contentFilter.resetFilters()">
                        Reset Filters
                    </button>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredContent.map(item => `
            <div class="content-item" data-anime-id="${item.id}">
                <img src="${item.poster}" alt="${item.title}" class="content-poster">
                <div class="content-info">
                    <h3 class="content-title">${item.title}</h3>
                    <div class="content-meta">
                        <span class="content-rating">⭐ ${item.rating}/10</span>
                        <span class="content-type">${this.formatType(item.type)}</span>
                    </div>
                    <div class="content-genres">
                        ${item.genres.map(genre => `
                            <span class="genre-tag">${this.formatGenre(genre)}</span>
                        `).join('')}
                    </div>
                    <p class="content-description">${item.description}</p>
                    <div class="content-actions">
                        <button class="btn btn-primary" onclick="watchAnime('${item.id}')">
                            <i class="fas fa-play"></i> Watch
                        </button>
                        <button class="btn btn-secondary watchlist-btn" onclick="toggleWatchlist('${item.id}')" data-anime-id="${item.id}">
                            <i class="fas fa-plus"></i> Watchlist
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Update watchlist buttons
        if (window.authSystem) {
            window.authSystem.updateAllWatchlistButtons();
        }
    }

    // Format type for display
    formatType(type) {
        const types = {
            'movie': 'Movie',
            'series': 'Series',
            'specials': 'Special'
        };
        return types[type] || type;
    }

    // Format genre for display
    formatGenre(genre) {
        return genre.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    // Update results information
    updateResultsInfo() {
        const countElement = document.getElementById('resultsCount');
        const total = this.content.length;
        const showing = this.filteredContent.length;
        
        let text = `Showing ${showing} of ${total} items`;
        
        if (this.filters.search) {
            text += ` for "${this.filters.search}"`;
        }
        if (this.filters.type !== 'all') {
            text += ` in ${this.formatType(this.filters.type)}`;
        }
        if (this.filters.genre !== 'all') {
            text += ` • ${this.formatGenre(this.filters.genre)}`;
        }

        countElement.textContent = text;
    }

    // Update active filters display
    updateActiveFilters() {
        const container = document.getElementById('activeFilters');
        const activeFilters = [];

        if (this.filters.type !== 'all') {
            activeFilters.push({
                key: 'type',
                label: `Type: ${this.formatType(this.filters.type)}`,
                value: this.filters.type
            });
        }

        if (this.filters.genre !== 'all') {
            activeFilters.push({
                key: 'genre',
                label: `Genre: ${this.formatGenre(this.filters.genre)}`,
                value: this.filters.genre
            });
        }

        if (this.filters.search) {
            activeFilters.push({
                key: 'search',
                label: `Search: "${this.filters.search}"`,
                value: this.filters.search
            });
        }

        container.innerHTML = activeFilters.map(filter => `
            <div class="filter-tag">
                ${filter.label}
                <button class="remove-filter" onclick="contentFilter.removeFilter('${filter.key}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    // Remove specific filter
    removeFilter(key) {
        switch (key) {
            case 'type':
                this.filters.type = 'all';
                document.querySelector('.tab-btn[data-type="all"]').click();
                break;
            case 'genre':
                this.filters.genre = 'all';
                document.getElementById('genreSelect').value = 'all';
                break;
            case 'search':
                this.filters.search = '';
                document.getElementById('contentSearch').value = '';
                break;
        }
        this.applyFilters();
    }

    // Reset all filters
    resetFilters() {
        this.filters = {
            type: 'all',
            genre: 'all',
            search: '',
            sort: 'popular'
        };

        // Update UI elements
        document.querySelector('.tab-btn[data-type="all"]').click();
        document.getElementById('genreSelect').value = 'all';
        document.getElementById('sortSelect').value = 'popular';
        document.getElementById('contentSearch').value = '';

        this.applyFilters();
    }

    // Show/hide loading spinner
    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = show ? 'block' : 'none';
    }
}

// Initialize content filter
document.addEventListener('DOMContentLoaded', () => {
    window.contentFilter = new ContentFilter();
});

// Global function to watch anime
function watchAnime(animeId) {
    // Add to watch history if user is logged in
    if (window.authSystem && window.authSystem.isAuthenticated()) {
        window.authSystem.addToWatchHistory(animeId, 1, 0);
    }
    
    // Navigate to player page
    window.location.href = `player.html?anime=${animeId}`;
}

// Add search functionality to main search bar
function setupMainSearch() {
    const mainSearchInput = document.querySelector('.search-input');
    const mainSearchBtn = document.querySelector('.search-btn');
    
    if (mainSearchInput && mainSearchBtn) {
        const performSearch = () => {
            const searchTerm = mainSearchInput.value.trim();
            if (searchTerm) {
                // Scroll to content section
                document.querySelector('.content-section')?.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Set search filter
                if (window.contentFilter) {
                    window.contentFilter.setFilter('search', searchTerm);
                    document.getElementById('contentSearch').value = searchTerm;
                }
            }
        };
        
        mainSearchBtn.addEventListener('click', performSearch);
        mainSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMainSearch();
});