// Hamburger
const hamburger = document.getElementById('hamburger'), mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobileMenu.classList.toggle('show'); });
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => { hamburger.classList.remove('active'); mobileMenu.classList.remove('show'); }));

// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');
const appearObserver = new IntersectionObserver(entries => { entries.forEach(e => e.isIntersection && e.target.classList.add('visible'));}, {threshold:0.2});
document.querySelectorAll('.fade-in').forEach(el => appearObserver.observe(el));

// Get Started button scroll
document.getElementById('getStartedBtn').addEventListener('click', () => location.href = '#try-it');

// AI Chat
const chatLog = document.getElementById('chatLog'), chatInput = document.getElementById('chatInput'), chatSendBtn = document.getElementById('chatSendBtn');
chatSendBtn.addEventListener('click', () => {
  const u = chatInput.value.trim(); if (!u) return;
  chatLog.innerHTML += `<p class="user">You: ${u}</p>`;
  chatInput.value = '';
  setTimeout(() => { chatLog.innerHTML += `<p class="ai">AI: Sure, integrating "${u}"...</p>`; chatLog.scrollTop = chatLog.scrollHeight; }, 800);
});

// (Plus Code Generator full logic, Terminal, Copy, Run tests)

// Contact Us
const sendBtn = document.getElementById('sendBtn'), statusMsg = document.getElementById('statusMsg');
sendBtn.addEventListener('click', () => {
  const n = document.getElementById('name').value.trim(), e = document.getElementById('email').value.trim(), m = document.getElementById('message').value.trim();
  if (!n || !e || !m) { statusMsg.textContent = "Please fill all fields."; statusMsg.style.color = "red"; return; }
  statusMsg.textContent = "Sending..."; statusMsg.style.color = "var(--brand-color)";
  setTimeout(() => { statusMsg.textContent = "✅ Message sent!"; statusMsg.style.color = "lime"; }, 1500);
});
