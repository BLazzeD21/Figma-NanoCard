window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-items');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu_active');
    menu.classList.toggle('menu-items_active');
  });
});

