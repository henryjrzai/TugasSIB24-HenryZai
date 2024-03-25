const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentIndex = 0;
let intervalId;

// Menampilkan gambar pertama saat halaman dimuat
updateCarousel();

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
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

// Fungsi untuk memulai perpindahan otomatis setiap 5 detik
function startCarouselInterval() {
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateCarousel();
  }, 5000); // Interval waktu dalam milidetik (5 detik = 5000 milidetik)
}

// Fungsi untuk menghentikan perpindahan otomatis
function stopCarouselInterval() {
  clearInterval(intervalId);
}

// Mulai perpindahan otomatis saat halaman dimuat
startCarouselInterval();

// Menghentikan perpindahan otomatis saat kursor berada di atas carousel
carousel.addEventListener('mouseenter', stopCarouselInterval);

// Mulai perpindahan otomatis lagi saat kursor keluar dari carousel
carousel.addEventListener('mouseleave', startCarouselInterval);
