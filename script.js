(() => {
  'use strict';

  const order = ['home', 'about', 'experience', 'projects', 'hackathons', 'beyond', 'contact'];

  function switchTo(targetId) {
    // Update views
    document.querySelectorAll('.view').forEach(v => {
      if (v.id === targetId) v.classList.add('active');
      else v.classList.remove('active');
    });
    // Update tab bar highlight
    document.querySelectorAll('.tab').forEach(btn => {
      if (btn.dataset.target === targetId) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }

  // Event delegation: catches all clicks on any [data-target] element
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-target]');
    if (trigger) {
      e.preventDefault();
      const target = trigger.dataset.target;
      if (target) switchTo(target);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const current = document.querySelector('.view.active')?.id;
    if (!current) return;
    const i = order.indexOf(current);
    if (e.key === 'ArrowRight' && i < order.length - 1) switchTo(order[i + 1]);
    if (e.key === 'ArrowLeft' && i > 0) switchTo(order[i - 1]);
  });
})();
