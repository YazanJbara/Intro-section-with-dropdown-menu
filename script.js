document.querySelectorAll('.arrow').forEach((arrow) => {
  const arrowDown = arrow.querySelector('.arrow_down');
  const arrowUp = arrow.querySelector('.arrow_up');
  const dropdown = arrow.nextElementSibling;

  arrow.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'none';
    } else {
      dropdown.classList.add('show');
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'block';
    }
  });
});

const mobileMenuIcon = document.querySelector('.mobile_menu .menu');
const mobileNavLinks = document.querySelector('.nav_links.__mobile');
const closeMenuIcon = document.querySelector('.mobile_menu .close_menu');
const overlay = document.querySelector('.overlay');

mobileMenuIcon.addEventListener('click', () => {
  mobileNavLinks.classList.toggle('show');
  overlay.classList.toggle('show');
  mobileMenuIcon.style.display = 'none';
  closeMenuIcon.style.display = 'block';
});

closeMenuIcon.addEventListener('click', () => {
  mobileNavLinks.classList.remove('show');
  overlay.classList.remove('show');
  mobileMenuIcon.style.display = 'block';
  closeMenuIcon.style.display = 'none';
});

const mobileCloseIcon = document.querySelector('.nav_links.__mobile .close_menu');
mobileCloseIcon.addEventListener('click', () => {
  mobileNavLinks.classList.remove('show');
  overlay.classList.remove('show');
  mobileMenuIcon.style.display = 'block';
  closeMenuIcon.style.display = 'none';
});
