const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach((star, idx) => {
  star.addEventListener('mouseover', () => {
    highlightStars(idx);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating - 1);
  });

  star.addEventListener('click', () => {
    selectedRating = idx + 1;
    highlightStars(idx);
  });
});

function highlightStars(index) {
  stars.forEach((star, idx) => {
    if (idx <= index) {
      star.classList.add('hover');
    } else {
      star.classList.remove('hover');
    }
  });
}
