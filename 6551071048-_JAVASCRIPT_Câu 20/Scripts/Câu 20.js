let currentIndex = 0;
const slideTrack = document.getElementById('slideTrack');
const totalSlides = document.querySelectorAll('.slide').length;
const visibleSlides = 5;
const slideWidth = 200;

function updateSlidePosition() {
  const offset = currentIndex * slideWidth;
  slideTrack.style.transform = `translateX(-${offset}px)`;
}

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

function moveRight() {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
    updateSlidePosition();
  }
}

setInterval(() => {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
}, 3000);