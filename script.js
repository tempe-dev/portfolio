// Config
const VISIT_COUNTER = {
    value: 500,          
    unit: 'K',            
    animationDuration: 3000 
};

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

function animateCounter() {
    const element = document.getElementById('visits-counter');
    if (!element) return;
    element.textContent = VISIT_COUNTER.value + VISIT_COUNTER.unit + '+';
}

function handleVisitsCounter() {
    const counterElement = document.getElementById('visits-counter');
    if (!counterElement) return;

    animateCounter();
}

const skillCards = document.querySelectorAll('.skill-card');
const animateOnScroll = () => {
    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
};

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

document.addEventListener('DOMContentLoaded', function() {
    handleVisitsCounter();
});
