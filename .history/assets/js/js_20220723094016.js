let currentSlide = 0;
let newIndex = 0;
let autoplay = true;

let slideElements = document.getElementsByClassName("mySlides");
let paginationElement = document.getElementsByClassName("dots")[0];
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
