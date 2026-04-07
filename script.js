// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Message envoyé !';
    btn.style.background = '#2d8a4e';
    btn.style.borderColor = '#2d8a4e';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Envoyer';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        e.target.reset();
    }, 3000);
});
