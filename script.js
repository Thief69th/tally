// Language Toggle Logic
const langToggleBtn = document.getElementById('lang-toggle');
const engElements = document.querySelectorAll('.lang-en');
const hiElements = document.querySelectorAll('.lang-hi');

let currentLang = 'en';

langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
        // Switch to Hindi
        engElements.forEach(el => el.classList.add('hidden'));
        hiElements.forEach(el => el.classList.remove('hidden'));
        langToggleBtn.textContent = 'Change Language to English';
        currentLang = 'hi';
    } else {
        // Switch to English
        hiElements.forEach(el => el.classList.add('hidden'));
        engElements.forEach(el => el.classList.remove('hidden'));
        langToggleBtn.textContent = 'Change Language to Hindi';
        currentLang = 'en';
    }
});

// Live Clock Logic
function updateClock() {
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    
    // Using default locale which will be based on user's system
    const formattedTime = now.toLocaleDateString(undefined, options);
    
    document.getElementById('live-clock').textContent = formattedTime;
}

// Initial call and interval setup
updateClock();
setInterval(updateClock, 1000);
