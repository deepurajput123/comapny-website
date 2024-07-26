document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
      const title = item.querySelector('.accordion-title');
      title.addEventListener('click', () => {
          const content = item.querySelector('.accordion-content');
          const icon = item.querySelector('.icon');

          // Toggle active class
          item.classList.toggle('active');

          // Toggle content visibility
          if (item.classList.contains('active')) {
              content.style.display = 'block';
              icon.textContent = '-';
          } else {
              content.style.display = 'none';
              icon.textContent = '+';
          }

          // Close other accordions
          accordionItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.display = 'none';
                  otherItem.querySelector('.icon').textContent = '+';
              }
          });
      });
  });
});