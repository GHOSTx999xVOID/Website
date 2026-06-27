// ==========================================
// 1. BACK TO TOP BUTTON
// ==========================================
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==========================================
// 2. SCROLL FADE-IN EFFECT (Intersection Observer)
// ==========================================
const fadeElements = document.querySelectorAll('.name-section, .featured-section, .about-text, .game-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of element is visible

fadeElements.forEach(el => observer.observe(el));


// ==========================================
// 3. MOBILE HAMBURGER MENU TOGGLE
// ==========================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideNav = document.querySelector(".side-nav");

hamburgerBtn.addEventListener("click", () => {
    // Toggle a class to show/hide the menu
    sideNav.classList.toggle("mobile-active");
    
    // Change icon (X vs Hamburger)
    if (sideNav.classList.contains("mobile-active")) {
        hamburgerBtn.innerText = "✕";
    } else {
        hamburgerBtn.innerText = "☰";
    }
});

// Close menu if user clicks outside of it
document.addEventListener("click", (event) => {
    if (!sideNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        sideNav.classList.remove("mobile-active");
        hamburgerBtn.innerText = "☰";
    }
});