document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Click event on each element
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggles is-active
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
});
