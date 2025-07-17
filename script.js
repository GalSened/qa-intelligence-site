// ===============================
// Feature Cards Animation
// ===============================
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
featureCards.forEach(card => observer.observe(card));

// ===============================
// FAQ Toggle – Interactive Accordion
// ===============================
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// ===============================
// Contact Form – Active Simulation (SaaS-like)
// ===============================
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

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
        statusMsg.style.color = "red";
        statusMsg.textContent = "Please enter a valid email.";
        return;
    }

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;
    statusMsg.style.color = "#ccc";
    statusMsg.textContent = "Processing...";

    // Simulated sending
    setTimeout(() => {
        statusMsg.style.color = "var(--brand-color)";
        statusMsg.textContent = "✅ Message sent successfully! We will contact you soon.";
        sendBtn.textContent = "Sent ✅";

        setTimeout(() => {
            sendBtn.textContent = "Send";
            sendBtn.disabled = false;
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            statusMsg.textContent = "";
        }, 4000);
    }, 2000);
});

// ===============================
// Try It Now – Typewriter + Pytest Code Simulation
// ===============================


// Try It Now – Typewriter + Pytest Code Simulation + Highlight
const generateBtn = document.getElementById('generateBtn');
const liveTerminal = document.getElementById('liveTerminal');
const codeTerminal = document.getElementById('codeTerminal');
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
    codeTerminal.textContent = "";
    codeTerminal.parentElement.style.display = "none";
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
                            typeWriter(`System: ✅ Test generated: test_${prompt.replace(/\s+/g, "_").toLowerCase()}.py`, liveTerminal, 40, () => {
                                clearInterval(progressInterval);
                                progressBar.style.width = "100%";
                                showPytestCode(prompt);
                            });
                        }, 800);
                    });
                }, 800);
            });
        }, 800);
    });
});

function showPytestCode(prompt) {
    const testName = prompt.replace(/\s+/g, "_").toLowerCase();
    const code = 
`import pytest

def test_${testName}():
    response = client.post("/api/${testName}", json={"param": "value"})
    assert response.status_code == 200
    assert "success" in response.json()`;

    codeTerminal.textContent = code;
    codeTerminal.parentElement.style.display = "block";

    // Syntax Highlighting
    setTimeout(() => {
        hljs.highlightElement(codeTerminal);
    }, 50);
}



// ===============================
// Language Toggle (EN <-> HE)
// ===============================
const langToggle = document.getElementById('lang-toggle');
let currentLang = "en"; // default

langToggle.addEventListener('click', () => {
    currentLang = currentLang === "en" ? "he" : "en";
    const isHebrew = currentLang === "he";

    // עדכון כל הטקסטים בעלי data-en/data-he
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = isHebrew ? el.dataset.he : el.dataset.en;
    });

    // עדכון Placeholders לטפסים
    document.querySelectorAll('[data-en-placeholder]').forEach(input => {
        input.placeholder = isHebrew ? input.dataset.hePlaceholder : input.dataset.enPlaceholder;
    });

    // כיווניות
    document.body.setAttribute("dir", isHebrew ? "rtl" : "ltr");

    // כפתור מתחלף
    langToggle.textContent = isHebrew ? "EN" : "HE";
});
