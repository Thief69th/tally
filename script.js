// script.js
const langToggleBtn = document.getElementById('lang-toggle');
const engElements = document.querySelectorAll('.lang-en');
const hiElements = document.querySelectorAll('.lang-hi');

let currentLang = 'en';

langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
        engElements.forEach(el => el.classList.add('hidden'));
        hiElements.forEach(el => el.classList.remove('hidden'));
        langToggleBtn.innerHTML = '<span class="lang-text">A/अ</span> English';
        currentLang = 'hi';
    } else {
        hiElements.forEach(el => el.classList.add('hidden'));
        engElements.forEach(el => el.classList.remove('hidden'));
        langToggleBtn.innerHTML = '<span class="lang-text">A/अ</span> Hindi';
        currentLang = 'en';
    }
});

function updateClock() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    const formattedTime = now.toLocaleDateString(undefined, options);
    document.getElementById('live-clock').textContent = formattedTime;
}

updateClock();
setInterval(updateClock, 1000);

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
