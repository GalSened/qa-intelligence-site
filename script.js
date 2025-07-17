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

// Contact Form Simulation
const sendBtn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');

sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        statusMsg.style.color = "red";
        statusMsg.textContent = "Please fill all fields.";
        return;
    }

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;
    statusMsg.textContent = "";

    setTimeout(() => {
        sendBtn.textContent = "Message Sent ✅";
        statusMsg.style.color = "var(--brand-color)";
        statusMsg.textContent = "We will get back to you shortly.";
        setTimeout(() => {
            sendBtn.textContent = "Send";
            sendBtn.disabled = false;
        }, 3000);
    }, 2000);
});
