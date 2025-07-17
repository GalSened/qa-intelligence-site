// Nav hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});
document.querySelectorAll('.mobile-menu a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('show');
  })
);

// Scroll fade-in
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);
faders.forEach(f => appearOnScroll.observe(f));

// Get Started button scroll
const getBtn = document.getElementById('getStartedBtn');
if (getBtn) {
  getBtn.addEventListener('click', () => location.href = '#try-it');
}

// AI chat sidebar
const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
chatSendBtn.addEventListener('click', () => {
  const u = chatInput.value.trim();
  if (!u) return;
  chatLog.innerHTML += `<p class="user">You: ${u}</p>`;
  chatInput.value = '';
  setTimeout(() => {
    chatLog.innerHTML += `<p class="ai">AI: Sure, integrating "${u}"...</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 800);
});

// Contact validation
const sendBtn = document.getElementById('sendBtn');
const statusMsg = document.getElementById('statusMsg');
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

// No other JS to hide or remove sections
