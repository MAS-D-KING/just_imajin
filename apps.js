// apps.js
const input = document.querySelector('.search-input');
const button = document.querySelector('.search-btn');
const movies = document.querySelectorAll('.movie-list-item'); // all movies

function searchMovies() {
  const value = input.value.trim().toLowerCase();

  movies.forEach(movie => {
    const title = movie.textContent.toLowerCase();
    if (title.includes(value)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}

button.addEventListener('click', searchMovies);
input.addEventListener('keyup', e => {
  if (e.key === 'Enter') searchMovies();
});


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}

// Carousel script for all sections
document.querySelectorAll(".content-section").forEach((section) => {
  const track = section.querySelector(".carousel-track") || section.querySelector(".movie-grid");
  const cards = track.querySelectorAll(".card");
  const leftArrow = section.querySelector(".carousel-arrow.left") || section.querySelector(".left-arrow");
  const rightArrow = section.querySelector(".carousel-arrow.right") || section.querySelector(".arrow:not(.left-arrow)");

  if (!track || !cards.length) return;

  let scrollIndex = 0;
  const cardWidth = cards[0].offsetWidth + 25; // card width + gap

  // Move carousel
  const moveCarousel = (direction) => {
    const visibleCount = Math.floor(track.offsetWidth / cardWidth);
    const maxIndex = cards.length - visibleCount;

    if (direction === "right") {
      scrollIndex = Math.min(scrollIndex + 1, maxIndex);
    } else if (direction === "left") {
      scrollIndex = Math.max(scrollIndex - 1, 0);
    }

    track.scrollTo({
      left: scrollIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  // Event listeners
  if (rightArrow) rightArrow.addEventListener("click", () => moveCarousel("right"));
  if (leftArrow) leftArrow.addEventListener("click", () => moveCarousel("left"));

  // Reset on resize
  window.addEventListener("resize", () => {
    scrollIndex = 0;
    track.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  });
});

// Global function to watch anime (update your existing function)
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

//TOGGLE
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or use dark mode as default
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        // Toggle between dark and light themes
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply new theme
        body.setAttribute('data-theme', newTheme);
        
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
    });
