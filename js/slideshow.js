const slides = document.getElementsByClassName("slideshow__image");
let maxSlides = slides.length - 1;
let curSlide = 0;

const indicators = document.querySelectorAll(".indicator");
const indicatorSvgs = document.querySelectorAll(".indicator-svg");

for (i = 0; i < slides.length; i++) {
  let slide = slides[i];
  slide.style.transform = "translateX(" + i * 300 + "%)";
}

// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${index * 100}%)`;
// });

indicators[0].classList.add("indicator-active");

document.getElementById("hero-next").addEventListener("click", () => {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  for (i = 0; i < indicatorSvgs.length; i++) {
    indicatorSvgs[i].classList.remove("indicator-svg-active");
    indicators[i].classList.remove("indicator-active");
  }

  for (i = 0; i < slides.length; i++) {
    let slide = slides[i];
    slide.style.transform = "translateX(" + (i - curSlide) * 300 + "%)";
    slides[i].setAttribute("data-status", "inactive");
    slides[curSlide].setAttribute("data-status", "active");
    indicators[curSlide].classList.add("indicator-active");
    indicatorSvgs[curSlide].classList.add("indicator-svg-active");
  }
});

document.getElementById("hero-previous").addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }

  for (i = 0; i < indicatorSvgs.length; i++) {
    indicatorSvgs[i].classList.remove("indicator-svg-active");
    indicators[i].classList.remove("indicator-active");
  }

  for (i = 0; i < slides.length; i++) {
    let slide = slides[i];
    slide.style.transform = "translateX(" + (i - curSlide) * 300 + "%)";
    slides[i].setAttribute("data-status", "inactive");
    slides[curSlide].setAttribute("data-status", "active");

    indicators[curSlide].classList.add("indicator-active");
    indicatorSvgs[curSlide].classList.add("indicator-svg-active");
  }
});
