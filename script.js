// =====================================================
// CAROUSEL SLIDER FUNCTIONALITY
// =====================================================

class Carousel {
    constructor(sliderId, prevBtnId, nextBtnId) {
        this.slider = document.getElementById(sliderId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.currentIndex = 0;
        this.items = this.slider.querySelectorAll('.project-card, .review-card');
        this.totalItems = this.items.length;
        
        this.updateItemsPerView();
        
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        window.addEventListener('resize', () => {
            const newItemsPerView = this.getItemsPerView();
            if (newItemsPerView !== this.itemsPerView) {
                this.itemsPerView = newItemsPerView;
                this.currentIndex = 0;
                this.updateSlider();
            }
        });
        
        this.updateSlider();
    }
    
    getItemsPerView() {
        const width = window.innerWidth;
        if (width > 1200) return 3;
        if (width > 768) return 2;
        return 1;
    }
    
    updateItemsPerView() {
        this.itemsPerView = this.getItemsPerView();
    }
    
    updateSlider() {
        const containerWidth = this.slider.parentElement.offsetWidth;
        const itemsPerView = this.itemsPerView;
        const gapPx = 32; // 2rem = 32px
        const cardWidth = (containerWidth - gapPx * (itemsPerView - 1)) / itemsPerView;
        const offset = this.currentIndex * (cardWidth + gapPx);
        this.slider.style.transform = `translateX(-${offset}px)`;
    }
    
    next() {
        if (this.currentIndex < this.totalItems - this.itemsPerView) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop back
        }
        this.updateSlider();
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.totalItems - this.itemsPerView; // Loop to end
        }
        this.updateSlider();
    }
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectsCarousel = new Carousel('projectsSlider', 'projectsPrev', 'projectsNext');
    const reviewsCarousel = new Carousel('reviewsSlider', 'reviewsPrev', 'reviewsNext');
    
    // Initialize AOS after short delay to ensure DOM is ready
    if (typeof AOS !== 'undefined') {
        setTimeout(() => {
            AOS.init({
                duration: 800,
                offset: 100,
                once: false,
                mirror: true,
                easing: 'ease-out-cubic'
            });
        }, 100);
    }
});

// =====================================================
// SMOOTH SCROLL & NAVIGATION
// ===================================================== 

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attributes for accessibility
        navToggle.setAttribute('aria-expanded', isActive.toString());
    });
}

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Smooth scroll on navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// TYPING ANIMATION
// =====================================================

// Update typing words
const words = [
    'Conception Professionnelle',
    'Performance Maximale',
    'Optimisé pour Conversion',
    'Design Moderne & Élégant'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeAnimation() {
    const typingWord = document.querySelector('.typing-word');
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingWord.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeAnimation, 500);
            return;
        }
        setTimeout(typeAnimation, deletingSpeed);
    } else {
        typingWord.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeAnimation, delayBetweenWords);
            return;
        }
        setTimeout(typeAnimation, typingSpeed);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    typeAnimation();
});

// =====================================================
// AOS ANIMATION INITIALIZATION
// =====================================================

// Deferred initialization - wait for library to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if AOS is available
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false,
            mirror: true,
            easing: 'ease-out-cubic',
            disable: 'mobile'
        });
    }
});

// =====================================================
// SCROLL ANIMATION - NAVBAR STYLING
// =====================================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// =====================================================
// HOVER EFFECTS - CARDS & BUTTONS
// =====================================================

// Add hover class to cards for better interactivity
const projectCards = document.querySelectorAll('.project-card');
const serviceCards = document.querySelectorAll('.service-card');
const whyCards = document.querySelectorAll('.why-card');

[...projectCards, ...serviceCards, ...whyCards].forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// =====================================================
// PERFORMANCE OPTIMIZATION
// =====================================================

// Lazy load images with native loading attribute
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// IntersectionObserver for images (fallback for browsers without native lazy loading)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px',
        threshold: 0.01
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Optimize critical resources - preload important assets
function optimizeResourceLoading() {
    // Prefetch DNS for external resources
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//fonts.googleapis.com';
    document.head.appendChild(link);
}

