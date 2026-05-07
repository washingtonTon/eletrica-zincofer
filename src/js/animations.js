// Animações
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});

document.querySelectorAll('.card, .hero, .fade-up').forEach(el => {
  observer.observe(el);
});
