const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slide.length - 1 : currentIndex - 1;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === slide.length - 1 ? 0 : currentIndex + 1;
  updateSlide();
});
