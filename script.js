// ===============================
// FAQ Toggle
// ===============================
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// ===============================
// Contact Us Form (Demo Simulation)
const sendBtn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');

sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        statusMsg.textContent = "Please fill all fields.";
        statusMsg.style.color = "red";
        return;
    }

    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "var(--brand-color)";

    setTimeout(() => {
        statusMsg.textContent = "✅ Message sent successfully!";
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }, 1500);
});

// ===============================
// Hamburger Menu
// ===============================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('show');
    }
});

// ===============================
// Try It Now – Typewriter + Pytest Code + Run Tests Simulation
// ===============================
const generateBtn = document.getElementById('generateBtn');
const liveTerminal = document.getElementById('liveTerminal');
const codeWrapper = document.getElementById('codeWrapper');
const codeTerminal = document.getElementById('codeTerminal');
const progressBar = document.getElementById('progress');
const copyBtn = document.getElementById('copyBtn');
const runTestsBtn = document.getElementById('runTestsBtn');
const runResults = document.getElementById('runResults');

function typeWriter(text, element, delay = 50, callback) {
    let i = 0;
    element.innerHTML = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            element.scrollTop = element.scrollHeight;
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
    codeWrapper.style.display = "none";
    runResults.style.display = "none";
    codeTerminal.textContent = "";
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
            typeWriter(liveTerminal.innerHTML + `System: 🔍 Risk Analysis in progress...\n`, liveTerminal, 40, () => {
                setTimeout(() => {
                    typeWriter(liveTerminal.innerHTML + `System: 📊 Generating Excel report...\n`, liveTerminal, 40, () => {
                        setTimeout(() => {
                            typeWriter(liveTerminal.innerHTML + `System: ✅ Test generated: test_${prompt.replace(/\s+/g, "_").toLowerCase()}.py`, liveTerminal, 40, () => {
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

    codeTerminal.textContent = "";
    codeWrapper.style.display = "block";

    let i = 0;
    const interval = setInterval(() => {
        if (i < code.length) {
            codeTerminal.textContent += code.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            hljs.highlightElement(codeTerminal);
        }
    }, 10);
}

// Copy Button
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeTerminal.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
    });
});

// Run Tests Simulation
runTestsBtn.addEventListener('click', () => {
    runResults.style.display = "block";
    runResults.textContent = "Running tests...";
    runResults.style.color = "#f5f5f5";

    setTimeout(() => {
        const passed = Math.random() > 0.2;
        if (passed) {
            runResults.textContent = "✅ All tests passed successfully!";
            runResults.style.color = "lime";
        } else {
            runResults.textContent = "❌ Some tests failed. Check logs for details.";
            runResults.style.color = "red";
        }
    }, 1500);
});
// ===============================
// Features Animation (appear on load)
// ===============================
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
});
