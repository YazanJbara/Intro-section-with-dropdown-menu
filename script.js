document.querySelectorAll('.arrow').forEach(arrow => {
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

