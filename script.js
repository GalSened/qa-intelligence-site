// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
featureCards.forEach(card => observer.observe(card));

// Language Toggle (default: English)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const isHebrew = langToggle.textContent === 'HE';
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = isHebrew ? el.dataset.he : el.dataset.en;
    });
    document.body.setAttribute('dir', isHebrew ? 'rtl' : 'ltr');
    langToggle.textContent = isHebrew ? 'EN' : 'HE';
});
