(() => {
  'use strict';

  const buttons = document.querySelectorAll('[data-target]');
  const views = document.querySelectorAll('.view');

  function switchTo(targetId) {
    views.forEach(v => v.classList.toggle('active', v.id === targetId));
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.target;
      if (target) switchTo(target);
    });
  });

  // Keyboard navigation: arrow keys to move between sections
  const order = ['home', 'about', 'experience', 'skills', 'projects', 'awards', 'beyond', 'contact'];
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const current = document.querySelector('.view.active')?.id;
    if (!current) return;
    const i = order.indexOf(current);
    if (e.key === 'ArrowRight' && i < order.length - 1) switchTo(order[i + 1]);
    if (e.key === 'ArrowLeft' && i > 0) switchTo(order[i - 1]);
  });
})();
