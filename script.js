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

// Try It Now - Typewriter Simulation with Progress
const generateBtn = document.getElementById('generateBtn');
const liveTerminal = document.getElementById('liveTerminal');
const progressBar = document.getElementById('progress');

function typeWriter(text, element, delay = 50, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            liveTerminal.scrollTop = liveTerminal.scrollHeight;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

generateBtn.addEventListener('click', () => {
    const prompt = document.getElementById('promptInput').value.trim();
    if (!prompt) {
        liveTerminal.innerHTML = "<span style='color:red'>Please enter a prompt.</span>";
        return;
    }

    liveTerminal.innerHTML = "";
    progressBar.style.width = "0%";

    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 2;
            progressBar.style.width = progress + "%";
        }
    }, 80);

    typeWriter(`System: ✅ Creating Pytest code...\n`, liveTerminal, 40, () => {
        setTimeout(() => {
            typeWriter(`System: 🔍 Risk Analysis in progress...\n`, liveTerminal, 40, () => {
                setTimeout(() => {
                    typeWriter(`System: 📊 Generating Excel report...\n`, liveTerminal, 40, () => {
                        setTimeout(() => {
                            typeWriter(`System: ✅ Test generated: test_${prompt.replace(/\s+/g, "_").toLowerCase()}.py`, liveTerminal, 40);
                            clearInterval(progressInterval);
                            progressBar.style.width = "100%";
                        }, 800);
                    });
                }, 800);
            });
        }, 800);
    });
});
