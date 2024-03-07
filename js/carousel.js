const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

const registHero = carousel.querySelector('#registCarousel');

let currentIndex = 0;

carousel.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  } 
  updateCarousel(); 
});

carousel.querySelector('.next').addEventListener('click', () => { 
currentIndex++; 
if (currentIndex > images.length - 1) {
 currentIndex = 0; 
} 
  updateCarousel(); 
});

function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

registHero.addEventListener('click', () => {
  goToForm();
});

function goToForm() {
  window.location.href = 'form.html';
}