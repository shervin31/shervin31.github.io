(() => {
  'use strict';
  const order = ['home','about','experience','projects','hackathons','contact'];
  function switchTo(targetId) {
    document.querySelectorAll('.view').forEach(function(v) {
      if (v.id === targetId) v.classList.add('active');
      else v.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(function(btn) {
      if (btn.dataset.target === targetId) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('[data-target]');
    if (trigger) {
      e.preventDefault();
      var target = trigger.dataset.target;
      if (target) switchTo(target);
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    var current = document.querySelector('.view.active');
    if (!current) return;
    var i = order.indexOf(current.id);
    if (e.key === 'ArrowRight' && i < order.length - 1) switchTo(order[i + 1]);
    if (e.key === 'ArrowLeft' && i > 0) switchTo(order[i - 1]);
  });
})();