// =====================================================
// WHATSAPP INTEGRATION
// =====================================================

// WhatsApp number (replace with actual number)
const whatsappNumber = '212649925494'; // Format: country code + number without +
const whatsappMessage = 'Bonjour Anwar, je suis intéressé par vos services. je voudrais en savoir plus sur comment vous pouvez nous aider avec notre projet web. Merci!'; 

function openWhatsApp() {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Update all WhatsApp links
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow natural link behavior (opening in new tab)
        // This is already set with target="_blank"
    });
});

// =====================================================
// PAGE LOAD PERFORMANCE
// =====================================================

// Monitor and log performance metrics only in development
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        const resourcesTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

        // Only log if needed
        if (typeof console !== 'undefined' && console.info) {
            console.info('⚡ Performance Metrics:');
            console.info(`Page Load Time: ${pageLoadTime}ms`);
            console.info(`Connect Time: ${connectTime}ms`);
            console.info(`Render Time: ${renderTime}ms`);
            console.info(`DOM Content Loaded: ${resourcesTime}ms`);
        }
    }
    
    // Report Web Vitals if available
    if ('web-vital' in window || 'PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.info(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
                }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
        } catch (e) {
            // Silently fail if not supported
        }
    }
});

// =====================================================
// KEYBOARD NAVIGATION SUPPORT
// =====================================================

// Allow Tab navigation and Escape to close menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.focus();
    }
    
    // Add keyboard navigation for buttons
    if (e.key === 'Enter' || e.key === ' ') {
        if (document.activeElement.classList.contains('carousel-nav')) {
            document.activeElement.click();
        }
    }
});

// Enhanced keyboard support for carousel navigation
document.addEventListener('keydown', (e) => {
    const prevBtns = document.querySelectorAll('[id$="Prev"]');
    const nextBtns = document.querySelectorAll('[id$="Next"]');
    
    if (e.key === 'ArrowLeft') {
        prevBtns.forEach(btn => {
            if (document.activeElement === btn) {
                btn.click();
            }
        });
    }
    if (e.key === 'ArrowRight') {
        nextBtns.forEach(btn => {
            if (document.activeElement === btn) {
                btn.click();
            }
        });
    }
});

// =====================================================
// THEME DETECTION (Light/Dark Mode)
// ===================================================== 

// Detect system preference for dark mode (already implemented in CSS)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Optional: Add theme switcher functionality in future
function detectSystemTheme() {
    if (prefersDark.matches) {
        console.log('Dark mode preferred by system');
    } else {
        console.log('Light mode preferred by system');
    }
}

detectSystemTheme();

// =====================================================
// FORM SUBMISSION (if needed in future)
// =====================================================

// Reserved for contact form functionality
// Can be expanded with Formspree, EmailJS, or similar service

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Smooth scroll utility function
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Debounce function for scroll events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function for frequent events
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            func.apply(this, args);
            lastCall = now;
        }
    };
}

// =====================================================
// COUNTER ANIMATION - STATS SECTION
// =====================================================

let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return; // Only animate once
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        const target = parseInt(element.dataset.target);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                // Format the final number
                if (element.dataset.target === '100') {
                    element.textContent = '100%';
                } else if (element.dataset.target === '3') {
                    element.textContent = '3+';
                } else {
                    element.textContent = target + '+';
                }
                element.dataset.animated = 'true';
            }
        };
        
        updateCounter();
    });
    
    countersAnimated = true;
}

// Trigger counter animation when stats section comes into view
if ('IntersectionObserver' in window) {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
} else {
    // Fallback for browsers without IntersectionObserver
    window.addEventListener('load', animateCounters);
}
// =====================================================
// DOM READY EVENT
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // All dynamic content is ready
    // You can add initialization code here
});

// =====================================================
// ERROR HANDLING
// =====================================================

window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
    // Could send error logs to a service here
});

// Handle promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// =====================================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================================== 

// Skip to main content link (already in HTML, this enhances it)
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Ensure all interactive elements are keyboard accessible
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV' && e.target.classList.contains('clickable')) {
        // Handle click on div elements that should be buttons
        e.target.click();
    }
});
