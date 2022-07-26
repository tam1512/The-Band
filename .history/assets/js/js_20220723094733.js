let currentSlide = 0;
let newIndex = 0;
let autoplay = true;

let slideElements = document.getElementsByClassName("slider_slide");
let slidesLength = slideElements.length;
let paginationElement = document.getElementsByClassName("slider_pagination")[0];
let prevElement = document.getElementsByClassName("prev")[0];
let nextElement = document.getElementsByClassName("next")[0];

prevElement.addEventListener(function () {
  newIndex--;
  navigateSlider();
});

nextElement.addEventListener(function () {
  newIndex++;
  navigateSlider();
});

function navigateSlider() {
  if (newIndex < 0) {
    newIndex = slidesLength - 1;
  } else if (newIndex === slidesLength - 1) {
    newIndex = 0;
  }

  slideElements[currentSlide].style.display = "none";
  slideElements[newIndex].style.display = "block";
  currentSlide = newIndex;
}
