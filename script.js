// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
  });
}

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.2 }
);
faders.forEach(f => appearOnScroll.observe(f));

// Scroll to generator on Get Started
const getBtn = document.getElementById('getStartedBtn');
if (getBtn) {
  getBtn.addEventListener('click', () =>
    document.querySelector('#try-it').scrollIntoView({ behavior: 'smooth' })
  );
}

// -------------------------
// ✅ CODE GENERATOR (PYTEST)
// -------------------------
const generateBtn = document.getElementById('generateBtn');
const promptInput = document.getElementById('promptInput');
const codeTerminal = document.getElementById('codeTerminal');
const runTestsBtn = document.getElementById('runTestsBtn');
const runResults = document.getElementById('runResults');

function typeWriterEffect(text, element, speed = 25) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else clearInterval(interval);
  }, speed);
}

if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    const prompt = promptInput.value.trim();
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    const code = `import pytest\n\n` +
      `@pytest.mark.generated\n` +
      `def test_${prompt.replace(/\s+/g, "_").toLowerCase()}():\n` +
      `    # Auto-generated test based on your prompt\n` +
      `    assert True  # Replace with real assertions`;

    codeTerminal.style.color = "#00ff88"; // Green terminal effect
    typeWriterEffect(code, codeTerminal, 25);
    runResults.textContent = "";
  });
}

if (runTestsBtn) {
  runTestsBtn.addEventListener('click', () => {
    runResults.innerHTML = "<p style='color:var(--brand-color)'>Running tests...</p>";
    setTimeout(() => {
      const passed = Math.random() > 0.2; // Simulate pass/fail
      if (passed) {
        runResults.innerHTML = "<p style='color:lime'>✅ All tests passed successfully!</p>";
      } else {
        runResults.innerHTML = "<p style='color:red'>❌ 1 test failed. Check logs.</p>";
      }
    }, 1500);
  });
}

// -------------------------
// ✅ PRICING PLANS SELECTION
// -------------------------
document.querySelectorAll('.pricing-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pricing-card').forEach(card =>
      card.classList.remove('popular')
    );
    btn.closest('.pricing-card').classList.add('popular');
  });
});

// -------------------------
// ✅ FAQ TOGGLE
// -------------------------
document.querySelectorAll('.faq-card').forEach(card => {
  const header = card.querySelector('.faq-header');
  header.addEventListener('click', () => {
    card.classList.toggle('open');
    const icon = card.querySelector('.faq-icon');
    icon.textContent = card.classList.contains('open') ? "-" : "+";
  });
});

// -------------------------
// ✅ CONTACT FORM VALIDATION
// -------------------------
const sendBtn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const n = document.getElementById('name').value.trim();
    const e = document.getElementById('email').value.trim();
    const m = document.getElementById('message').value.trim();
    if (!n || !e || !m) {
      statusMsg.textContent = "Please fill all fields.";
      statusMsg.style.color = "red";
      return;
    }
    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "var(--brand-color)";
    setTimeout(() => {
      statusMsg.textContent = "✅ Message sent!";
      statusMsg.style.color = "lime";
    }, 1500);
  });
}
