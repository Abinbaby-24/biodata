// Create glitter particles
function createGlitter() {
    const glitterContainer = document.querySelector('.glitter-container');
    const colors = ['#8a2be2', '#da70d6', '#ff8c00', '#ffffff'];
    
    for (let i = 0; i < 50; i++) {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        glitter.style.width = `${size}px`;
        glitter.style.height = `${size}px`;
        glitter.style.left = `${left}%`;
        glitter.style.animationDuration = `${duration}s`;
        glitter.style.animationDelay = `${delay}s`;
        glitter.style.background = color;
        
        glitterContainer.appendChild(glitter);
    }
}

// Initialize glitter on load
window.addEventListener('load', createGlitter);

// Scroll animations
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    observer.observe(card);
});

// Smooth scrolling
document.querySelector('.scroll-down').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});
function abin(){
    alert("Twitter(X) elleda mwone")
// Hover effects for cards
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('visible')) {
            card.style.transform = 'translateY(0)';
        }
    });
});

// Dynamic background glow on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / scrollMax;
    
    // Change gradient position based on scroll
    document.documentElement.style.setProperty(
        '--primary', 
        `hsl(${270 + scrollPercentage * 60}, 70%, 60%)`
    );
});
