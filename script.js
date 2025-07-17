// אנימציית הופעת היכולות
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
featureCards.forEach(card => observer.observe(card));

// מתג שפה
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const isEnglish = langToggle.textContent === 'EN';
    document.querySelectorAll('[data-he]').forEach(el => {
        el.textContent = isEnglish ? el.dataset.en : el.dataset.he;
    });
    document.body.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
    langToggle.textContent = isEnglish ? 'HE' : 'EN';
});
