const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function goToSlide(index) {
  const slidesWrapper = document.querySelector(".slides");
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.toggle("active");
  dots[index].classList.toggle("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    goToSlide(currentIndex);
    console.log(i, currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 5000);
